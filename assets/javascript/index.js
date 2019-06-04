const warn = confirm("Beware: Henceforth erroneous suppositions shall be tallied in regards to thy hanging by the neck.  Should thy tally reach five, you shall be hanged!  Doest thou wish to proceed?");

if (warn) {
    const name = prompt("T'is thy name?");

    // Function to add name to body of HTML after prompted
    function userName() {
        const userName = document.getElementById("name");
        const writeName = document.createTextNode(name);
        userName.appendChild(writeName);
        console.log(writeName);
    }

    // Executes yourName function after document is loaded
    window.addEventListener('DOMContentLoaded', userName)
}

// // If user chooses not to play they will be given this message and forced to play with less chance to guess wrong
// else if (!warn) {
//     alert("Thou hast chosen to be but a coward.  For thine treachery, ye shall be given only three faulty predictions!");
//     const coward = prompt("T'is thy name, coward?");

//         // Function to add name to body of HTML after prompted
//         function cowardName() {
//             const cowardName = document.getElementById("name");
//             const writeCoward = document.createTextNode(coward);
//             cowardName.appendChild(writeCoward);
//             console.log(writeCoward);
//         }
        
//         // Executes coward function after document is loaded
//         window.addEventListener('DOMContentLoaded', cowardName);
// }

