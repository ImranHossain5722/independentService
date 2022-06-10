import React from 'react';
import './AboutMe.css';
import myImage from '../../Images/imran-hossain.png';

const AboutMe = () => {
    return (
        <div className='pt-5'>
             <div className='d-flex justify-content-between align-items-center mt-5'>
                <div className='w-50 col-12 col-md-6 col-lg-6 col-xl-6 text-container'>
                    <h5 className='about'>About <span className='Aboutme'>Me</span></h5>
                    <h5>Hi, I'm  Imran Hossain </h5>
                    <p>My goal is to become a full-stack web developer. The reason for my admission to the Programming Hero web development course. When I'll complete this course. I will start my career as a web developer. </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-2 MyImage">
                    <img src={myImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;