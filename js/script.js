function rollDice() {
    var diceType = document.getElementById("dice-type").value;
    var result = testRandomNumber(diceType);
    document.getElementById("result").innerHTML = "Result: " + result;
  }



  function testRandomNumber(diceType){
    var result = Math.floor(Math.random() * diceType) + 1;
    return result;
  }


  //test if function returns a number 
  function testRollDiceReturnsNumber() {
    const result = testRandomNumber(6);
    if (typeof result === 'number') {
      console.log('Test 1 passed!');
    } else {
      console.error('Test 1 failed.');
    }
  }

  testRollDiceReturnsNumber();