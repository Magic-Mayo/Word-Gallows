const warn = confirm("Beware: Henceforth erroneous suppositions shall be tallied in regards to thy hanging by the neck.  Should thy tally reach five, you shall be hanged!  Doest thou wish to proceed?");

// confirm("Doest thou wish to proceed?");

if (warn) {
    const name = prompt("T'is thy name?");

    // Function to add name to body of HTML after prompted
    function yourName() {
        const userName = document.getElementById("name");
        const writeName = document.createTextNode(name);
        userName.appendChild(writeName);
        console.log(writeName);
    }

    // Executes yourName function after document is loaded
    window.addEventListener('DOMContentLoaded', yourName)
}

// If user chooses not to play they will be given this message and display a different background
else if (!warn) {
    alert("Thou hast chosen to be but a coward.  But if nothing else thy neck shan't be broken this day.");

    function cowardBG(cowardImage) {
        document.getElementById("body").className = "bg" + cowardImage;
        const container = document.getElementByClassName("para");
        container.style.display = "none";
    }


}