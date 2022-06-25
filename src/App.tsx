import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import './App.css';
import './App.css';
import ProductsList from './features/products/ProductsList';
import ProductDetails from './features/products/ProductDetails';
import { fetchProductsAsync } from './features/products/productsSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { LOADIND_STATUS } from './models/products';

function App() {
  const loadingProductsStstus = useAppSelector((state) => state.products.loadingProductsStstus)
  const loadingProductDetailsStstus = useAppSelector((state) => state.products.loadingProductDetailsStstus)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch]);
  return (
    <div className="App">
      {loadingProductsStstus === LOADIND_STATUS.LOADING ?
        <Box width={'100%'}
          height={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <CircularProgress />
        </Box> :
        <>
          <Box
            mt={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <ProductsList />
          </Box>
          <Box
            minHeight={300}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {loadingProductDetailsStstus === LOADIND_STATUS.LOADING ?
              <Box width={'100%'}
                height={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <CircularProgress />
              </Box> :
              <ProductDetails />}
          </Box>
        </>}
    </div>
  );
}

export default App;
