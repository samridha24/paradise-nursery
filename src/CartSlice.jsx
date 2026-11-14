import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;
