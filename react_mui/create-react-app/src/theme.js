import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#66603b',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#c7be8d',
//      paper: '#e7dead',
      paper: '#c7be8d',
    },
  },
  typography: {
    fontFamily: [
      'Droid Serif',
      'Georgia'
    ].join(','),
  }
});

// import { ThemeOptions } from '@mui/material/styles';

// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#66603b',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#c7be8d',
//       paper: '#e7dead',
//     },
//   },
// };

export default theme;
