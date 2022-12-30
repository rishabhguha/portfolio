import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ContactLinks from './ContactLinks';
import WebsiteLinks from './WebsiteLinks';

const Contact = () => {
	return (

		<Container disableGutters={true} maxWidth={false} id='contact'
		sx={{ 
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			padding:'20px',
			minHeight: '25vh',
			height: 'fit-content',
			color: 'white',
			background : 'linear-gradient(0deg, rgba(195,34,55,1) 0%, rgba(253,74,45,1) 100%)',
			}}>

			<Box sx={{ 
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: 'fit-content',
			}}>
				<ContactLinks/>
				<Typography sx={{pt:'10px', cursor:'pointer'}}>
					rg4023@nyu.edu | (+1)929-559-4300
				</Typography>
			</Box>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: 'fit-content',
			}}>
				<Typography sx={{pb:'10px'}}>
					This website was created with
				</Typography>
				<WebsiteLinks/>
			</Box>
			
		</Container>
	)	
}


export default Contact