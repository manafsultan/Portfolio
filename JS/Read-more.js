// Read more/Read less

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.style.display = "none"; 
        moreText.style.display = "inline";
    }
}

function monFunction() {
    var poin = document.getElementById("poin");
    var plusText = document.getElementById("plus");
    var botnText = document.getElementById("monBtn");

    if (poin.style.display === "none") {
        poin.style.display = "inline";
        botnText.innerHTML = "Read more"; 
        plusText.style.display = "none";
    } else {
        poin.style.display = "none";
        botnText.style.display = "none"; 
        plusText.style.display = "inline";
    }
}