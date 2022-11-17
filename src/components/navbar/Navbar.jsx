import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "../../redux/features/auth";
import { useNavigate } from "react-router-dom";
import { Navigate, NavLink } from "react-router-dom";
// UI
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const NavbarComponent = () => {
  let navigate = useNavigate();
  const login = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  const logoutHanlder = () => {
    navigate("/");
    dispatch(checkLogin({ isLoggedIn: false, userId: null }));
  };
  return (
    <div>
      <div className="logoContainer">
        <h1>साउती</h1>
      </div>
    
        <Navbar  className="navbar justify-content-center"  bg="light" expand="lg">
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
              {login.isLoggedIn ? (
                <NavLink onClick={logoutHanlder}>लग-out</NavLink>
              ) : (
                <NavLink to="/login">लग-इन</NavLink>
              )}
              {/* <NavLink to="/login">लग-इन</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    
    </div>
  );
};

export default NavbarComponent;
