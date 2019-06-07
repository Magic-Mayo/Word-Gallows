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
        'guillotine',
        'fief',
        'knight',
        'amercement',
        'borough',
        'guild',
        'breastplate',
        'chainmail',
        'crossbow',
        'javelin',
        'longbow',
        'morningstar',
        'lance',
        'ballista',
        'petard',
        'armiger',
        'bastion',
        'broadsword',
        'fletchings',
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
    // console.log(wordChoiceLength);
    // console.log(wordChoice);

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
        console.log(event)
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

            wrongGuess = document.getElementById('guess').innerText

            if (!wordChoice.includes(event.key) && !wrongGuess.includes(event.key)) {
                document.getElementById('guess').textContent += event.key + ' ';
                guesses[0] = document.getElementById('turn').textContent -= 1;
                console.log('hi')
            }

            // Determines if a game is lost and tallies the score in the necks broken column
            gameOver = function () {
                // Audio from zapslap.com
                const hang = new Audio('assets/trap door.mp3');
                const bone = new Audio('assets/bone.mp3');
                const scream = new Audio('assets/scream.mp3');
                hang.play();
                setTimeout(function () {
                    bone.play();
                }, 750);
                setTimeout(function () {
                    scream.play();
                }, 900);
                document.getElementById('broken').textContent = parseInt(document.getElementById('broken').textContent) + 1;
            }

            // Determines if a game is won and tallies the score in necks saved
            gameWin = function () {
                // Audio from zapslap.com
                const crowd = new Audio('assets/crowd.mp3');
                crowd.play();
                setTimeout(function(){
                    crowd.pause();
                }, 4781);
                document.getElementById('saved').textContent = parseInt(document.getElementById('saved').textContent) + 1;
            }

            if (!document.getElementById('word').textContent.includes('_')) {
                gameWin();
                setTimeout(function () {
                    begin();
                }, 4781)
            }

            if (document.getElementById('turn').textContent == 0) {
                gameOver();
                begin();
            }
            // console.log(document.getElementById('word').textContent)
        }
    }
}


begin();
