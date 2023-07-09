import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import ReactDOM from 'react-dom/client'
import './assets/login.css'
import { useNavigate } from "react-router-dom";
import user_logo from './assets/imgs/account_circle.svg'
import password_logo from './assets/imgs/lock.svg'
import google_logo from './assets/imgs/google.svg'




export default function Login() {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url); 
    }


    return (
        <>
            <div className='login_body'>
                <nav className="login_nav">
                    <div className="login_nav_1">
                        <span className="login_logo" onClick={(e)=>{nav('/')}}>Sharespace</span>
                        <button style={{width:'100px'}} onClick={(e)=>{nav('/register')}}>Sign up</button>
                    </div>
                </nav>
                <center>
                    <div className="login_login_form">
                        <form method="post" action="/login_processor/">
                            <h2>Login</h2>
                            <div className="login_login_input">
                                <img src={user_logo} alt="" className="login_input_icon" ></img>
                                <input type="text" className="login_form_input" name="username" placeholder="Email" required="true"></input>
                            </div>
                            <div className="login_login_input">
                                <img src={password_logo} alt="" className="login_input_icon"></img>
                                <input type="password" name="password" className="login_form_input" placeholder="password" required></input>
                            </div>

                            <button className="login_login_button" type="submit">Login</button>
                        </form>
                        <p>or</p>
                        <div className="login_google_auth_api" >
                            <img className='login_input_icon login_google' src={google_logo} alt="" ></img>
                            <span>Sign in with google</span>
                        </div>

                        <p><a href="/password_reset" style={{'color':'red'}}>Forgot your password?</a><a href="/register">Signup?</a></p>
                    </div>
                </center>



            </div>
        </>
    )
}