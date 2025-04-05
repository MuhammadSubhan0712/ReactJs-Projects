import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = (state.items = state.items.find(
        (item) => item.id === action.payload
      ));
      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.total += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
