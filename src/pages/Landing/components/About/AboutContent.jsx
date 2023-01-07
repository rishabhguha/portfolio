import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import SkillMenu from './SkillMenu';
import Description from './Description';
import AboutPicture from './img/about.jpg';


const AboutContent = () => {
	const theme = useTheme();

	const Divider = (props) => (
		<Box sx={{
			height: '200px',
			width: '5px',
			borderRadius: '10px',
			bgcolor: 'rgba(253,74,45,1)',
			[theme.breakpoints.down('sm')]: {
				height: '5px',
				width: '70%',
				margin: '20px 0'
			}

		}}>
			{props.children}
		</Box>
	);

	const Image = (props) => (
		<Box sx={{
			width: '100%',
			margin: '0 auto',
			marginBottom: '20px',
			height: '300px',
			width: '300px',
			borderRadius: '50%',
			backgroundImage : `url(${AboutPicture})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			[theme.breakpoints.down('sm')]: {
				height: '200px',
				width: '200px',
			}
		}}>
			{props.children}
		</Box>
	);

	return (
		<Box sx={{
			width: '100%',
			minHeight: 'fit-content',
		}}>
			<Image/>
			<Box sx={{
				width: '100%',
				minHeight: 'fit-content',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
				[theme.breakpoints.down('sm')]: {
					flexDirection: 'column'
				}
			}}>
				<Description/>
				<Divider/>
				<SkillMenu/>
			</Box>
		</Box>
		
	)
}

export default AboutContent