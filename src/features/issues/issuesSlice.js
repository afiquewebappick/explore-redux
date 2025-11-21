import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIssues } from './issuesAPI';

const initialState = {
  issues: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchIssues = createAsyncThunk('issues/fetchIssues', async () => {
  const issues = await getIssues();
  return issues;
});

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.issues = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error?.message;
      });
  },
});

export default issuesSlice.reducer;
