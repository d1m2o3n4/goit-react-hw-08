import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    email: "",
    name: "",
  },
  token: null,
  isLoggedIn: false,
  error: false,
  isLoading: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUserName: (state) => state.user.name,
    selectToken: (state) => state.token,
    selectLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectLoggedIn,
  selectToken,
  selectUserName,
  selectIsRefreshing,
} = authSlice.selectors;
