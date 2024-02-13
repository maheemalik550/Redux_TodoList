 import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "../slilce/user_data_slice";

export const store = configureStore({
    reducer:{
        user_data:user_data_slice
    }
})