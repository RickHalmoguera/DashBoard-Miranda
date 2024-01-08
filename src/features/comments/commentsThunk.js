import { createAsyncThunk } from "@reduxjs/toolkit";
import comments from "../../assets/JSON/comments.json";

export const getCommentsListFromAPIThunk = createAsyncThunk("comments/getCommentsFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 2000);
    });
})