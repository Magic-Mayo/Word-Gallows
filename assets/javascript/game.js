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

document.onkeyup = function (event) {
    userPress.textContent = event.key;
    if (event.key == guess()){

        }
    }
// for (document.onkeyup in )

let wordChoiceLength = [];
function start(){
    for (let i = 0; i < wordChoice.length; i++) {
        wordChoiceLength[i] = '_';
        document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
    }
}

start()

// document.getElementById('guessbtn') = guessbtn;
// document.getElementById('userguess') = userguess;

function guess() {
    for (i = 0; i < wordChoice.length; i++) {
        wordChoice[i];
        }
    }

guess()
