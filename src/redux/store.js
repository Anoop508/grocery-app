import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slices/ProductSlice'
import WishlistReducer from './slices/WishlistSlice';

export const store = configureStore({
    reducer:{
        product: ProductReducer,
        wishlist: WishlistReducer
    }
})