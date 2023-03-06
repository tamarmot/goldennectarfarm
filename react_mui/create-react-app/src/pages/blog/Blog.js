import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import SubHeader from './SubHeader';

import morning_fountain from '../images/morning_fountain.png';
import front_porch from '../images/front_porch.png';
import smurf_house from '../images/smurf_house.png';

const mainFeaturedPost = {
  title: 'A sustainable biodiverse sanctuary.',
  description:
    "Using the principles of permaculture and regenerative farming, Golden Nectar Farm has more than 160 fruit trees, table grapes and kiwi fruit; berries and an ample vegetable garden.",
  image: morning_fountain,
  imageText: 'Fountain',
};

const featuredPosts = [
  {
    title: 'Just getting set up!',
    description:
      'Don and Tamar recently purchased the farm!  We are getting our hands dirty and getting to know the land and the plants.',
    image: front_porch,
    imageLabel: 'Front Porch',
  },
  {
    title: 'Explore our new website.',
    description:
    'We will be adding photos and updates!',
    image: smurf_house,
    imageLabel: 'Straw Bale Casita',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    // { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/goldennectarfarm/' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/GoldenNectar'}
  ]
};

const theme = createTheme();

export default function Blog() {
  return (
    /* -18px only if subheader */
        <main style={{marginTop:"-18px"}}> 
          <SubHeader social={sidebar.social} />
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
  );
}