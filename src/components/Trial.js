// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren und
// durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";

function Trial(props) {
  const numberTrial = props.numberTrial;
  const [currentTrial, setCurrentTrial] = useState(props.currentTrial);
  const [chosenColor, setChosenColor] = useState(props.chosenColor);
  const solution = props.solution;
  const numberTrials = props.numberTrials;
  const [chosenColors, setChosenColors] = useState(Array(4).fill("white"));
  const [proposalSent, setProposalSent] = useState(false);
  const [output, setOutput] = useState("");
  const [endOfGame, setEndOfGame] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [isShown, setIsShown] = useState(false);

  // Wenn die props in App.js verändert werden,
  // werden sie auch hier geändert.
  useEffect(() => {
    setCurrentTrial(props.currentTrial);
  }, [props.currentTrial]);

  useEffect(() => {
    setChosenColor(props.chosenColor);
  }, [props.chosenColor]);

  // Setzt das Spiel zurück.
  useEffect(() => {
    if (props.resetGame === true) {
      setChosenColors(Array(4).fill("white"));
      setOutput("");
      setProposalSent(false);
      props.onResetGame(false);
    }
  }, [props.resetGame, props]);

  // Wenn sich der aktuelle Versuch ändert,
  // werden alle Versuche bis zum aktuellen Versuch angezeigt.
  useEffect(() => {
    numberTrial <= currentTrial ? setIsShown(true) : setIsShown(false);
  }, [currentTrial, numberTrial]);

  // Wenn der Nutzer noch mal spielen will,
  // wird die Info an App.js weitergegeben.
  useEffect(() => {
    if (playAgain === true) {
      props.onPlayAgain(true);
      setEndOfGame(false);
      setPlayAgain(false);
    }
  }, [playAgain, props]);

  // Wenn eine Kachel des Versuchs angeklickt wird,
  // wird die chosenColor im Array chosenColors
  // unter dem entsprechendem Index gespeichert.
  function setColor(index) {
    if (currentTrial === numberTrial) {
      const newChosenColors = [...chosenColors];
      newChosenColors[index] = chosenColor;
      setChosenColors(newChosenColors);
    }
  }

  // Prüft in der ersten for-Schleife wie viele Farben der vom Benutzer
  // vorgeschlagenen Lösung an der richtigen Stelle sind und in der zweiten
  // for-Schleife wie viele Farben an der falschen Stelle sind.
  // Außerdem wird in der nachfolgenden Funktion generatureOutput
  // eine entsprechende Textnachricht generiert.
  function checkProposal(event) {
    let inRightPlace = 0;
    let inWrongPlace = 0;
    let newSolution = solution;
    let proposal = chosenColors;
    for (let i = 3; i >= 0; i--) {
      if (newSolution[i] === proposal[i]) {
        inRightPlace += 1;
        newSolution = [].concat(
          newSolution.slice(0, i),
          newSolution.slice(i + 1)
        );
        proposal = [].concat(proposal.slice(0, i), proposal.slice(i + 1));
      }
    }
    for (let i = newSolution.length - 1; i >= 0; i--) {
      for (let j = newSolution.length - 1; j >= 0; j--) {
        if (newSolution[i] === proposal[j]) {
          inWrongPlace += 1;
          newSolution = [].concat(
            newSolution.slice(0, i),
            newSolution.slice(i + 1)
          );
          proposal = [].concat(proposal.slice(0, j), proposal.slice(j + 1));
        }
      }
    }
    generateOutput(inRightPlace, inWrongPlace);
  }

  function generateOutput(inRightPlace, inWrongPlace) {
    // Falls alle vier Farben richtig sind, wird eine entsprechende
    // Meldung ausgegeben und das Ende des Spiels ausgelöst.
    let newOutput = "";
    if (inRightPlace === 4) {
      newOutput = (
        <OutputSolutionFound
          currentTrial={currentTrial}
          chosenColors={chosenColors}
        />
      );
      setOutput(newOutput);
      setEndOfGame(true);
      // Button wird ausgeblendet
      setProposalSent(true);
      return;
    }
    // Ansonsten wird die Anzahl der richtig platzierten Farben
    // und der falsch platzierten Farben ausgegeben.
    newOutput = (
      <OutputHowGoodWasYourProposal
        inRightPlace={inRightPlace}
        inWrongPlace={inWrongPlace}
      />
    );
    setOutput(newOutput);
    // Falls es sich um den 8. Versuch handelt,
    // wird das Ende des Spiels ausgelöst.
    if (numberTrial === numberTrials) {
      const solutionGerman = changeToGermanColors(solution);
      newOutput = (
        <>
          <OutputHowGoodWasYourProposal
            inRightPlace={inRightPlace}
            inWrongPlace={inWrongPlace}
          />
          <OutputOutOfTurns colorsSolution={solutionGerman} />
        </>
      );
      setOutput(newOutput);
      setEndOfGame(true);
    }
    // SendButton wird ausgeblendet.
    setProposalSent(true);
    // CurrentTrial wird um eins erhöht.
    props.onIncremented(currentTrial + 1);
  }

  // Wandelt die englischen Bezeichnungen
  // der Farben in deutsche Bezeichnungen um.
  function changeToGermanColors() {
    let newSolution = [];
    for (let color of solution) {
      switch (color) {
        case "yellow":
          newSolution.push("gelb");
          break;
        case "orange":
          newSolution.push("orange");
          break;
        case "red":
          newSolution.push("rot");
          break;
        case "mediumorchid":
          newSolution.push("lila");
          break;
        case "royalblue":
          newSolution.push("blau");
          break;
        case "limegreen":
          newSolution.push("grün");
          break;
        default:
          break;
      }
    }
    const stringSolution = newSolution.join(", ");
    return stringSolution;
  }

  return (
    <div
      className={isShown ? "trial-visible" : "trial-not-visible"}
      id={"trial" + numberTrial}
    >
      <h3>{numberTrial}. Versuch</h3>
      <div>
        {chosenColors.map((color, index) => (
          <button
            className="input-field"
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => setColor(index)}
          ></button>
        ))}
      </div>
      <input
        className={
          proposalSent ? "send-button-invisible" : "send-button-visible"
        }
        value="absenden"
        type="button"
        onClick={() => checkProposal()}
      />
      {output}
      {endOfGame && <p>Möchtest du noch mal spielen?</p>}{" "}
      {endOfGame && (
        <input
          value="Ja"
          onClick={() => setPlayAgain(true)}
          type="button"
        ></input>
      )}
    </div>
  );
}
export default Trial;
