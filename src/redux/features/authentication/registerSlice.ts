import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Register {
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
}

const initialState: Register = {
  name: '',
  email: '',
  password: '',
  image: '',
  role: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    SetName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    SetEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    SetPhotoUrl: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },

    SetPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

    SetRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { SetName, SetEmail, SetPhotoUrl, SetPassword, SetRole } =
  registerSlice.actions;

export default registerSlice.reducer;