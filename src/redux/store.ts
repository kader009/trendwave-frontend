import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './api/baseApi';
import registerReducer from '../redux/features/authentication/registerSlice';
import loginReducer from '../redux/features/authentication/loginSlice';
import userReducer from '../redux/features/authentication/userSlice';
import productReducer from '../redux/features/productSlice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
  product:productReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
