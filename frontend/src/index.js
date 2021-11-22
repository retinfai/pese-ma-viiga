import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import PesePage from './components/pages/PesePage';
import SearchResults from "./components/pages/SearchResults";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/pese-:peseNum" element={<PesePage />} />
      
    </Routes>
  </Router>,

  document.getElementById("root")
);