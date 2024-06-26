import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";

import Earn from "pages/Earn/Earn";
import Splash from "pages/Splash/splash";

import Homepage from "./pages/Home";
import Wallet from "./pages/Wallet/wallet";

const App = () => {
  const [gohome, setGohome] = useState(0);
  let retrieve1,retrieve2;
  if (!gohome) retrieve1 = setTimeout(() => setGohome(1), 3000);
  useEffect(() => {
    if (gohome == 1){ 
      clearTimeout(retrieve1)
      retrieve2 = setTimeout(() => setGohome(2), 500);
    }
    if (gohome == 2) {
      setGohome(3);
      clearTimeout(retrieve2);
    }
  }, [gohome]);
  const handle = () => {
    if (gohome == 0) {
      console.log(gohome);
      return <Navigate to="/splash" />;
    } else if (gohome == 1) {
      return <Navigate to="/" />;
    }
  };
  //
  return (
    <BrowserRouter>
      <Router>
        <Route path="/splash" element={<Splash />} />
        <Route path="/" element={<Homepage />} key="1" />
        <Route path="/earn" element={<Earn />} />
        <Route path="/wallet" element={<Wallet />} />
      </Router>
      {handle()}
    </BrowserRouter>
  );
};

export default App;
