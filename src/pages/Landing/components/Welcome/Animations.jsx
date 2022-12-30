import React from 'react';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
import { useTheme } from '@mui/material/styles';

const Animations = () => {
	const theme = useTheme();

	return (
		<Box sx={{ 
			width: '100%', 
			height:'100%', 
			maxWidth: 800, 
			position:'relative',
			[theme.breakpoints.down('sm')]: {
			    display: 'none'
			},
		}} >
			<Box 
				display='inline-block'
				position='absolute' 
				left='5%' 
				top='20%'
				height='120px'
				width='120px'
				borderRadius='20px'
				bgcolor='white'
				component={motion.div}
				animate={{
			        scaleX: ['1', '1,2', '0.8', '1'],
			        scaleY: ['1', '1,2', '0.8', '1'],
			    }}
				transition={{
			        duration: 2,
			        ease: "easeInOut",
			        times: [0,0.4,0.6,1],
			        repeat: Infinity,
			    }}
			/>
			<Box 
				display='inline-block'
				position='absolute' 
				left='15%' 
				bottom='20%'
				height='120px'
				width='120px'
				borderRadius='50%'
				bgcolor='white'
				component={motion.div}
				animate={{
			        translateX: ['0px', '300px', '0px'],
			    }}
				transition={{
			        duration: 2,
			        ease: "easeInOut",
			        times: [0,0.5,1],
			        repeat: Infinity,
			    }}
			/>
			<Box 
				display='inline-block'
				position='absolute' 
				right='5%' 
				top='20%'
				height='0'
				width='0'
				// borderRadius='20px'
				// bgcolor='white'
				borderLeft = '60px solid transparent'
				borderRight = '60px solid transparent'
				borderBottom = '80px solid white'
				component={motion.div}
				whileHover={{ rotate: '180deg' }}
				whileTap={{ rotate: '-180deg' }}
				transition={{
			        duration: 1,
			        ease: "easeInOut",
			    }}
			    sx={{
			    	cursor:'pointer'
			    }}
			/>
	    </Box>
	)
}

export default Animations