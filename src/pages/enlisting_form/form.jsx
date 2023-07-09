
import { useState, React } from 'react'
import './listing-form.css'
import add_logo from './assets/images/boolean_icons/add.svg'
import check_logo from './assets/images/boolean_icons/check.svg'
import close_logo from './assets/images/boolean_icons/close.svg'
import admin_data from "./counties (1).json";
import ad from './counties (1).json'

export default function Enlisting_form() {
    const [subcounty, set_subconunty] = useState([])


    return (
        <>
            <nav className="enlist_nav">
                <div className="enlist_nav_1">
                    <span className="enlist_logo">Sharespace</span>
                    <button onclick="link('/registration')">Dashboard</button>
                    <button onclick="link('/login')">Logout</button>
                </div>
            </nav>

            <section className="enlist_form_section">
                <div className="enlist_form_container">
                    <div className="enlist_step_indicator">
                        <p>Location</p>
                        <p>Sublet type</p>
                        <p>House Description</p>
                        <p>Features and perks</p>
                        <p>House rules</p>
                        <p>Bills & Rent</p>
                        <p>Title & Description</p>
                    </div>
                    <div className="enlist_form">
                        <div className="enlist_question_container_lvl1">
                            <h3>Location of your listing</h3>
                            <div className="enlist_location_container_lvl1">
                                <div className="enlist_location_container_lvl2">
                                    <p>County</p>
                                    <select name="" id="county" onChange={(e => { console.log(e.target.value); set_subconunty(admin_data[e.target.value]['sub_counties']) })}>
                                        {admin_data.map((e, key) => {
                                            return (<option value={key} key={key} >{e['name']}</option>)
                                        })}
                                    </select>
                                </div>

                                <div className="enlist_location_container_lvl2">
                                    <p>Sub county</p>
                                    <select name="" id="">
                                        {subcounty.map((e, key) => {
                                            return (<option value={e} key={key} >{e}</option>)
                                        })}
                                    </select>
                                </div>

                                <div className="enlist_location_container_lvl2">
                                    <p>division</p>
                                    <select name="" id="">
                                        <option value="">Nairobi</option>
                                    </select>
                                </div>
                            </div>
                        </div>




                        <div className="enlist_question_container_lvl1">
                            <h3>Type of sublet</h3>
                            <div className="enlist_options_container_lvl1">

                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./others/home.svg" alt=""></img>
                                    <div className="enlist_option_context">
                                        <h5>Entire place</h5>
                                        <span>Tenants will have the entire place to themselvs</span>
                                    </div>
                                </div>

                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./others/bedroom_parent.svg" alt=""></img>
                                    <div className="enlist_option_context">
                                        <h5>Room</h5>
                                        <span>Tenants will have the entire place to themselvs</span>
                                    </div>
                                </div>

                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./others/beds.svg" alt=""></img>
                                    <div className="enlist_option_context">
                                        <h5>Shared bedroom</h5>
                                        <span>Tenants sleep in a room or common area that may be shared with you or
                                            others.</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="enlist_question_container_lvl1">
                            <h3>Describe your place</h3>
                            <div className="enlist_options_container_lvl1">
                                <p>How would you describe the place you are subletting</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <p>House</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <p>Appartment</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <p>Studio</p>
                                </div>
                            </div>


                        </div>

                        <div className="enlist_question_container_lvl1">
                            <h3>Features and perks</h3>
                            <div className="enlist_options_container_lvl1">
                                <p>Which features does your place have</p>
                                <div className="enlist_features_container_lvl1" onClick={e => { var a = document.getElementById('wardobe_feature'); a.checked = true }}>
                                    <div className="enlist_feature_item">
                                        <img src="./features/closets.svg" alt=""></img>
                                        <p>Wardobe</p>
                                        <input id='wardobe_feature' type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/table_chair.svg" alt=""></img>
                                        <p>Desk and chair</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/sofa.png" alt=""></img>
                                        <p>Sofas</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/varanda.svg" alt=""></img>
                                        <p>Varanda</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/balcony.svg" alt=""></img>
                                        <p>Balcony</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/security.svg" alt=""></img>
                                        <p>Security</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./features/window.svg" alt=""></img>
                                        <p>Windows</p>
                                        <input type="checkbox" />
                                    </div>

                                </div>

                                <p>What perks does your place offer</p>
                                <div className="enlist_features_container_lvl1">


                                    <div className="enlist_feature_item">
                                        <img src="./perks_logos/nest_remote_comfort_sensor.svg" alt=""></img>
                                        <p>Wi-fi</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./perks_logos/tv_gen.svg" alt=""></img>
                                        <p>Paid TV</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./perks_logos/local_laundry_service.svg" alt=""></img>
                                        <p>Washing Machine</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./perks_logos/accessible.svg" alt=""></img>
                                        <p>Accessibility</p>
                                        <input type="checkbox" />
                                    </div>

                                    <div className="enlist_feature_item">
                                        <img src="./perks_logos/heat_pump.svg" alt=""></img>
                                        <p>Air conditioning</p>
                                        <input type="checkbox" />
                                    </div>
                                </div>




                            </div>
                        </div>



                        <div className="enlist_question_container_lvl1">
                            <h3>House rules and restrictions</h3>
                            <div className="enlist_options_container_lvl1">
                                <p>What gender of tenants will you allow</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./genders/male.svg" alt=""></img>
                                    <p>Male</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./genders/female.svg" alt=""></img>
                                    <p>Female</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./genders/transgender.svg" alt=""></img>
                                    <p>Both male, female and ambiguous </p>
                                </div>
                            </div>

                            <div className="enlist_options_container_lvl1">
                                <p>Do you allow smoking</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./check.svg" alt=""></img>
                                    <p>Yes</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./close.svg" alt=""></img>
                                    <p>No</p>
                                </div>
                            </div>

                            <div className="enlist_options_container_lvl1">
                                <p>Do you allow pets</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./check.svg" alt=""></img>
                                    <p>Yes</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./close.svg" alt=""></img>
                                    <p>No</p>
                                </div>
                            </div>

                            <div className="enlist_options_container_lvl1">
                                <p>Do you allow Overnight Guests</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./check.svg" alt=""></img>
                                    <p>Yes</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./close.svg" alt=""></img>
                                    <p>No</p>
                                </div>
                            </div>



                            <div className="enlist_options_container_lvl1">
                                <p>How many tenants will you allow</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="number" style={{ "width": "30px" }} value="1" />
                                    <img src="./boolean_icons/add.svg" alt=""></img>
                                    <img src="./boolean_icons/remove.svg" alt=""></img>
                                    <p>:Maximam number of residents</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="radio" />
                                    <img src="./close.svg" alt=""></img>
                                    <p>No</p>
                                </div>
                            </div>
                        </div>


                        <div className="enlist_question_container_lvl1">
                            <h3>Rent and Bills</h3>
                            <div className="enlist_options_container_lvl1">
                                <div className="options_container_lvl2">
                                    <p>Rent:</p>
                                    <input type="number" name="" id="" />
                                </div>
                                <p>Bills included</p>
                                <div className="enlist_options_container_lvl2">
                                    <input type="checkbox" />
                                    <p>Water</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="checkbox" />
                                    <p>Electricity</p>
                                </div>
                                <div className="enlist_options_container_lvl2">
                                    <input type="checkbox" />
                                    <p>Internet</p>
                                </div>
                            </div>
                        </div>


                        <div className="enlist_question_container_lvl1">
                            <h3>Title and Description</h3>
                            <div className="enlist_options_container_lvl1">
                                <p>Write a title that will captures more viewers</p>
                                <div className="enlist_location_container_lvl2">
                                    <p>Title</p>
                                    <input type="text" style={{ width: '70%' }} />
                                </div>
                                <p>Write a description that would make people to consider your place</p>
                                <div className="enlist_location_container_lvl2">
                                    <p>Description</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>



                        <div className="enlist_question_container_lvl1">
                            <h3>Pictures</h3>
                            <div className="enlist_options_container_lvl1">
                                <p>Add pictures of your place here</p>
                                <input type="file" />
                            </div>
                        </div>



                        <div className="enlist_question_container_lvl1">

                            <div className="enlist_options_container_lvl1">
                                <button>Next</button>
                                <button>Back</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}