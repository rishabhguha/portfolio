import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Card from './Card';
import Consts from '../../../../consts';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import Swiper modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/modules';

const Projects = ({ theme }) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      id='projects'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '64px 20px',
        minHeight: '100vh',
        height: 'fit-content',
        color: `${Consts.PALETTE.primary}`,
        border: `10px solid ${Consts.PALETTE.primary}`,
      }}
    >
      <Box height='max-content'>
        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontSize: '5rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '4rem',
            },
          }}
        >
          Projects
        </Typography>
      </Box>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className='projectSwiper'
      >
        {Consts.PROJECTS.map((project) => (
          <SwiperSlide key={project.CARD.title}>
            <Card data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projects;
