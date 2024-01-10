import { createAsyncThunk } from "@reduxjs/toolkit"

const token = localStorage.getItem("token")
export const getCommentsListFromAPIThunk = createAsyncThunk("comments/getCommentsFromApi", async ()=>{
    try{
        const response = await fetch("https://bxi3h8lpnj.execute-api.eu-west-3.amazonaws.com/dev/contact",{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            method: "GET",
        })

        if(!response.ok){
            throw new RequestError(response.status,"")
        }
        const json = await response.json()
        console.log(json)
        return json
    } catch(e){
        console.error("Error in getLoginTokenThunk:", e)
        return rejectWithValue(e.message || "An error occurred")
    }

})