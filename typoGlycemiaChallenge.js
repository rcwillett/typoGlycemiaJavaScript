$(document).ready(function () {
    var inputSentence;
    inputSentence = prompt("Enter a sentence to be scrambled.", "Enter your sentence here.");
    $("body").append($("<form class='outputSentence'></form>"));
    $(".outputSentence").text(typoGlycemia(inputSentence));
});

function typoGlycemia(inputSentence) {
    var words = inputSentence.split(' ');
    var i;
    for (i = 0; i < words.length ; i++) {
        words[i] = wordGlycemia(words[i]);
    }
    var newSentence = words.join(' ');
    console.log(words);
    return (newSentence);
};

function wordGlycemia(wordToScramble) {
    do{
        var i;
        var character;
        var scrambleWord = wordToScramble.split("");
        var lastLetter = scrambleWord[scrambleWord.length - 1];
        var newWordArray = [];
        newWordArray.push(scrambleWord[0]);
        scrambleWord.splice(0, 1)
        scrambleWord.splice((scrambleWord.length - 1), 1)
        while (scrambleWord.length > 0) {
            i = Math.round(Math.random() * scrambleWord.length);
            newWordArray.push(scrambleWord[i]);
            scrambleWord.splice(i, 1);
        }
        newWordArray.push(lastLetter);
        var newWord = newWordArray.join('');
    }while(newWord===wordToScramble);
    return (newWord);
};
