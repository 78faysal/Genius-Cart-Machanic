import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';


const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notFound} alt="" /> <br />
            <Link to='/'><button className='btn btn-warning'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;