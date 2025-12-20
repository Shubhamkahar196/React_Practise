import { createSlice } from "@reduxjs/toolkit";

//this is slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {      //initial state of the store 
        items: [],
    },
    reducers: {
        addItem: (state,action)=>{    //this is the reducer function
         state.items.push(action.payload);    //add item
        },
        removeItem: (state,action)=>{
            state.items.pop();      //remove item
        },   
        clearItem: (state,action)=>{
               state.items.length = 0;      //clear the item
        }
    }
})

//exporting

export const {addItem,removeItem,clearItem} = cartSlice.actions;
export default cartSlice.reducer;