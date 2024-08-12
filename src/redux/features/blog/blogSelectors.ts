import { RootState } from "../../store";

export const selectBlogPosts = (state: RootState) => state.blog.posts;
export const selectBlogPostDetails = (state: RootState) => state.blog.selectedPost;
export const selectBlogStatus = (state: RootState) => state.blog.status;
export const selectBlogError = (state: RootState) => state.blog.error;
