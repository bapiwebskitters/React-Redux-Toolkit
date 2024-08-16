// src/features/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, User } from "../../../types/Auth";
import { authService } from "../../../services/authService";
import { NavigateFunction } from "react-router-dom";

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token"),
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

// Login action
export const login = createAsyncThunk<
  { user: User; token: string },
  { email: string; password: string; navigate: NavigateFunction },
  { rejectValue: string }
>("auth/login", async (loginData, { rejectWithValue }) => {
  try {
    const data = await authService.login(loginData);
    return data;
  } catch (error) {
    const err = error as Error;
    return rejectWithValue(err.message);
  }
});

// Logout action
export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.successMessage = "Login successful!";
        state.errorMessage = null;
        // Here you should handle redirection
        if (action.meta.arg.navigate) {
          action.meta.arg.navigate("/"); // Redirect to home page
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.successMessage = null;
        state.errorMessage = action.payload || "Failed to login.";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.successMessage = null;
        state.errorMessage = null;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
