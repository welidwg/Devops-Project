import { useEffect, useState } from "react";
import WrapperDash from "./Layout/WrapperDash";
import AddCarForm from "./forms/AddCarForm";
import EditCarForm from "./forms/EditCarForm";
import axios from "axios";
import { useParams } from "react-router";
import { URL } from "../../../constants";

export default function EditCarPage(props) {
  const params = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    axios.get(`${URL}/cars/${params.id}`).then((res) => {
      setCar(res.data);
    });
  }, []);
  return (
    <>
      <WrapperDash>
        <div className="card">
          <div className="card-header text-dark fw-bold text-center color-1 fs-4">
            Modifier une voiture
          </div>
          <div className="card-body">
            <EditCarForm car={car != null ? car : null} />
          </div>
        </div>
      </WrapperDash>
    </>
  );
}
