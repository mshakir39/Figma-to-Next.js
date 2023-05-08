import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function offerings() {
  return (
    <>
      <Box
        component='div'
        sx={{
          width: {
            xs: '312px',
            sm: '568px',
            md: '568px',
          },
          height: {
            xs: '219px',
            sm: '432px',
            md: '432px',
          },
          position: 'relative',
        }}
      >
        <Image
          src='/offer.svg'
          alt='SVG as an image'
          width={0}
          height={0}
          layout='fill'
        />
        <Box
          component='div'
          sx={{
            width: {
              xs: '312px',
              sm: '568px',
              md: '568px',
            },
            height: {
              xs: '62px',
              sm: '114px',
              md: '114px',
            },
            background: 'rgba(0, 33, 11, 0.8)',
            position: 'absolute',
            bottom: '4%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          <Typography
            variant='h3'
            component='div'
            sx={{
              fontSize: {
                xs: '0.8rem',
                sm: '1rem',
                md: '1rem',
              },
              width: '472px',
              height: '48px',
              fontWeight: '400',
              lineHeight: '24px',
              color: 'white',
            }}
          >
            Get birth control online through Zealthy, all from the comfort of
            your home.
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: '39%',
              left: { xs: '89%', md: '93%', lg: '93%' },
            }}
          >
            <Image
              src='/arrowRight.svg'
              alt='SVG as an image'
              width={16}
              height={20}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '16px',
          marginBottom: '200px',
        }}
      >
        <Box
          component='div'
          sx={{
            height: '16px',
            width: '16px',
            background: '#00872B',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        ></Box>
        <Box
          component='div'
          sx={{
            height: '16px',
            width: '16px',
            background: '#CCCCCC',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        ></Box>
        <Box
          component='div'
          sx={{
            height: '16px',
            width: '16px',
            background: '#CCCCCC',
            borderRadius: '50%',
          }}
        ></Box>
      </Box>
    </>
  );
}

export default offerings;
