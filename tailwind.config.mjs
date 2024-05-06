/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#008ecc",
				"light-grey": "#b5b5b5",
				"dark-grey": "#919191",
				"primary2": "#f3f9fb",
				"secondary": "#f5f5f5",
				"primary-dark":"rgb(31, 41, 55)"
			}
		},
	},
	plugins: [],
}
