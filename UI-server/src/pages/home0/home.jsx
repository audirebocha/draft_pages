import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url); 
    }


    return (
        <div className="home_body">
            <nav class="login_nav" style={{'background-color':"#003B95"}}>
                <div class="login_nav_1">
                    <span class="login_logo" onClick={(e)=>{nav('/admin_dashboard')}}>Sharespace</span>
                    <span onClick={(e)=>{nav('enlisting_form')}}>List your space</span>
                    <button onClick={(e)=>(nav("register"))}>Register</button>
                    <button onClick={(e)=>(nav("login"))}>Login</button>
                </div>
            </nav>
            <div class="search_bar_container">
                <div class="search_bar_content">
                    <div class="search_bar_messages">
                        <h1>Find your perfect space</h1>
                        <p>A flexible way of finding accommodation</p>
                    </div>
                </div>

                <div class="search_bar">
                    <div class="search_filter">
                        <input type="text" placeholder="City" />
                    </div>
                    <div class="search_filter">
                        <input type="text" name="" id="" placeholder="Price" />
                    </div>
                    <button>search</button>
                </div>
            </div>


            <section class="sample_listing_container">
                <div class="section_header">
                    <h2>Explore available listings</h2>
                </div>
                <div class="listings">


                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>


                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>


                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>

                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>

                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>

                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>


                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>

                    <div class="listing-item">
                        <img src="home.png" alt=""></img>
                        <span class="">Charismatic single bedroom near the Badal metro</span>
                        <div>
                            <span>Ksh 10K</span>
                            <span>/month</span>
                            <span>Bills included</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

