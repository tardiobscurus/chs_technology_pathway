window.onload = function() {
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

    const image         = document.querySelector(".launch-back img");

    window.addEventListener("scroll", () => {
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

        ///////////////////////////////

        const textLineOne   = document.querySelector(".content1 .text hr");
        const textLineTwo   = document.querySelector(".content2 .text hr");
        const textLineThree = document.querySelector(".content3 .text hr");

        const copyright     = document.querySelector(".copyright");

        if (scroll < 1740) {
            copyright.style.animation     = "hideCopyright 750ms ease forwards";
        }

        if (scroll < 415) {
            textLineOne.style.animation   = "hideTextLine forwards 1s ease";
        } else if (scroll > 1950) {
            textLineThree.style.animation = "hideTextLine forwards 1s ease";
            copyright.style.animation     = "showCopyright 750ms ease forwards";
        }

        if (scroll >= 485 && scroll <= 850) {
            textLineOne.style.animation   = "showTextLine forwards 1s ease";

            textLineTwo.style.animation   = "hideTextLine forwards 1s ease";
        } else if (scroll >= 1010 && scroll <= 1380) {
            textLineTwo.style.animation   = "showTextLine forwards 1s ease";

            textLineOne.style.animation   = "hideTextLine forwards 1s ease";
            textLineThree.style.animation = "hideTextLine forwards 1s ease";
        } else if (scroll >= 1535 && scroll <= 1855) {
            textLineThree.style.animation = "showTextLine forwards 1s ease";

            textLineTwo.style.animation   = "hideTextLine forwards 1s ease";
        }

        ////////////////////////////////////////////////////////

        const allLineBreaks   = document.querySelectorAll(".line-break");

        const contentIMGOne   = document.querySelector(".content1 img");
        const contentTEXTOne  = document.querySelector(".content1 .text");
        
        const contentIMG2One  = document.querySelector(".content2 img");
        const contentTEXT2One = document.querySelector(".content2 .text");

        const contentIMG3One  = document.querySelector(".content3 img");
        const contentTEXT3One = document.querySelector(".content3 .text");

        if (window.innerWidth > 1000) {
            contentIMGOne.style.transform    = `translate3d(0, ${250-(scroll * .4)}px, 0)`;
            contentTEXTOne.style.transform   = `translate3d(0, ${450-(scroll * .7)}px, 0)`;
            allLineBreaks[0].style.transform = `translate3d(0, ${300-(scroll * .4)}px, 0)`;

            contentIMG2One.style.transform   = `translate3d(0, ${350-(scroll * .4)}px, 0)`;
            contentTEXT2One.style.transform  = `translate3d(0, ${725-(scroll * .7)}px, 0)`;
            allLineBreaks[1].style.transform = `translate3d(0, ${400-(scroll * .4)}px, 0)`;

            contentIMG3One.style.transform   = `translate3d(0, ${450-(scroll * .4)}px, 0)`;
            contentTEXT3One.style.transform  = `translate3d(0, ${975-(scroll * .7)}px, 0)`;
        }

        ///////////////////////////////
        
    });
}