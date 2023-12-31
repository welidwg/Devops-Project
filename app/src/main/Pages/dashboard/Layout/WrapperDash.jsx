import NavbarDash from "../components/NavbarDash";
import SideBarDash from "../components/SideBarDash";
import "../../../../assets/dash/styleDash.css";
import "../../../../assets/dash/bootstrap.min.css";
import { useEffect } from "react";
import $ from "jquery";
export default function WrapperDash(props) {
  useEffect(() => {
    $(".sidebar-toggler").click(function () {
      $(".sidebar, .content").toggleClass("open");
      return false;
    });
  }, []);
  return (
    <div className="container position-relative bg-dark d-flex ">
      {/* sidebar */}
      {/* <SideBarDash /> */}

      <div className="d-flex flex-column  w-100  bg-dark p-4 vh-100">
        {/* navbar */}
        <NavbarDash />
        {/* main */}
        <div className="container-fluid pt-4  bg-dark">
          <div className="row  bg-secondary dash-content    mx-0">
            {props.children}
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  );
}
