import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Assets/Css/Order.css";
import or1 from "../Assets/icons/order1.svg";
import or2 from "../Assets/icons/eye.svg";
import { NavLink } from "react-router-dom";

export function Ordeer() {
  const api = process.env.REACT_APP_API;
  const [order, SetOrder] = useState([]);

  useEffect(() => {
    axios(`${api}/order/view`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        SetOrder(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [api]);

  function Add(item) {
    // console.log("salom");
  }
  return (
    <div className="sdsdsdsd">
      <table id="tabble">
        <thead>
          <tr id="navthed">
            <th>Buyurtmachi</th>
            <th>Sanasi</th>
            <th>Telefon</th>
            <th>ID</th>
            <th>Status</th>
            <th>Ko’rish</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => {
            
            return (
              <tr id="tdtd" key={item.id}>
                <td>{item.customer}</td>
                <td>{item.date}</td>
                <td>{item.phone}</td>
                <td>{item.id}</td>
                <td id="imgimgimg">
                  <img src={or1} alt="" />
                </td>
                <td id="imgimgimg">
                  <NavLink to="/VyuKard">
                    <img
                      // onClick={() => {
                      //   navigate(`/VyuKard/${item}`);
                      // }}
                      onClick={(e) => Add(item)}
                      src={or2}
                      alt=""
                    />
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
