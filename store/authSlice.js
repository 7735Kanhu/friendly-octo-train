// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  verificationId: '',
  phoneNumber: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setVerificationId: (state, action) => {
    console.log('Setting verificationId in state:', action.payload);
      state.verificationId = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setVerificationId, setPhoneNumber } = authSlice.actions;

export default authSlice.reducer;
