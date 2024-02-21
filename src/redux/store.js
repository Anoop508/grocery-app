import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slices/ProductSlice'
import WishlistReducer from './slices/WishlistSlice';
import CartListReducer from "./slices/CartSlice";

export const store = configureStore({
    reducer:{
        product: ProductReducer,
        wishlist: WishlistReducer,
        cartlist: CartListReducer,
    }
})