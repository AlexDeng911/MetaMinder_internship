import React from "react";
import Button from "./Button";
import '../sass/password.scss'


const Password = () =>{
    return (
      <div className="password-frame">
        <div className="password">
          <div className="password-title">Password</div>
          <div className="change-password-title">Change password</div>
          <div className="password-general-info">
            <div className="password-input">
              <div className="passwword-input-title">Current password</div>
              <input type="password" className="password-field" />
            </div>
            <div className="password-input">
              <div className="passwword-input-title">New password</div>
              <input type="password" className="password-field" />
            </div>
            <div className="password-input">
              <div className="passwword-input-title">Re-Type New password</div>
              <input type="password" className="password-field" />
            </div>
          </div>
        </div>
        <div className="save-button-password">
          <Button />
        </div>
      </div>
    );
}

export default Password;