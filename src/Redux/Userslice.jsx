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
        },
        removeuserInfo:(state,action)=>{
            state.userData=null
        }
    }
})

export const {addtoUserInfo,removeuserInfo}=user.actions
export default user.reducer


