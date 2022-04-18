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
            <div className='footer-main-div d-flex justify-content-around'>
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
                    <div>
                        <img style={{width:'30px'}} src={facebook} alt="" />
                        <img style={{width:'50px'}}src={twitter} alt="" />
    
                        <img style={{width:'50px'}}src={instagram} alt="" />
            
                    </div>
            </div>
            
            </div> 

            <div className='copy-footer'>
                <p>&#169; copyright {year}</p>
            </div>
            
        </footer>
    
    );
};

export default Footer;