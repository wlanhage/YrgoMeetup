import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Company">Företag</Link>
        <Link to="/CompanyCard">KortDesign</Link>
        <Link to="/UserDashboard"> Login</Link>
        <Link to="/Companys">Companys</Link>
        <Link to="/BurgerMenu">BurgerMenu</Link>
        <Link to="/UserDashboard">Login</Link>
        <Link to="/UserProfile">UserProfile</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
