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
        addCart(state, item) {
            const currentCart = [...state.cart];
            if (currentCart.find(produto => produto.name === item.name)) {
                const cartPosition = produtos.findIndex(produto => produto.name === item.name);
                currentCart[cartPosition].quantity += 1;
                return { ...state, cart: currentCart }
            } else {
                const newProduct = item;
                newProduct.quantity = 1;
                const cartAfterAdd = [...state.cart, newProduct];
                return { ...state, cart: cartAfterAdd };
            }
        },
        removeCart(state, item) {
            const currentCart = [...state.cart];
            const cartPosition = produtos.findIndex(produto => produto.name === item.name);
            if(currentCart[cartPosition].quantity > 1){
                currentCart[cartPosition].quantity -= 1;
                return { ...state, cart: currentCart }
            }else{
                currentCart.splice(cartPosition, 1);
                return { ...state, cart: currentCart }
            }
        }
    }
})

export const { login, logout, calcFreight, resetFreight, setAddress, resetAddress } = slice.actions

export const selectUser = state => state.user

export default slice.reducer