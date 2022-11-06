import React, { useEffect, useState } from "react";
import "../Assets/Css/Hom.css";
import { Diagramma } from "../components/Diagramma";
import { korilgan } from "../Assets/Data/data";
import axios from "axios";

export function Home() {
  const api = process.env.REACT_APP_API;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`${api}/info`, {
      method: "GET",
      headers: {
        token: "Admin tokeni",
      },
    })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [api]);
  const Mehmonlar = [data];

  return (
    <div className="Hom">
      <div className="mehmonlar">
        {Mehmonlar.map((item, index) => {
          return (
            <div className="mehmonlarCon" key={index}>
              <div className="mehmonCard1">
                <p>Adminlar soni</p>
                <p>{item.adminLen}</p>
              </div>
              <div className="mehmonCard2">
                <p>Mexmonlar soni</p>
                <p>{item.guestsLen}</p>
              </div>
              <div className="mehmonCard3">
                <p>Buyurmalar</p>
                <p>{item.orderLen}</p>
              </div>
              <div className="mehmonCard4">
                <p>Maxsulotlar soni</p>
                <p>{item.productlen}</p>
              </div>
              <div className="mehmonCard5">
                <p>Umumiy Narx</p>
                <p>{item.totalPrice}</p>
              </div>
              <div className="mehmonCard6">
                <p>Foydalanuvchilar</p>
                <p>{item.viewLen}</p>
              </div>
            </div>
          );
        })}
        <div className="mehmonlarDiag">
          <p>Saytimiz Mexmonlari tarixi</p>
          <p>oxirgi 30 kunlik mexmonlar</p>
          <Diagramma className="flexxx" />
        </div>
      </div>
      <div className="korilgan">
        <div className="korilganCon">
          <p>Eng ko’p korilgan maxsulotlar</p>
          {korilgan.map((item, index) => {
            return (
              <div className="korilganCard" key={index}>
                <div className="kortext">
                  <p>{item.text}</p>
                  <p>
                    <img src={item.img} alt="" />
                    <span>{item.seen}</span>
                  </p>
                </div>
                <div className="korbtn">
                  <button>Baatafsil</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="diag">
        <Diagramma />
      </div>
    </div>
  );
}
