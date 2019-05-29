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
// const char = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const wordChoice = words[Math.floor(Math.random() * words.length)];

console.log(wordChoice);
// const userPress = document.getElementById("guess");
let wins = ['0'];
document.getElementById('saved').textContent = wins;
let losses = ['0'];
document.getElementById('broken').textContent = losses;
let guesses = [5];
document.getElementById('turn').textContent = guesses;

// Function to determine if a key event correctly identifies a letter in the randomly chosen word
document.onkeyup = function (event) {
    const letter = document.getElementById('word').textContent.split(' ');
    const charCode = event.which;
    if ((charCode > 64 && charCode < 91)) {
        guess : for (let i in wordChoice) {
            if (event.key === wordChoice.charAt(i)) {
                letter[i] = event.key;
                document.getElementById('word').textContent = letter.join(' ');
                break guess;
            }
        }
        if (! wordChoice.includes(event.key)) {
            document.getElementById('guess').textContent += event.key + ' ';
            guesses[0] = document.getElementById('turn').textContent -= 1;
            if (document.getElementById('turn').textContent == 0) {
                const hang = new Audio('assets/trap door.mp3');
                const neck = new Audio('assets/neck.mp3');
                hang.play();
                setTimeout(function () {neck.play();}, 500);
                console.log(document.getElementById('turn'))
            }


        }
        console.log(event.which)
    }
}

let wordChoiceLength = [];
function start() {
    for (let i = 0; i < wordChoice.length; i++) {
        wordChoiceLength[i] = '_';
        document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
    }
}
start()
