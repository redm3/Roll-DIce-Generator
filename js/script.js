function rollDice() {
    var diceType = document.getElementById("dice-type").value;
    var result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = "Result: " + result;
  }