// Words for computer to choose from for user to guess
const words = [
    'vassalage',
    'gauntlet',
    'jousting',
    'crusade',
    'paladin',
    'squire',
    'dark ages',
    'Magna Carta',
    'executioner',
    'excommunication',
    'soothsayer',
    'harlot',
    'chivalry',
    'troubadour',
    'clergy',
    'fortress',
    'blacksmith',
    'coat of arms',
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

const userPress = document.getElementById("guess");
document.onkeyup = function (event) {
    userPress.textContent = event.key;
}
// for (document.onkeyup in )

let wordChoiceLength = [];
for (let i = 0; i < wordChoice.length; i++) {
    wordChoiceLength[i] = '_';
    document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
}

const remLetter = wordChoice.length;
document.addEventListener('keyup', guess)

function guess() {
    for (let j = 0; j < wordChoice.length; j++) {
        if (wordChoice[j] == document.onkeyup) {
            wordChoiceLength[j] = document.onkeyup;
            remLetter--;
        }
    }
}
