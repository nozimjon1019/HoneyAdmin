import React, { useState } from "react";
import "../Assets/Css/navbar.css";
import logo from "../Assets/icons/logo.svg";
import nav1 from "../Assets/icons/nav1.svg";
import nav2 from "../Assets/icons/nav2.svg";
import nav3 from "../Assets/icons/nav3.svg";
import nav4 from "../Assets/icons/nav4.svg";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [qosh, setQosh] = useState(false);

  function mediya() {
    setQosh(!qosh);
  }

  return (
    <div className="navbar">
      {qosh ? (
        <div className="qosh">
          <div className="mediyaLink">
            <p id="datadat">27.10.2022</p>
            <form className="searchMeeediya">
              <input
                type="text"
                name="search"
                placeholder="maxsulotni izlash"
              />
              <img src={nav3} alt="" />
            </form>
            <NavLink onClick={mediya} to="/Ordeer">
              <img src={nav1} alt="" />
              <p>Order</p>
            </NavLink>
            <NavLink onClick={mediya} to="/Produkt">
              <img src={nav2} alt="" />
              <p>Product</p>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="seetqosh">
          <div className="mediyaLink">
            <p id="datadat">27.10.2022</p>
            <form className="searchMeeediya">
              <input
                type="text"
                name="search"
                placeholder="maxsulotni izlash"
              />
              <img src={nav3} alt="" />
            </form>
            <NavLink to="/ProduktCard">
              <img src={nav1} alt="" />
              <p>Order</p>
            </NavLink>
            <NavLink to="/AddProdukt">
              <img src={nav2} alt="" />
              <p>Product</p>
            </NavLink>
          </div>
        </div>
      )}
      <div className="navlogo">
        <div className="logoimg">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="logotext">
          <p>Abdujabborov Oybe</p>
          <p>Tizim: Admini</p>
        </div>
      </div>
      <div className="navseearch">
        <div className="navlink">
          <NavLink to="/ProduktCard">
            <img src={nav1} alt="" />
          </NavLink>
          <NavLink to="/AddProdukt">
            <img src={nav2} alt="" />
          </NavLink>
        </div>
        <form className="search">
          <input type="text" name="search" placeholder="maxsulotni izlash" />
          <img src={nav3} alt="" />
        </form>
        <div className="navdata">
          <p>27.10.2022</p>
          <NavLink to="/Ordeer">
            <img src={nav4} alt="" />
          </NavLink>
          <div onClick={mediya} className="mediya">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
