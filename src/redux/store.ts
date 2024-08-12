// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice";
import faqReducer from "./features/faq/faqSlice";
import skillSlice from "./features/skill/skillSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    faq: faqReducer,
    skill: skillSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
