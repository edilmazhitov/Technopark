import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import products from './reducers/products'

export const store = configureStore({
    reducer: {
        user,
        products
    }
})