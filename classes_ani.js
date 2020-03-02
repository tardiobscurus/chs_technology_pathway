console.log(window.innerWidth);
var isNotOpen       = true;
const navigation    = document.querySelector(".navigation");
const navLinks      = document.querySelectorAll(".navigation a")
const hamburger     = document.querySelector(".hamburger-nav");
navigation.style.opacity = "0";

hamburger.addEventListener("click", () => {
    const line          = document.querySelectorAll(".hamburger-nav .line");
    var scroll          = window.pageYOffset;
    
    if (!isNotOpen) {
        isNotOpen = true;
        navigation.style.opacity = "0";
        navigation.style.transform = `translate3d(0, 100vh, 0)`;
    
        for (var i; i < 3; i++) {
            navLinks[i].style.animation = `showLinks 750ms ease forwards`;
        }
        
        navigation.style.pointerEvents = "none";
    
        for (var i = 0; i < 3; i++) {
            if (line[i].style.backgroundColor = "white") {
                line[i].style.backgroundColor = "black";
            }
        }
    } else {
        isNotOpen = false;
        navigation.style.opacity = "1";
        navigation.style.transform = `translate3d(0, 0, 0)`;
        navigation.style.pointerEvents = "auto";
    
        
        for (var i = 0; i < 3; i++) {
            if(scroll >= (window.innerHeight - 20)) {
                if (line[i].style.backgroundColor = "black") {
                    line[i].style.backgroundColor = "white";
                } else if (line[i].style.backgroundColor = "white") {
                    line[i].style.backgroundColor = "white";
                }
            }
        }
    }
    });

    window.addEventListener("scroll", () => {
        const image         = document.querySelector(".launch-back img");
        const title         = document.querySelector(".title");
        const line          = document.querySelectorAll(".hamburger-nav .line");
        var scroll          = window.pageYOffset;
        this.console.log(scroll);
        
        ////////////////////////////
        
        var rate              = scroll * .3;
        var backrate          = scroll * .5;
        
        title.style.transform = `translate3d(0, ${rate}px, 0)`;
        image.style.transform = `translate3d(0, ${backrate}px, 0)`;
        
        /////////////////////////////
        
        if (scroll >= (window.innerHeight - 20)) {
            for (var i = 0; i < 3; i++) {
                line[i].style.backgroundColor = "black";
            }
        } else {
            for (var i = 0; i < 3; i++) {
                line[i].style.backgroundColor = "white";
            }
        }

        ////////////////////////////

        const availableClasses  = document.querySelectorAll(".available-classes .class");
        const images            = document.querySelectorAll(".available-classes .class img");

        availableClasses[0].style.transform = `translate3d(0, -${rate * .4}px, 0)`;
        images[0].style.height              = `${rate}px`;
        availableClasses[1].style.transform = `translate3d(0, -${rate * .4}px, 0)`;
        images[1].style.height              = `${rate * .4}px`;

        const classGrid         = document.querySelectorAll(".available-classes .classGrid .classContent")

        classGrid[0,1].style.transform = `translate3d(0, -${rate * .4}px, 0)`



    });