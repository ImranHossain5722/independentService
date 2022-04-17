import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'500px'}} className="w-100 d-flex justify-content-center align-items-center" role="status">
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;