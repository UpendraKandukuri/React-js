import { createSlice } from "@reduxjs/toolkit";
import cardinfo from './CardInfo.json'


 const cardSlice = createSlice({
    name:'wallet',
    initialState:cardinfo,
    reducers:{
        addCard:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export default cardSlice;