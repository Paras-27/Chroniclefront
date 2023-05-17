import React from 'react'
import '../css/navbar.css'
import logo from '../logo.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='brand'>
                <img className='logo' src={logo} />
            </div>
            <div className='btn'>Join Beta</div>
        </div>
    )
}

export default Navbar