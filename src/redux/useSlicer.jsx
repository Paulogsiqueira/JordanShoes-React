import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'login',
    initialState: {
        isLogged: false,
        freight: 0,
        address: {},
        cart: [],
    },
    reducers: {
        login(state) {
            return { ...state, isLogged: true }
        },
        logout(state) {
            return { ...state, isLogged: false }
        },
        calcFreight(state, value) {
            return { ...state, freight: value }
        },
        resetFreight(state) {
            return { ...state, freight: 0 }
        },
        setAddress(state, address) {
            return { ...state, address: address }
        },
        resetAddress(state) {
            return { ...state, address: {} }
        },
        addCart(state, newItem) {
            const { cart } = state;
            const existingItemIndex = cart.findIndex(item => item.payload.name === newItem.payload.name);

            if (existingItemIndex !== -1) {
                const updatedCart = cart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return { ...state, cart: updatedCart };
            } else {
                const newItemWithQuantity = { ...newItem, quantity: 1 };
                const newCart = [...cart, newItemWithQuantity];
                return { ...state, cart: newCart };
            }
        },
        removeCart(state, item) {
            const { cart } = state;
            const cartPosition = cart.findIndex((produto) => produto.payload.name === item.payload.name);

            const updatedCart = [...cart];
            const currentItem = updatedCart[cartPosition];

            if (currentItem && currentItem.quantity > 1) {
                const updatedCart = cart.map((item, index) =>
                    index === cartPosition
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                return { ...state, cart: updatedCart };
            } else {
                updatedCart.splice(cartPosition, 1);
            }

            return { ...state, cart: updatedCart };
        },
        deleteCart(state, item) {
            const { cart } = state;
            const cartPosition = cart.findIndex((produto) => produto.payload.name === item.payload.name);
            const updatedCart = [...cart];
            updatedCart.splice(cartPosition, 1);
            return { ...state, cart: updatedCart };

        },
        resetCart(state) {
            return { ...state, cart: [] }
        }
    }
})

export const { login, logout, calcFreight, resetFreight, setAddress, resetAddress, addCart, removeCart,deleteCart,resetCart } = slice.actions

export const selectUser = state => state.user

export default slice.reducer