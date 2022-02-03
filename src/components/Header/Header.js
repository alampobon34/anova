import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { FaSearch, FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src="/logo1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Anova"
              />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto">
              <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/supports">
              <Nav.Link>Supports</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              
              
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#search">
                <FaSearch />
              </Nav.Link>
              <Nav.Link href="#cart">
                <FaCartArrowDown />
              </Nav.Link>
              <Nav.Link href="#user">
                <FaUserAlt />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
