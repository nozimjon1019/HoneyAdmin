import React from "react";
import "../assets/css/loyha.css"
import loyha1 from "../assets/img/qongiroq.svg"
import loyha2 from "../assets/img/yurak.svg"
import loyha3 from "../assets/img/yoqdi.svg"
import loyha4 from "../assets/img/qongiroq.svg"
import { Qizil } from "../components/qizil";
import { Futer } from "../components/futer";
import { Shopping } from "../components/shopping";
import { Sportchi } from "../components/sportchi";
import AutoPlay from "../components/slayder";




export function Loyha() {


  function qosh(){
    alert("Siz jonatgan sorov qabul qilindi")
  }
  function qosh1(){
    alert("Yoqganidan hursandmiz")
  }





  return (
    <>
    <div className="loyha">
            <div className="loyhaKonainer">
             <div className="loyhaUshla">
             <div className="loyha11">
                <div className="hov1">
               <div className="like1">
               <img onClick={qosh} src={loyha1} alt="" />
               </div>
               <div className="like1">
               <img onClick={qosh1} src={loyha2} alt="" />
               </div>
               <div className="like1">
               <img onClick={qosh1} src={loyha3} alt="" />
               </div>
               <div className="like1">
               <img onClick={qosh} src={loyha4} alt="" />
               </div>
                </div>
                <div className="sariq1">
                  <p>Nozimjon Olimjonov</p>
                  <p>2003 10 19</p>
                </div>
              </div>
             </div>
             <div className="loyhaUshla">
             <div className="loyha2">
                <div className="hov2">
               <div className="like2">
               <img src={loyha1} alt="" />
               </div>
               <div className="like2">
               <img src={loyha2} alt="" />
               </div>
               <div className="like2">
               <img src={loyha3} alt="" />
               </div>
               <div className="like2">
               <img src={loyha4} alt="" />
               </div>
                </div>
                <div className="sariq2">
                  <p>Nozimjon Olimjonov</p>
                  <p>2003 10 19</p>
                </div>
              </div>
             </div>
             <div className="loyhaUshla">
             <div className="loyha3">
                <div className="hov3">
               <div className="like3">
               <img src={loyha1} alt="" />
               </div>
               <div className="like3">
               <img src={loyha2} alt="" />
               </div>
               <div className="like3">
               <img src={loyha3} alt="" />
               </div>
               <div className="like3">
               <img src={loyha4} alt="" />
               </div>
                </div>
                <div className="sariq3">
                  <p>Nozimjon Olimjonov</p>
                  <p>2003 10 19</p>
                </div>
              </div>
             </div>
             <div className="loyhaUshla">
             <div className="loyha4">
                <div className="hov4">
               <div className="like4">
               <img src={loyha1} alt="" />
               </div>
               <div className="like4">
               <img src={loyha2} alt="" />
               </div>
               <div className="like4">
               <img src={loyha3} alt="" />
               </div>
               <div className="like4">
               <img src={loyha4} alt="" />
               </div>
                </div>
                <div className="sariq4">
                  <p>Nozimjon Olimjonov</p>
                  <p>2003 10 19</p>
                </div>
              </div>
             </div>
            </div>
             </div>
             <Qizil/>
             <Sportchi/>
             <AutoPlay/> 
             <div className="slaycha">
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
              <div className="h2">
               <Shopping/>
              </div>
               </div> 
               <Futer/>
    </>
  );
}
