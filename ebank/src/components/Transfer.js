import React, { useState, useReducer } from 'react'
import Button from '@mui/material/Button'
import "../css/transfer.css";
import e from 'express';

// Meant to pull data from form and render it to this page 
// const formReducer = (state, e) => {
//     return {
//         ...state,
//         [e.target.]: e.target.value
//     }
// }

const Transfer = () => {
    const [amountTransferred, setAmountTransferred] = useState("")
    return ( <
        div className = "wrapper" >
        <
        h1 > How About Them Apples <
        /h1>  <
        form >
        <
        fieldset >
        <
        label >
        <
        p > Name < /p>  <
        input user = "username" / >
        <
        /label > < /fieldset > <
        button type = "submit" > Submit < /button> < /
        form > <
        /div>
    )
}

export default Transfer