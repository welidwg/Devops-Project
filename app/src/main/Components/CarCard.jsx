import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";
import { URL, URL_IMG } from "../../constants";

export default function CarCard(props) {
  const car = props.car;
  return (
    <>
      <div className="col-lg-4 col-md-4">
        <div className="car__item"></div>
        <OwlCarousel
          className="car__item__pic__slider owl-carousel owl-theme bg-light "
          style={{ minHeight: "200px", maxHeight: "200px" }}
          margin={10}
          items={1}
          nav={false}
          dots={false}
        >
          {car.photos instanceof Array ? (
            car.photos.map((pic, i) => {
              return (
                <div className="item" key={i}>
                  {" "}
                  <img
                    className=""
                    key={i + 1}
                    style={{ height: "200px" }}
                    src={`${URL_IMG}/${pic}`}
                    alt={pic}
                  />
                </div>
              );
            })
          ) : (
            <>
              <img
                className=""
                style={{ height: "200px" }}
                src={`${URL_IMG}/${car.photos}`}
                alt={car.photos}
              />
            </>
          )}
        </OwlCarousel>
        <div className="car__item__text">
          <div className="car__item__text__inner">
            <div className="label-date ">{car.year}</div>
            <h5 className="">
              <a href="#" className="text-center mx-auto ms-auto">
                {car.brand} | {car.model}
              </a>
            </h5>
            <div className="d-flex flex-column text-dark">
              <span>
                <span className="fw-bold text-secondary">Kilométrage :</span>
                {car.kms} Kms
              </span>
              <span>
                <span className="fw-bold text-secondary">Boite : </span>
                {car.boite}
              </span>{" "}
              <span>
                <span className="fw-bold text-secondary">Energie : </span>
                {car.energie}
              </span>{" "}
            </div>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <span className="car-option bg-dark">{car.price} dt</span>
            <NavLink to={"/car/detail/" + car.id} className="btn text-dark ">
              <i className="fas fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
