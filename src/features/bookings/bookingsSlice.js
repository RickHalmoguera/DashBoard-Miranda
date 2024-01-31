import { createSlice } from "@reduxjs/toolkit";
import { getBookingsListFromAPIThunk } from "./bookingsThunk";

const initialState= {
    data: [],
    modalId:undefined,
    status: 'idle',
    error: undefined
}


export const BookingsSlice = createSlice({
    name: "bookings",
    initialState:initialState,
    reducers:{
       
    },
    extraReducers: (builder) => {
        builder.addCase(getBookingsListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        builder.addCase(getBookingsListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(action)
            state.error = action.error.message
        })
        builder.addCase(getBookingsListFromAPIThunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
});

export const getBookingId = (state)  => state.bookings.modalId
export const getBookingsData = (state) => state.bookings.data;
export const getBookingsStatus = (state)=> state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;