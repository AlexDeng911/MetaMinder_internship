import React from "react";
import { hot } from "react-hot-loader";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Password from "./components/Password";
import AccountSettings from "./components/AccountSettings";
import "./sass/app.scss";
import "./sass/navbar.scss";

const App = () => {
  const [page, setPage] = React.useState(0);
  return (
    <div className="app">
      <Navbar />
      <div className="page">
        <div className="page-frame">
          <div className="frame">
            <div className="title">Settings</div>
            <div className="profile-title-frame">
              <button
                onClick={() => {
                  setPage(0);
                }}
                className={page === 0 ? "settings-button-active" : "settings-button"}
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setPage(1);
                }}
                className={page === 1 ? "settings-button-active" : "settings-button"}
              >
                Account settings
              </button>
              <button
                onClick={() => {
                  setPage(2);
                }}
                className={page === 2 ? "settings-button-active" : "settings-button"}
              >
                Password
              </button>
            </div>
            <div className="profile-frame">
              {page === 0 && <Profile />}
              {page === 1 && <AccountSettings />}
              {page === 2 && <Password />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default hot(module)(App);
