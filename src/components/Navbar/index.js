import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home |
      </Link>
      <Link className="navbar-brand" to="/books">
        Books |
      </Link>
      <Link className="navbar-brand" to="/search">
        Search
      </Link>
      
    </nav>
  );
}

export default Navbar;
