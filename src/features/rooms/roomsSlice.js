import { createSlice } from "@reduxjs/toolkit";
import { getRoomsListFromAPIThunk } from "./roomsThunk";

const initialState= {
    data: [],
    status: 'idle',
    error: undefined,
}


export const RoomsSlice = createSlice({
    name: "rooms",
    initialState:initialState,
    reducers:{
  
      
    },

    reducers:{
    
        addRoom: (state,action) => {
            state.data = [action.payload,...state.data]
        },

        updateRoom: (state, action) => {
            const index = state.data.findIndex(
              (user) => user.id === action.payload.id
            );
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        },

        deleteRoom:(state,action)=>{
            const idToRemove= action.payload
            const index = state.data.findIndex(room=> romm.id === idToRemove)
            if (index !== -1) {
                state.data.splice(index, 1);
            } else {
                console.log(`Room with ID ${idToRemove} not found.`);
            }
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getRoomsListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        builder.addCase(getRoomsListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            state.error = action.error.message
        })
        builder.addCase(getRoomsListFromAPIThunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
});

export const {addRoom, deleteRoom, updateRoom} = RoomsSlice.actions
export const getRoomsData = (state) => state.rooms.data
export const getRoomsStatus = (state)=> state.rooms.status
export const getRoomsError = (state) => state.rooms.error