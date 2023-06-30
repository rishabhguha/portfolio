const Consts = {
	PALETTE: {
		primary: 'rgb(253,74,45)',
		skill: 'rgba(46, 194, 58, 1)',
		skillBackground: 'rgba(46, 194, 58, 0.1)',
		highlight: 'blue'
	},
	NAVLINKS :[
	  	{
		    text: "About  Me",
		    link: "/#about"
		}, 
		{
		    text: "Resume",
		    link: "/#resume"
		},
		{
		    text: "Contact Me",
		    link: "/#contact"
		},
	],
	PROJECTS:[
		{
			link: "https://www.animefillerlist.com/shows/one-piece",
			header: "MusicGenie",
			description: "MusicGenie is a webapp that generates a personalized playlist based on user text input, using XGB Models to map text to audio parameters. Users input text that describes their mood, activity, or specific music preferences. The XGB machine learning models analyze the text and generate a playlist that matches the user's input. The models take into account various factors such as tempo, genre, and artist popularity to ensure a balanced and enjoyable listening experience. Users can access their playlist on Spotify. I have implemented the frontend from scratch using ReactJS and MaterialUI.",
			images: [
				"musicgenie_1.png",
				"musicgenie_2.png",
			]

		},
		{
			link: "https://www.animefillerlist.com/shows/one-piece",
			header: "Natours",
			description: "Natours is a sample landing page project created by drawing design inspiration from online websites. It is a sleek sample landing page for an organization that offers nature tour packages to its customers. The aim of creating this website was to experiment to develop a static page with sleek designs and animations without using any JavaScript. As a result, the project was created using only advanced CSS (SCSS) and HTML.",
			images: [
				"natours_1.png",
				"natours_2.png",
				"natours_3.png",
				"natours_4.png"
			]

		},
		{
			link: "https://www.animefillerlist.com/shows/one-piece",
			header: "Portfolio",
			description: "This website has been designed and developed using ReactJS, MaterialUI, and Framer Motion to create a modern, sleek and interactive user interface. The homepage features a hero section with a dynamic background animation, introducing myself and highlighting my core skills and expertise. The skills section showcases my technical skills in a visually engaging way, using progress bars to indicate my proficiency levels. Overall, thie website not only serves as an introduction to my work but also as a demonstration of my technical abilities using the latest web development technologies.",
			images: [
				"portfolio_1.png",
				"portfolio_2.png",
				"portfolio_3.png",
			]

		}
	],
	SKILLS: {
		LANGUAGES: [
			{
				name: "HTML",
				shortName: "HTML",
				level: '95%',
			},
			{
				name: "CSS",
				shortName: "CSS",
				level: '95%',
			},
			{
				name: "JavaScript",
				shortName: "JS",
				level: '95%',
			},
			{
				name: "Python(Algos)",
				shortName: "Python",
				level: '80%',
			},
			{
				name: "Java",
				shortName: "Java",
				level: '70%',
			}
		],
		FRAMEWORKS: [
			{
				name: "ReactJS/Redux",
				shortName: "React",
				level: '90%',
			},
			{
				name: "MaterialUI",
				shortName: "MUI",
				level: '85%',
			},
			{
				name: "VueJS",
				shortName: "VueJS",
				level: '75%',
			},
			{
				name: "Express",
				shortName: "Express",
				level: '75%',
			},
			{
				name: "Springboot",
				shortName: "SB",
				level: '65%',
			},
		]
	}
	
}

export default Consts