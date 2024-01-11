import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";

const initialState= {
    data: [],
    status: 'idle',
    error: undefined
}


export const UsersSlice = createSlice({
    name: "users",
    initialState:initialState,
    reducers:{
  
      
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
           

        })
        builder.addCase(getUsersListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(action)
            state.error = action.error.message
        })
        builder.addCase(getUsersListFromAPIThunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
});


export const getUsersById = (state) => state.users.data.filter((comment) => comment.id === state.users.modalId)
export const getUsersId = (state)  => state.users.modalId
export const getUsersData = (state) => state.users.data;
export const getUsersStatus = (state)=> state.users.status;
export const getUsersError = (state) => state.users.error;