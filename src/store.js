import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

function loadCart() {
  try {
    const saved = localStorage.getItem('paradise-nursery-cart');
    const parsed = saved ? JSON.parse(saved) : null;
    if (parsed && Array.isArray(parsed.items)) return { cart: parsed };
  } catch {
    // A malformed or unavailable storage entry should not stop the app.
  }
  return undefined;
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadCart(),
});

store.subscribe(() => {
  try {
    localStorage.setItem('paradise-nursery-cart', JSON.stringify(store.getState().cart));
  } catch {
    // The app still functions when local storage is disabled.
  }
});
