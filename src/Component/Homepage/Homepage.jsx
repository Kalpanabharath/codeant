import React, { useState } from "react";
import logoimg from "../../assets/Subtract.png";
import code from "../../assets/code.png";
import home from "../../assets/home.png";
import cloud from "../../assets/cloud.png";
import book from "../../assets/book.png";
import setting from "../../assets/setting.png";
import phone from "../../assets/mobilephone.png";
import logout from "../../assets/sign-out.png";
import refreshicon from "../../assets/refreshicon.png";
import plus from "../../assets/plus.png";
import searchicon from "../../assets/Search.png";
import "./Homepage.css";
import Repocomponent from "../Repocomponent/Repocomponent";
import bunbtn from "../../assets/bunbth.png";
import into from "../../assets/into.png";

const Homepage = () => {
  let [showmobilenav, setshowmobilenav] = useState(false);
  let repodetails = [
    {
      reponame: "design-system",
      privacy: "Public",
      technology: "React",
      storage: "7320 KB",
      tine: "Updated 1 day ago",
    },
    {
      reponame: "codeant-ci-app",
      privacy: "Private",
      technology: "Javascript",
      storage: "5871 KB",
      tine: "Updated 2 days ago",
    },
    {
      reponame: "analytics-dashboard",
      privacy: "Private",
      technology: "Python",
      storage: "4521 KB",
      tine: "Updated 5 days ago",
    },
    {
      reponame: "mobile-app",
      privacy: "Public",
      technology: "Swift",
      storage: "6210 KB",
      tine: "Updated 6 days ago",
    },
    {
      reponame: "blog-website",
      privacy: "Public",
      technology: "HTML/CSS",
      storage: "1876 KB",
      tine: "Updated 4 day ago",
    },
    {
      reponame: "social-network",
      privacy: "Public",
      technology: "PHP",
      storage: "5432 KB",
      tine: "Updated 7 day ago",
    },
    {
      reponame: "design-system",
      privacy: "Public",
      technology: "React",
      storage: "7320 KB",
      tine: "Updated 1 day ago",
    },
    {
      reponame: "codeant-ci-app",
      privacy: "Private",
      technology: "Javascript",
      storage: "5871 KB",
      tine: "Updated 2 days ago",
    },
    {
      reponame: "analytics-dashboard",
      privacy: "Private",
      technology: "Python",
      storage: "4521 KB",
      tine: "Updated 5 days ago",
    },
    {
      reponame: "mobile-app",
      privacy: "Public",
      technology: "Swift",
      storage: "6210 KB",
      tine: "Updated 6 days ago",
    },
    {
      reponame: "blog-website",
      privacy: "Public",
      technology: "HTML/CSS",
      storage: "1876 KB",
      tine: "Updated 4 day ago",
    },
    {
      reponame: "social-network",
      privacy: "Public",
      technology: "PHP",
      storage: "5432 KB",
      tine: "Updated 7 day ago",
    },
  ];

  return (
    <div className="Homepage">
      <div className="navigationsidediv">
        <div className="navigationsidetop">
          <div className="logowidthname">
            <img src={logoimg} alt="logoimg" />
            <p>CodeAnt AI</p>
          </div>

          <select id="username" name="user" className="selectbox">
            <option value="apple">UtkarshDhairyaPanwar</option>
            <option value="banana">kalpana</option>
            <option value="cherry">bharath</option>
            <option value="date">lokesh</option>
          </select>

          <ul>
            <li>
              <img src={home} alt="home" />
              Repositories
            </li>
            <li>
              <img src={code} alt="code" />
              AI Code Review
            </li>
            <li>
              <img src={cloud} alt="cloud" />
              Cloud Security
            </li>
            <li>
              <img src={book} alt="book" />
              How to Use
            </li>
            <li>
              <img src={setting} alt="setting" />
              Settings
            </li>
          </ul>
        </div>
        <div className="navigationsidebottom">
          <ul>
            <li>
              <img src={phone} alt="phone" />
              Support
            </li>
            <li>
              <img src={logout} alt="logout" />
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="contentsidediv">
        <div className="homepagetightdisediv">
          <div className="mobilenav">
            <div className="logoandname">
              <img src={logoimg} alt="logoimg" />
              <p>CodeAnt AI</p>
            </div>

            <img
              src={showmobilenav ? into : bunbtn}
              alt={showmobilenav ? "Close Menu" : "Open Menu"}
              className="bunbtn"
              onClick={() => setshowmobilenav(!showmobilenav)}
            />
          </div>
          <div
            className={showmobilenav ? "mobilenavlinkshow" : "mobilenavlinks"}
          >
            <select id="username" name="user" className="selectbox">
              <option value="apple">UtkarshDhairyaPanwar</option>
              <option value="banana">kalpana</option>
              <option value="cherry">bharath</option>
              <option value="date">lokesh</option>
            </select>
            <ul>
              <li>
                <img src={home} alt="home" />
                Repositories
              </li>
              <li>
                <img src={code} alt="code" />
                AI Code Review
              </li>
              <li>
                <img src={cloud} alt="cloud" />
                Cloud Security
              </li>
              <li>
                <img src={book} alt="book" />
                How to Use
              </li>
              <li>
                <img src={setting} alt="setting" />
                Settings
              </li>
              <li>
                <img src={phone} alt="phone" />
                Support
              </li>
              <li>
                <img src={logout} alt="logout" />
                Logout
              </li>
            </ul>
          </div>

          <div className="defulttopdiv">
            <div className="repositoryandbuttion">
              <div className="repositorybuttiontext">
                <h5>Repositories</h5>
                <p>33 total repositories</p>
              </div>
              <div className="repositorybuttionbuttion">
                <button>
                  <img src={refreshicon} alt="refreshicon" />
                  Refresh All
                </button>
                <button>
                  <img src={plus} alt="plus" />
                  Add Repository
                </button>
              </div>
            </div>
            <div className="searchbox">
              <img
                src={searchicon}
                alt="searchicon"
                className="searchiconabsolute"
              />
              <input type="text" placeholder="Search Repositories" />
            </div>
          </div>
          <div className="displayrepodiv">
            {repodetails.map((obj) => (
              <Repocomponent obj={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
