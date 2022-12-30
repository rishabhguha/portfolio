import React from 'react';
import { Box, Typography } from '@mui/material';

import Skill from './Skill';
import Consts from '../../../../consts';

const SkillMenu = () => {
	return (
		<Box sx={{
			width: '100%',
			px: '50px',
		}}>
			<Box sx={{
				paddingLeft: '30%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			}}>
				<Box color='rgb(46, 194, 58)' sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'end',
					margin: '0 -4%'
				}}>
					<Typography variant="caption" display="block" width="100px" textAlign='center'>
						I will have to learn this
					</Typography>
					<Typography variant="caption" display="block" width="100px" textAlign='center'>
						I am great at this!
					</Typography>
				</Box>
				<Box sx={{
					height: '10px',
					border: '1px solid rgb(253,74,45)',
					borderRadius: '5px 5px 0px 0px',
					borderBottom: 'none',
					margin: '5px 5px 10px 5px'
				}}/>
			</Box>
			<>
				{Consts.SKILLS.map((item) => (
					<Skill skillName={item.name} skillLevel={item.level}/>
				))}
			</>	
		</Box>
	)
}

export default SkillMenu