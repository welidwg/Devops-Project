import { NavLink } from "react-router-dom";
import WrapperDash from "./Layout/WrapperDash";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import moment from "moment";
import DataTable from "react-data-table-component";

export default function UsersList(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <WrapperDash>
      <div
        className="card border-none rounded"
        
      >
        <div className="card-header color-1 fw-bold fs-4  text-center">
          {/* <NavLink to={"/dash/cars/new"} className={"btn primary-btn rounded"}>
            {" "}
            <i className="fas fa-plus"></i> Ajouter une voiture
          </NavLink> */}
          Liste des utilisateurs
        </div>
        <div className="card-body">
          <DataTable
            data={users}
            pagination
            columns={[
              {
                name: "Username",
                selector: (row) => row.username,
                sortable: true,
              },
              {
                name: "Email",
                selector: (row) => row.email,
              },
              {
                name: "Mobile",
                selector: (row) => row.phone,
              },
              {
                name: "Date de création",
                sortable: true,
                selector: (row) => moment(row.createdAt).format("d-MMM-Y"),
              },
              {
                name: "Type",
                sortable: true,
                selector: (row) => (row.role == 0 ? "Admin" : "User"),
              },
              {
                name: "Voitures",
                selector: (row) => row.cars.length,
              },
              {
                name: "Action",
                cell: (row) => {
                  return (
                    <>
                      <a className=" shadow-sm text-danger rounded btn p-1">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </a>
                    </>
                  );
                },
              },
            ]}
          />
        </div>
      </div>
    </WrapperDash>
  );
}
