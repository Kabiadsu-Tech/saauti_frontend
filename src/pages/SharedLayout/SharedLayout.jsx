import { Link, Outlet } from "react-router-dom";
import NavbarComponent from "../../components/navbar/Navbar";
// import Navbar from "../../components/navbar/Navbar";
const Homepage = () => {
  return (
    <>
      <NavbarComponent />
      {/* As this is the parent component for our route this <Outlet/> should be added here */}
      <Outlet />
    </>
  );
};

export default Homepage;
