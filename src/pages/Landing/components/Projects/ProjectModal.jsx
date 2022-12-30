import React from 'react';
import { Box , Modal } from '@mui/material';

const ProjectModal = ({ open, handleClose }) => {
	return (
		<Modal
	        open={open}
	        onClose={handleClose}
	        aria-labelledby="parent-modal-title"
	        aria-describedby="parent-modal-description"
	    >
	        <Box sx={{ 
	        		width: 400,
	        		position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					border: '2px solid #000',
					boxShadow: 24,
					pt: 2,
					px: 4,
					pb: 3,
	        	}}
	        >
	          	<p id="parent-modal-description">
	            	Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	          	</p>
	        </Box>
	    </Modal>
	)
}

export default ProjectModal