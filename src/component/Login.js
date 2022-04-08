import React, { useState } from 'react';
import { Form, Row, Col, Container, Image, Button } from "react-bootstrap";
import "../index.css"; 
import {useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    const [userDetails, setuserDetails] = useState({
        email: "",
        password: ""
    })

    const [record,setRecord] = useState([])

    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserDetails({ ...userDetails, [name]: value })
    }

    const handlesubmit = (e) =>{
        e.preventDefault();

        const newRecord ={...userDetails, id:new Date().getTime().toString()}
        setRecord([...record, newRecord])
        setuserDetails({email:"",password:""})
    }


    console.log("record our", record)

    return (
        <container>

        <div className="parent clearfix">
            <div className="bg-illustration">
                <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />

                <div className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className="login">
                <div className="container">
                    <h1>Login to access to<br />your account</h1>
                    <div className="login-form">
                        <form action="">
                           <input 
                            type="email" 
                            name="email" 
                            value={userDetails.email} 
                            onChange={handleinput} 
                            placeholder="Enter email" 
                            />
                           <input 
                            type="password" 
                            name="password" 
                            value={userDetails.password} 
                            onChange={handleinput} 
                            placeholder="Enter password" />

                            <div className="remember-form">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className="forget-pass">
                                <a href="#">Forgot Password ?</a>
                            </div>

                            <button onClick={handlesubmit} type="submit">LOG-IN</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>

    </container>
    )
}

export default Login