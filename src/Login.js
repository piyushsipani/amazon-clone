
import React,{useState} from 'react'
import './Login.css'
import { Link,useHistory } from "react-router-dom";
import {auth} from './firebase';
function Login() {

    //it allows us to programatically change the URL
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault();


        //some fancy firebase login stuff...
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            history.push('/');

        }).catch(error=>alert(error.message))
    }

    const register=(e)=>{
        e.preventDefault();

        //do some fancy firebase register stuff...
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{

            //it successfully created a new user with email and passwod
           if(auth){
               history.push('/')
           }
        }).catch(error=>alert(error.message));

        
    }

    return (
        <div className="login">
        <Link to='/'>
            <img
            className="login__logo"
             src="https://tse1.mm.bing.net/th?id=OIP.raVZl3KXKiesTLDsKAHWyAHaD2&pid=Api&P=0&w=347&h=181" alt="" />
        </Link>


        <div className="login__container">
            <h1>Sign in </h1>
            <form>
                <h5>E-mail</h5>
                <input type="text"
                value={email} onChange={e=>setEmail(e.target.value)}
                 />

                <h5>Password</h5>
                <input type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                 />
                <button
                type="submit"
                onClick={signIn}
                 className="login__signInButton">Sign In</button>
            </form>

            <p>By Signing in you agree to AMAZON'S FAKE CLONE conditions of use
             & sale .Please see our privacy Notice, our Cookies Notice 
             and our interest based adds Notice</p>

             <button 
             onClick={register}
             className="login__registerButton">Create your amazon account</button>


        </div>
        </div>
    )
}

export default Login
