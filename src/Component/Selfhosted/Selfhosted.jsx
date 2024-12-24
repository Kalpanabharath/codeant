import React from "react";
import "./Selfhosted.css";
import bitbucketicon from "../../assets/bitbucketicon.png";
import ssoicon from "../../assets/ssoicon.png";
import { Link } from "react-router-dom";

const Selfhosted = () => {
  return (
    <div className="Saasbtn">
      <button className="loginpagebtn">
        <img src={bitbucketicon} alt="bitbucketicon" />
        <Link to="/codeant/homepage">Self Hosted GitLab</Link>
      </button>
      <button className="loginpagebtn">
        <img src={ssoicon} alt="ssoicon" />
        <Link to="/codeant/homepage">Sign in with SSO</Link>
      </button>
    </div>
  );
};

export default Selfhosted;
