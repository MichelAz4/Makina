import React, { useState } from "react";
import {useNavigate } from "react-router";
import editLogin from "./LogIn.module.css";
import Axios from 'axios';


function Login(){

  const url ='';

  const navigate = useNavigate();

  const[email,setEmail]= useState('');
  const[password,setPassword]=useState('');

  function submit(e){
    e.preventDefault();
  
    Axios
    .post(url,{
      email:email,
      password:password,
  
    })
    .then(res=>{
      res.json();
    })
    
  }

  return (
    <div>
        <img
        alt='CarPhoto'
        src='\img\about.png' //`url/${}`
        style={{ position:'absolute' , width: '500px',height: '250px',left: '80px',top: '240px'}}
        />

        <form className={editLogin.container} onSubmit={e=>submit(e)}>
          <p className={editLogin.loginHeader}>Log in</p>
          <hr className={editLogin.firstHr} />
          <input
            type="email"
            className={editLogin.input1}
            placeholder="E-mail , Phone , UserName"
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <br />
          <input
            id="pass"
            type="password"
            className={editLogin.input2}
            placeholder="Password"
            required
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <br />
          <button
             type="submit"
             className={editLogin.button}
          >
            Log in
          </button>

          <hr className={editLogin.hr1} />
          <p className={editLogin.createAccount}>Or Create Account</p>
          <hr className={editLogin.hr2} />

          <button type="button" className={editLogin.createAccountButton} onClick={()=>navigate('/signup')}>
            Create New Account
          </button>
          <h5 className={editLogin.link}>
            forgot you’r password ?
            <span className={editLogin.resetPass}> Reset Password </span>
          </h5>
        </form>
    </div>
);
}

export default Login;
