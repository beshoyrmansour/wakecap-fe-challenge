import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ReviewCard from './ReviewCard';
import { useAppSelector } from '../../../../app/hooks';
import { Products } from '../../../../models/products';

const ReviewsContainer = () => {
  const selectedProduct = useAppSelector((state) => state.products.selectedProduct) as Products;

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
      {selectedProduct.reviews.length > 0 ? selectedProduct.reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      )) : <Box mt={3}>
        <Typography variant='h3' color={'lightgray'} textAlign={'center'}> No Reviews yet</Typography>
      </Box>

      }
    </List>
  )
}

export default ReviewsContainer