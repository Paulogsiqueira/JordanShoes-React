import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/useSlicer'

export default configureStore({
    reducer: {
        user: userReducer,
    },
});