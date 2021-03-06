import React from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '@mui/material/Button';
import './Header.scss'
const Header = () => {
    return (
        <div className="headerBackground">
            <Navbar/>
           <div className="d-flex justify-content-center items-align">
           <div className='text-center'>
                <h1 className='text-light'>Bienvenue chez The Shark 3D</h1>
                <h3 className='text-light font-Weight'>Services de conception et de fabrication additive Impression <br />3D industrielle</h3>
                <Button variant="contained" className="ButtonOfSubmission">Soumission</Button>
            </div>
            
           </div>
        </div>
    );
};

export default Header;