import React from 'react';
import Characters from './characters/CharacterIndex';
import CharacterDetail from './characters/CharacterDetail';

import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="container">
      <header><h1>Harry Potter Application</h1></header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/characters"} className="nav-link">
                Characters
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Navigate to={"/characters"} />} />
          <Route path="/characters">
            <Route index element={<Characters />} />
          </Route>
          <Route path="/character/:id">
            <Route index element={<CharacterDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
