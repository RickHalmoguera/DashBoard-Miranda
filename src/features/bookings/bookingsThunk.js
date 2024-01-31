import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from "../../assets/JSON/bookingsMiranda.json";

export const getBookingsListFromAPIThunk = createAsyncThunk("comments/getBookingsFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bookings);
        }, 2000);
    });
})