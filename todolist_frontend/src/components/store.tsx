import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/todoSlice'; 
import authReducer from './login/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

export type TodoRootState = ReturnType<typeof store.getState>;
export type TodoAppDispatch = typeof store.dispatch;
export type AuthRootState = ReturnType<typeof store.getState>;
export type AuthAppDispatch = typeof store.dispatch;
export default store;
