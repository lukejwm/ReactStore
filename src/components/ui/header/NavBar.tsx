import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }: NavBarProps) => {
  return (
    <>
      <Navbar bg="light" variant="light" className="shadow-sm">
        <Container>
          <Navbar.Brand className="text-danger">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              {title}
            </Link>
          </Navbar.Brand>
          <Button variant="success" style={{ marginRight: "10px" }}>
            <Link
              to="/add-new"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Add New Product
            </Link>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
