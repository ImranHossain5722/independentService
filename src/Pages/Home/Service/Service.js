import React from 'react';
import './Service.css'

const Service = ({service}) => {

const {title, price, description, img } = service
    return (
        <div>
            <div className=''>
                <div className='container-div ' >
                    <img className='img-fluid ' src={img} alt="" />
                    <h2 className='service-title'>{title}</h2>
                    <h4 className='service-price'><span className='span-price'> Price :
                    </span> {price} $ </h4>
                    <p className='description'>{description}</p>
                    <button className='button-checkOut'>Check Out </button>
                </div>
            </div>
        </div>
    );
};

export default Service;