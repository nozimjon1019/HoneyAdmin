import React, { Component } from "react";
import Slider from "react-slick";
import sovga from "../assets/qizlar/sovga.svg";
import yulduz from "../assets/qizlar/yulduz.svg";
import layk1 from "../assets/qizlar/logo1.svg";
import layk2 from "../assets/qizlar/logo2.svg";
import layk3 from "../assets/qizlar/logo3.svg";
import layk4 from "../assets/qizlar/logo4.svg";
import layk5 from "../assets/qizlar/logo5.svg";
import sot1 from "../assets/qizlar/sot1.svg";
import sot2 from "../assets/qizlar/sot2.svg";
import sot3 from "../assets/qizlar/sot3.svg";
import sot4 from "../assets/qizlar/sot4.svg";


export default class AutoPlay extends Component  {
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
      <div id="slayder">
        <Slider {...settings} className="yoqol">
          <div className="ochipket">
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot1} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot2} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot3} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot4} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot1} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 id="marginee">
            <div className="shopping">
                <div className="layk">
                  <div className="foiz">
                    <img src={layk1} alt="" />
                    <img src={layk2} alt="" />
                    <img src={layk3} alt="" />
                  </div>
                  <div className="yurak">
                    <img src={layk4} alt="" />
                    <img src={layk5} alt="" />
                  </div>
                </div>
                <div className="image">
                  <img src={sot3} alt="" />
                </div>
                <div className="yoz1">
                  <p>
                    В наличии <a href="">Есть в шоу-руме</a>
                  </p>
                </div>
                <div className="yozuv2">
                  <p>
                    Беговая дорожка CardioPower <br /> S35
                  </p>
                </div>
                <div className="yozuv3">
                  <p>Рейтинг</p>
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                  <img src={yulduz} alt="" />
                </div>
                <div className="btn">
                  <div className="radetish">
                    <p>1 134 900 ₽</p>
                    <span>
                      <s>1 134 900 ₽</s>
                    </span>
                  </div>
                  <div className="butoonnn">
                    <button>
                      <img src={sovga} alt="" />
                      <p>Купить</p>
                    </button>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
