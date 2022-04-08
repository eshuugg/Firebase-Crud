import React, { useEffect, useState } from 'react'
import "../index.css";
import { Form, Row, Col, Container, Image, Button } from "react-bootstrap";
import {useHistory, Link, useNavigate} from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { registerIntiate } from '../redux/action';

const Registration = () => {

    const[userDetails,setuserRegistration] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        cpassword:""

    })

    // const {currentUser} = useSelector((state) => state.user);

    const history = useNavigate();

    // useEffect(() =>{
    //     if(currentUser) {
    //         history.push("/");
    //     }
    // },[currentUser,history])

    // const dispatch = useDispatch();

    // const {fname,lname,email,password,cpassword} =userDetails;

    const [record,setRecord]=useState([]);


    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userDetails, [name]: value })
        console.log(name);
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        // if(password !== cpassword){
        //     return
        // }
        // dispatch(registerIntiate(email,password))

        const newRecord ={...userDetails, id:new Date().getTime().toString()}
        setRecord([...record, newRecord])
        setuserRegistration({fname:"",lname:"",email:"",password:"",cpassword:""})
    }


    return (
        <Container>
        <div className='maindiv'>
            <Row>
                <Col sm={6}>
                        <Form className='loginform'>
                            <h1 className='login'>Signup</h1>
                            <input 
                            type="name" 
                            name="fname" 
                            value={userDetails.fname} 
                            onChange={handleinput} 
                            placeholder="Enter name" />

                            <input 
                            type="name" 
                            name="lname" 
                            value={userDetails.lname} 
                            onChange={handleinput} 
                            placeholder="Enter last name" />

                            <input 
                            type="email" 
                            name="email" 
                            value={userDetails.email} 
                            onChange={handleinput} 
                            placeholder="Enter email" />

                            <input 
                            type="password" 
                            name="password" 
                            value={userDetails.password} 
                            onChange={handleinput} 
                            placeholder="Enter password" />

                            <input 
                            type="password" 
                            name="cpassword" 
                            value={userDetails.cpassword} 
                            onChange={handleinput} 
                            placeholder="Confirm password" />
                        </Form>
                        <Button onClick={handlesubmit} className='button'>Submit</Button>
                        
                            <Link to="/login">
                                <Button className='btn btn-primary btn-block'
                                type='button'
                                id="btn-signup"
                                style={{marginLeft:"74px",width:"153px",marginTop:"20px"}}
                                >
                                    Already Registered
                                </Button>

                            </Link>
                </Col>
            </Row>
        </div>
    </Container>
          

    )
}

export default Registration