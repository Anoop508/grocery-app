import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cartlist',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToCart(state, action){
            let tempData = state.data;
            isItemPresent=false
            tempData.map((item)=>{
                if(item.id === action.payload.id){
                    isItemPresent=true;
                    item.qty= item.qty + 1;
                }
            })
            if(!isItemPresent){
                tempData.push(action.payload)
            }
            state.data=tempData
        },
        reduceItemToCart(state,action){
            let tempData = state.data;
            tempData.map(item=>{
                if(item.id === action.payload.id){
                    item.qty= item.qty -1;
                }
            })
            state.data=tempData;
        },
        removeItemToCart(state, action){
            let tempData = state.data;
            tempData.splice(action.payload,1);

            state.data = tempData
        }
        
    }
})

export const {addItemToCart, reduceItemToCart, removeItemToCart} = CartSlice.actions;
export default CartSlice.reducer;