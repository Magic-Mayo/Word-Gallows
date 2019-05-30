// Words for computer to choose from for user to guess
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
    document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
    }
    console.log(wordChoice);

    if (document.getElementById('word').textContent = wordChoice) {
    document.getElementById('turn').textContent = 5;
    document.getElementById('guess').textContent = null;

    }
}
// Random word choice

// function randomWord(max) {
//     return wordChoice;
// }
// console.log(words.length);


// const userPress = document.getElementById("guess");
// let wordChoiceLength = [];
// const wordChoice = words[Math.floor(Math.random() * words.length)];

let wins = [0];
document.getElementById('saved').textContent = wins;
let losses = [0];
document.getElementById('broken').textContent = losses;
let guesses = [5];
document.getElementById('turn').textContent = guesses;

// start();
// console.log(wordChoice);

// Function to determine if a key event correctly identifies a letter in the randomly chosen word
function begin() {
    chooseWord();
    document.onkeyup = function (event) {

        // start();
        // const wordChoice = words[Math.floor(Math.random() * words.length)];
        // const word = wordChoice;
        const letter = document.getElementById('word').textContent.split(' ');
        const charCode = event.which;
        // console.log(wordChoice);
        if ((charCode > 64 && charCode < 91)) {
            for (let i = 0; i < wordChoice.length; i++) {
                if (event.key === wordChoice.charAt(i)) {
                    letter[i] = event.key;
                    document.getElementById('word').textContent = letter.join(' ');
                    // console.log(document.getElementById('word').textContent.includes('_'))
                    if (!document.getElementById('word').textContent.includes('_')) {
                        // start();
                        chooseWord;
                    }
                }
                // while (!document.getElementById('word').textContent.includes('_')) {
                //     randomWord(23);
                // }
            }
            if (! wordChoice.includes(event.key)) {
                document.getElementById('guess').textContent += event.key + ' ';
                guesses[0] = document.getElementById('turn').textContent -= 1;
                if (document.getElementById('turn').textContent == 0) {
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
                    // scream.play();
                    console.log(document.getElementById('turn'));
                    document.getElementById('broken').textContent += 1;
                    begin();
                }


            }
            // console.log(event.which)
        }
    }
}

begin();

// function start() { // nextWord(wordChoice);
//     const wordChoice = words[Math.floor(Math.random() * words.length)];
//     for (let i = 0; i < wordChoice.length; i++) {
//         wordChoiceLength[i] = '_';
//         document.getElementById('word').innerHTML = wordChoiceLength.join(' ');
//     }
//     if (document.getElementById('word').textContent = wordChoice) {
//         document.getElementById('turn').textContent = 5;
//         document.getElementById('guess').textContent = null;
//         console.log(wordChoice);

//     }
// }

// function restart() {
//     const wordChoice = words[Math.floor(Math.random() * words.length)];

//     if (document.getElementById('word').textContent = wordChoice) {
//         start();
//         document.getElementById('turn').textContent = 5;
//         document.getElementById('guess').textContent = null;
//         console.log(wordChoice);
//     }
// }

// let nextWord = new function (a)
//     a = wordChoice
