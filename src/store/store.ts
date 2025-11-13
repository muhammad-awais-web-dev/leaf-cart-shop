import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import wishlistReducer from './WishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
