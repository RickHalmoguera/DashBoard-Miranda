import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";

const initialState= {
    data: [],
    status: 'idle',
    error: undefined,
}


export const UsersSlice = createSlice({
    name: "users",
    initialState:initialState,
    reducers:{
  
      
    },

    reducers:{
    
        addUser: (state,action) => {
            state.data = [action.payload,...state.data]
        },

        updateUser: (state, action) => {
            const index = state.data.findIndex(
              (user) => user.id === action.payload.id
            );
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        },

        deleteUser:(state,action)=>{
            const idToRemove= action.payload
            const index = state.data.findIndex(user=> user.id === idToRemove)
            if (index !== -1) {
                state.data.splice(index, 1);
            } else {
                console.log(`User with ID ${idToRemove} not found.`);
            }
        },

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

export const {addUser, deleteUser, updateUser} = UsersSlice.actions
export const getUsersData = (state) => state.users.data
export const getUsersStatus = (state)=> state.users.status
export const getUsersError = (state) => state.users.error