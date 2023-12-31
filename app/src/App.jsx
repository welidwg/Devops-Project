import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./main/Pages/Home";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import LoginPage from "./main/Pages/LoginPage";
import Wrapper from "./main/Layouts/Wrapper";
import Register from "./main/Pages/Register";
import NotFound from "./main/Pages/error/NotFound";
import IndexDashboard from "./main/Pages/dashboard/IndexDashboard";
import WrapperDash from "./main/Pages/dashboard/Layout/WrapperDash";
import Dash from "./Dash";
import CarsPage from "./main/Pages/dashboard/CarsPage";
import Profile from "./main/Pages/dashboard/Profile";
import AddCarPage from "./main/Pages/dashboard/AddCarPage";
import CarDetails from "./main/Pages/CarDetails";
import UsersList from "./main/Pages/dashboard/UsersList";
import EditCarPage from "./main/Pages/dashboard/EditCarPage";

function App() {
  const [updateView, setUpdateView] = useState(false);
  useEffect(() => {
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
      Aos.init();
    });
  }, [updateView]);

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car/detail/:id" element={<CarDetails />} />
          <Route path="/dash/index" element={<IndexDashboard />} />
          <Route path="/dash/cars" element={<CarsPage />} />
          <Route
            path="/dash/profile"
            element={<Profile onUpdate={setUpdateView} />}
          />
          <Route path="/dash/users" element={<UsersList />} />
          <Route path="/dash/cars/new" element={<AddCarPage />} />
          <Route path="/dash/cars/:id/edit" element={<EditCarPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
