import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";


const store = configureStore({
    reducer:{
        cardinfo:cardSlice.reducer
    }
})

export default store;

export const {addCard} = cardSlice.actions