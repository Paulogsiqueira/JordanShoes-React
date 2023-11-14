import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'login',
    initialState: {
        isLogged: false,
        freight: 0
    },
    reducers: {
        login(state) {
            return { ...state, isLogged: true }
        },
        logout(state) {
            return { ...state, isLogged: false }
        },
        calcFreight(state, value){
            return { ...state, freight: value}
        },
        resetFreight(state){
            return { ...state, freight: 0}
        },
    }
})

export const {login, logout,calcFreight,resetFreight} = slice.actions

export const selectUser = state => state.user

export default slice.reducer