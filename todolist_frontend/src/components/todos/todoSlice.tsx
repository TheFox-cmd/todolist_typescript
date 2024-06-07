import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../data/interface';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
