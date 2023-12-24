import { FaReact } from 'react-icons/fa';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import ReactIcon from '../../../../consts/icons/ReactIcon';
import MuiIcon from '../../../../consts/icons/MuiIcon';
import FramerIcon from '../../../../consts/icons/FramerIcon';

const WebsiteLinks = () => {
  return (
    <Box
      sx={{
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid white',
        pt: '10px',
      }}
    >
      <IconButton
        aria-label='react.com'
        onClick={() => window.open('https://reactjs.org/')}
        sx={{
          mx: '4px',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        <ReactIcon />
      </IconButton>
      <IconButton
        aria-label='mui.com'
        onClick={() => window.open('https://mui.com/')}
        sx={{
          mx: '4px',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        <MuiIcon />
      </IconButton>
      <IconButton
        aria-label='mui.com'
        onClick={() => window.open('https://www.framer.com/docs/animation/')}
        sx={{
          mx: '4px',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        <FramerIcon />
      </IconButton>
    </Box>
  );
};

export default WebsiteLinks;
