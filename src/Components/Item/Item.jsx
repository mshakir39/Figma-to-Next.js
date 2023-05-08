import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function Item({ type, title, icon, des }) {
  return (
    <Box
      sx={{
        height: 'fit-content',
        width: { xs: '312px', sm: '312px', md: '568px' },
        background:
          type === 'invite'
            ? '#00210B'
            : type === 'action'
            ? '#FFEAE3'
            : '#FFFFFF',
        borderRadius: '16px',
        padding: {
          xs: '16px',
          md: '24px',
          lg: '24px',
        },

        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '12px',
      }}
    >
      <a href='#'style={{display:"flex"}}>
        {type === 'invite' ? (
          <Avatar
            alt='Remy Sharp'
            src={icon}
            sx={{
              marginRight: {
                xs: '16px',
                sm: '24px',
                md: '24px',
              },
            }}
          />
        ) : (
          <Box
            component='div'
            sx={{
              backgroundColor: type === 'action' ? '#E38869' : '#8ACDA0',
              marginRight: {
                xs: '16px',
                sm: '24px',
                md: '24px',
              },
              height: '48px',
              width: '48px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={icon} alt='SVG as an image' width={24} height={24} />
          </Box>
        )}

        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: type === 'invite' ? 'white' : 'black',
            width: {
              xs: type === 'action' ? '188px' : '184px',
              md: type === 'action' ? '400px' : '419px',
            },
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
              fontWeight: {
                xs: '600',
                md: '600',
                lg: '600',
              },
              lineHeight: {
                xs: '16px',
                md: '24px',
                lg: '24px',
              },

              width: {
                xs: '158px',
                md: type === 'care' ? '400px' : '354px',
                lg: type === 'care' ? '400px' : '354px',
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='h3'
            component='div'
            sx={{
              fontSize: {
                xs: '0.8rem',
                sm: '0.9rem',
                md: '0.9rem',
              },
              fontWeight: '400',
              lineHeight: '20px',
              marginTop: '2px',
            }}
          >
            {des}
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '39%',
            left: { xs: '89%', md: '93%', lg: '93%' },
          }}
        >
          <Image
            src={type === 'invite' ? '/arrowRight.svg' : '/arrowRightBlack.svg'}
            alt='SVG as an image'
            width={16}
            height={20}
          />
        </Box>
      </a>
    </Box>
  );
}

export default Item;
