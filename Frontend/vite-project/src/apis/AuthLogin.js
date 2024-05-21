import axios from "axios";

 const LoginUser = async({email,password})=>{
    try{
        const reqUrl = "http://localhost:3000/api/v1/auth/login";
        const response = await axios.post(reqUrl,{email,password});
        localStorage.setItem("token",response.data.token);
        console.log(response.data);
        return response.data.name;
    }
    catch(err){
        console.log(err);
        alert("something went wrong");
    }
};
export default LoginUser;