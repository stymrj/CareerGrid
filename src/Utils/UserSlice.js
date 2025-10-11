import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name : "userSlice",
    initialState : [],    
    reducers : {

        addUser : (state,action)=>{
            state.push(action.payload) //initially null h
        },

        logOutUser : (state,action)=>{
            return []
        },

        logInUser : (state,action)=>{
            return action.payload //user data store karega
        }


    }
})


export default UserSlice.reducer
export const { addUser, logOutUser, logInUser } = UserSlice.actions

