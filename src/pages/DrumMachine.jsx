import React, { Fragment, useState } from "react";
import DrumPad from "../components/DrumPad";
import { BankOne, BankTwo } from "../data/keys-sounds";

import "../styles/drumMachine-styles.scss";

const DrumMachine = () => {
  const [bank, setBank] = useState(true);
  const [power, setPower] = useState(true);

  const powerControl = () => {
    if (power === true) {
      setPower(false);
    } else {
      setPower(true);
    }
  };

  const selectBank = () => {
    if (power !== false) {
      if (bank === true) {
        setBank(false);
      } else {
        setBank(true);
      }
    }
  };

  return (
    <Fragment>
      <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
          <DrumPad 
            Power={power} 
            Bank={bank ? BankOne : BankTwo} />
        </div>
        <div className="controls-container">
          <div className="logo">
            <div className="inner-logo ">
              {"FCC" + String.fromCharCode(160)}
            </div>
            <i className="inner-logo fa fa-free-code-camp" />
          </div>
          <div className="control">
            <p>Power</p>
            <div className="select" onClick={powerControl}>
              <div
                className="inner"
                style={power ? { float: "right" } : { float: "left" }}
              />
            </div>
          </div>

          <div className="control">
            <p>Bank</p>
            <div className="select" onClick={selectBank}>
              <div
                className="inner"
                style={bank ? { float: "right" } : { float: "left" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DrumMachine;
