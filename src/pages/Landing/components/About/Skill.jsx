import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const Skill = ({ skillName, skillLevel, shortName}) => {
	let width = (window.innerWidth > 0) ? window.innerWidth : window.width;
	const [name, setName] = useState(skillName);
	const theme = useTheme();

	useEffect(() => {
		if(width > theme.breakpoints.values['md']){
			setName(skillName)
		}
		else{
			setName(shortName)
		}
	},[width])
 
	return (
		<Box sx={{
			display: 'flex',
			height: '30px',
			width: '100%',
			border: 'yellow',
			borderRadius: '10px',
			marginBottom: '5px'
		}}>
			<Typography  variant="subtitle1"
			sx={{
				display: 'inline-flex',
				width: '30%',
				justifyContent: 'end',
				height: '100%',
				color: 'red',
				paddingRight: '10px',
				[theme.breakpoints.down('sm')]: {
					width: '20%'
				}
			}}>
				{name}
			</Typography>
			<Box sx={{
				display: 'inline-block',
				height: '100%',
				width: '70%',
				background: 'rgba(46, 194, 58, 0.1)',
				borderRadius: '10px',
				marginBottom: '5px',
				[theme.breakpoints.down('sm')]: {
					width: '80%'
				}
			}}>
				<Box sx={{
					display: 'inline-block',
					height: '100%',
					width: `${skillLevel}`,
					background: 'rgba(46, 194, 58)',
					borderRadius: '10px',
				}}>
				</Box>
			</Box>
		</Box>
	)
}


export default Skill