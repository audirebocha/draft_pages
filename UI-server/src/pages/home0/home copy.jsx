import React from "react";


export default function Home() {
    return (
        <>
            <nav class="nav">
                <div class="nav_1">
                    <span class="logo">Sharespace</span>
                    <span>List your space</span>
                    <button onclick="link('/registration')">Register</button>
                    <button onclick="link('/login')">Login</button>
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
        </>
    )
}

