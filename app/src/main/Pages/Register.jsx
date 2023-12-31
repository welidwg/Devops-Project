import { NavLink } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../constants";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    repeat_password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeat_password) {
      toast.error("Please confirm your password");
    } else {
      axios
        .post(`${URL}/users`, formData)
        .then((res) => {
          toast.success("Compte bien crée !");
          window.location.href = "/login";
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.error &&
            error.response.data.error.errors
          ) {
            const validationErrors = error.response.data.error.errors;
            const fieldErrors = validationErrors.reduce((acc, error) => {
              acc[error.path] = error.message;
              return acc;
            }, {});
            setErrors(fieldErrors);
          } else {
            toast.error("Erreur de serveur");
            console.log(error);
          }
        });
    }
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
                        backgroundImage: `url("img/car-bg-3.jpg")`,
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
                        <h4 className="text-dark mb-4">
                          Créez un compte chez AutoBot!
                        </h4>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="text"
                            placeholder="Donnez un nom d'utilisateur..."
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                          {errors.username && (
                            <div className="text-danger">{errors.username}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="email"
                            placeholder="Donnez votre email.."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="tel"
                            placeholder="Donnez votre numéro téléphone.."
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <div className="text-danger ">{errors.phone}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="password"
                            placeholder="Mot de passe"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="password"
                            placeholder="Répétez votre mot de passe"
                            name="repeat_password"
                            value={formData.repeat_password}
                            onChange={handleChange}
                          />
                        </div>

                        <button
                          className=" primary-btn  d-block btn-user w-100 text-center"
                          type="submit"
                        >
                          Commencez votre experience
                        </button>

                        <hr />
                      </form>
                      {/* <div className="text-center">
                        <a className="small text-dark" href="">
                          Forgot Password?
                        </a>
                      </div> */}
                      <div className="text-center">
                        <NavLink to={"/login"} className="small text-dark">
                          Vous avez déjà un compte ? Connectez-vous maintenant!
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
