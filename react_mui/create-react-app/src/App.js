import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApplicationBar from './components/AppBar';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Video from './pages/Video';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatWeGrow from './pages/WhatWeGrow';


import Header from './Header';
import Footer from './Footer';

import * as React from 'react';

const theme = createTheme();

const social = [
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/goldennectarfarm/' },
  { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/pages/Golden-Nectar-Farm/157366357790557' },
];

const contact_info = "info@goldennectarfarm.com"

const images = [
  {name: "The house", 
   description: "The main house has a big A-Frame living room.",
   image: "house_garden.png"},
  {name: "Front Porch", 
   description: "",
   image: "front_porch.png"},
   {name: "Aerial Photo", 
   description: "",
   image: "aerial_1.png"},
   {name: "Aerial Photo", 
   description: "",
   image: "aerial_2.png"},
   {name: "Aerial Photo", 
   description: "",
   image: "aerial_3.png"},
   {name: "Garden view of the house", 
   description: "",
   image: "house.png"},
   {name: "Straw Bale Casita", 
   description: "aka the Smurf House",
   image: "smurf_house.png"},
   {name: "Yurt", 
   description: "",
   image: "yurt.png"}


]

export default function App() {
  return (
    <div className="App">
      <CssBaseline>
      <ApplicationBar />
      <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Photos" element={<Photos images={images}/>}/>
        <Route path="/Video" element={<Video />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/WhatWeGrow" element={<WhatWeGrow />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer description={contact_info}/>
      </Container>
      </CssBaseline>
      </div>
  );
}
