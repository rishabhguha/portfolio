import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header'
import Animations from './Animations'


const Welcome = () => {
	const theme = useTheme();

	return (
		<Container disableGutters={true} maxWidth={false} 
		sx={{ 
			display: 'flex',
			alignItems: 'center',
			padding:'64px 20px',
			background : 'linear-gradient(0deg, rgba(195,34,55,1) 0%, rgba(253,74,45,1) 100%)', 
			height: '100vh',
			color: 'white',
			[theme.breakpoints.down('sm')]: {
		      padding: '20px'
		    },
			}}>
			<Header/>
			<Animations/>
		</Container>
	)
}

export default Welcome