import React from 'react';
import './Service.css'

const Service = ({service}) => {

const {title, price, description, img } = service
    return (
        <div>
            <div className=''>
                <div className='container-div ' >
                    <img className='img-fluid ' src={img} alt="" />
                    <h2>{title}</h2>
                    <h4>{price}</h4>
                    <p>{description}</p>
                    <button>Check Out </button>
                </div>
            </div>
        </div>
    );
};

export default Service;