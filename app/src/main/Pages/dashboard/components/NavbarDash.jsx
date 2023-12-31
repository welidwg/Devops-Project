import { NavLink } from "react-router-dom";
import { AUTH_TOKEN, AUTH_USER } from "../../../../constants";

export default function NavbarDash(props) {
  const user = AUTH_TOKEN && AUTH_USER;

  return (
    <nav className="navbar navbar-expand bg-color-1 rounded-pill navbar-light sticky-top px-4 py-0 nav-dash">
      <NavLink to="/" className=" flex-shrink-0">
        <i className="fal fa-arrow-left text-dark"></i>
      </NavLink>
      <div className="mx-auto d-flex align-items-center justify-content-between">
        <NavLink to="/dash/cars" className="nav-link link-nav">
          <i className="fas fa-cars"></i> Vos Voitures
        </NavLink>
        {user && user.role == 0 ? (
          <NavLink to="/dash/users" className="nav-link link-nav">
            <i className="fas fa-users"></i> Utilisateurs
          </NavLink>
        ) : (
          <></>
        )}
        <NavLink to="/dash/profile" className="nav-link link-nav">
          <i className="fas fa-user"></i> Mon profile
        </NavLink>
      </div>

      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src="/dash/img/user.jpg"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-none text-light d-lg-inline-flex">
              {user.username}
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
              className="dropdown-item"
            >
              Déconnexion
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
