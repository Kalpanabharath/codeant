import React from "react";
import Signin from "./Component/Signin/Signin";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/codeant/" element={<Signin />} />
        <Route path="/codeant/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
