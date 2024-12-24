import React from "react";
import round from "../../assets/Ellipse 1.png";
import database from "../../assets/database.png";
import "./Repocomponent.css";

const Repocomponent = ({ obj }) => {
  let { reponame, privacy, technology, storage, tine } = obj;
  return (
    <div className="Repocomponent">
      <div className="repocomrowone">
        <h4>{reponame}</h4>
        <p>{privacy}</p>
      </div>
      <div className="repocomrowtwo">
        <div>
          <p>{technology}</p>
          <img src={round} alt="round" className="roundblue" />
        </div>
        <div>
          <img src={database} alt="database" />
          <p>{storage}</p>
        </div>
        <p>{tine}</p>
      </div>
    </div>
  );
};

export default Repocomponent;
