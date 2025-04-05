
import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { addItem } from "../reducer/cartSlice"

export default configureStore({
    reducer:
    {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    },

})

