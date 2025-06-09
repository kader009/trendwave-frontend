import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Productprops {
  productName: string;
  productDescription: string;
  category: string;
  price: number | string;
  rating: number | string;
  imageUrl: string;
  stock: number | string;
}

const initialState: Productprops = {
  productName: '',
  productDescription: '',
  category: '',
  price: '',
  rating: '',
  imageUrl: '',
  stock: '',
};

const createProductSlice = createSlice({
  name: 'session-create',
  initialState,
  reducers: {
    SetProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },

    SetproductDescription: (state, action: PayloadAction<string>) => {
      state.productDescription = action.payload;
    },

    SetCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    SetPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },

    SetRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },

    SetStock: (state, action: PayloadAction<string>) => {
      state.stock = action.payload;
    },
  },
});

export const {
  SetCategory,
  SetPrice,
  SetProductName,
  SetRating,
  SetStock,
  SetproductDescription,
} = createProductSlice.actions;

export default createProductSlice.reducer;
