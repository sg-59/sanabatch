import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:"userInfo",
    initialState:{
        userData:null
    },

    reducers:{
        addtoUserInfo:(state,action)=>{
            console.log("action valus...................",action);
            
state.userData=action.payload
        }
    }
})

export const {addtoUserInfo}=user.actions
export default user.reducer