import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user.js";


export const store = configureStore({
    reducer: {
        user
    }
})