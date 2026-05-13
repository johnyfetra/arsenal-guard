/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				navy: {
					950: '#050B1A',
					900: '#0A1530',
					800: '#0F1F44',
					700: '#1A2D5C',
					600: '#2A4275',
				},
				orange: {
					400: '#F39C12',
					500: '#E67E22',
					600: '#D35400',
				},
				cream: {
					50: '#FAFAF7',
					100: '#F4F4EF',
				},
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
			},
			boxShadow: {
				glow: '0 0 40px rgba(230, 126, 34, 0.2)',
				soft: '0 18px 60px rgba(5, 11, 26, 0.14)',
			},
			backgroundImage: {
				mesh: 'radial-gradient(circle at 15% 15%, rgba(230,126,34,.22), transparent 24rem), radial-gradient(circle at 82% 10%, rgba(42,66,117,.55), transparent 28rem), linear-gradient(135deg, #050B1A 0%, #0A1530 52%, #0F1F44 100%)',
			},
		},
	},
};
