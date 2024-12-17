import {createSlice} from '@reduxjs/toolkit'


const user=createSlice({
    name:"userInfo",
    initialState:{
        userData:null
    },

reducers:{
    addtoLoginInfo:(state,action)=>{
state.userData=action.payload
    },
    removeData:(state,action)=>{
state.userData=null
    }
}
})

export const {addtoLoginInfo,removeData}=user.actions
export default user.reducer