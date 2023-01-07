import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
	const theme = useTheme();

	return (
		<Box sx={{ maxWidth: 800 }} >
			<Typography variant="h1" gutterBottom 
			sx={{ 
				fontSize : '5rem',
				[theme.breakpoints.down('md')]: {
					fontSize: '4rem'
				},
				[theme.breakpoints.down('sm')]: {
			      fontSize : '3rem',
			    },
				
			}}>
	        	Hello! I am Rishabh, a passionate and curious web developer!
	      	</Typography>
	    </Box>
	)
}

export default Header