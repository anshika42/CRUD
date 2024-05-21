import axios from "axios";

 const RegisterUser = async({name,email,password})=>{
    try{
        const reqUrl = "http://localhost:3000/api/v1/auth/register";
        const response = await axios.post(reqUrl,{name,email,password});
        console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
        alert("something went wrong");
    }
};
 
export default RegisterUser;