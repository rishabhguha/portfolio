import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import AboutContent from './AboutContent';


const About = () => {
	return (
		<Container disableGutters={true} maxWidth={false} id='about'
		sx={{ 
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			padding:'64px 20px',
			bgcolor : 'white', 
			height: 'fit-content',
			color: 'white',
			}}>

			<Box height="max-content">
				<Typography variant="h1" gutterBottom 
				sx={{ 
					fontSize : '5rem',
					color: 'rgba(253,74,45,1)'
					
				}}>
		        	About Me
		      	</Typography>
			</Box>
			<AboutContent/>
			
		</Container>
	)
}

export default About