import React, { useState } from "react";


export default function Filter_bar(props) {
    const [search_key,set_search_key]= useState('')
    return (
        <>
            <section className="filter_bar_lvl1">
                <div className="filter_bar_lvl2">

                    <div className="filter_containerlvl3">
                            <div className="filter_input_container">
                                <input type="text" name="" id="" value={search_key} onChange={(e)=>{set_search_key(e.target.value)}} />
                            </div>
                            <button  onClick={(e)=>{ props.search(search_key) }} >Search</button>
                    </div>
                </div>
            </section>
        </>
    )
}