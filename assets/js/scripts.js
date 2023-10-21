// accardion

let filterBtn=Array.from(document.getElementsByClassName('filterBtn'));
let filterContent=Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item)=>{
    item.addEventListener('click',function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// mobile menu

let menuRow=Array.from(document.getElementsByClassName('menuRow'));
let categoryContent=Array.from(document.querySelectorAll('.categoryContent > ul li ul'));
let categoryContent2=document.getElementById('categoryContent');
let catIcon=document.getElementById('catIcon');

menuRow.forEach((item)=>{
    item.addEventListener('click',function () {
        // categoryContent.forEach((items)=>{items.classList.remove('active')});
        item.nextElementSibling.classList.add('active');
    })
})
catIcon.addEventListener('click',function () {
    categoryContent2.classList.toggle('active');
})

// swiper
var models = new Swiper(".models", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var testimonials = new Swiper(".testimonials", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
  
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints:{
        1200:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 3,
        },
        576:{
            slidesPerView: 3,
        },
        400:{
            slidesPerView: 3,
        },
    }
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});