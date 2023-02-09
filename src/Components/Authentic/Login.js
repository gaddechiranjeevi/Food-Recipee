import React, { useState } from "react";
import  {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Login=()=>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignHandler=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(auth=>{navigate('/home')})
    alert('Login succesfull')
    .catch(error=>{
      console.error(error)
      alert('Email not found');
    })
  }
  const HandleRegister=()=>{
     createUserWithEmailAndPassword(auth,email,password)
     .then(auth =>{navigate('/home')})
     window.alert('Account Created')
     .catch(error=>console.error(error))
  }

  return (

    <div className={classes.container}>

      <h3>SignIn</h3>

      <div className="form-group">
        <label htmlFor="email">Email</label><br/>
        <input className="form-label" id="email" onChange={(event) => setEmail(event.target.value)} autoComplete='off' type="email"/>
        </div>

      <div className="form-group">
        <label htmlFor="password">Password</label><br/>
        <input className="form-label" id="password" onChange={(event) => setPassword(event.target.value)} autoComplete='off' type="password"/>
      </div>

      <div className={classes.primarybtn}>
      <button className="btn btn-primary" onClick={SignHandler}>SignIn</button>
      </div>
      
      <button className="btn btn-secondary" onClick={HandleRegister}>Create Account</button>
      </div>
);
}
export default Login;