import { useState } from "react";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../../constants";
import WrapperDash from "./Layout/WrapperDash";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [newUser, setNewUser] = useState({
    id: user.id,
    username: user.username,
    email: user.email,
    phone: user.phone,
    password: user.password,
    newPass: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevData) => ({
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

    axios
      .put(`${URL}/users/${newUser.id}/update`, newUser)
      .then((res) => {
        toast.success("Compte bien modifié !");

        localStorage.setItem("user", JSON.stringify(res.data));
        setNewUser((prevData) => ({
          ...prevData,
          newPass: "",
        }));
        props.onUpdate(true);
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
  };
  return (
    <WrapperDash>
      <div className="card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="card-header color-1 fw-bold fs-4 text-center ">
          Mon profile
        </div>
        <div className="card-body">
          <form className="user" onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold">Nom: </label>
              </div>
              <div className="w-100">
                <input
                  className="form-control form-control-user  shadow-none "
                  type="text"
                  placeholder="Saisissez votre nom..."
                  defaultValue={newUser.username}
                  name="username"
                  onChange={handleChange}
                />
                {errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}{" "}
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">Email: </label>
              </div>
              <div className="w-100">
                <input
                  className="form-control form-control-user  shadow-none "
                  type="email"
                  placeholder="Saisissez votre Email..."
                  defaultValue={newUser.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">Téléphone: </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="tel"
                placeholder="Saisissez votre téléphone..."
                defaultValue={newUser.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">
                  Nouveau mot de passe :{" "}
                </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="password"
                placeholder="Saisissez votre nouveau mot de passe ici"
                name="newPass"
                onChange={handleChange}
              />
            </div>

            <button
              className="btn primary-btn mt-4 btn-user w-100 text-center"
              type="submit"
            >
              Enregistrer
            </button>

            <hr />
          </form>
        </div>
      </div>
    </WrapperDash>
  );
}
