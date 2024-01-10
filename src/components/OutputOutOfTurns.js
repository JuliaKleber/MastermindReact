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
      <p className="centered-text">
        Dieses Mal hast du nicht gewonnen. Gutes Gelingen beim nächsten Mal!
        <br />
        <br />
        Die Lösung ist
        <br />
        <b>{toGermanColors(solution)}</b>
      </p>
    </div>
  );
}

export default OutputOutOfTurns;
