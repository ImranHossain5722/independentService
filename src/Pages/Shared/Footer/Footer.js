import React from 'react';
import facebook from '../../../Images/social-images/facebook.png'
import twitter from '../../../Images/social-images/tiwtter.png'
import instagram from '../../../Images/social-images/instagram.png'
import './Footer.css'

const Footer = () => {
    
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='footer'>
            <div className='footer-main-div p-5 d-flex justify-content-around'>
            <div className="mobile">
                <h3>Phone Number </h3>
                <p>01688615859</p>
            </div>
            <div className="email">
                <h3>Email</h3>
                <p>contact@gmail.com</p>
            </div>
            <div className="social">
                <h3>Follow Me </h3>
                    <div className='follow-me' >
                        <img  src={facebook} alt="" />
                        <img src={twitter} alt="" />
    
                        <img src={instagram} alt="" />
            
                    </div>
            </div>
            
            </div> 

            <div className='copy-footer'>
                <p> Copy Right &#169; {year}</p>
            </div>
            
        </footer>
    
    );
};

export default Footer;