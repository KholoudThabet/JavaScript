document.body.addEventListener("keydown", function(e) {
    var key = e.key;
    const ad = new Audio();

    if (key === "w") {
        ad = document.getElementById("50").play();
    } else if (key === "e") {
        ad = document.getElementById("51").play();
    } else if (key === "r") {
        ad = document.getElementById("52").play();
    } else if (key === "s") {
        ad = document.getElementById("53").play();
    } else if (key === "d") {
        ad = document.getElementById("54").play();
    } else if (key === "f") {
        ad = document.getElementById("55").play();
    } else if (key === "x") {
        ad = document.getElementById("56").play();
    }
});