import React, { useEffect, useState } from "react";
import delete_logo from '../dash_icons/delete.svg'
import view_logo from '../dash_icons/visibility.svg'
import axios from "axios";



function My_Applications_Manager() {
    useEffect(() => {
        get_users_data()
    },[])

    const headers = { headers: { 'Content-Type': 'application/json' }, withCredentials: true }

    function get_users_data() {
        var post_url = 'http://localhost:5000/client/my_application_data'
        var data = { 'code': 101 }
        axios.post(post_url, data, headers)
            .then(res => {
                console.log(res.data)
                if (res.data['status'] === 'success') {
                    console.log(res.data['data'])
                    set_my_applications(res.data['data']['my_applications'])
                } else {
                    toast.warning('Please log in')
                    //nav('/admin')
                }
            })
            .catch(e => { console.error(e) })
    }

    function delete_listing_request(listing_id){
        var post_url = 'http://localhost:5000/admin/delete_listing_request'
        var data = { 'id': listing_id }
        axios.post(post_url, data, headers)
            .then(res => {
                console.log(res.data)
                if (res.data['status'] === 'success') {
                    console.log(res.data['data'])
                    set_users_list(res.data['data']['listings_data'])
                    //set_users_list(res.data['data']['listings_data'])
                } else {
                    console.log(res.data['data'])
                    toast.warning('Please log in')
                    //nav('/admin')
                }
            })
            .catch(e => { console.error(e) })
    }


    const [my_applications, set_my_applications] = useState([])



    return (
        <>
            <div className="dashpga_dash_container_type2_centered">
                <h2>My Applications</h2>
                <div className="dashpga_dash_table">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Applicants</th>
                        </tr>

                        {my_applications.map((application) => {
                            return (
                                <>
                                    <tr key={application['_id']}>
                                        <td>{application['listing_id']}</td>
                                        <td>Pending</td>
                                        <td>
                                            <div className="dashpga_dash_table_button">
                                                <img src={view_logo} alt=""></img>
                                                <p>View</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dashpga_dash_table_button" onClick={(e)=>{delete_listing_request(listing['_id'])}}>
                                                <img src={delete_logo} alt=""></img>
                                                <p>Cancel</p>
                                            </div>
                                        </td>
                                    </tr>
                                </>)
                        })}


                    </table>
                </div>
            </div>
        </>
    )
}

export default My_Applications_Manager