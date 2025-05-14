import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "./AuthorSlice";


const store = configureStore({
    reducer:{
        authors:authorSlice.reducer
    }
})

export default store;

export const {updateAuthor} = authorSlice.actions