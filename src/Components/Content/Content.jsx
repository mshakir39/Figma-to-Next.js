import React from 'react';
import Item from '../Item/Item';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Actions, Invites, CareList } from '../Constants/Constants';
import { createTheme, ThemeProvider } from '@mui/material';
import Offerings from '../Offerings/offerings';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
  },
});
function Content() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='parent'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 1,
          background: '#FFFAF2',
          overflowX: 'hidden',
        }}
      >
        <Box
          component='child'
          sx={{
            paddingLeft: { sm: '28px', md: '0px' },
            width: { sm: '313px', md: '568px' },
            marginTop: '114px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h3'
            component='div'
            sx={{
              display: {
                fontWeight: '700',
                color: 'black',
                fontSize: '1.8rem',
                lineHeight: '48px',
                marginTop: '50px',
                marginBottom: '48px',
              },
            }}
          >
            Hi, [Kyle]!
          </Typography>
          {Invites.map((invite, index) => (
            <Item
              key={index}
              type='invite'
              title={invite.title}
              icon={invite.icon}
              des={invite.des}
            />
          ))}

          <Box
            component='h1'
            sx={{
              fontWeight: '700',
              fontSize: '1.1rem',
              marginTop: { xs: ' 24px', md: '48px' },
              marginBottom: '16px',
            }}
          >
            Action items
          </Box>

          {Actions.map((action, index) => (
            <Item
              key={index}
              type='action'
              title={action.title}
              icon={action.icon}
              des={action.des}
            />
          ))}

          <Box
            component='h1'
            sx={{
              fontWeight: '700',
              fontSize: '1.1rem',
              marginTop: { xs: ' 24px', md: '48px' },
              marginBottom: '16px',
            }}
          >
            Get the care you need
          </Box>

          {CareList.map((action, index) => (
            <Item
              key={index}
              type='care'
              title={action.title}
              icon={action.icon}
              des={action.des}
            />
          ))}
          <Box
            component='h1'
            sx={{
              fontWeight: '700',
              fontSize: '1.1rem',
              marginTop: { xs: ' 24px', md: '48px' },
              marginBottom: '16px',
            }}
          >
            Explore our offerings
          </Box>
          <Offerings />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Content;
