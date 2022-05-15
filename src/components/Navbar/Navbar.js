import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="leftNav">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div className="rightNav">
                    <ul className='links'>
                        <li>
                            <a className='hover-underline-animation' href="#">Home</a>
                        </li>
                        <li>
                            <a className='hover-underline-animation' href="#">Historical</a>
                        </li>
                        <li>
                            <a className='hover-underline-animation' href="#">Beaches</a>
                        </li>
                        <li>
                            <a className='hover-underline-animation' href="#">Most Visited Places</a>
                        </li>
                    </ul>
                    <ul className='socialMediaHandels'>
                        <li>
                            <img src="Assets/facebook.png" alt="" />
                        </li>
                        <li>
                            <img src="Assets/instagram.png" alt="" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;