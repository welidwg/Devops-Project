import { NavLink } from "react-router-dom";
import WrapperDash from "./Layout/WrapperDash";
import { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../../constants";
import moment from "moment";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

export default function CarsPage(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [cars, setCars] = useState([]);
  const [updateView, setUpdateView] = useState(false);
  const handleDelete = (id) => {
    if (confirm("Vous êtes sûr ?")) {
      axios
        .delete(URL + "/cars/" + id)
        .then((res) => {
          setUpdateView(true);
        })
        .catch((err) => {
          toast.error("Erreur du serveur");
          console.log("====================================");
          console.log(err.response);
          console.log("====================================");
        });
    }
  };
  useEffect(() => {
    setUpdateView(false);
    const link =
      user.role == 1 ? `${URL}/cars/owner/${user.id}` : `${URL}/cars`;
    axios
      .get(link)
      .then((res) => {
        setCars(res.data);
        if (res.data.length == 0) {
          toast.warn("Vous n'avez pas encore publié une voiture");
        }
      })
      .catch((err) => console.log(err));
  }, [updateView]);
  return (
    <WrapperDash>
      <div
        className="card border-none rounded"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="card-header">
          <NavLink to={"/dash/cars/new"} className={"btn primary-btn rounded"}>
            {" "}
            <i className="fas fa-plus"></i> Ajouter une voiture
          </NavLink>
        </div>
        <div className="card-body">
          <DataTable
            data={cars}
            pagination
            columns={[
              {
                name: "Brand",
                selector: "brand",
                sortable: true,
              },
              {
                name: "Model",
                selector: "model",
                sortable: true,
              },
              {
                name: "Price",
                selector: "price",
                sortable: true,
              },
              {
                name: "Kilometres",
                selector: "kms",
                sortable: true,
              },
              {
                name: "Energie",
                selector: "energie",
                sortable: true,
              },
              {
                name: "Boite",
                selector: "boite",
                sortable: true,
              },
              {
                name: "Year",
                selector: "year",
                sortable: true,
              },
              {
                name: "Date d'ajout",
                selector: "createdAt",
                sortable: true,
                format: (row) => moment(row.createdAt).format("D MMM Y"),
              },
              user &&
                user.role === 0 && {
                  name: "Propriétaire",
                  selector: "owner",
                  sortable: true,
                  cell: (row) => (
                    <span>
                      {row.owner.username === user.username
                        ? "Vous"
                        : row.owner.username}{" "}
                      / {row.owner.phone}
                    </span>
                  ),
                },
              {
                name: "Action",
                cell: (row) => (
                  <div className="d-flex align-items-center justify-content-center">
                    {user.id === row.owner.id && (
                      <NavLink
                        to={`/dash/cars/${row.id}/edit`}
                        className="btn btn-dark mx-2 bg-transparent text-dark border-0 shadow-0 p-0 rounded"
                      >
                        <i className="fa fa-pencil-alt" aria-hidden="true"></i>
                      </NavLink>
                    )}
                    <button
                      className="btn btn-dark bg-transparent text-danger border-0 shadow-0 p-0 rounded"
                      onClick={() => handleDelete(row.id)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </WrapperDash>
  );
}
