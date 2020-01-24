window.onload = function() {
    var isNotOpen       = true;
    const navigation    = document.querySelector(".navigation");
    const hamburger     = document.querySelector(".hamburger-nav");
    navigation.style.opacity = "0";

    hamburger.addEventListener("click", () => {
        const line          = document.querySelectorAll(".hamburger-nav .line");
        
        if (!isNotOpen) {
            isNotOpen = true;
            navigation.style.opacity = "0";
            navigation.style.pointerEvents = "none";
        
            for (var i = 0; i < 3; i++) {
                if (line[i].style.backgroundColor = "white") {
                    line[i].style.backgroundColor = "black";
                }
            }
        } else {
            isNotOpen = false;
            navigation.style.opacity = "1";
            navigation.style.pointerEvents = "auto";

            for (var i = 0; i < 3; i++) {
                if (line[i].style.backgroundColor = "black") {
                    line[i].style.backgroundColor = "white";
                }
            }
        }
    });

    window.addEventListener("scroll", () => {
        const title         = document.querySelector(".title");
        const image         = document.querySelector(".launch-back img");
        const line          = document.querySelectorAll(".hamburger-nav .line");
        var scroll          = window.pageYOffset;
        var rate            = scroll * .3;
        var backrate        = scroll * .7;

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
    });
}