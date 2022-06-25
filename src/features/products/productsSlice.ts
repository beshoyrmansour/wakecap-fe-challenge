import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADIND_STATUS, Products } from '../../models/products';

export interface ProductsState {
  products: Products[]; // array of products objects  [{id: 1, name: 'product 1', reviews: [{review: 'review 1', score: 1}]}, {id: 2, name: 'product 2', reviews: [{review: 'review 2', score: 2}]}]
  selectedProduct: Products | null; // selected product object
  loadingProductsStstus: LOADIND_STATUS;
  loadingProductDetailsStstus: LOADIND_STATUS;
}

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loadingProductsStstus: LOADIND_STATUS.IDLE,
  loadingProductDetailsStstus: LOADIND_STATUS.IDLE,

};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {


    const response = await fetch('http://my-json-server.typicode.com/WhatsLab/code-challenge/products');
    return await response.json()
  }
);
export const fetchProductDetailsAsync = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId: number) => {
    const response = await fetch(`https://my-json-server.typicode.com/WhatsLab/code-challenge/productDetails/${productId}`);
    return await response.json()
  }
);

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state: ProductsState) => {
        state.loadingProductsStstus = LOADIND_STATUS.LOADING;
      })
      .addCase(fetchProductsAsync.fulfilled, (state: ProductsState, action: PayloadAction<Products[]>) => {
        state.loadingProductsStstus = LOADIND_STATUS.IDLE;
        state.products = [...action.payload];
      })
      .addCase(fetchProductsAsync.rejected, (state: ProductsState) => {
        state.loadingProductsStstus = LOADIND_STATUS.FAILED;
      })
      .addCase(fetchProductDetailsAsync.pending, (state: ProductsState) => {
        state.loadingProductDetailsStstus = LOADIND_STATUS.LOADING;
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state: ProductsState, action: PayloadAction<Products>) => {
        state.loadingProductDetailsStstus = LOADIND_STATUS.IDLE;
        state.selectedProduct = { ...action.payload };
      })
      .addCase(fetchProductDetailsAsync.rejected, (state: ProductsState) => {
        state.loadingProductDetailsStstus = LOADIND_STATUS.FAILED;
      });
  },
  // middleware: [thunkMiddleware],
});

// export const { fetchProductsAsync, fetchProductDetailsAsync } = ProductsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default ProductsSlice.reducer;
