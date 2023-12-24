import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ModalContent({ data }) {
  const theme = useTheme();

  return (
    <Box
      className='projectModal'
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        bgcolor: 'background.paper',
        height: '90vh',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        overflowY: 'scroll',
      }}
    >
      <Typography
        variant='h2'
        gutterBottom
        sx={{
          textAlign: 'center',
          fontFamily: theme.typography.card,
        }}
      >
        {data?.title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant='body1'
          sx={{
            textAlign: 'center',
            mr: 2,
          }}
        >
          {data?.MODAL?.description}
        </Typography>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {data.MODAL.images.map((image) => (
            <SwiperSlide>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: `url(${process.env.PUBLIC_URL}/img/projects/${image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* <Box>
          <Typography
            variant='h2'
            gutterBottom
            sx={{
              textAlign: 'center',
              fontFamily: theme.typography.card,
            }}
          >
            Highlights
          </Typography>
          <List
            sx={{
              fontFamily: theme.typography.card,
            }}
          >
            {data?.MODAL?.highlights?.map((item) => (
              <ListItem
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon sx={{ minWidth: 'fit-content', mr: 2 }}>
                  <ArrowForwardIosOutlinedIcon />
                </ListItemIcon>
                {item}
              </ListItem>
            ))}
          </List>
        </Box> */}
      </Box>
    </Box>
  );
}
