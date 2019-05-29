// Words for computer to choose from for user to guess
const words = [
    'vassalage',
    'gauntlet',
    'jousting',
    'crusade',
    'paladin',
    'squire',
    'executioner',
    'excommunication',
    'soothsayer',
    'harlot',
    'chivalry',
    'troubadour',
    'clergy',
    'fortress',
    'blacksmith',
    'cobbler',
    'constable',
    'parchment',
    'rampart',
    'quarrel',
    'trebuchet',
    'warhammer',
    'guillotine'
]
const wordChoice = words[Math.floor(Math.random() * words.length)];
console.log(wordChoice)
const userPress = document.getElementById("guess");

function userGuess(){
    document.onkeyup = function (event) {
    userPress.textContent = event.key;
    }
}
// for (document.onkeyup in )
userGuess()

let wordChoiceLength = [];
function start(){
    for (let i = 0; i < wordChoice.length; i++) {
        wordChoiceLength[i] = '_';
        document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
    }
}

start()

const remLetter = wordChoice.length;
// document.getElementById('guessbtn') = guessbtn;
// document.getElementById('userguess') = userguess;

function guess() {
    for (i = 0; i < remLetter; i++) {

    if (wordChoice[i] == userguess('string') ) {
        wordChoiceLength[j] = document.onkeyup;
        remLetter --;
        document.getElementById('word')

        }
    }
    console.log()
}
guess()
