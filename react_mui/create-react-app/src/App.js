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

import aerial_1 from "./pages/images/aerial_1.png";
import aerial_2 from "./pages/images/aerial_2.png";
import aerial_3 from "./pages/images/aerial_3.png";
import front_porch from './pages/images/front_porch.png';
import house_garden from './pages/images/house_garden.png';
import house from './pages/images/house.png';
import morning_fountain from './pages/images/morning_fountain.png';
import smurf_house from './pages/images/smurf_house.png';
import yurt from './pages/images/yurt.png';


const theme = createTheme();


const contact_info = "info@goldennectarfarm.com"

const images = [
  {name: "The house", 
   description: "The main house has a big A-Frame living room.",
   image: house_garden},
  {name: "Front Porch", 
   description: "",
   image: front_porch},
   {name: "Aerial Photo", 
   description: "",
   image: aerial_1},
   {name: "Aerial Photo", 
   description: "",
   image: aerial_2},
   {name: "Aerial Photo", 
   description: "",
   image: aerial_3},
   {name: "Garden view of the house", 
   description: "",
   image: house},
   {name: "Fountain under the Mulberry Tree", 
   description: "We have two noisy frogs!",
   image: morning_fountain},
   {name: "Straw Bale Casita", 
   description: "aka the Smurf House",
   image: smurf_house},
   {name: "Yurt", 
   description: "",
   image: yurt}
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
