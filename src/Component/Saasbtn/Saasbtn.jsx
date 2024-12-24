import React from "react";
import githubicon from "../../assets/githubicon.png";
import bitbucketicon from "../../assets/bitbucketicon.png";
import gitlabicon from "../../assets/gitlabicon.png";
import devopsicon from "../../assets/devopsicon.png";
import "./Saasbtn.css";
import { Link } from "react-router-dom";

const Saasbtn = () => {
  return (
    <div className="Saasbtn">
      <button className="loginpagebtn">
        <img src={githubicon} alt="githubicon" />
        <Link to="/homepage">Sign in with Github</Link>
      </button>
      <button className="loginpagebtn">
        <img src={bitbucketicon} alt="bitbucketicon" />
        <Link to="/homepage">Sign in with Bitbucket</Link>
      </button>
      <button className="loginpagebtn">
        <img src={devopsicon} alt="devopsicon" />
        <Link to="/homepage"> Sign in with Azure Devops</Link>
      </button>
      <button className="loginpagebtn">
        <img src={gitlabicon} alt="gitlabicon" />
        <Link to="/homepage"> Sign in with GitLab</Link>
      </button>
    </div>
  );
};

export default Saasbtn;
