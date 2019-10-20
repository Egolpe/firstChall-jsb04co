"use strict";

function throwDice() {
  let suma = new Array();
  let totalScore = 0;
  for (let index = 0; index <= 50; index++) {
    let dice = Math.floor(Math.random(1) * 6 + 1);
    totalScore += dice;
    suma[index] = totalScore;
    console.log(
      "Tirada #:",
      index,
      "número del dado",
      dice,
      "totalScore",
      totalScore
    );
    if (totalScore >= 50) {
      alert("fin de la partida");
      return totalScore;
    }
  }
}
console.log(throwDice());
