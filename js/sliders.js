const clickPrev=document.querySelector('.prev'),
        clickNext=document.querySelector('.next');

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

clickPrev.onclick=()=>{
    plusSlides(-1)
};
clickNext.onclick=()=>{
    plusSlides(1);
};

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.querySelectorAll('.mySlidesShow');
    if (n > slides.length) {
    slideIndex = 1;
}
    if (n < 1) {
    slideIndex = slides.length;
}
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slides[slideIndex - 1].style.display='block';
}
