import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';


const Menu = () => (
    <>
    <p><a href="#About">About</a></p>
    <p><a href="#Routes">Routes</a></p>
    <p><a href="#Blog">Blog</a></p>
    <p><a href="#Contact">Contact</a></p>
    </>
)


//BEM -> block element modifier 

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='sailor__navbar'>
            <div className='sailor__navbar-links'>
                <div className ='sailor__navbar-links-logo'>
                    <h4>Sailor</h4>
                </div>
                <div className="sailor__navbar-links_container">
                    <Menu />
                </div>
            </div>
                <div className="sailor__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="sailor__navbar-menu_container scale-up-center">
                            <div className="sailor__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
        </div>
    );
};

export default Navbar
