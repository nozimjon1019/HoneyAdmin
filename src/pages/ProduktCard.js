import React, { useEffect, useState } from "react";
import "../Assets/Css/ProduktCard.css";
import edit from "../Assets/icons/pen.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function ProduktCard() {
  const [data, setdata] = useState([]);
  const api = process.env.REACT_APP_API;
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${api}/product/view`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        setdata(res.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [api]);

  return (
    <div className="ProduktCard">
      <table id="tabble">
        <thead>
          <tr id="navthed">
            <th>IMG</th>
            <th>Maxsulot</th>
            <th>Vazni</th>
            <th>Xudud</th>
            <th>Vaqti</th>
            <th>Ko’rildi</th>
            <th>Ko’rish</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr id="tdtd" key={item.id}>
                <td id="imgimgimdg">
                  <img src={item.img[1]} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.view}</td>
                <td>{item.territory}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td id="imgimgimg">
                  <img
                    onClick={() => {
                      navigate(`/update/${item.id}`);
                    }}
                    src={edit}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
