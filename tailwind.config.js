/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		colors: {
			'ttl-txt-col': '#6f9fc8',
			'bg-top': '#171d23',
			'bg-btm': '#101419',
			'brd-col': '#171d23',
			'btn-top': '#232f40',
			'btn-bottom': '#151c22',
			'btn-txt-col': '#495c72',
			white: '#fff',
		},
		boxShadow: {
			'col-shadow': '0 0 5px #0008',
			'col-act-shd': '0 0 7px #0008 inset',
			'btn-shadow': '0 0 5px #283546 inset',
			'btn-act-shd': '0 0 5px #000c inset',
		},
		extend: {
			spacing: {
				'10px': '10px',
				100: '100px',
				150: '150px',
				300: '300px',
				450: '450px',
				600: '600px',
				650: '650px',
				'col-size': 'calc(33% - 20px)',
			},
		},
	},
	plugins: [],
};
