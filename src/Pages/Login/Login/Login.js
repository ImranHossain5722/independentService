import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link , useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

const navigate = useNavigate()    
const [userInformation, setUserInformation] = useState({
    email:"",
    password:"",
});

// sign with email and password
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

//errors
const [errors, setErrors]= useState({
    email:"",
    password:"",
}) 
//email
const emailChangeHandel = event=> {
        setUserInformation({...userInformation, email: event.target.value})
}
//password
const passwordChangeHandel = event =>{
    setUserInformation({...userInformation, password:event.target.value});

}
// form 
 const formSubmitHandel = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(userInformation.email, userInformation.password)  
        navigate('/home')
  }


// register
  const navigateRegister = event =>{
    navigate('/register')
}

    return (
        <div className='p-5 mainDivForm' >
            
                
                <div className="w-50 mx-auto form-body">
                <h1 className="form-title" >Login</h1>
                <Form onSubmit={formSubmitHandel}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onChange={emailChangeHandel} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onChange={passwordChangeHandel} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className="pt-2">New to this site? <Link to="/register" className="text-danger text-decoration-none" onClick={navigateRegister}>Register </Link> </p>
            <SocialLogin></SocialLogin>
            </div>
            
                    
        </div>
    );
};

export default Login;