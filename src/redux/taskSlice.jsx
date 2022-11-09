import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], isLoading: false, error: null };

const taskSliceReducers = {
  fetchingInProgress(state) {
    state.isLoading = true;
  },
  fetchingSuccess(state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  fetchingError(state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },
};

const tasksSlice = {
  name: 'tasks',
  initialState: initialState,
  reducers: taskSliceReducers,
};

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.reducers;
