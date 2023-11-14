import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'login',
    initialState: {
        isLogged: false,
    },
    reducers: {
        login(state) {
            return { ...state, isLogged: true }
        },
        logout(state) {
            return { ...state, isLogged: false }
        }
    }
})

export const {login, logout} = slice.actions

export const selectUser = state => state.user

export default slice.reducer