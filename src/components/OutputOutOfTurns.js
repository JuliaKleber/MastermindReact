import React from "react";

const OutputOutOfTurns = ({ solution }) => {

  // Wandelt die englischen Bezeichnungen
  // der Farben in deutsche Bezeichnungen um.
  const toGermanColors = (solution) => {
    const colorMap = {
      yellow: "gelb",
      orange: "orange",
      red: "rot",
      mediumorchid: "lila",
      royalblue: "blau",
      limegreen: "grün",
    };
    return solution.map((color) => colorMap[color] || "andere Farbe").join(", ");
  };

  return (
    <div>
      <p>
        Die richtige Lösung ist
        <br />
        <b>{toGermanColors(solution)}</b>
      </p>
    </div>
  );
}

export default OutputOutOfTurns;
