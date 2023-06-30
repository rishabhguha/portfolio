import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import SkillTab from './SkillTab';
import Consts from '../../../../consts';

const SkillMenu = () => {
	const theme = useTheme();
	const [activeTab, setActiveTab] = useState(0)

	// mapping for tabs to keys in Consts.SKILLS
	const tabToKey = {
		0: "LANGUAGES",
		1: "FRAMEWORKS"
	}


	return (
		<Box sx={{
			width: '100%',
			px: '50px',
			minHeight: '310px',
			[theme.breakpoints.down('sm')]: {
				px: '0',
			}
		}}>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-around',
				px: '50px', 
				mb: '20px',
				[theme.breakpoints.down('sm')]: {
					px: '0px'
				}		
			}}>
				{/* Set activeTab to be one of the */}
				<Button onClick={() => {setActiveTab(0)}} sx={{
					fontSize: '20px',
					color: `${Consts.PALETTE.primary}`
				}}>
					Languages
				</Button>
				<Button onClick={() => {setActiveTab(1)}} sx={{
					fontSize: '20px',
					color: `${Consts.PALETTE.primary}`
				}}>
					Frameworks
				</Button>
			</Box>
			<SkillTab skills={Consts.SKILLS[tabToKey[activeTab]]}/>
		</Box>
	)
}

export default SkillMenu