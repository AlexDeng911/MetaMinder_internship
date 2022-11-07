/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../sass/app.scss';
import logo from '../assets/logo.png'
import sidebuttons from '../assets/sidebuttons.png'
import buttonSettings from '../assets/buttonSettings.png'
import logout from '../assets/logout.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={logo} className="logo"/>
                <div>
                    
                    <div className="bar-buttons">  
                        
                        <img src={sidebuttons} />
                        <img src={logout} className="logout-button"/>        
                    </div>
                    <img src={buttonSettings} className="settings-button-background"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar 