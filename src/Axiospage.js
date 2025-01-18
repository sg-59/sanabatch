import axios from "axios"

const URL="http://localhost:3000"


export const PublicRequest=axios.create({
    baseURL:URL
})


const accessToken= JSON.parse(JSON.parse(localStorage.getItem('persist:Melvinmern')).userData)&&JSON.parse(JSON.parse(localStorage.getItem('persist:Melvinmern')).userData).token
console.log("final out put ++++++++++++++++",accessToken);


export const Tokenrequest=axios.create({
    baseURL:URL,
headers:{token:accessToken}
})