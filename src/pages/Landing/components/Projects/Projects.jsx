import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Content from './Content'
import Consts from '../../../../consts';

const Projects = ({theme}) => {
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
			color: `${Consts.PALETTE.primary}`,
			border: `10px solid ${Consts.PALETTE.primary}`,
			}}>

			<Box height="max-content">
				<Typography variant="h1" gutterBottom 
				sx={{ 
					fontSize : '5rem',
					[theme.breakpoints.down('sm')]: {
						fontSize: '4rem'
					}
				}}>
		        	Projects
		      	</Typography>
			</Box>
			<Content/>
		</Container>
	)	
}


export default Projects