import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">O<span>R.</span></Link>
            {/* <div className='underline'></div> */}
        </div>
    )
}

export default Logo;