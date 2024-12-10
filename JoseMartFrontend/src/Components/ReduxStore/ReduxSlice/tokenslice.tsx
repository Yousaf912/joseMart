import { createSlice } from "@reduxjs/toolkit";

const triger = createSlice({
    name:'Tokenslice',
    initialState:false,
    reducers:{
        setTriger:(state,action)=>{
           state= action.payload
            
        }
    }
})

export default triger;

export const {setTriger} = triger.actions