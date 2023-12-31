import { NavLink } from "react-router-dom";
import Logo from "../../assets/5.png";

export default function SideBar(props) {
  return (
    <>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__widget">
          <a href="#">
            <i className="fas fa-cart-plus"></i>
          </a>
          <a href="#" className="search-switch">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="primary-btn">
            Login
          </a>
        </div>
        <div className="offcanvas__logo">
          <NavLink to={"/home"}>
            <img src={Logo} alt="" className="img-fluid logo_main" />
          </NavLink>
        </div>
        <div id="mobile-menu-wrap"></div>
        <ul className="offcanvas__widget__add">
          <li>
            <i className="far fa-clock"></i> Week day: 08:00 am to 18:00 pm
          </li>
          <li>
            <i className="far fa-envelope"></i> Info.colorlib@gmail.com
          </li>
        </ul>
        <div className="offcanvas__phone__num">
          <i className="fas fa-phone"></i>
          <span>(+12) 345 678 910</span>
        </div>
        <div className="offcanvas__social">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}
