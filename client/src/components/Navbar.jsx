import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
          <Link to="/">Home</Link>
          <Link to="/reg">Reg</Link>
          <Link to="/Company">Företag</Link>
          <Link to="/CompanyCardDesign">KortDesign</Link>
      </ul>
    </nav>
  );
}

export default Navbar
