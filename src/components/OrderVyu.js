import React, { useState, useEffect } from "react";
import "../Assets/Css/orderVyu.css";
import asal from "../Assets/img/asal.png";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function VyuKard() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  function AddError() {
    enqueueSnackbar("Byurtma Bekor qilindi", {
      variant: "error",
    });
    navigate("/Ordeer");
  }
  function AddSucee() {
    enqueueSnackbar("Buyurtmani Taastiqlandi", {
      variant: "success",
    });
    navigate("/Ordeer");
  }

  const [order, SetOrder] = useState([]);
  const api = process.env.REACT_APP_API;

  useEffect(() => {
    axios(`${api}/order/view`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        SetOrder(res.data);
        console.log(order);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [api, order]);

  return (
    <div className="orderVyu">
      {order.map((item) => {
        return (
          <div className="vyuCard" key={item.id}>
            <div className="vyuimg">
              <img src={asal} alt="" />
            </div>
            <div className="vyutext">
              <p>{item.name}</p>
              <p>
                Buyurtmachi: <span>{item.customer}</span>{" "}
              </p>
              <p>
                Vaqti: <span>{item.date}</span>
              </p>
              <p>
                Telefon: <span>{item.phone}</span>{" "}
              </p>
              <p>
                Narxi: <span>{item.price}</span> sum{" "}
              </p>
              <p>
                Manzil: <span>Axsi, Yakkatom</span>{" "}
              </p>
              <p>Buyurtma Xolati: Tasdiqlanmagan</p>
              <div className="btbbtn">
                <button onClick={AddError}>Buyurtmani bekor qilish</button>
                <button onClick={AddSucee}>Buyurtmani Tasdiqlash</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
