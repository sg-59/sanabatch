import axios from "axios"
import { addtoUserInfo } from "../Redux/Userslice";

export const UserDetailsApi =async(dispatch)=>{
    try{
const responseData=await axios.get('https://jsonplaceholder.typicode.com/users')
console.log("final answer",responseData);
dispatch(addtoUserInfo(responseData.data))
return responseData.data
    }catch(err){

    }
}