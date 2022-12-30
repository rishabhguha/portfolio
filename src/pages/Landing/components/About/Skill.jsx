import React from 'react'
import { Box, Typography } from '@mui/material';


const Skill = ({ skillName, skillLevel }) => {

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
				display: 'flex',
				justifyContent: 'end',
				flexBasis: '30%',
				height: '100%',
				color: 'red',
				paddingRight: '10px'
			}}>
				{skillName}
			</Typography>
			<Box sx={{
				display: 'inline-block',
				height: '100%',
				flexBasis: '70%',
				background: 'rgba(46, 194, 58, 0.1)',
				borderRadius: '10px',
				marginBottom: '5px'
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