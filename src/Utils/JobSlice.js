import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name : 'JobSlice',
    initialState : [],
    reducers : {

        addJob : function(state,actions){
             state.push(actions.payload)
        }
    }
})

export default jobSlice.reducer
export const{ addJob } = jobSlice.actions