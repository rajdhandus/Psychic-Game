var secretLetter = randomLetter();

function randomLetter() {
    var allowedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var result = allowedLetters.charAt( Math.floor(Math.random() * allowedLetters.length));
    console.log("secret letter is " + result);
    console.log(typeof result);  
    return result;
}

function resetLetter() {
	secretLetter = randomLetter();
}


function checkGuess(input) {
	console.log("Comparing :) " + secretLetter + " with " + input);
	console.log("Result  OF COMPARING" + secretLetter==input);
	console.log(typeof secretLetter);  
    console.log(typeof input);  
    return secretLetter==input;
}

function keyPressed(event) {
	var x = event.which || event.keyCode;
	document.getElementById("guesses").innerHTML = "Your Guesses is: " + x;
}
