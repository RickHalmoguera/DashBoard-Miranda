import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../features/theme/themeSlice"
import { CommentSlice } from "../features/comments/commentsSlice"
import { UsersSlice } from "../features/users/usersSlice"
import { RoomsSlice } from "../features/rooms/roomsSlice"
import { BookingsSlice } from "../features/bookings/bookingsSlice"




export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    comments: CommentSlice.reducer,
    users: UsersSlice.reducer,
    rooms: RoomsSlice.reducer,
    bookings: BookingsSlice.reducer
  },
})


