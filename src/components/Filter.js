import React from"react";
import { useState } from "react";

const Filter = (props) =>{
   
    return (
        <div className='input'>
            Filter: <input onChange={props.handleFiter} />
            

        </div>
    )
}

export default Filter;