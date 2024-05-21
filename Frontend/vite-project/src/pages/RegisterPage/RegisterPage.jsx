import React, { useEffect, useState } from 'react'
import "./Register.css";
import { useNavigate } from "react-router-dom";
import RegisterUser from '../../apis/Auth';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const [isFormChecked , setIsFormChecked] = useState(false);

    const handleChange = (e)=>{
        console.log(e);
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    // useEffect(()=>{
    //     console.log(formData);
    //   })

    const handleSubmit = async()=>{
        const name1 = formData.name;
        const containWhiteSpace = (name1)=> /\s/.test(name1);
        if(containWhiteSpace(name1))
            {
                alert("name field will not contain white space");
                return;
            }
        if(!formData.name || !formData.email || !formData.password)
            {
                alert("Fields can't be empty");
                return;
            }
        if(!isFormChecked)
            {
                alert("please accept T&C");
                return;
            }
           const result =  await RegisterUser(formData);
           if(result)
            {
                navigate("/login")
            }
           
    }
  return (
    <div className="container">
    <h1 className="h1">Create an account</h1>
    <input
        className="input"
        name="name"
        onChange={handleChange}
        type={"text"}
        placeholder="Name"
    ></input>
    <input
        className="input"
        name="email"
        onChange={handleChange}
        type={"email"}
        placeholder="Email"
    ></input>
    <input
        className="input"
        name="password"
        onChange={handleChange}
        type={"password"}
        placeholder="Password"
    ></input>

    <span>
        <input
            className="grey"
            type="checkbox"
             onChange={(event) => setIsFormChecked(event.target.checked)}
            name="checkbox"
            id="check1"
        />
        <label
            className="grey"
            style={{ fontSize: "12px" }}
            htmlFor="check1"
        >
            By creating an account, I agree to our terms of use and
            privacy policy
        </label>
    </span>
    <button onClick={handleSubmit} className="button">
        Create Account
    </button>
    <br/>
    <p className="footer">
        <span className="grey">Already have an account?</span>
        <span
            className="underline"
           onClick={() => navigate("/login")}
        >
            Sign in
        </span>
    </p>
</div>
  )
}

export default RegisterPage;
