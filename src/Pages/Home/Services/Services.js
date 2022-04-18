import React,{useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services , setServices]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className='services-main-div'>
            <h1 className=' my-service-title text-center p-5' >My Services</h1>
        
                 <div className='container  services-container'>
                 {
                    services.map( service => <Service
                    
                    key={service.id} service ={service}
                    ></Service>)
                 }
 
                </div>
            
        </div>
    );
};

export default Services;