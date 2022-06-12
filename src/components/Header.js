import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NicoletaLogo from '../app/assets/img/butterfly-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={NicoletaLogo} alt="nicoleta logo" className="float-start" />
          <h1 className="mt-1">Nicoleta Brinza</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
