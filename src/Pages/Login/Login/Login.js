import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link , useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {

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
const [errors , setErrors]= useState({
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
        console.log (userInformation.email, userInformation.password) 
        navigate('/')
  }

const navigate = useNavigate();
// register
  const navigateRegister = event =>{
    navigate('/register')
}

    return (
        <div className='container w-50 mx-auto'>
            <div className="form-title">
                <h1>Login Please </h1>
            </div>
            <Form onSubmit={formSubmitHandel}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onChange={emailChangeHandel} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onChange={passwordChangeHandel} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to this site? <Link to="/register" className="text-danger text-decoration-none" onClick={navigateRegister}>Register </Link> </p>
            <SocialLogin></SocialLogin>        
        </div>
    );
};

export default Login;