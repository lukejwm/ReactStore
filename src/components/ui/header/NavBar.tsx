import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }: NavBarProps) => {
  return (
    <>
      <Navbar bg="light" variant="light" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="text-danger">
            {title}
          </Navbar.Brand>
          <Button
            variant="success"
            onClick={() => console.log("Clicked The Button!")}
          >
            Add New Product
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
