import React from "react";
import { useSelector } from "react-redux";


import HomePage from "../pages/HomePage.js";
import LoginSignUp from "../pages/LoginSignUp.js";
import Leaderboards from "../pages/Leaderboards.js";


import { useState } from "react";
import NavBar from "./NavBar.js";
import { Routes, Route } from "react-router-dom";

import CatchPage from "../pages/catchPage.js";


import { UserContext } from "../context/UserContext.js";
import { ThemeContext } from "../context/ThemeContext.js";


function App() {
  const [user, setUser] = useState(null);
  // console.log("user", user._id);
  const [theme, setTheme] = useState("light");
  const data = useSelector((state) => state.data); // Assuming "data" is a piece of state in your Redux store

  // console.log(data);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      
      <div className="App">
        {user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage data={data}/>} />
              <Route path="/catch" element={<CatchPage data={data} userId={user._id}/>} />
              {/* <Route path="/leaderboards" element={<Leaderboards />} /> */}
              <Route path="/login" element={<LoginSignUp />} />
              <Route path="/signup" element={<LoginSignUp />} />
            </Routes>
          </>
        ) : (
          <LoginSignUp />
        )}
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
