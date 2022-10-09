import React from 'react';
import logo from"../../images/Logo.svg"
import"./Header.css"
const Header = () => {
    return (
        <div>
            <nav className='Header'>
                <img src={logo} alt="" />
                <div>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Genarel inventory</a>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;