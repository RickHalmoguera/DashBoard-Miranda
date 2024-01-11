import { createAsyncThunk } from "@reduxjs/toolkit"

const token = localStorage.getItem("token")
export const getUsersListFromAPIThunk = createAsyncThunk("users/getUsersFromApi", async ()=>{
    try{
        const response = await fetch("https://bxi3h8lpnj.execute-api.eu-west-3.amazonaws.com/dev/users",{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            method: "GET",
        })

        if(!response.ok){
            throw new Error(response.status,"")
        }
        const json = await response.json()
        return json
    } catch(e){
        console.error("Error in getLoginTokenThunk:", e)
        return rejectWithValue(e.message || "An error occurred")
    }

})

