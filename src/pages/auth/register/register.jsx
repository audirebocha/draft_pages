import React from "react";
import { useNavigate } from "react-router-dom";
import user_logo from '../login/assets/imgs/account_circle.svg';
import password_logo from '../login/assets/imgs/lock.svg'


export default function Register() {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url); 
    }


    return (
        <div className="login_body">
            <nav className="login_nav">
                <div className="login_nav_1">
                    <span className="login_logo" onClick={(e)=>{nav('/')}} >Sharespace</span>
                    <button onClick={(e)=>{nav('/login')}}>Login</button>
                </div>
            </nav>
            <center>
                <div className="login_login_form">
                    <h3>Register</h3>
                    <div className="login_login_input">
                        <img src={user_logo} alt="" className="login_input_icon"></img>
                        <input type="text" className="login_form_input" placeholder="User name" name="username" id="username"></input>
                    </div>
                    <div className="login_login_input">
                        <img src={user_logo} alt="" className="login_input_icon"></img>
                        <input type="text" className="login_form_input" placeholder="Email" name="email" id="email"></input>
                    </div>
                    <span>password</span>
                    <div className="login_login_input">
                        <img src={password_logo} alt="" className="login_input_icon"></img>
                        <input type="password" className="login_form_input" placeholder="password" name="password" id="password"></input>
                    </div>

                    <div className="login_login_input">
                        <img src={ password_logo } alt="" className="login_input_icon"></img>
                        <input type="password" className="login_form_input" placeholder="confirm password" name="confirmed_password" id="confirmed_password"></input>
                    </div>

                    <button className="login_login_button" style={{'margin-bottom': '20px'}} onclick="new_user_registration()">Register</button>
                </div>
            </center >
        </div>


    )
}