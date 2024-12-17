import axios from 'axios'
import { addtoLoginInfo } from './Redux/UserSlice';
export const signupData=async(data)=>{
    try{
const response=await axios.post('http://localhost:3000/api/postData',data)
console.log("backend response ",response.data.message);
return response.data.message
    }catch(err){
console.log(err);

    }
}

export const loginData=async(data,dispatch)=>{
    try{
const response=await axios.post('http://localhost:3000/log/login',data)
console.log(response.data);
dispatch(addtoLoginInfo(response.data))
    }catch(err){
console.log("error message",err.response.data);
return err.response.data

    }
}