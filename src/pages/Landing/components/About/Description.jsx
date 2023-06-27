import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Consts from '../../../../consts';

const Description = () => {
	const theme = useTheme();

	return (
		<Box sx={{
			width: '100%',
			px: '50px',
			[theme.breakpoints.down('sm')]: {
				px: '0px'
			}
		}}>
			<Typography variant="body1" color={Consts.PALETTE.primary} textAlign="justify">
				Hey there! I am Rishabh, a software developer based out of <Typography variant="body1" color={Consts.PALETTE.highlight} display="inline">New York City, NY</Typography>. I am a Master's graduate (Computer Engineering) from NYU Tandon School of Engineering.
			</Typography>
			<Typography variant="body1" color={Consts.PALETTE.primary} textAlign="justify">
				I have around <Typography variant="body1" color={Consts.PALETTE.highlight} display="inline">two years</Typography> of experience in full time roles and internships. Most of my work has been around building, maintaining and upgrading front-end UIs for organizations such as <Typography variant="body1" color={Consts.PALETTE.highlight} display="inline">Walmart Global Tech</Typography>, <Typography variant="body1" color={Consts.PALETTE.highlight} display="inline">OYO</Typography> and <Typography variant="body1" color={Consts.PALETTE.highlight} display="inline">Deloitte</Typography>.
			</Typography>
		</Box>
	)
}

export default Description