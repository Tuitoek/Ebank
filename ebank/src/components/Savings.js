/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import '../css/card.css'

const Savings = () => {
    const initialDeposit = 20;
    const savingsBalance = 0;

    function transferFunds() {
        const fundsTransfer = savingsBalance - initialDeposit
        console.log(fundsTransfer)
    }

    function withdrawFunds() {
        const fundsWithdrawn = savingsBalance
        console.log()
    }

    return ( <
        div className = "col-md-3" >
        <
        Card className = "currentsavings " > <
        CardContent >
        <
        Typography className = "MuiTypography--heading" >
        Savings Account <
        /Typography> <
        Typography className = "MuiTypography--subheading" > { savingsBalance }
        GBP < / Typography > <
        Divider light / > <
        /CardContent> < /
        Card > < /
        div >
    )
}

export default Savings