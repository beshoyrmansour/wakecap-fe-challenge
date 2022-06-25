
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';

import { useAppSelector } from '../../app/hooks';
import CustomCarousel from './components/Carousel/CustomCarousel';
import ReviewsContainer from './components/Reviews/ReviewsContainer';

const ProductDetails = () => {
  const selectedProduct = useAppSelector((state) => state.products.selectedProduct)

  return (
    <Box m={5} p={3} width={'100%'} border={'1px lightGray solid'} borderRadius={4}>{selectedProduct ?
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant='h3' color={blue[700]}> {selectedProduct.name}</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            {selectedProduct.pictures.length > 0 ? <><Typography variant='h4' color={blue[300]} mb={2}> Gallery</Typography><CustomCarousel images={[...selectedProduct.pictures]} /></> : (

              <Box mt={3}>
                <Typography variant='h3' color={'lightgray'} textAlign={'center'}>
                  No Avilable Images
                </Typography>
              </Box>)}

            <Box mt={5}>
              <Typography variant='h4' color={blue[300]}> Reviews</Typography>
              <ReviewsContainer />
            </Box>
          </Grid>
        </Grid>
      </Box>
      :
      <Box mt={3}>
        <Typography variant='h3' color={'lightgray'} textAlign={'center'}> Please Select a product</Typography>
      </Box>}
    </Box>
  )
}


export default ProductDetails; 