import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../data/interface';

const initialState: AuthState = {
  token: localStorage.getItem('token') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
      
      // * Clear token for localStorage
      localStorage.clear();
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
