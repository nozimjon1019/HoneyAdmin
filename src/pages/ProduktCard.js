import React from "react";
import "../Assets/Css/ProduktCard.css";
import edit from "../Assets/icons/pen.svg";

export function ProduktCard() {
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
          <tr id="tdtd">
            <td id="imgimgimg">
              <img src={edit} alt="" />
            </td>
            <td>Tog’ Asali</td>
            <td>920g</td>
            <td>Namangan</td>
            <td>05/11/2022</td>
            <td>635</td>
            <td id="imgimgimg">
              <img src={edit} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
