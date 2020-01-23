const hamburger     = document.querySelector(".hamburger-nav");

hamburger.addEventListener("click", () => {
    alert((window.innerHeight - 20))
});

window.addEventListener("scroll", () => {
    const title         = document.querySelector(".title");
    const image         = document.querySelector(".launch-back img");
    const line          = document.querySelectorAll(".hamburger-nav .line");
    var scroll          = window.pageYOffset;
    var rate            = scroll * .3;
    var backrate        = scroll * .7;

    console.log(scroll);

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

/*

TODO:
- Create a FOR loop on line 21 - 23 & 25 - 27 for better reading on the code.

*/
