import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Products } from '../../models/products';
import ProductCard from './components/products/ProductCard';
import { fetchProductDetailsAsync } from './productsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const ProductsList = () => {
  const products = useAppSelector((state) => state.products.products)
    const dispatch = useAppDispatch();

    const onSelectProduct = (product:Products) => { dispatch(fetchProductDetailsAsync(product.id)) }


   return (
    <Box display={'flex'} justifyContent={'flex-start'} alignContent={'start'} overflow={'auto'} mx={2}>
      {products.length > 0 ? products.map((product: Products) => (<ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />)) : <Box mt={3}>
        <Typography variant='h5' color={'lightgray'} textAlign={'center'}>
          Loading products ...</Typography></Box>}
    </Box >)
}

export default ProductsList