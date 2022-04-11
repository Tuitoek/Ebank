/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import Currentsavings from "../components/Currentsavings"
import Savings from "../components/Savings"
import Transfer from "../components/Transfer"


const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    // const axios.jwt = axios.create();

    // axios.jwt interceptors.request.use(async(config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = await axios.get('http://localhost:5000/token');
    //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    //         setToken(response.data.accessToken);
    //         const decoded = jwt_decode(response.data.accessToken);
    //         setName(decoded.name);
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });
    const initialDeposit = 20;
    const fundsRequested = 15

    function transferFunds() {
        const fundsTransfer = fundsRequested - initialDeposit
        console.log(fundsTransfer)
    }
    const getUsers = async() => {
        const response = await axios.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return ( <
        div className = "container mt-5" >
        <
        h1 > Finbank Ebanking board < /h1> <
        h1 > Welcome Back: { name } < /h1> <br/ > < br / > <
        Currentsavings / >
        <
        Savings / >
        <
        Transfer / > <
        /div>
    )
}

export default Dashboard;