import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Api_Url=import.meta.env.VITE_API_URL 
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");    
    const navigate=useNavigate()
    const handleLogin=async()=>{
        try {
            const res= await axios.post(`${Api_Url}/api/user/login`,{email,password})
            // console.log(res);
            if(res.status===200 || res.status===201){
                const token=res.data.token
                localStorage.setItem('role',res.data.user.role)
                localStorage.setItem("token",token)
                navigate('/main-page')
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <h1>Login Here</h1>
        <input type="email" name='email'  value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" name='password'  value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login