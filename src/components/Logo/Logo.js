import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">Oliver <span>Randell</span></Link>
        </div>
    )
}

export default Logo;