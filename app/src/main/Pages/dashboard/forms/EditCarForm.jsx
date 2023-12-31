import axios from "axios";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../../../constants";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function EditCarForm(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [formDt, setFormData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files : value,
    }));
  };
  useEffect(() => {
    if (props.car != null) {
      setFormData({
        id: props.car.id,
        owner_id: user.id,
        brand: props.car.brand,
        model: props.car.model,
        price: props.car.price,
        kms: props.car.kms,
        energie: props.car.energie,
        boite: props.car.boite,
        year: props.car.year,
        photos: props.car.photos,
        newPhotos: [],
        removePhotos: [],
      });
    }
  }, [props.car]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in formDt) {
        if (formDt.hasOwnProperty(key)) {
          const value = formDt[key];
          if (key === "newPhotos" && value instanceof FileList) {
            for (let i = 0; i < value.length; i++) {
              formData.append(key, value[i]);
            }
          } else {
            formData.append(key, value);
          }
        }
      }
      await axios
        .put(URL + "/cars/" + formDt.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("Voiture bien modifié");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
    }
  };

  return formDt == null ? (
    <>loading</>
  ) : (
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
              defaultValue={formDt.brand}
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
            defaultValue={formDt.model}
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
            defaultValue={formDt.price}
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
            defaultValue={formDt.kms}
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
            defaultValue={formDt.energie}
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
            defaultValue={formDt.boite}
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
            defaultValue={formDt.year}
            placeholder="example : 2020 "
            name="year"
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Ajouter des Images: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="file"
            multiple
            name="newPhotos"
            onChange={handleChange}
          />
        </div> */}

        <button className=" primary-btn  btn  w-100 text-center" type="submit">
          Enregistrer
        </button>

        <hr />
      </form>
    </>
  );
}
