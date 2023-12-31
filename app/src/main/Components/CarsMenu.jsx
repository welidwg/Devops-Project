import OwlCarousel from "react-owl-carousel";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../constants";
export default function CarsMenu(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [searchParams, setSearchParams] = useState({
    brand: "",
    model: "",
    boite: "",
    kms: "",
    energie: "",
  });
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
  };
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const link = `${URL}/cars`;

    axios
      .get(link, { params: searchParams })
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
    console.log(searchParams);
  }, [searchParams]);

  return (
    <>
      <section className="car spad bg-light rounded m-4 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="car__sidebar">
                <div className="car__filter">
                  <h5>Filtre</h5>
                  <form action="#">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Marque"
                        name="brand"
                        defaultValue={searchParams.brand}
                        onChange={handleFilter}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Modèle"
                        name="model"
                        defaultValue={searchParams.model}
                        onChange={handleFilter}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="number"
                        min={0}
                        className="form-control shadow-none"
                        placeholder="Kilométrage"
                        name="kms"
                        defaultValue={searchParams.kms}
                        onChange={handleFilter}
                      />
                    </div>
                    <select
                      className="form-select mb-3"
                      defaultValue={searchParams.engine}
                      onChange={handleFilter}
                      name="energie"
                    >
                      <option value="">Engine</option>
                      <option value="Essence">Essence</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                    <select
                      className="form-select mb-3"
                      defaultValue={searchParams.boite}
                      onChange={handleFilter}
                      name="boite"
                    >
                      <option value="">Boite</option>
                      <option value="Manuelle">Manuelle</option>
                      <option value="Automatique">Automatique</option>
                    </select>

                    <div className="car__filter__btn mt-2">
                      <a
                        className="site-btn"
                        onClick={() => {
                          setSearchParams({
                            brand: "",
                            model: "",
                            boite: "",
                            kms: "",
                            energie: "",
                          });
                        }}
                      >
                        Restorer le filtre
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {cars && cars.length != 0 ? (
                  cars.map((car, index) => {
                    return <CarCard key={index + 434343} car={car} />;
                  })
                ) : (
                  <span className="text-dark">
                    Aucune voiture poul la moment
                  </span>
                )}
              </div>
              <div className="pagination__option">
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <span className="arrow_carrot-2right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
