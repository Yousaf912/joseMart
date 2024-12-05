import { createSlice } from "@reduxjs/toolkit";

const TokenSLice = createSlice({
    name:'Tokenslice',
    initialState:{
        token:null
    },
    reducers:{
        setToken:(state,action)=>{
           state.token= action.payload
            
        }
    }
})

export default TokenSLice;

export const {setToken} = TokenSLice.actions