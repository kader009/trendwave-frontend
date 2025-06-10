import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Productprops {
  name: string;
  productDescription: string;
  category: string;
  price: number | string;
  rating: number | string;
  imageUrl: string;
  stock: number | string;
  totalSales: number | string;
}

const initialState: Productprops = {
  name: '',
  productDescription: '',
  category: '',
  price: '',
  rating: '',
  imageUrl: '',
  stock: '',
  totalSales: '',
};

const createProductSlice = createSlice({
  name: 'session-create',
  initialState,
  reducers: {
    SetProductName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
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

    SetImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },

    SetStock: (state, action: PayloadAction<string>) => {
      state.stock = action.payload;
    },

    SetTotalSales: (state, action: PayloadAction<string>) => {
      state.totalSales = action.payload;
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
  SetImageUrl,
  SetTotalSales
} = createProductSlice.actions;

export default createProductSlice.reducer;
