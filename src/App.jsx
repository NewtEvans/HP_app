import React from "react";
import Characters from "./characters/CharacterIndex";
import SpellIndex from "./spells/SpellIndex";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CharacterDetail from "./characters/CharacterDetail";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"#"} className="navbar-brand">
            HP App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={"/characters"}>
                  Characters
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/spells"}>
                  Spells
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route index element={<Navigate to={"/characters"} />} />
          <Route path="/characters">
            <Route index element={<Characters />} />
          </Route>
          <Route path="/character/:id">
            <Route index element={<CharacterDetail />} />
          </Route>
          <Route path="/spells">
            <Route index element={<SpellIndex />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
