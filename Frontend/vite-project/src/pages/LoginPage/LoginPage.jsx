import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginUser from '../../apis/AuthLogin'

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
})
 
const handleFormChange = (e)=>{
  // console.log(e);
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = async()=>{
  if( !formData.email || !formData.password)
      {
          alert("Fields can't be empty");
          return;
      }
  
      const result = await LoginUser(formData);
      if(result)
        {
          navigate("/home");
        }
}

  return (
    <div className="container">
    <h1 className="h1">Already have an account ?</h1>
    <input
        className="input"
        name="email"
        onChange={handleFormChange}
        type={"email"}
        placeholder="Email"
    ></input>
    <input
        className="input"
        name="password"
        onChange={handleFormChange}
        type={"password"}
        placeholder="Password"
    ></input>
    <button onClick={handleSubmit} className="button">
        Sign in
    </button>
    <br/>
    <p className="footer">
        Don&apos;t have an account?
        <span
            className="underline"
            onClick={() => navigate("/register")}
        >
            Sign Up
        </span>
    </p>
</div>
  )
}

export default LoginPage
