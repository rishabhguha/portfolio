import React from 'react';
import { Box, Typography } from '@mui/material';

const Description = () => {

	return (
		<Box sx={{
			width: '100%',
			px: '50px'
		}}>
			<Typography variant="body1" color="red">
				Hey there! I am Rishabh, a software developer based out of <Typography variant="body1" color="blue" display="inline">New York City, NY</Typography>. I am currently a Master's student at NYU Tandon School of Engieering, pursuing my major in Computer Engineering. 
			</Typography>
			<Typography variant="body1" color="red">
				I have around <Typography variant="body1" color="blue" display="inline">two years</Typography> of experience in full time roles and internships. Most of my work has been around building, maintaining and upgrading front-end UIs for organizations such as <Typography variant="body1" color="blue" display="inline">Walmart Global Tech</Typography>, <Typography variant="body1" color="blue" display="inline">OYO</Typography> and <Typography variant="body1" color="blue" display="inline">Deloitte</Typography>.
			</Typography>
		</Box>
	)
}

export default Description