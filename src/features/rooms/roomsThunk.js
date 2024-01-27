import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../../assets/JSON/roomsMiranda.json";

export const getRoomsListFromAPIThunk = createAsyncThunk("users/getRoomsFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms);
        }, 2000);
    });
})