function rollDice() {

    var diceType = document.getElementById("dice-type").value;
    
    if (diceType == 6) {    
        var sourceOfPicture = "https://viterbi-web.usc.edu/~ckojukwu/itp301/assignment_04/img/diceroll.gif";
        var img = document.getElementById('6pic')
        img.src = sourceOfPicture.replace('90x90', '225x225');
        img.style.display = "block";
        //setTimeout(function() {img.style.display = 'none';}, 3500);
        //setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
    }
    
    if (diceType == 10) {    
        var sourceOfPicture = "https://media.tenor.com/KBNPB0oVi_oAAAAj/nat19-natural19.gif";
        var img = document.getElementById('10pic')
        img.src = sourceOfPicture.replace('90x90', '225x225');
        img.style.display = "block";
        //setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
    }

    var result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = "Result: " + result;

    if (diceType==6){
        if (result==1){
            var sourceOfPicture = "https://media.tenor.com/BZGKCKH8Wp4AAAAj/dice-roll-dice.gif";
            var img = document.getElementById('6-1pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }

        if(result==2){
            var sourceOfPicture = "https://media.tenor.com/VB6lPcSFiVgAAAAj/dice2-dice.gif";
            var img = document.getElementById('6-2pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }
        if(result==3){
            var sourceOfPicture = "https://media.tenor.com/Pq2avhc9XvkAAAAj/dice-roll-dice.gif";
            var img = document.getElementById('6-3pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }
        if(result==4){
            var sourceOfPicture = "https://media.tenor.com/cHiHze95e3cAAAAj/dice-roll-dice.gif";
            var img = document.getElementById('6-4pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }
        if(result==5){
            var sourceOfPicture = "https://media.tenor.com/iBb9CXPm3icAAAAj/dice-roll-dice.gif";
            var img = document.getElementById('6-5pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }

        if(result==6){
            var sourceOfPicture = "https://media.tenor.com/HcK7RSiai-AAAAAj/dice-roll-dice.gif";
            var img = document.getElementById('6-6pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 3500); // 1000 milliseconds = 1 seconds
        }
    }
    if (diceType==10){
        if (result==1){
            var sourceOfPicture = "https://media.tenor.com/tCq5mfycACMAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-1pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==2){
            var sourceOfPicture = "https://media.tenor.com/zTg9FhOqpDIAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-2pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==3){
            var sourceOfPicture = "https://media.tenor.com/8UcqJlc93EgAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-3pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==4){
            var sourceOfPicture = "https://media.tenor.com/l-95tTbEKGkAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-4pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds

        }
        if(result==5){
            var sourceOfPicture = "https://media.tenor.com/r7bAmy9lpJUAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-5pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==6){
            var sourceOfPicture = "https://media.tenor.com/HEHpab5WZHwAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-6pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==7){
            var sourceOfPicture = "https://media.tenor.com/jTOrIZkFmVYAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-7pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==8){
            var sourceOfPicture = "https://media.tenor.com/FFLUTiVgFNsAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-8pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==9){
            var sourceOfPicture = "https://media.tenor.com/92v1rySX6QUAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-9pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
        if(result==10){
            var sourceOfPicture = "https://media.tenor.com/flDyUOp9NDoAAAAi/d20-dice-roll.gif";
            var img = document.getElementById('10-10pic')
            img.src = sourceOfPicture.replace('90x90', '225x225');
            img.style.display = "block";
            setTimeout(function() {img.style.display = 'none';}, 2000); // 1000 milliseconds = 1 seconds
        }
    }
}
