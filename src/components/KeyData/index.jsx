import React from "react";
import "./KeyData.sass";

const KeyData = ({ value, kind }) => {
  return (
    <div>
      <p>
        {value}
        {kind === "Calories" ? "kCal" : "g"}
      </p>
      <span>{kind}</span>
    </div>
  );
};

export default KeyData;
