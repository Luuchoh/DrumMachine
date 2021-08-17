import React, { Fragment, useEffect, useState } from "react";

import { inactiveStyle } from "../styles/button-styles";

const DrumPad = ({ Bank, Power }) => {
  const [button] = useState(inactiveStyle);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e) => {
    console.log(e)
  };

  const activatePad = (b) => {
    if (Power === true) {
      if (b.backgroundColor === "orange") {
        b.backgroundColor = "gray";
        b.marginTop = "10px";
        b.height = "80px";
        b.boxShadow = "3px 3px 5px black";
      } else {
        b.backgroundColor = "orange";
        b.boxShadow = "0 3px orange";
        b.height = "77px";
        b.marginTop = "13px";
      }
    } else if (b.marginTop === "13px") {
      b.backgroundColor = "gray";
      b.height = "80px";
      b.marginTop = "10px";
      b.boxShadow = "3px 3px 5px black";
    } else {
      b.height = "77px";
      b.marginTop = "13px";
      b.backgroundColor = "grey";
      b.boxShadow = "0 3px grey";
    }
  };

  const playSound = (e) => {
    const div = e.target;
    if (Power === true) {
      const audio = div.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      activatePad(div.style);
      setTimeout(() => activatePad(div.style), 100);
    } else {
      activatePad(div.style);
      setTimeout(() => activatePad(div.style), 100);
    }
  };

  return (
    <Fragment>
      {Bank.map((b) => (
        <div className="drum-pad" id={b.id} onClick={playSound} style={button}>
          <audio className="clip" id={b.keyTrigger} src={b.url} />
          {b.keyTrigger}
        </div>
      ))}
    </Fragment>
  );
};

export default DrumPad;
