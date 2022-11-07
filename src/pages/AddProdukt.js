import React, { useState, useEffect } from "react";
import "../Assets/Css/product.css";
import addimg from "../Assets/img/Add Img.png";
import axlat from "../Assets/icons/axlat.svg";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export function AddProdukt() {
  const api = process.env.REACT_APP_API;
  const [img, setImg] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    price: "",
    territory: "",
    weight: "",
    about: "",
  });

  const addProduct = (e) => {
    // e.preventDefault();
    const formData = new FormData();
    enqueueSnackbar("Maxsulot Qoshildi", {
      variant: "success",
    });
    navigate("/ProduktCard");

    formData.append("data", JSON.stringify(value));
    for (let i = 0; img.length > i; i++) {
      formData.append("img", img[i]);
    }
    console.log(value);

    axios(`${api}/product/add`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        token: "Admin tokeni",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  /////////////////////////////////////
  return (
    <div className="Product">
      <form action="" className="addCardd" onSubmit={addProduct}>
        <div className="inputt">
          <input
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            type="text"
            placeholder="Nomi"
          />
          <input
            onChange={(e) => {
              setValue({ ...value, price: e.target.value });
            }}
            type="text"
            placeholder="Narxi"
          />
          <input
            onChange={(e) => {
              setValue({ ...value, territory: e.target.value });
            }}
            type="text"
            placeholder="Hudud"
          />
          <input
            onChange={(e) => {
              setValue({ ...value, weight: e.target.value });
            }}
            type="number"
            placeholder="Og’irligi  650g"
          />
        </div>
        <div className="imgimgadd">
          {img.map((item, index) => {
            return (
              <figure
                key={index}
                id="seeUploadImg"
                style={
                  img.length !== 0 ? { display: "flex" } : { display: "none" }
                }
              >
                <button
                  onClick={() => {
                    const Myvalue = [...img];
                    Myvalue.splice(index, 1);
                    setImg(Myvalue);
                  }}
                >
                  <img src={axlat} alt="" />
                </button>
                <img src={URL.createObjectURL(item)} alt="" />
              </figure>
            );
          })}
          <label id="add-img-from-input">
            <img src={addimg} alt="" />
            <input
              style={img.length >= 4 ? { display: "none !important" } : {}}
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              multiple="multiple"
              onChange={(e) => setImg([...img, ...e.target.files])}
            />
          </label>
        </div>
        <div className="textArea">
          <textarea
            onChange={(e) => {
              setValue({ ...value, about: e.target.value });
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Maxsulot xaqida..."
          ></textarea>
        </div>
        <div className="signbtn">
          <button type="submit">Maxsulotni Qo’shish</button>
        </div>
      </form>
    </div>
  );
}
