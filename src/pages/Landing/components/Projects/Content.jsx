import React, { useState, useEffect } from 'react';
import { Box , Typography } from '@mui/material';
import Consts from '../../../../consts';

import ProjectBody from './ProjectBody';

const Content = () => {

	const [activeTab, setActiveTab] = useState(0)

	const handleClick = (i) => {
		setActiveTab(i)
	}

	const Tab = (props) => (
		<Box {...props} sx={{
			height: '50px',
			width: '150px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			border: `1px solid ${Consts.PALETTE.primary}`,
			px: '15px',
			marginBottom: '10px',
			borderRadius: '5px',
			transition: `all 250ms cubic-bezier(0, 0, 1, 1)`,
			boxShadow: `0 6px 2px rgb(190, 190, 190)`,
			'&.active': {
				backgroundColor: `${Consts.PALETTE.primary}`,
				color: 'white',
				cursor: 'inherit'
			},
			'&:hover': {
				// transform: 'translate(0, 0.375em)'
			},
			'&:active:not(&.active)': {
				transform: 'translate(0em, 0.3em)',
				boxShadow: `0 2px 0px rgb(207, 207, 207)`,
			}
		}}>
			{props.children}
		</Box>
	)
	
	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			width: '100%'
		}}>
			<Box sx={{
				width: '20%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				{Consts.PROJECTS.map((item,i) => (
					<>
						<Tab key={i} 
						onTransitionEnd={() => handleClick(i)}
						className={activeTab === i ? "active" : ""}>
							{item.header}
						</Tab>
					</>
				))}
			</Box>
			<ProjectBody project={Consts.PROJECTS[activeTab]}/>
		</Box>
	)
}

export default Content