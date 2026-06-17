import { Resend } from 'resend';
import { z } from 'zod';

const projectTypes = ['qa_snapshot', 'audit', 'e2e_setup', 'monthly', 'dedicated', 'other'] as const;
const langs = ['fr', 'en'] as const;

const jsonHeaders = {
	'Content-Type': 'application/json; charset=utf-8',
};

const requiredText = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional().default('');

const sharedSchema = {
	botcheck: optionalText(200),
	email: z.preprocess((value) => (typeof value === 'string' ? value.trim() : value), z.email().max(254)),
	lang: z.enum(langs).optional().default('fr'),
	name: requiredText(100),
};

const quoteSchema = z.object({
	...sharedSchema,
	budget: optionalText(80),
	comments: optionalText(2000),
	company: requiredText(100),
	coverage: optionalText(60),
	engagement: optionalText(80),
	form_type: z.literal('quote'),
	phone: optionalText(30),
	project_type: z.enum(projectTypes),
	stack: optionalText(200),
	start_date: optionalText(40),
	website: optionalText(200),
});

const contactSchema = z.object({
	...sharedSchema,
	form_type: z.literal('contact'),
	message: requiredText(2000),
});

const payloadSchema = z.discriminatedUnion('form_type', [quoteSchema, contactSchema]);

type FormPayload = z.infer<typeof payloadSchema>;
type DetailRow = readonly [label: string, value: string];

const projectTypeLabels: Record<(typeof projectTypes)[number], string> = {
	audit: 'Audit QA',
	dedicated: 'QA dédié',
	e2e_setup: 'Setup E2E',
	monthly: 'Forfait mensuel',
	other: 'Autre mission',
	qa_snapshot: 'QA Snapshot',
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
	return new Response(JSON.stringify(body), {
		headers: jsonHeaders,
		status,
	});
}

async function readPayload(request: Request): Promise<unknown> {
	const contentType = request.headers.get('content-type') ?? '';

	if (contentType.includes('application/json')) {
		return request.json();
	}

	const formData = await request.formData();
	const payload: Record<string, string> = {};

	formData.forEach((value, key) => {
		if (typeof value === 'string') payload[key] = value;
	});

	return payload;
}

function escapeHtml(value: string) {
	return value.replace(/[&<>"']/g, (character) => {
		const entities: Record<string, string> = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#39;',
		};

		return entities[character] ?? character;
	});
}

function displayValue(value: string) {
	return value.length > 0 ? value : '-';
}

function buildText(title: string, rows: DetailRow[]) {
	return [
		title,
		'',
		...rows.map(([label, value]) => `${label}: ${displayValue(value)}`),
		'',
		'Envoyé depuis arsenalguard.com',
	].join('\n');
}

function buildHtml(title: string, rows: DetailRow[]) {
	const items = rows
		.map(
			([label, value]) => `
				<tr>
					<td style="padding:10px 14px;border-bottom:1px solid #e6e9ef;color:#5f6b7a;font-size:13px;">${escapeHtml(label)}</td>
					<td style="padding:10px 14px;border-bottom:1px solid #e6e9ef;color:#111827;font-size:14px;font-weight:600;">${escapeHtml(displayValue(value))}</td>
				</tr>
			`
		)
		.join('');

	return `
		<div style="font-family:Inter,Arial,sans-serif;background:#f7f8fb;padding:24px;">
			<div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e6e9ef;border-radius:14px;overflow:hidden;">
				<div style="background:#081827;color:#ffffff;padding:22px 24px;">
					<p style="margin:0 0 8px;color:#22d3b6;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Arsenal Guard</p>
					<h1 style="margin:0;font-size:22px;line-height:1.25;">${escapeHtml(title)}</h1>
				</div>
				<table style="width:100%;border-collapse:collapse;">${items}</table>
				<p style="margin:0;padding:18px 24px;color:#6b7280;font-size:12px;">Envoyé depuis arsenalguard.com</p>
			</div>
		</div>
	`;
}

function buildEmail(input: FormPayload) {
	const receivedAt = new Date().toISOString();

	if (input.form_type === 'quote') {
		const title = `Nouvelle demande de devis - ${input.company}`;
		const rows: DetailRow[] = [
			['Type de mission', projectTypeLabels[input.project_type]],
			['Entreprise', input.company],
			['Site web', input.website],
			['Stack technique', input.stack],
			['Couverture actuelle', input.coverage],
			['Date de démarrage', input.start_date],
			['Budget', input.budget],
			['Engagement', input.engagement],
			['Nom', input.name],
			['Email', input.email],
			['Téléphone', input.phone],
			['Commentaires', input.comments],
			['Langue', input.lang],
			['Reçu le', receivedAt],
		];

		return {
			html: buildHtml(title, rows),
			subject: `[Arsenal Guard] Demande de devis - ${input.company}`,
			text: buildText(title, rows),
		};
	}

	const title = `Nouveau message direct - ${input.name}`;
	const rows: DetailRow[] = [
		['Nom', input.name],
		['Email', input.email],
		['Message', input.message],
		['Langue', input.lang],
		['Reçu le', receivedAt],
	];

	return {
		html: buildHtml(title, rows),
		subject: `[Arsenal Guard] Message direct - ${input.name}`,
		text: buildText(title, rows),
	};
}

export async function POST(request: Request) {
	let rawPayload: unknown;

	try {
		rawPayload = await readPayload(request);
	} catch {
		return jsonResponse({ error: 'invalid_payload' }, 400);
	}

	const result = payloadSchema.safeParse(rawPayload);

	if (!result.success) {
		return jsonResponse({ error: 'invalid_fields' }, 400);
	}

	const input = result.data;

	if (input.botcheck.length > 0) {
		return jsonResponse({ ok: true });
	}

	const apiKey = process.env.RESEND_API_KEY;
	const to = process.env.CONTACT_TO_EMAIL ?? 'fetrajohny05@gmail.com';
	const from = process.env.CONTACT_FROM_EMAIL ?? 'Arsenal Guard <onboarding@resend.dev>';

	if (!apiKey) {
		return jsonResponse({ error: 'email_not_configured' }, 500);
	}

	const resend = new Resend(apiKey);
	const email = buildEmail(input);
	const { error } = await resend.emails.send({
		from,
		html: email.html,
		replyTo: input.email,
		subject: email.subject,
		text: email.text,
		to,
	});

	if (error) {
		return jsonResponse({ error: 'email_failed' }, 502);
	}

	return jsonResponse({ ok: true });
}

export function GET() {
	return jsonResponse({ error: 'method_not_allowed' }, 405);
}
