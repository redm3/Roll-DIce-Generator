function rollDice() {
    var diceType = document.getElementById("dice-type").value;
    var result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = "Result: " + result;
  }

  //test if function returns a number 
  function testRollDiceReturnsNumber() {
    const result = rollDice();
    if (typeof result === 'number') {
      console.log('Test 1 passed!');
    } else {
      console.error('Test 1 failed.');
    }
  }

  testRollDiceReturnsNumber();