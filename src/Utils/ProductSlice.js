import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "productSlice",
    initialState : [],
    reducers : {

        addProduct : function(state,action){
            state.push(action.payload)
        },

        clearCart :  function(state,action){
            return [] 
        },




    }
})

export default productSlice.reducer
export const { addProduct, clearCart } = productSlice.actions