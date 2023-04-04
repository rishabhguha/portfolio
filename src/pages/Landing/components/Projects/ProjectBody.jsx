import React, { useState, useEffect } from 'react';
import { Box , Typography, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import Consts from '../../../../consts';

const ProjectBody = ({project}) => {

	const Image = (props) => (
		<Box component="img" key={props.bgImg}
		src={`${process.env.PUBLIC_URL}/img/projects/${props.bgImg}`}
		alt="image carousel"
		sx={{
			// margin: '0 auto',
			height: '350px',
			width: '70%',
		}}>
			{props.children}
		</Box>
	)

	return (
		<Box sx={{
			width: '80%',
			padding: '20px',
			// display: 'flex',
			// flexDirection: 'column',
			// justifyContent: 'center',
			minHeight: '500px',
			maxHeight: '500px',
			overflow: 'auto',
			border: '1px solid red'
		}}>
			<Typography variant='h3' gutterBottom>
				{project.header}
			</Typography>
			<Typography variant='caption'>
				{project.description}
			</Typography>
			<Carousel animation="slide" 
	    	// navButtonsAlwaysVisible={true}
	    	interval={5000}
	        duration={500}
	        sx={{
	        	margin: '30px 0'
	        }}>
	            {
	                project.images.map( (image, i) => 
	                	<Box sx={{
	                		width: '100%',
	                		display: 'flex',
	                		justifyContent: 'center'
	                	}}>
	                		<Image key={i} bgImg={image} />
	                	</Box>
	                	 )
	            }
	        </Carousel>
		</Box>
	)
}

export default ProjectBody