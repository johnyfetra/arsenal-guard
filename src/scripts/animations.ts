import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Force GPU compositing on all tweens; auto-cancel conflicting tweens
gsap.config({ force3D: true });
gsap.defaults({ overwrite: 'auto' });

// Failsafe: never leave the page invisible if GSAP throws before setup completes
const _failsafe = setTimeout(() => {
	document.querySelectorAll<HTMLElement>('.reveal, .stack-pill').forEach((el) => {
		el.style.opacity = '1';
		el.style.transform = '';
		el.style.filter = '';
	});
}, 1500);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
	clearTimeout(_failsafe);
	document.querySelectorAll<HTMLElement>('.reveal, .stack-pill').forEach((el) =>
		gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: 'none' }),
	);
} else {
	setupReveals();
	setupCounters();
	setupPills();
	setupSplitHeadings();
	clearTimeout(_failsafe);
}

/* ── Animation config per element type ──────────────────────────── */
// `to` overrides the universal end-state { opacity:1, x:0, y:0, scale:1 }
// Required for filter, clipPath, and rotateX cleanup
type Cfg = { from: gsap.TweenVars; to?: gsap.TweenVars; dur: number; ease: string };

function cfg(el: HTMLElement): Cfg {
	if (el.matches('.internal-hero-panel'))
		return { from: { y: 34, scale: 0.94, opacity: 0 }, dur: 0.78, ease: 'power3.out' };

	if (el.matches('.internal-hero-stats'))
		return { from: { y: 18, opacity: 0 }, dur: 0.54, ease: 'power2.out' };

	if (el.matches('.timeline-step, .step-card'))
		return { from: { x: -34, opacity: 0 }, dur: 0.55, ease: 'power2.out' };

	// Cards: scale + blur reveal (premium feel)
	if (el.matches('.operation-card'))
		return {
			from: { y: 30, scale: 0.86, opacity: 0, filter: 'blur(14px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.85,
			ease: 'power3.out',
		};

	if (el.matches('.mission-ledger-card'))
		return {
			from: { y: 20, scale: 0.95, opacity: 0, filter: 'blur(8px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.65,
			ease: 'power2.out',
		};

	// Identity cards: 3D rotateX flip (perspective set on parent in CSS)
	if (el.matches('.identity-card'))
		return {
			from: { rotateX: -65, y: 18, opacity: 0 },
			to: { rotateX: 0 },
			dur: 0.72,
			ease: 'back.out(1.4)',
		};

	// Case cards: alternating left/right slide based on DOM index
	if (el.matches('.case-card')) {
		const parent = el.parentElement;
		const idx = parent ? Array.from(parent.children).indexOf(el) : 0;
		return {
			from: { x: idx % 2 === 0 ? -55 : 55, opacity: 0, scale: 0.95 },
			dur: 0.72,
			ease: 'power3.out',
		};
	}

	// Value tiles: pop-in from zero with bounce
	if (el.matches('.value-tile'))
		return { from: { scale: 0.55, opacity: 0, y: 22 }, dur: 0.52, ease: 'back.out(2.4)' };

	// Route cards: blur + drift up
	if (el.matches('.route-card'))
		return {
			from: { y: 36, opacity: 0, filter: 'blur(10px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.65,
			ease: 'power3.out',
		};

	// Article cards: blur + scale, staggered drift
	if (el.matches('.article-card')) {
		const parent = el.parentElement;
		const idx = parent ? Array.from(parent.children).indexOf(el) : 0;
		return {
			from: { y: 44 + idx * 8, scale: 0.93, opacity: 0, filter: 'blur(12px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.72 + idx * 0.04,
			ease: 'power3.out',
		};
	}

	if (el.matches('.svc-card'))
		return { from: { y: 32, scale: 0.975, opacity: 0 }, dur: 0.62, ease: 'power3.out' };

	if (el.matches('.svc-for-whom'))
		return {
			from: { y: 24, scale: 0.985, opacity: 0, filter: 'blur(6px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.7,
			ease: 'power2.out',
		};

	if (el.matches('.contact-signal'))
		return { from: { x: -28, opacity: 0 }, dur: 0.58, ease: 'power2.out' };

	if (el.matches('.legal-panel'))
		return { from: { y: 16, opacity: 0 }, dur: 0.5, ease: 'power2.out' };

	// Portrait: clip-path wipe from left
	if (el.matches('.about-portrait-group'))
		return {
			from: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
			to: { clipPath: 'inset(0 0% 0 0%)' },
			dur: 1.15,
			ease: 'power4.inOut',
		};

	// Mission copy: slide in from right
	if (el.matches('.about-mission-copy'))
		return { from: { x: 40, opacity: 0 }, dur: 0.72, ease: 'power3.out' };

	if (el.matches('form'))
		return { from: { y: 28, scale: 0.99, opacity: 0 }, dur: 0.62, ease: 'power2.out' };

	if (el.matches('.cta-title'))
		return {
			from: { y: 42, scale: 0.95, opacity: 0, filter: 'blur(8px)' },
			to: { filter: 'blur(0px)' },
			dur: 0.74,
			ease: 'power3.out',
		};

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
						// Merge element-specific overrides (filter, clipPath, rotateX)
						...(c.to ?? {}),
						duration: c.dur,
						ease: c.ease,
						delay: Math.min(i * 0.07, 0.35),
					});
				});
			},
		});
	});
}

/* ── Number counters — expo.out for dramatic deceleration ─────── */
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
			duration: 2.0,
			ease: 'expo.out',
			onStart() {
				el.textContent = `${prefix}0${suffix}`;
			},
			onUpdate() {
				el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
			},
			onComplete() {
				if (finalText) el.textContent = finalText;
			},
			scrollTrigger: {
				trigger: el,
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
				start: 'top 65%',
				once: true,
			},
		});
	});
}

/* ── SplitText word-by-word reveal on section headings ─────────── */
// SplitText is free since GSAP 3.13 — included in gsap npm package
function setupSplitHeadings() {
	const vh = window.innerHeight;
	const headings = document.querySelectorAll<HTMLElement>(
		'main section:not(.hero-shell) h2',
	);

	headings.forEach((heading) => {
		const rect = heading.getBoundingClientRect();
		// Skip headings already visible on page load
		if (rect.top < vh * 0.88) return;

		const split = new SplitText(heading, { type: 'words' });

		gsap.from(split.words, {
			y: 30,
			opacity: 0,
			duration: 0.65,
			ease: 'power3.out',
			stagger: 0.055,
			scrollTrigger: {
				trigger: heading,
				start: 'top 82%',
				once: true,
			},
		});
	});
}
