import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <div>
      <div className="logoContainer">
        <h1>साउती</h1>
      </div>
      {/* Sano screen ma navbar ko styling bigrincha tyo chai react-bootstrap ko kunai kunai field overwrite garera ho */}
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto">
              <NavLink to="/">होमपेज</NavLink>

              <NavDropdown title="समाचार" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">राजनीति</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">अर्थ</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">समाज</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink to="/rajniti">भिडियो</NavLink>

              <NavLink to="/create">पोडकाष्ट</NavLink>

              <NavLink to="/create">खोजरिपोर्ट</NavLink>

              <NavLink to="/create">म्यागजिन </NavLink>

              <NavDropdown title=" नीति" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">गृहनीति</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">विदेशनीति</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/राजनीति">अर्थनीति</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink to="/posts">सबै</NavLink>

              <NavLink to="/create">पोडकाष्ट</NavLink>

              <NavLink to="/create">म्यागजिन </NavLink>

              <NavLink to="/login">लग-इन</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
