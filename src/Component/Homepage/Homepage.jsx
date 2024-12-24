import React, { useState, useEffect } from "react";
import logoimg from "../../assets/Subtract.png";
import home from "../../assets/home.png";
import code from "../../assets/code.png";
import cloud from "../../assets/cloud.png";
import book from "../../assets/book.png";
import setting from "../../assets/setting.png";
import phone from "../../assets/mobilephone.png";
import logout from "../../assets/sign-out.png";
import refreshicon from "../../assets/refreshicon.png";
import plus from "../../assets/plus.png";
import searchicon from "../../assets/Search.png";
import bunbtn from "../../assets/bunbth.png";
import into from "../../assets/into.png";
import "./Homepage.css";
import Repocomponent from "../Repocomponent/Repocomponent";
import { BallTriangle } from "react-loader-spinner";

const Homepage = () => {
  const [showmobilenav, setshowmobilenav] = useState(false);
  const [repodetails, setRepodetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://api.github.com/users/Kalpanabharath/repos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();

      // Map the API data into the expected format
      const formattedRepos = data.map((repo) => {
        const updatedDate = new Date(repo.updated_at);
        const currentDate = new Date();
        const timeDifference = Math.floor(
          (currentDate - updatedDate) / (1000 * 60 * 60 * 24)
        );

        const updatedText =
          timeDifference === 0
            ? "Updated today"
            : timeDifference === 1
            ? "Updated yesterday"
            : `Updated ${timeDifference} days ago`;

        return {
          reponame: repo.name,
          privacy: repo.private ? "Private" : "Public",
          technology: repo.language || "N/A",
          storage: `${(repo.size / 1024).toFixed(2)} MB`,
          tine: updatedText,
        };
      });

      setRepodetails(formattedRepos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="Homepage">
      <div className="navigationsidediv">
        <div className="navigationsidetop">
          <div className="logowidthname">
            <img src={logoimg} alt="logoimg" />
            <p>CodeAnt AI</p>
          </div>
          <select id="username" name="user" className="selectbox">
            <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
            <option value="kalpana">kalpana</option>
            <option value="bharath">bharath</option>
            <option value="lokesh">lokesh</option>
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
              <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
              <option value="kalpana">kalpana</option>
              <option value="bharath">bharath</option>
              <option value="lokesh">lokesh</option>
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
                <p>{repodetails.length} total repositories</p>
              </div>
              <div className="repositorybuttionbuttion">
                <button onClick={fetchRepos}>
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
            {loading ? (
              <div className="loader-container">
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              repodetails.map((obj, index) => (
                <Repocomponent key={index} obj={obj} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
