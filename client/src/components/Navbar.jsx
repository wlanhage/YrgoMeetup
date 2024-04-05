import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/reg">Reg</Link>
        <Link to="/Company">Företag</Link>
        <Link to="/CompanyCard">KortDesign</Link>
        <Link to="/LoginForm"> login</Link>
        <Link to="/Companys">Companys</Link>
        <Link to="/BurgerMenu">BurgerMenu</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
