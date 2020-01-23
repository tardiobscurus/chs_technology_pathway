const hamburger     = document.querySelector(".hamburger-nav");

hamburger.addEventListener("click", () => {
    alert(document.documentElement.clientHeight)
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

    if (scroll > document.documentElement.clientHeight) {
        line[0].style.backgroundColor = "black";
        line[1].style.backgroundColor = "black";
        line[2].style.backgroundColor = "black";
    } else {
        line[0].style.backgroundColor = "white";
        line[1].style.backgroundColor = "white";
        line[2].style.backgroundColor = "white";
    }
});

/*

TODO:
- Create a FOR loop on line 21 - 23 & 25 - 27 for better reading on the code.

*/
