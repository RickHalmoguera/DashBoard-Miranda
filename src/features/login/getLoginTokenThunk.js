import { createAsyncThunk } from "@reduxjs/toolkit"
import fetch from 'cross-fetch'


export const getLoginTokenThunk = createAsyncThunk("login/getLoginToken", async (bodydata)=>{
    try{
        const response = await fetch("https://bxi3h8lpnj.execute-api.eu-west-3.amazonaws.com/dev/login",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: bodydata
        })

        if(!response.ok){
            throw new RequestError(response.status,"")
        }
        const json = await response.json()
        localStorage.setItem("token", json.token);
        return json
    } catch(e){
        console.error("Error in getLoginTokenThunk:", e)
        return rejectWithValue(e.message || "An error occurred")
    }

})