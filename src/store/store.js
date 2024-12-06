import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import user from "./reducers/user";
import products from './reducers/products';
import favorites from './reducers/favorites';
import carts from './reducers/carts';
import reviews from "./reducers/reviews";
import orderSlice from "./reducers/orderSlice.js";

const rememberedKeys = ['user', 'products', 'favorites', 'carts', 'orders'];

const store = configureStore({
    reducer: rememberReducer({
        user,
        products,
        favorites,
        carts,
        reviews,
        orders: orderSlice,
    }),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
});


export default store;
