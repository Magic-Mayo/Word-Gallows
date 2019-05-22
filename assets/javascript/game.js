alert("Beware: Henceforth erroneous suppositions shall be tallied in regards to thy hanging by the neck.  Should thy tally reach five, you shall be hanged!");

confirm("Doest thou wish to proceed?")

if (confirm) {
    const name = prompt("T'is thy name?");
    function yourName() {
        const userName = document.getElementById("name");
        const writeName = document.createTextNode(name);
        userName.appendChild(writeName);
        console.log(writeName);
    }
    
}


else {


}