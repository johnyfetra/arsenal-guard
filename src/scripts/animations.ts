import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Force GPU compositing on all tweens; auto-cancel conflicting tweens
gsap.config({ force3D: true });
gsap.defaults({ overwrite: 'auto' });

// Failsafe: never leave the page invisible if GSAP throws before setup completes
const _failsafe = setTimeout(() => {
	document.querySelectorAll<HTMLElement>('.reveal, .stack-pill').forEach((el) => {
		el.style.opacity = '1';
		el.style.transform = '';
	});
}, 1500);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
	clearTimeout(_failsafe);
	// Inline styles override the class-based opacity:0 from CSS
	document.querySelectorAll<HTMLElement>('.reveal, .stack-pill').forEach((el) =>
		gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 }),
	);
} else {
	setupReveals();
	setupCounters();
	setupPills();
	clearTimeout(_failsafe);
}

/* ── Animation config per element type ──────────────────────────── */
type Cfg = { from: gsap.TweenVars; dur: number; ease: string };

function cfg(el: HTMLElement): Cfg {
	if (el.matches('.timeline-step, .step-card'))
		return { from: { x: -34, opacity: 0 }, dur: 0.55, ease: 'power2.out' };

	if (el.matches('.quote-card'))
		return { from: { y: 46, scale: 0.94, opacity: 0 }, dur: 0.65, ease: 'power3.out' };

	if (el.matches('.surface, .pricing-card, .value-prop-card'))
		return { from: { y: 52, scale: 0.95, opacity: 0 }, dur: 0.62, ease: 'power3.out' };

	if (el.matches('.logo-marquee'))
		return { from: { opacity: 0, y: 18 }, dur: 0.78, ease: 'power2.inOut' };

	if (el.matches('.about-portrait-group'))
		return { from: { scale: 0.88, opacity: 0 }, dur: 0.8, ease: 'power3.out' };

	if (el.matches('form'))
		return { from: { y: 28, scale: 0.99, opacity: 0 }, dur: 0.62, ease: 'power2.out' };

	if (el.matches('.cta-title'))
		return { from: { y: 42, scale: 0.95, opacity: 0 }, dur: 0.74, ease: 'power3.out' };

	if (el.matches('h1, h2'))
		return { from: { y: 24, opacity: 0 }, dur: 0.58, ease: 'power3.out' };

	if (el.matches('.prose-ag'))
		return { from: { y: 18, opacity: 0 }, dur: 0.55, ease: 'power2.out' };

	return { from: { y: 32, opacity: 0 }, dur: 0.62, ease: 'power3.out' };
}

/* ── Scroll reveal — one ScrollTrigger per section ──────────────── */
function setupReveals() {
	const vh = window.innerHeight;

	const allReveals = [
		...document.querySelectorAll<HTMLElement>(
			'main section:not(.hero-shell) .reveal, main [data-reveal]',
		),
	].filter((el) => !el.parentElement?.closest('.reveal, [data-reveal]'));

	// Batch-read all rects in one pass — avoids repeated layout thrashing
	const rects = allReveals.map((el) => el.getBoundingClientRect());

	// Build per-element data in a single loop, caching cfg() and section ref
	type Entry = { el: HTMLElement; c: Cfg; section: Element };
	const offscreen: Entry[] = [];

	allReveals.forEach((el, i) => {
		if (rects[i].top < vh * 0.92) {
			// Already on-screen: inline style overrides the CSS class opacity:0
			gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
		} else {
			const c = cfg(el);
			gsap.set(el, c.from);
			offscreen.push({ el, c, section: el.closest('section') ?? document.body });
		}
	});

	// Group by section — one ScrollTrigger fires all elements in that section
	const sectionMap = new Map<Element, Entry[]>();
	offscreen.forEach((entry) => {
		const list = sectionMap.get(entry.section);
		if (list) list.push(entry);
		else sectionMap.set(entry.section, [entry]);
	});

	sectionMap.forEach((entries, section) => {
		ScrollTrigger.create({
			trigger: section,
			start: 'top 76%',
			once: true,
			onEnter() {
				entries.forEach(({ el, c }, i) => {
					gsap.to(el, {
						opacity: 1,
						x: 0,
						y: 0,
						scale: 1,
						duration: c.dur,
						ease: c.ease,
						// 70 ms stagger between siblings, capped so late items aren't too delayed
						delay: Math.min(i * 0.07, 0.35),
					});
				});
			},
		});
	});
}

/* ── Number counters ─────────────────────────────────────────────── */
function setupCounters() {
	document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
		const target = parseFloat(el.dataset.counter ?? '0');
		if (Number.isNaN(target)) return;

		const suffix    = el.dataset.counterSuffix    ?? '';
		const prefix    = el.dataset.counterPrefix    ?? '';
		const finalText = el.dataset.counterFinal     ?? null;
		const obj = { val: 0 };

		gsap.to(obj, {
			val: target,
			duration: 1.15,
			ease: 'power2.out',
			onStart() {
				// Set initial display text only when the tween actually fires,
				// so the static HTML value stays intact until the element is revealed
				el.textContent = `${prefix}0${suffix}`;
			},
			onUpdate() {
				el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
			},
			onComplete() {
				// Ranges like "40–50%": snap to the canonical display value
				if (finalText) el.textContent = finalText;
			},
			scrollTrigger: {
				trigger: el,
				// 68% fires after the section reveal at 76% — element already fading in
				start: 'top 68%',
				once: true,
			},
		});
	});
}

/* ── Stack pills — pop-in per column ────────────────────────────── */
function setupPills() {
	const containers = new Set(
		[...document.querySelectorAll<HTMLElement>('.stack-pill')].map((p) => p.parentElement),
	);

	containers.forEach((container) => {
		if (!container) return;
		const pills = container.querySelectorAll<HTMLElement>('.stack-pill');
		// CSS already hides pills via .reveal-ready .stack-pill { opacity:0 }
		// Set transform initial state only
		gsap.set(pills, { scale: 0.72, y: 8 });

		gsap.to(pills, {
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 0.34,
			ease: 'back.out(1.55)',
			stagger: { amount: 0.42, ease: 'power1.in' },
			scrollTrigger: {
				trigger: container,
				// 65% fires after the column reveal trigger at 76%
				start: 'top 65%',
				once: true,
			},
		});
	});
}
