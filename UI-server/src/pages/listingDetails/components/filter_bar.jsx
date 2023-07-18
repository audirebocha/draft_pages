import React, { useState } from "react";


export default function Filter_bar(props) {
    const [search_key,set_search_key]= useState('')
    return (
        <>
            <section className="filter_bar_lvl1">
                <div className="filter_bar_lvl2">

                    <div className="filter_containerlvl3">
                            <div className="filter_input_container" style={{'background':'white'}}>
                                <input type="text" name="" id="" value={search_key} onChange={(e)=>{set_search_key(e.target.value)}}  placeholder="Search for a town, city or school" style={{'width':'400px' ,'height':'35px', 'padding-left':'5px', 'border':'none'  }} />
                            </div>
                            <button  onClick={(e)=>{ props.search(search_key) }} style={{'height':'35px' , 'padding':'5px'}}>Search</button>
                    </div>
                </div>
            </section>
        </>
    )
}