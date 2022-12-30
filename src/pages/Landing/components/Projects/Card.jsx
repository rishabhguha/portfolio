import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import ProjectModal from './ProjectModal';
import bgImg3 from './img/project_img_3.png';

const Card = ({ title, text, link }) => {
	
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	return (
		<Box sx={{
			width: '100%',
			padding:'10px',
			backgroundImage : `url(${bgImg3})`,
			backgroundSize: 'cover',
			backgroundOpacity: '0.3'
		}}>
			<Typography variant="h4" gutterBottom sx={{
				display:"block",
				width: '100%',
				textAlign:'center',
			}}>
				{title}
			</Typography>
			<Typography variant="body2" gutterBottom sx={{
				display:"block",
				py:'10px',
				width: '100%',
				textAlign:'center',
			}}>
				{text}
			</Typography>
			<Box sx={{
				marginTop: '10px',
				display: 'flex',
				justifyContent: 'center'
			}}>
				<IconButton 
					aria-label="delete" 
					size="large" 
					color="success" 
					onClick={handleOpen}
					sx={{
						marginRight: '10px',
						cursor: 'pointer',
					}}
				>
			        <UnfoldMoreRoundedIcon fontSize="inherit" />
			    </IconButton>
			    <Link href={link} color="inherit" target="_blank">
			    	<IconButton aria-label="delete" size="large" sx={{
						cursor: 'pointer',
					}}>
				  		<OpenInNewRoundedIcon fontSize="inherit" />
				  	</IconButton>
				</Link>
			</Box>
			<ProjectModal open={open} handleClose={handleClose}/>
		</Box>
	)
}


export default Card