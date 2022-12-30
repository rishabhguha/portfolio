import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Pdf from './Pdf'

const Resume = () => {
	return (

		<Container disableGutters={true} maxWidth={false} id='resume'
		sx={{ 
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'start',
			padding:'64px 20px',
			bgcolor : 'white', 
			minHeight: '100vh',
			height: 'fit-content',
			color: 'white',
			border: '10px solid rgba(253,74,45,1)',
			}}>

			<Box height="max-content">
				<Typography variant="h1" gutterBottom 
				sx={{ 
					fontSize : '5rem',
					color: 'rgba(253,74,45,1)'
					
				}}>
		        	Resume
		      	</Typography>
			</Box>
			<Pdf/>
		</Container>
	)	
}


export default Resume