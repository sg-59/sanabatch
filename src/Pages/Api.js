import axios from "axios"
import { addtoUserInfo } from "../Redux/Userslice";

export const UserDetailsApi =async(abc)=>{
    try{
const responseData=await axios.get('https://jsonplaceholder.typicode.com/users')
console.log("final answer",responseData);
abc(addtoUserInfo(responseData.data))
return responseData.data
    }catch(err){

    }
}