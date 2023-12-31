import { NavLink } from "react-router-dom";
import logo from "../../../../assets/5.png";
export default function SideBarDash(props) {
  return (
    <>
      <div className="sidebar side-dash bg-dark pe-4 pb-3 open">
        <nav className="navbar bg-transparent navbar-light">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <img src={logo} />
            </h3>
          </a>
          {/* <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src="dash/img/user.jpg"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div> */}
          <div className="navbar-nav w-100">
            {/* <NavLink to={"/dash"} className="nav-item nav-link">
              <i className="fas fa-tachometer-alt me-2 text-dark"></i>Dashboard
            </NavLink> */}

            <NavLink to={"/dash/cars"} className="nav-item nav-link">
              <i className="fas fa-cars me-2 text-dark"></i>Cars
            </NavLink>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fas fa-users me-2 text-dark"></i>Users
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="button.html" className="dropdown-item active">
                  <i className="fas fa-users"></i> Users list
                </a>
                <a href="typography.html" className="dropdown-item">
                  <i className="fas fa-plus"></i> Add user
                </a>
              </div>
            </div>
            <NavLink to={"/"} className="nav-item nav-link mt-5">
              <i className="fas fa-arrow-left me-2 text-dark"></i>Go back
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
