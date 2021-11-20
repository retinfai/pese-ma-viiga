import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./components/pages/App"
// import routes from './routes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import SearchResults from "./components/pages/SearchResults";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);