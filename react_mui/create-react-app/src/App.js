import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApplicationBar from './components/AppBar';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatWeGrow from './pages/WhatWeGrow';


import Header from './Header';
import Footer from './Footer';

import * as React from 'react';
import Blog from './Blog';

const theme = createTheme();

const sections = [
  { title: 'The Farm', url: '#' },
  { title: 'What We Grow', url: '#' },
  { title: 'Instagram', url: 'https://www.instagram.com/goldennectarfarm/' },
  { title: 'Facebook', url: 'https://www.facebook.com/pages/Golden-Nectar-Farm/157366357790557' },
];

const social = [
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/goldennectarfarm/' },
  { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/pages/Golden-Nectar-Farm/157366357790557' },
];



export default function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/WhatWeGrow" element={<WhatWeGrow />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      </div>
  );
}
