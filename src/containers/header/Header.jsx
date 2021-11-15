import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="sailor__header section__padding" id="home">
                <div className="sailor__header-content">
                    <h1 className="sailor__header-text">
                        Find your <span class="last-word">way</span>
                    </h1>
                    <p>Travel with us and get an unfergettable experience from every trip.</p>
                    <div>
                        <button className="sailor__button-details">View Details</button>
                    </div>
                    
                </div>
            </div>          
        </div>
    )
}

export default Header
