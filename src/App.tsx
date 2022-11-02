import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import Home from "./pages/Home";
import Private from "./pages/Private";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="private">Privada</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
