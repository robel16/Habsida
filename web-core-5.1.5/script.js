let slideIndex = 1;

// Create a MediaQueryList object
// for controlling the display in hiding and showing brand elemeents
var x = window.matchMedia("(min-width: 768px)");

const switcher = document.querySelector(".brands-row-three");

document.getElementById("show-button").onclick = function () {
  if (switcher.style.display == "none") {
    switcher.style.display = "flex";
    document.getElementById("show-button__img").src = "./Assets/icons/hide.svg";
    document.getElementById("show-buttonn").innerHTML = "Hide";
  } else if ((switcher.style.display = "flex")) {
    switcher.style.display = "none";
    document.getElementById("show-buttonn").innerHTML = "Show All";
    document.getElementById("show-button__img").src =
      "./Assets/icons/showall.svg";
  } else {
    switcher.style.display = "none";
    document.getElementById("show-buttonn").innerHTML = "Show All";
    document.getElementById("show-button__img").src =
      "./Assets/icons/showall.svg";
  }
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  slidesPerView: 1.2,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: true,
  },
  breakpoints: {
    768: {
      el: ".swiper-scrollbar",
      slidesPerView: 3,
      spaceBetween: 24,
      freeMode: false,
      enabled: false,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
