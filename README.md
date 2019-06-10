# Word Gallows
This is just your basic Hangman game with a medieval flare.  The game was intentionally made to be somewhat difficult.
Be warned: It was created with a bit of dark humor.

## How to properly use the game
You enter the page with an alert to warn you about the game and your desire to continue.  If you choose to continue you will
be prompted for your name and subsequently alerted to press a key to start.  If you choose cancel you will be alerted that 
you are a coward and will be forced to play anyway then subsequently prompted for your name and alerted to press a key to play.  
If the user does not enter a name when prompted or selects cancel on the prompt a name will be written in automatically.

Once the DOM loads and you will be able to play.  Each correctly guessed letter will replace the underscore in the word to guess section 
and each incorrectly guessed letter will be placed in the fallacious calculations section and will decrement the number of 
guesses the user has.  Once the user correctly guesses the word before running out of guesses there will be a sound effect and the word will 
remain on screen for a limited time then the word is reset for the user to guess.  If the user runs out of guesses before 
correctly guessing the word a different sound effect will play and the word will not display.  The word will immediately reset 
and the user will try to guess a new word.  Each win tallies in the necks saved section and each loss tallies in the necks 
broken section on the screen.

## Help and Issues
If you notice something that needs work or find a bug while playing please submit an issue via the issues page on 
[Github](https://github.com/Magic-Mayo/Word-Guess-Game/issues).