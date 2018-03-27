var secretLetter = randomLetter();

function randomLetter() {
    var allowedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return allowedLetters.charAt(Math.floor(Math.random*allowedLetters.length));
}


function checkGuess(input) {
    return secretLetter===input;
}