import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import user from "./reducers/user";
import products from './reducers/products'
import favorites from './reducers/favorites'

const rememberedKeys = [ 'user', 'products', 'favorites' ]

const store = configureStore({
    reducer: rememberReducer({
        user,
        products,
        favorites
    }),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage, // or window.sessionStorage, or your own custom storage driver
            rememberedKeys
        )
    )
})

export default store