const classesImg = document.querySelectorAll(".class img");

window.onload = function() {
    var scrollY = window.pageYOffset;
    var rate = scrollY * .2;
    classesImg[0].style.height = `${rate}px`;
}