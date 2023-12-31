import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import $ from "jquery";
import { useEffect, useState } from "react";
import Video from "../../assets/video.mp4";
import { useLocation, useParams } from "react-router";
import { ToastContainer } from "react-toastify";
const styles = import("../../assets/style.css");
const style1 = import("../../indexx.css");
import "react-toastify/dist/ReactToastify.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Wrapper(props) {
  const [isDash, setIsDash] = useState(false);
  const location = useLocation();
  const isDashb = location.pathname.startsWith("/dash");

  useEffect(() => {
    setIsDash(window.location.pathname.startsWith("dash"));
    let video = document.getElementById("video-background");
    if (video != undefined) {
      video.playbackRate = 0.8;
      setInterval(() => {
        if (video.currentTime > 6.6) {
          video.pause();
        }
      }, 1000);
    }
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    $(window).on("load", function () {
      $(".filter__controls li").on("click", function () {
        $(".filter__controls li").removeClass("active");
        $(this).addClass("active");
      });
      if ($(".car-filter").length > 0) {
        var containerEl = document.querySelector(".car-filter");
        // var mixer = mixitup(containerEl);
      }
      // $(".set-bg").each(function () {
      //   var bg = $(this).data("setbg");
      //   $(this).css("background-image", "url(" + bg + ")");
      // });
    });
  }, []);
  return (
    <>
      <div id="preloder">
        <div className="loader"></div>
      </div>
      <div className="offcanvas-menu-overlay"></div>
      {!isDashb ? (
        <>
          <SideBar />
          <Navbar />
        </>
      ) : null}

      <section>
        <ToastContainer />
        <video id="video-background" muted loop src={Video} autoPlay={true} />

        {props.children}
      </section>
      {!isDashb && (
        <>
          <Footer />
          <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <div className="search-close-switch">+</div>
              <form className="search-model-form">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search here....."
                />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
