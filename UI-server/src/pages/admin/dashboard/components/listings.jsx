import React, { useEffect, useState } from "react";
import delete_logo from '../dash_icons/delete.svg'
import view_logo from '../dash_icons/visibility.svg'
import axios from "axios";


function Listings_Manager() {
    useEffect(() => {
        get_users_data()
    },[])

    const headers = { headers: { 'Content-Type': 'application/json' }, withCredentials: true }

    function get_users_data() {
        var post_url = 'http://localhost:5000/admin/listings_data'
        var data = { 'code': 101 }
        axios.post(post_url, data, headers)
            .then(res => {
                console.log(res.data)
                if (res.data['status'] === 'success') {
                    //console.log(res.data['data'])
                    set_users_list(res.data['data']['listings_data'])
                } else {
                    toast.warning('Please log in')
                    nav('/admin')
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


    const [users_list, set_users_list] = useState([])



    return (
        <>
            <div className="dashpga_dash_container_type2_centered">
                <h2>Listings Management</h2>
                <div className="dashpga_dash_table">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                        </tr>

                        {users_list.map((listing) => {
                            return (
                                <>
                                    <tr key={listing['_id']}>
                                        <td>{listing['title']}</td>
                                        <td>{listing['place']}</td>
                                        <td>
                                            <div className="dashpga_dash_table_button">
                                                <img src={view_logo} alt=""></img>
                                                <p>View</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dashpga_dash_table_button" onClick={(e)=>{delete_listing_request(listing['_id'])}}>
                                                <img src={delete_logo} alt=""></img>
                                                <p>Delete</p>
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

export default Listings_Manager