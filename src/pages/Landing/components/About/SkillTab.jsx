import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Skill from './Skill';
import Consts from '../../../../consts';

const SkillTab = ({skills}) => {
	const theme = useTheme();

	return (
		<Box sx={{
			width: '100%',
			px: '50px',
			[theme.breakpoints.down('sm')]: {
				px: '0',
			}
		}}>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				
			}}>
				<Box color={Consts.PALETTE.highlight} sx={{
					// width: '70%',
					margin: '0px -4% 0px 26%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'end',
					[theme.breakpoints.down('sm')]: {
						margin: '0px -4% 0px 16%',
					}
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
					border: `1px solid ${Consts.PALETTE.primary}`,
					borderRadius: '5px 5px 0px 0px',
					borderBottom: 'none',
					margin: '5px 5px 10px 5px',
					marginLeft: '30%',
					[theme.breakpoints.down('sm')]: {
						marginLeft: '20%',
					}
				}}/>
			</Box>
			<>
				{skills.map((item) => (
					<Skill skillName={item.name} shortName={item.shortName} skillLevel={item.level} key={item.shortName}/>
				))}
			</>	
		</Box>
	)
}

export default SkillTab