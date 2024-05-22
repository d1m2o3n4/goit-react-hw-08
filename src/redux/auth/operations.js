import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearToken, setToken } from "../../helpers";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await axios.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) {
      return thunkApi.rejectWithValue("No token");
    }
    setToken(token);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
