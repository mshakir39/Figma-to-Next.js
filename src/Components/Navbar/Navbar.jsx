import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Avatar from '@mui/material/Avatar';
import Content from '../Content/Content';
import { navItems } from '../Constants/Constants';
const drawerWidth = 240;

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} id='sa'>
      <Typography variant='h6' sx={{ my: 2 }}>
        ZEALTHY
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          paddingLeft: {
            sm: '56px',
          },
          background: 'white',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: 'white',

            paddingLeft: {
              sm: '0px',
            },
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={{}}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={{}}
            sx={{
              mr: 2,
              display: { sm: 'none', xs: 'none', md: 'block' },
              paddingTop: {
                md: '18px',
              },
              paddingRight: {
                md: '36px',
              },
              color: 'black',
            }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              display: {
                sm: 'block',
                md: 'none',
                fontWeight: '900',
                color: 'black',
              },
            }}
          >
            ZEALTHY
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
                fontWeight: '900',
                color: 'black',
              },
            }}
          >
            ZEALTHY
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: 'Inter',
                  color: '#1B1B1B',
                  fontSize: '1rem',
                  fontWeight: '500',
                  lineHeight: '24px',
                }}
              >
                {item}
              </Button>
            ))}
            <Avatar
              alt='Remy Sharp'
              src='/myProfile.jpg'
              sx={{
                marginRight: {
                  md: '36px',
                },
                marginLeft: {
                  md: '56px',
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ background: 'white' }}>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ display: 'flex', width: '100%' }}>
        <Toolbar
          sx={{
            paddingLeft: {
              sm: '0px',
            },
            display: {
              sm: 'contents',
            },
          }}
        />
        <Content />
      </Box>
    </Box>
  );
}
