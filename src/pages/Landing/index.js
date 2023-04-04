import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


const Landing = ({}) => {
	const theme = createTheme({
  	typography: {
    	fontFamily: [
      		'Fira Code',
      		'monospace',
    	].join(','),
	},});

	return (
		<ThemeProvider theme={theme}>
			<Navbar theme={theme}/>
			<Welcome theme={theme}/>
			<About theme={theme}/>
			<Projects theme={theme}/>
			<Resume theme={theme}/>
			<Contact theme={theme}/>
		</ThemeProvider>
	)
}

export default Landing