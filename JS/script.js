// Loader


window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },1000);
});

// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem=portfolioItems.length;

        for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");

                const filterValue=this.getAttribute("data-filter");
                for (let k=0; k<totalPortfolioItem; k++){
                    if(filterValue === portfolioItems[k].getAttribute("data-category")){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }
                    else{
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide");
                    }
                    if(filterValue === "all"){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }
                }
            });
    }


// Navbar

const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;


    for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
            a.addEventListener("click", function(){
                // remove back section
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.remove("back-section");
                }

                for(let k=0; k<totalNavList; k++){
                    if(navList[k].querySelector("a").classList.contains("active")){
                        // add back section
                        allSection[k].classList.add("back-section");
                    }
                    navList[k].querySelector("a").classList.remove("active");

                }

                this.classList.add("active");
                showSection(this);

                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
            });
    }

function showSection(element){

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active");
}


const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",asideSectionTogglerBtn);

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

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