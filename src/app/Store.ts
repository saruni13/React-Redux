import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
// import {apiSlice} from '../features/counter/dogs/dogs-api-slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
