import React from "react";

function BoxCity({ cityName, isSelected, onSelectCity }) {
  return (
    <div
      className={`city-box ${isSelected ? "selected" : ""}`}
      onClick={() => onSelectCity(cityName)}
    >
      {cityName}
    </div>
  );
}

export default BoxCity;