import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Container, IconButton, Box, List, ListItem, ListItemButton, ListItemText, Divider, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';
import './styles.css'

import Consts from '../../../../consts'

const Navbar = () => {
  const theme = useTheme();
  const [textColor,setTextColor] = React.useState('inherit');
  const [viewportHeight, setViewportHeight] = React.useState(window.innerHeight);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleScroll = (() => {
    if (window.scrollY >  0.9*viewportHeight) {
      setTextColor('rgba(253,74,45,1)')
    } else {
      setTextColor('inherit')
    }
  })

  const handleResize = (() => {
    setViewportHeight(window.innerHeight)
  })

  // Responsive drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'rgb(253,74,45)' }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: 'flex',
          fontFamily: 'inherit',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        RG
      </Typography>
      
      <List>
        {Consts.NAVLINKS.map((item) => (
          <HashLink smooth to={item.link} className='navlinks'>
            <ListItem key={item.text} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            </ListItem>
          </HashLink>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    }
  })


  return (
    <Box>
      <AppBar position="fixed" top="0" sx={{
        backgroundColor:"transparent", 
        boxShadow:"none",
      }}>
      <Container maxWidth="xl">
          <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontFamily: 'inherit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: `${textColor}`,
                textDecoration: 'none',
              }}
            >
              RG
            </Typography>
            
            <List sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              alignItems:"center", 
              padding:"0", 
              maxHeight:"100%",
              color: `${textColor}`
            }}>
              {Consts.NAVLINKS.map((item) => (
                <HashLink smooth to={item.link} className='navlinks' key={item.link}>
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item.text} sx={{'&.MuiListItemText-root' : {margin: '0', minWidth:"100px"}}}/>
                    </ListItemButton>
                  </ListItem>
                </HashLink>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '200px' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    
  );
}
export default Navbar;