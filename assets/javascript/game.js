// Words for computer to choose from randomly gsfor user to guess
chooseWord = function () {
    let wordChoiceLength = [];
    words = [
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
    ];
    wordChoice = words[Math.floor(Math.random() * words.length)];

    for (let i = 0; i < wordChoice.length; i++) {
        wordChoiceLength[i] = '_';
    }
    if (document.getElementById('word').textContent = wordChoiceLength) {
        document.getElementById('turn').textContent = 5;
        document.getElementById('guess').textContent = null;
    }

    document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
    console.log(wordChoiceLength);
    console.log(wordChoice);

}

let wins = [0];
document.getElementById('saved').textContent = wins;
let losses = [0];
document.getElementById('broken').textContent = losses;
let guesses = [5];
document.getElementById('turn').textContent = guesses;

// Function to determine if a key event correctly identifies a letter in the randomly chosen word
function begin() {
    chooseWord();
    document.onkeyup = function (event) {

        const letter = document.getElementById('word').textContent.split(' ');
        const charCode = event.which;

        if ((charCode > 64 && charCode < 91)) {
            for (let i = 0; i < wordChoice.length; i++) {
                if (event.key === wordChoice.charAt(i)) {
                    letter[i] = event.key;
                    document.getElementById('word').textContent = letter.join(' ');
                    if (!document.getElementById('word').textContent.includes('_')) {
                        chooseWord;
                    }
                }
            }

            if (!wordChoice.includes(event.key)) {
                document.getElementById('guess').textContent += event.key + ' ';
                guesses[0] = document.getElementById('turn').textContent -= 1;
            }

            // Determines if a game is lost and tallies the score in the necks broken column
            gameOver = function () {
                const hang = new Audio('assets/trap door.mp3');
                const bone = new Audio('assets/bone.mp3');
                const scream = new Audio('assets/scream.mp3');
                hang.play();
                setTimeout(function () {
                    bone.play();
                }, 700);
                setTimeout(function () {
                    scream.play();
                }, 800);
                console.log(document.getElementById('turn'));
                document.getElementById('broken').textContent = parseInt(document.getElementById('broken').textContent) + 1;
            }

            // Determines if a game is won and tallies the score in necks saved
            gameWin = function () {
                document.getElementById('saved').textContent = parseInt(document.getElementById('saved').textContent) + 1;
                // begin();
            }

            if (!document.getElementById('word').textContent.includes('_')) {
                gameWin();
                begin();
            }

            if (document.getElementById('turn').textContent == 0) {
                gameOver();
                begin();
            }
            console.log(document.getElementById('word').textContent)
        }
    }
}


begin();
