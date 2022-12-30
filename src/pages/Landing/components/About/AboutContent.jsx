import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

import SkillMenu from './SkillMenu';
import Description from './Description';

const AboutContent = () => {

	const Divider = (props) => (
		<Box sx={{
			height: '200px',
			width: '5px',
			borderRadius: '10px',
			bgcolor: 'rgba(253,74,45,1)',
		}}>
			{props.children}
		</Box>
	);

	return (
		<Box sx={{
			width: '100%',
			minHeight: 'fit-content',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around'
		}}>
			<Description/>
			<Divider/>
			<SkillMenu/>
		</Box>
	)
}

export default AboutContent