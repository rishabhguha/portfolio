import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Modal, Backdrop } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Consts from '../../../../consts';
import ModalContent from './ModalContent';

import './styles.css';

const Card = ({ data }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <ModalContent data={data} />
      </Modal>
      <Paper
        elevation={3}
        className='card'
        sx={{
          height: '500px',
          borderRadius: '6px',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          fontFamily: theme.typography.card,
          position: 'relative',
        }}
      >
        <Box
          onClick={handleOpen}
          className='cardOverlay'
          sx={{
            opacity: 0,
            position: 'absolute',
            zIndex: 10,
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: 'inherit',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: Consts.PALETTE.primary,
              fontWeight: 'bold',
            }}
          >
            Click to Expand
          </Typography>
        </Box>
        <Box
          className='cardThumbnail'
          sx={{
            width: '100%',
            height: 'fit-content',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/projects/${data.CARD.picture}`}
            alt='Project Thumbnail'
          />
        </Box>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            fontFamily: 'inherit',
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
            fontFamily: 'inherit',
            fontSize: '20px',
          }}
        >
          {data?.CARD?.description}
        </Typography>
      </Paper>
    </>
  );
};

export default Card;
