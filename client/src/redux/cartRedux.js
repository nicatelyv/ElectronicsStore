import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch {
        //
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: loadState() || {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
            saveState(state);
        },
        clearBasket: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
            saveState(state);
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(product => product._id === action.payload._id);
            if (product) {
                product.quantity += 1;
                state.quantity += 1;
                state.total += product.price;
                saveState(state);
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(product => product._id === action.payload._id);
            if (product && product.quantity > 0) {
                product.quantity -= 1;
                state.quantity -= 1;
                state.total -= product.price;
                if (product.quantity === 0) {
                    state.products = state.products.filter(p => p._id !== action.payload._id);
                }
                saveState(state);
            }
        }
    },
});

export const { addProduct, clearBasket, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;