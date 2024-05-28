// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuthenticated: false,
  verificationId: '',
  phoneNumber: '',
  loading: false,
};

export const loadAuthState = createAsyncThunk('auth/loadAuthState', async () => {
  const savedAuthState = await AsyncStorage.getItem('isAuthenticated');
  return savedAuthState === 'true';
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      AsyncStorage.setItem('isAuthenticated', 'true');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      AsyncStorage.removeItem('isAuthenticated');
    },
    setVerificationId: (state, action) => {
      console.log('Setting verificationId in state:', action.payload);
      state.verificationId = action.payload;
    },
    setPhoneNumber: (state, action) => {
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

export const { login, logout, setVerificationId, setPhoneNumber } = authSlice.actions;

export default authSlice.reducer;
