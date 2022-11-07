import React, { useEffect, useState } from "react";
import "../Assets/Css/Update.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function Update() {
  const [edite, setEdit] = useState([]);
  const api = process.env.REACT_APP_API;
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  console.log(edite);
  useEffect(() => {
    axios(`${api}/product/view/${id}`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        setEdit(res.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [api]);

  return (
    <div>
      <h1>edit</h1>
    </div>
  );
}
