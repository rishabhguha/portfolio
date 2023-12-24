const Consts = {
  PALETTE: {
    primary: 'rgb(253,74,45)',
    skill: 'rgba(46, 194, 58, 1)',
    skillBackground: 'rgba(46, 194, 58, 0.1)',
    highlight: 'blue',
  },
  NAVLINKS: [
    {
      text: 'About  Me',
      link: '/#about',
    },
    {
      text: 'Resume',
      link: '/#resume',
    },
    {
      text: 'Contact Me',
      link: '/#contact',
    },
  ],
  PROJECTS: [
    {
      title: 'Dashboard',
      CARD: {
        picture: 'polybee_1.png',
        description:
          'A revamped dashboard created for Polybee that displays large quantities of data efficiently and aesthetically',
      },
      MODAL: {
        link: 'https://www.animefillerlist.com/shows/one-piece',
        description:
          'Led the development of an entirely new website for the digital phenotyping operations at Polybee. This dashboard handles displaying large quantities of data to users via ChartJS representations. Designed the initial wireframes for over 15 webpages using Figma, followed by end-to-end development, testing and shipping to production. Uses token based authentication and implements role based user access to limited webpages.',
        images: [
          'polybee_1.png',
          'polybee_2.png',
          'polybee_3.png',
          'polybee_4.png',
          'polybee_5.png',
        ],
        highlights: ['point1', 'point2', 'point3'],
      },
    },
    {
      title: 'MusicGenie',
      CARD: {
        picture: 'musicgenie_1.png',
        description:
          'MusicGenie is a webapp that generates a personalized playlist based on user text input.',
      },
      MODAL: {
        link: 'https://www.animefillerlist.com/shows/one-piece',
        description:
          "MusicGenie is a webapp that generates a personalized playlist based on user text input, using Machine Learning to map text to audio parameters. Users input text that describes their mood, activity, or specific music preferences. The XGB machine learning models analyze the text and generate a playlist that matches the user's input. The models take into account various factors such as tempo, genre, and artist popularity to ensure a balanced and enjoyable listening experience. Users can access their playlist on Spotify. I have implemented the frontend from scratch using ReactJS and MaterialUI.",
        images: ['musicgenie_1.png', 'musicgenie_2.png'],
        highlights: ['point1', 'point2', 'point3'],
      },
    },
    {
      title: 'Natours',
      CARD: {
        picture: 'natours_1.png',
        description:
          'Natours is a sample landing page project created by drawing design inspiration from online websites.',
      },
      MODAL: {
        link: 'https://www.animefillerlist.com/shows/one-piece',
        description:
          'Natours is a sample landing page project created by drawing design inspiration from online websites. It is a sleek sample landing page for an organization that offers nature tour packages to its customers. The aim of creating this website was to experiment to develop a static page with sleek designs and animations without using any JavaScript. As a result, the project was created using only advanced CSS (SCSS) and HTML.',
        images: [
          'natours_1.png',
          'natours_2.png',
          'natours_3.png',
          'natours_4.png',
        ],
        highlights: ['point1', 'point2', 'point3'],
      },
    },
    {
      title: 'Portfolio',
      CARD: {
        picture: 'portfolio_1.png',
        description:
          'This website has been designed and developed using ReactJS, MaterialUI, and Framer Motion to create a modern, sleek and interactive user interface.',
      },
      MODAL: {
        link: 'https://www.animefillerlist.com/shows/one-piece',
        description:
          'This website has been designed and developed using ReactJS, MaterialUI, and Framer Motion to create a modern, sleek and interactive user interface. The homepage features a hero section with a dynamic background animation, introducing myself and highlighting my core skills and expertise. The skills section showcases my technical skills in a visually engaging respresentation, using progress bars to indicate my proficiency levels. Overall, thie website not only serves as an introduction to my work but also as a demonstration of my technical abilities using the latest web development technologies.',
        images: ['portfolio_1.png', 'portfolio_2.png', 'portfolio_3.png'],
        highlights: ['point1', 'point2', 'point3'],
      },
    },
  ],
  SKILLS: {
    LANGUAGES: [
      {
        name: 'HTML',
        shortName: 'HTML',
        level: '95%',
      },
      {
        name: 'CSS',
        shortName: 'CSS',
        level: '95%',
      },
      {
        name: 'JavaScript',
        shortName: 'JS',
        level: '95%',
      },
      {
        name: 'Python(Algos)',
        shortName: 'Python',
        level: '80%',
      },
      {
        name: 'Java',
        shortName: 'Java',
        level: '70%',
      },
    ],
    FRAMEWORKS: [
      {
        name: 'ReactJS/Redux',
        shortName: 'React',
        level: '90%',
      },
      {
        name: 'MaterialUI',
        shortName: 'MUI',
        level: '85%',
      },
      {
        name: 'VueJS',
        shortName: 'VueJS',
        level: '75%',
      },
      {
        name: 'Express',
        shortName: 'Express',
        level: '75%',
      },
      {
        name: 'Springboot',
        shortName: 'SB',
        level: '65%',
      },
    ],
  },
};

export default Consts;
