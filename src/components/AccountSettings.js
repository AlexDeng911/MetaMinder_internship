import React from "react";
import Button from "./Button";
import "../sass/account.scss";
import ReactFlagsSelect from "react-flags-select";

const AccountSettings = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div className='account-frame'>
      <div className='account'>
        <div className='general-info'>
          <div className='account-text-active'>Account settings</div>
          <div className='company-title'>Change Company name</div>
          <div className='company-form'>
            <div className='input-field-title'>Company Name</div>
            <input type='text' className='input-field' />
          </div>
          <div className='language-title'>Change Language</div>
          <div className='language-form'>
            <div className='input-field-title'>Language</div>
            <div className='language-field'>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder='Select Language'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='save-button-account'>
        <Button />
      </div>
    </div>
  );
};

export default AccountSettings;

//https://www.npmjs.com/package/react-flags-select
