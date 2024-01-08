import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../features/theme/themeSlice"
import { CommentSlice } from "../features/comments/commentsSlice"




export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    comments: CommentSlice.reducer,
  },
})


