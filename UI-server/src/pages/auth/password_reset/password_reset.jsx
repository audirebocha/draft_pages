import React from "react";
import { useNavigate } from "react-router-dom";
import user_logo from '../login/assets/imgs/account_circle.svg'

export default function Password_reset() {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url); 
    }


    return (
        <div class="login_body">
            <nav class="login_nav">
                <div class="login_nav_1">
                    <span class="login_logo" onClick={e=>{nav('/')}}>Sharespace</span>
                    <button onClick={e=>{nav('/login')}}>Login</button>
                </div>
            </nav>
            <center>
                <div class="login_login_form">
                    <form method="post" action="/reset_password_process/email">
                        <h2>Reset your password</h2>
                        <div class="login_login_input">
                            <img src={ user_logo} alt="" class="login_input_icon" ></img>
                            <input type="text" class="login_form_input" name="email" placeholder="Email" required="true"></input>
                        </div>
                        <button class="login_login_button" type="submit">Submit</button>
                    </form>
                </div>
            </center>
        </div>
    )
}