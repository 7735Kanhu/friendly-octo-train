// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuthenticated: false,
  verificationId: '',
  phoneNumber: '',
  loading: false,
  token:null,
};

export const loadAuthState = createAsyncThunk('auth/loadAuthState', async () => {
  const savedAuthState = await AsyncStorage.getItem('isAuthenticated');
  return savedAuthState === 'true';
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
      // state.isAuthenticated = true;
      state.token = action.payload;
      SecureStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      SecureStorage.removeItem('isAuthenticated');
    },
    setVerificationId: (state, action) => {
      console.log('Setting verificationId in state:', action.payload);
      state.verificationId = action.payload;
    },
    setPhoneNumbers: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAuthState.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadAuthState.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload;
      state.loading = false;
    });
    builder.addCase(loadAuthState.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { login, logout, setVerificationId, setPhoneNumbers } = authSlice.actions;

export default authSlice.reducer;
