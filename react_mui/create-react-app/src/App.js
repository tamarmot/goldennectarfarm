import { createTheme, ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Golden Nectar Farm" sections={sections} social={social} />      
        <Blog/>
        </Container>
      <Footer
        // title="Footer"
        // description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
