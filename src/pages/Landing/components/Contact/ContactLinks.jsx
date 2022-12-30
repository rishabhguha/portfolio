import React from 'react';
import { Box } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Instagram } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLinks = () => {
	
	return (
		<Box sx={{
			width: '10%',
			display: 'flex',
			justifyContent: 'center',
			borderBottom: '1px solid white',
			pb: '10px'

		}}>
			<LinkedInIcon aria-label="linkedin.com/rishabhguha" onClick={() => window.open('https://www.linkedin.com/in/rishabh-guha-35ba34183/')} 
			sx={{
				mx:'4px', 
				cursor:'pointer'
			}}/>
			<GitHubIcon aria-label="github.com/rishabhguha" onClick={() => window.open('https://github.com/rishabhguha')}
			sx={{
				mx:'4px', 
				cursor:'pointer'
			}}/>
			<Instagram aria-label="instagram.com/_guhaaa_/" onClick={() => window.open('https://www.instagram.com/_guhaaa_/?hl=en')}
			sx={{
				mx:'4px', 
				cursor:'pointer'
			}}/>
		</Box>
	)
}

export default ContactLinks