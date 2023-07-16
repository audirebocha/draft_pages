import React, { useState, useEffect } from "react";
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import axios from 'axios'
import user_logo from '../../../auth/login/assets/imgs/account_circle.svg';
import password_logo from '../../../auth/login/assets/imgs/lock.svg'

function Dashboard() {
    useEffect(() => {
        auth_status()
    }, [])

    const headers = { headers: { 'Content-Type': 'application/json' }, withCredentials: true }

    function auth_status() {
        var post_url = 'http://localhost:5000/admin/dashboard_data'
        var data = { 'code': 101 }
        axios.post(post_url, data, headers)
            .then(res => {
                console.log(res.data)
                if (res.data['status'] === 'success') {
                    console.log(res.data['data'])
                } else {
                    toast.warning('Please log in')
                    nav('/admin')
                }
            })
            .catch(e => { console.error(e) })
    }


    const [hits_data, set_hits_data] = useState([])
    const [users_count, set_users_count] = useState(0)
    const [listing_count, set_listing_count] = useState(0)


    return (
        <>


            <div className="dashpga_dash_container_type2_centered">
                <h2>My Profile Page</h2>
                <div className="dashpga_dash_table">

                    <p>User Name</p>
                    <p>User email</p>
                    <p>Password</p>
                    <p>Listings available</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;