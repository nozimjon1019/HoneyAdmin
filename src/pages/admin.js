import React from "react";
import "../assets/css/admin.css";
import { Futer } from "../components/futer";
import { Shopping } from "../components/shopping";
import { Qizil } from "../components/qizil";
import { Sportchi } from "../components/sportchi";
import AutoPlay from "../components/slayder";

export function Admin() {
  return (
    <div className="admin">
      <div className="adminHeder">
        <div className="qoraoytna">
          <div className="yozlar">
            <p>Беговая дорожка для подготовки к марафону</p>
            <p>Лучшие тренажеры для жиросжигания</p>
            <button>Sign App</button>
          </div>
        </div>
      </div>
      <div className="shoppingg">
        {/* ****************** */}
        <div id="teripber1">
          <div className="togtiTer">
            <div className="func">
              <Shopping />
            </div>
            <div className="func">
              <Shopping />
            </div>
          </div>
          <div className="togtiTer">
            <div className="func">
              <Shopping />
            </div>
            <div className="func">
              <Shopping />
            </div>
          </div>
        </div>

        {/* ****************** */}

        <div id="teripber1">
          <div className="togtiTer">
            <div className="func">
              <Shopping />
            </div>
            <div className="func">
              <Shopping />
            </div>
          </div>

          <div className="togtiTer">
          <div className="func">
            <Shopping />
          </div>
          <div className="func">
            <Shopping />
          </div>
          </div>
         
        </div>

        {/* ****************** */}

        <div id="teripber1">
          <div className="togtiTer">
            <div className="func">
              <Shopping />
            </div>
            <div className="func">
              <Shopping />
            </div>
          </div>
          <div className="togtiTer">
            <div className="func">
              <Shopping />
            </div>
            <div className="func">
              <Shopping />
            </div>
          </div>
        </div>
      </div>
      <Qizil />
      <div className="qizilpastri">
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
      </div>
      <div className="sportchilat">
        <Sportchi />
      </div>
      <div className="qizilpastri">
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
        <div className="func">
          <Shopping />
        </div>
      </div>
      <AutoPlay />
      <Futer />
    </div>
  );
}
