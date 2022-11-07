/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import avatar from '../assets/avatar.png'
import Button from "./Button";
import '../sass/profile.scss'


const Profile = () =>{
    return(
            <div className="profile">
                <div className="general-info">
                    <div className="profile-title">
                        Profile
                    </div>
                    <div className="avatar-frame">
                        <div className="avatar">
                            <div className="avatar-img">
                                <img src={avatar} className="profile-img"/>
                                <div className="edit-img">
                                    Edit
                                </div>
                            </div>
                            <div className="profile-name">
                                Alexey Zayarskiy
                            </div>
                        </div>
                        <div className="registration-form">
                            <div className="input-field-title">
                                First name
                            </div>
                            <input type="text" className="input-field"/>
                            <div className="input-field-title">
                                Last name
                            </div>
                            <input type="text" className="input-field"/>
                        </div>
                    </div>
                        <div className="contact-title">
                            Contact information
                        </div>
                    <div className="contact-form">
                        <div className="input-field-title">
                                Email
                        </div>
                        <input type="email" className="input-field" background="#F8F9FD"/>
                        <div className="input-field-title">
                                Phone number
                        </div>
                        <input id="phone" type="tel" className="input-field"/>
                    </div>
                </div>
                <div className="profile-save-button">
                    <Button/> 
                </div>
        </div>
    )
}

export default Profile;