import React, { Component } from "react";
import Slider from "react-slick";


import dastur1 from "../assets/Nozimjon/dastur1.png"
import dastur2 from "../assets/Nozimjon/dastur2.png"
import dastur3 from "../assets/Nozimjon/dastur3.png"
import dastur4 from "../assets/Nozimjon/dastur4.png"
import dastur5 from "../assets/Nozimjon/dastur5.png"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur1} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur2} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur3} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur4} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur5} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className="dasturlash">
              <img src={dastur3} alt="" />
              <p>Expert Prespective <br /> Agency Awards</p>
              <p>Lorem ipsum is placeholder text <br />  commonly used  in print, and <br /> publishing industries for previewing <br /> layouts and visual mockups.</p>
              <button>Sing App</button>
           </div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}