import axios from "axios";
import { useEffect, useState } from "react";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../../../constants";
import { toast } from "react-toastify";

export default function AddCarForm(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [formDt, setFormData] = useState({
    owner_id: user.id,
    brand: "",
    model: "",
    price: "",
    kms: 0,
    energie: "Essence",
    boite: "Manuelle",
    year: null,
    photos: [],
  });
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "file"
          ? e.target.files
          : name == "kms"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in formDt) {
        if (formDt.hasOwnProperty(key)) {
          const value = formDt[key];
          if (key === "photos" && value instanceof FileList) {
            for (let i = 0; i < value.length; i++) {
              formData.append(key, value[i]);
            }
          } else {
            if (key === "kms") {
              formData.append(key, parseFloat(value));
              console.log("====================================");
              console.log(parseFloat(value));
              console.log("====================================");
            } else if (key === "price") {
              formData.append(key, parseFloat(value));
            } else {
              formData.append(key, value);
            }
          }
        }
      }
      await axios
        .post(URL + "/cars", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          e.target.reset();
          toast.success("Voiture bien ajoutée");
          setFormData({
            owner_id: user.id,
            brand: "",
            model: "",
            price: "",
            kms: 0,
            energie: "Essence",
            boite: "Manuelle",
            year: "",
            photos: [],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
    }
  };


  return (
    <>
      <form className="user" onSubmit={handleSubmit}>
        <input type="hidden" name="owner_id" defaultValue={user.id} />
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Marque: </label>
          </div>
          <div className="w-100">
            <input
              className="form-control form-control-user  shadow-none "
              type="text"
              placeholder="La marque de votre voiture"
              name="brand"
              required
              onChange={handleChange}
            />
            {/* <ul>
              {suggestions.map((suggest, index) => (
                <li key={index}>{suggest}</li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Modèle: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="text"
            placeholder="Le modèle de votre voiture"
            name="model"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Prix: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="number"
            required
            placeholder="example : 15000"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Kilomètrage: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="number"
            placeholder="example : 20000 "
            name="kms"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Energie: </label>
          </div>

          <select
            className="form-select form-control-user  shadow-none"
            name="energie"
            onChange={handleChange}
          >
            <option value={"Essence"}>Essence</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Boite: </label>
          </div>

          <select
            className="form-select form-control-user  shadow-none"
            name="boite"
            onChange={handleChange}
          >
            <option value={"Manuelle"}>Manuelle</option>
            <option value="Automatique">Automatique</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Année: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="number"
            min={1950}
            required
            max={2024}
            placeholder="example : 2020 "
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Images: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="file"
            multiple
            name="photos"
            onChange={handleChange}
          />
        </div>

        <button className=" primary-btn  btn  w-100 text-center" type="submit">
          Ajouter
        </button>

        <hr />
      </form>
    </>
  );
}
