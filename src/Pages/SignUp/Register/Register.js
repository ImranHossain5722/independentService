import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import {Link , useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
    
    
    const [userInformation, setUserInformation] = useState({
        email:"",
        password:"",
        name:"",
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth); 
 //name
const RegisterNameHandel = event=> {
    setUserInformation({...userInformation, name: event.target.value})
}

//email
const RegisterEmailHandel = event=> {
    setUserInformation({...userInformation, email: event.target.value})
}
//password
const registerPasswordHandel = event =>{
setUserInformation({...userInformation, password:event.target.value});

}

// form 
const formSubmitRegisterHandel = event =>{
    event.preventDefault()
    createUserWithEmailAndPassword(userInformation.email, userInformation.password, userInformation.name) 
    navigate('/home') 
}

const navigate = useNavigate();
// register
const navigateRegister = event =>{
navigate('/login')
}

    return (
        <div className='mainDivForm'>
            <div className="form-title">
                
            </div>
                <div className='w-50 mx-auto form-body'>
                <h1 className="form-title" > Register </h1>
                <Form onSubmit={formSubmitRegisterHandel}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter your name" required onChange={RegisterNameHandel} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onChange={RegisterEmailHandel } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onChange={registerPasswordHandel} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='pt-2'>Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateRegister}>Login</Link> </p>
            </Form>

            <SocialLogin></SocialLogin>
                </div>        
        </div>
    );
};

export default Register;