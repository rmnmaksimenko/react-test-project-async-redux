import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const tasksSliceReducers = {
  [fetchTasks.pending](state, action) {
    state.isLoading = true;
  },
  [fetchTasks.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  [fetchTasks.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  extraReducers: tasksSliceReducers,
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
