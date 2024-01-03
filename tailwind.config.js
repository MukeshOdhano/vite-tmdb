/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"general-sans": "General Sans",
				"general-sans-medium": "General Sans Medium",
			},

			backgroundImage: {
				"linear-to-t":
					"linear-gradient(to top, rgba(250,250,250,0.2), rgba(0,0,0,0.6)) no-repeat",
			},

			boxShadow: {
				spread: "0 0 0 5px #446DF655, 0 0 10px 1px #ffffff44",
			},
		},
	},
	plugins: [],
};
