import { Link, useNavigate } from "react-router-dom";
import { FiUsers, FiUser, FiLogOut, FiPlus } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Student Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FiUsers /> Students
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                <FiPlus /> Add Student
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <FiUser /> Profile
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-light btn-sm"
                onClick={handleLogout}
              >
                <FiLogOut /> Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;