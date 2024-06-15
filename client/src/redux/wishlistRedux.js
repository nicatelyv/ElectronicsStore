import { createSlice } from '@reduxjs/toolkit';

const loadWishlistState = () => {
    try {
        const serializedState = localStorage.getItem('wishlistState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveWishlistState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('wishlistState', serializedState);
    } catch {
        //
    }
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: loadWishlistState() || {
        products: [],
    },
    reducers: {
        toggleProductInWishlist: (state, action) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);

            if (existingProduct) {
                state.products = state.products.filter(product => product._id !== action.payload._id);
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            saveWishlistState(state);
        },
        removeProductFromWishlist: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);
            saveWishlistState(state);
        },
        moveProductToCart: (state, action) => {
            state.products = state.products.filter(p => p._id !== action.payload._id);
            saveWishlistState(state);
        }
    },
});

export const { toggleProductInWishlist, removeProductFromWishlist, moveProductToCart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
export { loadWishlistState, saveWishlistState };