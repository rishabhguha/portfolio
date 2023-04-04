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
			description: "This website has been designed and developed using ReactJS, MaterialUI, and Framer Motion to create a modern, sleek and interactive user interface. The homepage features a hero section with a dynamic background animation, introducing myself and highlighting my core skills and expertise. The skills section showcases my technical skills in a visually engaging way, using progress bars to indicate my proficiency levels. Overall, this portfolio website was designed to showcase my skills and expertise in a clean, modern, and interactive way. It not only serves as an introduction to my work but also as a demonstration of my technical abilities using the latest web development technologies.",
			images: [
				"portfolio_1.png",
				"portfolio_2.png",
				"portfolio_3.png",
			]

		}
	],
	SKILLS: [
		{
			name: "HTML",
			shortName: "HTML",
			level: '95%',
		},
		{
			name: "CSS(SCSS/SASS)",
			shortName: "CSS",
			level: '95%',
		},
		{
			name: "JavaScript",
			shortName: "JS",
			level: '90%',
		},
		{
			name: "ReactJS/Redux",
			shortName: "ReactJS",
			level: '80%',
		},
		{
			name: "Algos(Python) ",
			shortName: "Algos",
			level: '70%',
		}
	]
}

export default Consts