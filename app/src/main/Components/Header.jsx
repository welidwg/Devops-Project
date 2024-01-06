import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import {AUTH_TOKEN} from "../../constants.js"
export default function Header(props) {
  return (
    <>
      <section className="hero spad set-bg" data-setbg={""}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero__text">
                <div className="hero__text__title">
                  <span>Trouvez votre voiture de rêve Chez</span>
                  <h2 className=""> AUTOBOT</h2>
                </div>
                {AUTH_TOKEN && 

                <NavLink to={"/register"} href="#" className="primary-btn">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Créer
                  un compte
                </NavLink>}
                <a href="#" className="primary-btn more-btn">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>{" "}
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link  text-dark"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Recherche une voiture
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link text-dark"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Buy Car
                    </a>
                  </li> */}
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-2" role="tabpanel">
                    <div className="hero__tab__form">
                      <h2>Rechercher une voiture</h2>
                      <form>
                        <div className="select-list">
                          <div className="select-list-item">
                            <p>Choisissez l'année</p>
                            <select className="form-select">
                              <option value="">2020</option>
                              <option value="">2017</option>
                              <option value="">2018</option>
                              <option value="">2017</option>
                              <option value="">2016</option>
                              <option value="">2015</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Choisissez la marque</p>
                            <select className="form-select">
                              <option value="">Acura</option>
                              <option value="">Audi</option>
                              <option value="">Bentley</option>
                              <option value="">BMW</option>
                              <option value="">Bugatti</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Choisissez le Model</p>
                            <select className="form-select">
                              <option value="">Q3</option>
                              <option value="">A4 </option>
                              <option value="">AVENTADOR</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Choisissez la Kilométrage </p>
                            <select className="form-select">
                              <option value="">27</option>
                              <option value="">25</option>
                              <option value="">15</option>
                              <option value="">10</option>
                            </select>
                          </div>
                        </div>

                        <button type="submit" className="site-btn">
                          Chercher
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
