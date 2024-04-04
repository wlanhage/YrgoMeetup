import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
          <Link to="/">Home</Link>
          <Link to="/Register">Reg</Link>
          <Link to="/Company">Företag</Link>
          <Link to="/CompanyCardDesign">KortDesign</Link>
          <Link to="/UserDashboard"> Login</Link>
      </ul>
    </nav>
  );
}

export default Navbar
