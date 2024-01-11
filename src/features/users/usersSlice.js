import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";

const initialState= {
    data: [],
    modalId:undefined,
    status: 'idle',
    error: undefined
}


export const CommentSlice = createSlice({
    name: "comments",
    initialState:initialState,
    reducers:{
       
        changeCommentStatus: (state,action)=>{
            const commentToArchive = action.payload
            const updatedStatus = state.data.map((item)=> item._id === commentToArchive ? {...item,is_archived:!item.is_archived} : item) 
            state.data = updatedStatus 
        },
       setModalCommentId: (state,action) => {
        console.log(action.payload)
        state.modalId = action.payload
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

export const {changeCommentStatus,setModalCommentId} = CommentSlice.actions
export const getUsersById = (state) => state.comments.data.filter((comment) => comment.id === state.comments.modalId)
export const getUsersId = (state)  => state.comments.modalId
export const getUsersData = (state) => state.comments.data;
export const getUsersStatus = (state)=> state.comments.status;
export const getUsersError = (state) => state.comments.error;