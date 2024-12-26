import axios from 'axios'
import { addtoLoginInfo } from './Redux/UserSlice';
import { PublicRequest, Tokenrequest } from './Axiospage';
export const signupData=async(data)=>{
    try{
const response=await PublicRequest.post('/api/postData',data)
console.log("backend response ",response.data.message);
return response.data.message
    }catch(err){
console.log(err);

    }
}

export const loginData=async(data,dispatch)=>{
    try{
const response=await PublicRequest.post('/log/login',data)
console.log(response.data);
dispatch(addtoLoginInfo(response.data))
    }catch(err){
console.log("error message",err.response.data);
return err.response.data

    }
}

export const getSingleData=async(Id)=>{
    try{
const response=await Tokenrequest.get(`/api/getSingleData/${Id}`)
console.log("final answer in get single data",response.data);

return response.data

    }catch(err){

    }
}

export const updateData=async(data,Id)=>{
try{
const response=await Tokenrequest.put(`/api/updateDataBase/${Id}`,data)
console.log("upadate info",response);

}catch(err){
    console.log(err.message);
    
}
}

export const deleteAccount=async(id)=>{
    try{
const response=await Tokenrequest.delete(`/api/deleteDatabase/${id}`)
console.log("delete information",response.data.message);
return response.data.message
    }catch(err){

    }
}