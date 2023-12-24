import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Consts from '../../../../consts';

const ProjectBody = ({ project, key }) => {
  const theme = useTheme();

  const Image = (props) => (
    <Box
      component='img'
      key={props.bgImg}
      src={`${process.env.PUBLIC_URL}/img/projects/${props.bgImg}`}
      alt='image carousel'
      sx={{
        // margin: '0 auto',
        height: '350px',
        width: '70%',
        [theme.breakpoints.down('sm')]: {
          height: '250px',
          width: '90%',
        },
      }}
    >
      {props.children}
    </Box>
  );

  return (
    <Box
      sx={{
        width: '80%',
        padding: '20px',
        minHeight: '500px',
        maxHeight: '500px',
        overflow: 'auto',
        border: `1px solid ${Consts.PALETTE.primary}`,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <Typography
        variant='h3'
        gutterBottom
        sx={{
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
          },
        }}
      >
        {project.header}
      </Typography>
      <Typography variant='caption'>{project.description}</Typography>
    </Box>
  );
};

export default ProjectBody;
