import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Pdf from './Pdf';

const Resume = ({theme}) => {
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
			}}>

			<Box height="max-content">
				<Typography variant="h1" gutterBottom 
				sx={{ 
					fontSize : '5rem',
					color: 'rgba(253,74,45,1)',
					[theme.breakpoints.down('sm')]: {
						fontSize: '4rem'
					}
				}}>
		        	Resume
		      	</Typography>
			</Box>
			<Pdf theme={theme}/>
		</Container>
	)	
}


export default Resume