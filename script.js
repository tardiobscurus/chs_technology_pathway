window.onload = function() {
    console.log(window.innerWidth);
    var isNotOpen       = true;
    const navigation    = document.querySelector(".navigation");
    const hamburger     = document.querySelector(".hamburger-nav");
    navigation.style.opacity = "0";

    hamburger.addEventListener("click", () => {
        const line          = document.querySelectorAll(".hamburger-nav .line");
        
        if (!isNotOpen) {
            isNotOpen = true;
            navigation.style.opacity = "0";
            navigation.style.transform = `translate3d(0, 100vh, 0)`;
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

            if(window.pageYOffset >= (window.innerHeight - 20)) {
                for (var i = 0; i < 3; i++) {
                    if (line[i].style.backgroundColor = "black") {
                        line[i].style.backgroundColor = "white";
                    }
                }
            }
        }
    });

    const image         = document.querySelector(".launch-back img");

    window.addEventListener("scroll", () => {
        const title         = document.querySelector(".title");
        const line          = document.querySelectorAll(".hamburger-nav .line");
        var scroll          = window.pageYOffset;
        var rate            = scroll * .3;
        var backrate        = scroll * .5;

        title.style.transform = `translate3d(0, ${rate}px, 0)`;
        image.style.transform = `translate3d(0, ${backrate}px, 0)`;

        if (scroll >= (window.innerHeight - 20)) {
            for (var i = 0; i < 3; i++) {
                line[i].style.backgroundColor = "black";
            }
        } else {
            for (var i = 0; i < 3; i++) {
                line[i].style.backgroundColor = "white";
            }
        }

        ////////////////////////////////////////////////////////

        const contentIMGOne = document.querySelector(".content1 img");
        const contentTEXTOne = document.querySelector(".content1 .text");
        
        if (window.innerWidth > 1000) {
            contentIMGOne.style.transform = `translate3d(-${scroll * .1}px, 0, 0)`;
            contentTEXTOne.style.padding = `${(scroll * .05) + 20}px 40px`;
            contentTEXTOne.style.transform = `translate3d(${scroll * .05}px, 0, 0)`;
            contentTEXTOne.style.borderRadius = `${(scroll * .01)}px`;
        }

    });

    var random = Math.floor(Math.random() * 3);
    if (random == 0) {
        image.src = "images/gifs/spheres-dots.webp";
    } else if (random == 1) {
        image.src = "images/gifs/spiral-dots.gif";
    } else if (random == 2) {
        image.src = "images/gifs/weird-movement.gif";
    }
}