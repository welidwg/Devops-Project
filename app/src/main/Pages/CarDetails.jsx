import axios from "axios";
import { useParams } from "react-router";
import { AUTH_TOKEN, AUTH_USER, URL, URL_IMG } from "../../constants";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";

export default function CarDetails(props) {
  const [car, setCar] = useState(null);
  const user = AUTH_TOKEN && AUTH_USER;
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    axios.get(`${URL}/cars/${id}`).then((res) => setCar(res.data));
  }, []);
  return car == null ? (
    <>Loading</>
  ) : (
    <>
      <div className="breadcrumb-option bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>
                  {car.brand} | {car.model}{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="car-details  bg-dark p-4 m-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 ">
              <div className="car__details__pic">
                <div className="car__details__pic__large">
                  <OwlCarousel
                    className="car__item__pic__slider owl-carousel owl-theme shadow"
                    auto
                    style={{ height: "570px" }}
                    margin={0}
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
                              style={{ height: "570px" }}
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
                          style={{ height: "570px" }}
                          src={`${URL_IMG}/${car.photos}`}
                          alt={car.photos}
                        />
                      </>
                    )}
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="car__details__sidebar">
                <div className="car__details__sidebar__model">
                  <h4 className="text-center">Fiche technique</h4>
                  <hr />
                </div>
                <div className="car__details__sidebar__payment">
                  <ul>
                    <li>
                      Marque <span>{car.brand}</span>
                    </li>
                    <li>
                      Model <span>{car.model}</span>
                    </li>
                    <li>
                      kilométrage <span>{car.kms} Kms</span>
                    </li>
                    <li>
                      Energie <span>{car.energie}</span>
                    </li>
                    <li>
                      Boite vitesse <span>{car.boite} </span>
                    </li>
                    <li>
                      Année <span>{car.year}</span>
                    </li>
                    <li>
                      Proprétaire <span>{car.owner.username}</span>
                    </li>
                    <li>
                      Prix actuel <span>{car.price} TND</span>
                    </li>
                    {user && user.id !== car.owner.id ? (
                      <li>
                        Prix estimé <span>{car.price} TND</span>
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                  {user && user.id !== car.owner.id ? (
                    <>
                      <a href="#" className="primary-btn">
                        <i className="fas fa-phone"></i> Contactez le
                        propriétaire
                      </a>
                      <a href="#" className="primary-btn n">
                        <i class="fas fa-exclamation"></i> Rapporter
                      </a>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to={`/dash/cars/${car.id}/edit`}
                        className="primary-btn"
                      >
                        <i class="fas fa-pencil-alt"></i>Modifier
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
