/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import '../css/card.css'



const Currentsavings = () => {
    const initialDeposit = 20;
    const fundsRequested = 15

    function transferFunds() {
        const fundsTransfer = fundsRequested - initialDeposit
        console.log(fundsTransfer)
    }

    return ( <
        div className = "col-md-3" >
        <
        Card className = "currentsavings " > <
        CardContent >
        <
        Typography className = "MuiTypography--heading" >
        Current Account <
        /Typography> <
        Typography className = "MuiTypography--subheading" > { initialDeposit }
        GBP < / Typography > <
        Divider light / > <
        /CardContent> < /
        Card > < /
        div >
    )
}

export default Currentsavings