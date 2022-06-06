/* scroll script */
const myButton = document.getElementById("scrollBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myButton.style.display = "block";
    myButton.style.transition='all 1s';
    } else {
    myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
