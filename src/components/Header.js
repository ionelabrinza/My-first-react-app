import { Navbar, NavbarBrand } from 'reactstrap';
import NicoletaLogo from '../app/assets/img/logonb.png';

const Header = () => {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand href="/">
          <img src={NicoletaLogo} alt="nicoleta logo" />
        </NavbarBrand>
      </Navbar>
      HI there
    </div>
  );
};

export default Header;
