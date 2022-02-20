import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Contacts Manager</Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Header;
