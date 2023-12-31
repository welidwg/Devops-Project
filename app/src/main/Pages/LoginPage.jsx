import { NavLink } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../constants";

export default function LoginPage(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL + "/users/login", loginData)
      .then((res) => {
        toast.success("Bien connecté", { autoClose: 1000 });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error)
          toast.error(err.response.data.error);
        else toast.error("Erreur de serveur");
      });

    // You can send an API request for user authentication here
  };
  return (
    <>
      <div
        className="container"
     
      >
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden  border-none my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: `url("img/back-car-2.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%) blur(3px)",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Bienvenue!</h4>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            placeholder="Votre email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Votre mot de passe"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                          />
                        </div>
                        {/* <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                for="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div> */}
                        <button
                          className=" primary-btn  d-block btn-user w-100 text-center"
                          type="submit"
                        >
                          Connexion
                        </button>
                      </form>
                      <hr />
                      {/* <div className="text-center">
                        <a className="small text-dark" href="">
                          Forgot Password?
                        </a>
                      </div> */}
                      <div className="text-center">
                        <NavLink to={"/register"} className="small text-dark">
                          Créez un compte !
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
