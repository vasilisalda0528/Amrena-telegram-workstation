import React from 'react';

import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import Earn from "pages/Earn/Earn";

import Homepage from "./pages/Home";
import Wallet from './pages/Wallet/wallet';

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/"   element={<Homepage/> } key='1'/>
        <Route path="/earn"  element={<Earn/> } />
        <Route path="/wallet"  element={<Wallet/> } />
      </Router>
    </BrowserRouter>
  );
};

export default App;
