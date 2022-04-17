import React from 'react';
import {useSignInWithGithub,  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../Images/social-images/Google-Logo.png";
import github from "../../../Images/social-images/Github.png";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    // sign with google
const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
const navigate =useNavigate();

    if (googleUser || gitUser){

        navigate('/home')
    }

    return (
        <div>
            <div className="d-flex align-items-center" >
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2"> or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            
            {/* Button  div */}
        <div>
            <button onClick={()=> signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto">
            <img style={{ width: "30px" }} src={google} alt="" />
            <span className="px-2">Google Sign In</span>
            </button>

            {/* github button */}
            <button onClick={()=> signInWithGithub()} className="btn btn-info w-50 d-block mt-2 mx-auto">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
        </div>
        


        </div>
    );
};

export default SocialLogin;