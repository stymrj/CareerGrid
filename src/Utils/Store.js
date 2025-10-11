import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './UserSlice'
import jobSliceReducer from './JobSlice'

const store = configureStore({
    reducer : {
        user : userSliceReducer,
        jobs : jobSliceReducer
    }
})

export default store