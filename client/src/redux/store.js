import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addProduct } from './cartRedux';
import wishlistReducer, { moveProductToCart, loadWishlistState, saveWishlistState } from './wishlistRedux'; 

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    saveWishlistState(state.wishlist);
});

const enhancedMoveProductToCart = (product) => (dispatch, getState) => {
    dispatch(addProduct({ ...product, quantity: product.quantity || 1 }));
    dispatch(moveProductToCart({ _id: product._id }));
};

export { enhancedMoveProductToCart };
export default store;
