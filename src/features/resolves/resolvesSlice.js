   import { createSlice } from "@reduxjs/toolkit";

const resolvesSlice = createSlice({
  name: "resolves",
  initialState: [],
  reducers: {
    addResolve: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addResolve } = resolvesSlice.actions;
export default resolvesSlice.reducer;
