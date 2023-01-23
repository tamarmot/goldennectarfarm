import { AppBar, Button,  Divider,  Drawer, IconButton,  List,  ListItem,  ListItemText,  Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

const pages = [{name:"Home", path: ""}, 
               {name:"Photos", path: "Photos"},
               {name:"Video", path: "Video"},
               {name:"About the Farm", path: "About"},
               {name:"What We Grow", path: "WhatWeGrow"},
               {name: "Contact Us", path: "Contact"}];

const DrawerHeader = styled('div')((({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
})))

const drawerWidth = 241;

function ApplicationBar() {
    const theme = useTheme()
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true)
    }
    
    const handleDrawerClose = () => {
      setOpen(false)
    }



  return (
    <div className="App">
     <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                >  
                    Golden Nectar Farm
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={`/${page.path}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
            </Toolbar>
        </AppBar>
     </Box>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            },
          }}
          variant="temporary"
          anchor="left"
          onClose={() => {
            handleDrawerClose()
          }}
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon/>
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((page) => {
              return(
                <ListItem button
                component={Link}
                to={`/${page.path}`}
                key={page.name}>
                  <ListItemText primary={page.name}/>
                </ListItem>
              )
            })}
          </List>
        </Drawer>

    </div>
  );
}

export default ApplicationBar;
