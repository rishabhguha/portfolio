import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Grid from './Grid'

const Projects = () => {
	return (

		<Container disableGutters={true} maxWidth={false} id='projects'
		sx={{ 
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'start',
			padding:'64px 20px',
			minHeight: '100vh',
			height: 'fit-content',
			color: 'rgba(253,74,45,1)',
			}}>

			<Box height="max-content">
				<Typography variant="h1" gutterBottom 
				sx={{ 
					fontSize : '5rem',
				}}>
		        	Projects
		      	</Typography>
			</Box>
			<Grid/>
		</Container>
	)	
}


export default Projects