import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>I'm services </h1>
            <Link to='/checkout'>
            <button>check out </button>
            </Link>
            
        </div>
    );
};

export default Services;