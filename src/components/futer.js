import React from "react";
import "../assets/css/futer.css";
import logo from "../assets/icons/logo.svg";

import log1 from "../assets/icons/log1.svg";
import log2 from "../assets/icons/log2.svg";
import log3 from "../assets/icons/log3.svg";
import log4 from "../assets/icons/log4.svg";
import log5 from "../assets/icons/log5.svg";
import log6 from "../assets/icons/log6.svg";
import log7 from "../assets/icons/log7.svg";

export function Futer() {
  return (
    <div className="futer">
      <div className="ichkiFuter">
        <div className="tepafutkart">
          <p>Каталог</p>
          <a href="">Для дома</a>
          <a href="">Для фитнес клубов</a>
          <a href="">Акции</a>
          <a href="">Идеи и подборки </a>
          <a href="">Новинки</a>
          <a href="">Наши бренды</a>
        </div>
        <div className="tepafutkart">
          <p>Поддержка</p>
          <a href="">Доставка и оплата</a>
          <a href="">Условия возврата</a>
          <a href="">Сервисная заявка</a>
          <a href="">Обслуживание фитнес клубов</a>
          <a href="">FAQ</a>
          <a href="">Гарантия</a>
        </div>
        <div className="tepafutkart">
          <p>Услуги</p>
          <a href="">3D проект</a>
          <a href="">Консалтинг</a>
          <a href="">Бизнес планирование </a>
          <a href="">Лизинг</a>
          <a href="">Trade-IN</a>
          <a href="">В рассрочку</a>
        </div>
        <div className="tepafutkart">
          <p>О компании</p>
          <a href="">Для дома</a>
          <a href="">Для фитнес клубов</a>
          <a href="">Акции</a>
          <a href="">Идеи и подборки </a>
          <a href="">Новинки</a>
          <a href="">Наши бренды</a>
        </div>
        <div className="tepafutkartPusk">
          <input
            type="text"
            name=""
            id=""
            placeholder="Подписаться на рассылку"
          />
          <p>+7 (000) 000-00-00 для Москвы</p>
          <p>8 (800) 000-00-00 для России</p>
          <p>wellfitness@wellfit.ru</p>
          <p>Написать</p>
          <a href="">Политика конфиденциальности</a>
          <a href="">Публичная офферта</a>
        </div>
      </div>
      <div className="pasFuter">
        <div className="kut1">
          <img src={logo} alt="" />
          <p>© WellFitness. 2007 Все права защищены</p>
        </div>
        <div className="kut2">
          <img src={log1} alt="" />
          <img src={log2} alt="" />
          <img src={log3} alt="" />
        </div>
        <div className="kut3">
          <button>Become a Partner </button>
          <button>Для дилеров </button>
        </div>
        <div className="kut4">
          <img src={log4} alt="" />
          <img src={log5} alt="" />
          <img src={log6} alt="" />
          <img src={log7} alt="" />
        </div>
      </div>
    </div>
  );
}
