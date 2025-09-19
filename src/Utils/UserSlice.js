import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name : "userSlice",
    initialState : null,
    reducers : {

        addUser : (state,action)=>{
            return action.payload //initially null h
        },

        logOutUser : (state,action)=>{
            return null
        },

        logInUser : (state,action)=>{
            return action.payload //user data store karega
        }


    }
})

export default UserSlice.reducer
export const {addUser, logOutUser, logInUser } = UserSlice.actions