// src/features/authSelectors.ts
import { RootState } from "../../store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthSuccessMessage = (state: RootState) =>
  state.auth.successMessage;
export const selectAuthErrorMessage = (state: RootState) =>
  state.auth.errorMessage;
