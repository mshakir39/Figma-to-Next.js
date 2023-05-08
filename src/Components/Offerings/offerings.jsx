import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Offerings } from '../Constants/Constants';

const Offering = () => {
  const [slide, setSlide] = useState('0');
  useEffect(() => {
    console.log('slide', slide);
  }, [slide]);
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
          src={Offerings[Number(slide)].img}
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
            {Offerings[Number(slide)].des}
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
          component='a'
          id='0'
          onClick={() => {
            setSlide('0');
          }}
          sx={{
            height: '16px',
            width: '16px',
            background: slide === '0' ? '#00872B' : '#CCCCCC',
            borderRadius: '50%',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        ></Box>
        <Box
          id='1'
          component='a'
          onClick={() => {
            setSlide('1');
          }}
          sx={{
            height: '16px',
            width: '16px',
            background: slide === '1' ? '#00872B' : '#CCCCCC',
            borderRadius: '50%',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        ></Box>
        <Box
          id='2'
          component='a'
          onClick={() => {
            setSlide('2');
          }}
          sx={{
            height: '16px',
            width: '16px',
            background: slide === '2' ? '#00872B' : '#CCCCCC',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Offering;
