import React, { useState, useEffect } from "react";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";

function Output({
  numberInRightPlace,
  numberInWrongPlace,
  numberInputFields,
  currentTrial,
  numberTrial,
  chosenColors,
  numberTrials,
  solution,
  proposalSent,
}) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const newOutput = generateOutput();
    setOutput(newOutput);
  }, [proposalSent]);

  const generateOutput = () => {
    // Falls alle vier Farben richtig sind, wird eine entsprechende
    // Meldung ausgegeben und das Ende des Spiels ausgelöst.
    let newOutput = "";
    if (numberInRightPlace === numberInputFields) {
      return (
        <OutputSolutionFound
          currentTrial={currentTrial}
          chosenColors={chosenColors}
        />
      );
    }
    // Ansonsten wird die Anzahl der richtig platzierten Farben
    // und der falsch platzierten Farben ausgegeben.
    else {
      newOutput = (
        <OutputHowGoodWasYourProposal
          numberInRightPlace={numberInRightPlace}
          numberInWrongPlace={numberInWrongPlace}
        />
      );
    }
    // Falls es sich um den 8. Versuch handelt,
    // wird das Ende des Spiels ausgelöst.
    if (
      numberTrial === numberTrials &&
      numberInRightPlace !== numberInputFields
    ) {
      const solutionGerman = toGermanColors(solution);
      newOutput = (
        <div>
          <OutputHowGoodWasYourProposal
            numberInRightPlace={numberInRightPlace}
            numberInWrongPlace={numberInWrongPlace}
          />
          <OutputOutOfTurns colorsSolution={solutionGerman} />
        </div>
      );
    }
    return newOutput;
  };

  // Wandelt die englischen Bezeichnungen
  // der Farben in deutsche Bezeichnungen um.
  const toGermanColors = (colors) => {
    const colorMap = {
      yellow: "gelb",
      orange: "orange",
      red: "rot",
      mediumorchid: "lila",
      royalblue: "blau",
      limegreen: "grün",
    };
    return colors.map((color) => colorMap[color] || "andere Farbe").join(", ");
  };

  return <div>{output}</div>;
}

export default Output;
