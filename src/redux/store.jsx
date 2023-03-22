import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/dataReducer';
import { otpReducer } from './reducers/otpReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    otp: otpReducer
  },
});

export const server = "https://digilabs-render-rhl3.vercel.app/api/v1"

export default store;
