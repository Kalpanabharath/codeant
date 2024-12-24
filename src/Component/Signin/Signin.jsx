import React, { useState } from "react";
import "./Signin.jsx";
import "./Signin.css";
import smallcodeantlogo from "../../assets/Subtract.png";
import flowchart from "../../assets/smallflowchat.png";
import topdirarrow from "../../assets/topdirarrow.png";
import codeantshadow from "../../assets/codeantshadow.png";
import Saasbtn from "../Saasbtn/Saasbtn.jsx";
import Selfhosted from "../Selfhosted/Selfhosted.jsx";

const Signin = () => {
  let [selectedbtn, setselectedbtn] = useState("saasbtn");
  return (
    <div className="Signin">
      <div className="signinpageLeft">
        <div className="detactbox">
          <div className="detactboxrowone">
            <img src={smallcodeantlogo} alt="smallcodeantlogo" />
            <p>AI to Detect & Autofix Bad Code</p>
          </div>
          <div className="detactboxrowtwo">
            <div className="countdetails">
              <h6>30+ </h6>
              <p>Language Support</p>
            </div>
            <div className="countdetails">
              <h6>10k+</h6>
              <p>Developers</p>
            </div>
            <div className="countdetails">
              <h6>100k+</h6>
              <p>Hours Saved</p>
            </div>
          </div>
          <div className="absolutefordetactbox">
            <div className="absoluterowone">
              <img src={flowchart} alt="flowchart" />
              <div className="absoluterowonecontent">
                <div className="arrowpercentage">
                  <img src={topdirarrow} alt="topdirarrow" />
                  <p>14%</p>
                </div>
                <p>This Week</p>
              </div>
            </div>
            <div className="absoluterowtwo">
              <p>Issues Fixed</p>
              <h6>500K+</h6>
            </div>
          </div>
        </div>
        <img src={codeantshadow} alt="codeantshadow" className="shadorlogo" />
      </div>
      <div className="signinpageRight">
        <div className="componentwoth">
          <div className="signinpageRightdiv">
            <div className="codeintailogoWithText">
              <img src={smallcodeantlogo} alt="smallcodeantlogo" />
              <p>CodeAnt AI</p>
            </div>
            <h4>Welcome to CodeAnt AI</h4>
            <div className="buttiondiv">
              <button
                onClick={() => setselectedbtn("saasbtn")}
                className={selectedbtn === "saasbtn" ? "buttionactive" : ""}
              >
                SAAS
              </button>
              <button
                onClick={() => setselectedbtn("self")}
                className={selectedbtn === "self" ? "buttionactive" : ""}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className="componenttoogle">
            {selectedbtn === "saasbtn" ? <Saasbtn /> : <Selfhosted />}
          </div>
        </div>

        <p className="privacytext">
          By signing up you agree to the
          <span> Privacy Policy</span>.
        </p>
      </div>
      .
    </div>
  );
};

export default Signin;
