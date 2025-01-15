/** @type {import('tailwindcss').Config} */
/*export default {
	content: ['./src/!**!/!*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}*/

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'ubuntu': ['Ubuntu', 'sans-serif'],
				'noto': ['Noto Sans', 'sans-serif'],
			},
			colors: {
				night: '#00140dff',
				darkGreen: '#00311eff',
				seaGreen: '#1c875eff',
				silver: '#bec2c5ff',
				davysGray: '#504f54ff',
				darkerGray: '#333333',
				lightGray: '#a0a0a0',
			},
		},
	},
	plugins: [],
}