/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				bannerwarm:
					"url('/home/kanken/Projects/kankenny-website/src/assets/banners/BannerWarm.jpg')",
			},
		},
	},
	plugins: [],
}
