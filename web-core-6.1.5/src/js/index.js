import '../scss/style.scss'

console.log('Works!')
//copied from 5.1.5

let slideIndex = 1;




// Create a MediaQueryList object
// for controlling the display in hiding and showing brand elements
var x = window.matchMedia("(min-width: 768px)")


const switcher = document.querySelector(".brands-row-three");


document.getElementById('show-button').onclick = function () {
    if (switcher.style.display == "none") {
        switcher.style.display = "flex"
        document.getElementById('show-button__img').src = "img/hide.svg";
        document.getElementById('show-button1').innerHTML = "Hide"
    }
    else if (switcher.style.display = "flex") {
        switcher.style.display = "none"
        document.getElementById('show-button1').innerHTML = "Show All"
        document.getElementById('show-button__img').src = "img/show-all.svg";
    } else {
        switcher.style.display = "none"
        document.getElementById('show-button1').innerHTML = "Show All"
        document.getElementById('show-button__img').src = "img/show-all.svg";
   }  
    
}

const switcher2 = document.querySelector(".brands-row-three2");

document.getElementById('show-button2').onclick = function () {
    if (switcher2.style.display == "none") {
        switcher2.style.display = "flex"
        document.getElementById('show-button2__img').src = "img/hide.svg";
        document.getElementById('show-display').innerHTML = "Hide"
    }
    else if (switcher2.style.display = "flex") {
        switcher2.style.display = "none"
        document.getElementById('show-display').innerHTML = "Show All"
        document.getElementById('show-button2__img').src = "img/show-all.svg";
    } else {
        switcher2.style.display = "none"
        document.getElementById('show-display').innerHTML = 'Show All'
        document.getElementById('show-button2__img').src = "img/show-all.svg";
   }  
    
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1.2,
  freeMode: true,
     
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: true
    },
    breakpoints: {
      
      768: {
        slidesPerView: 3,
        spaceBetween: 35,
        //freeMode: true,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
                        
        },
         
      
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
        scrollbar: {
            el: ".swiper-scrollbar",
            enabled: false,
            hide: true,
                        
        },
      
      },
    },
  
});

//code for controlling closing and opening of the menu bar
//.opens for the initial menu icon
//.overlay for the div containing the menu content
//.close-btn, for the icon to close the menu content

let opens = document.querySelector(".opens ");
let closes = document.querySelector(".overlay");
let closer = document.querySelector(".close-btn");

opens.onclick = function () {
    closer.classList.toggle("active");
    closes.classList.toggle("active");
    
}

closer.onclick = function () {
    closer.classList.toggle("active");
    closes.classList.toggle("active");
    
}

document.onclick = function (e) {
    if (!opens.contains(e.target) && !closes.contains(e.target)) {
        closer.classList.remove("active");
        closes.classList.remove("active");
    }
}

let feedback = document.querySelector('.feedback-click ')
let close = document.querySelector('.bigger-view')
let closed = document.querySelector('.feedback-close-icon')

feedback.onclick = function () {
  closed.classList.toggle("active");
  close.classList.toggle("active");
}

closed.onclick = function () {
  closed.classList.toggle("active");
  close.classList.toggle("active");
}

//document.onclick = function (e) {
//    if (!feedback.contains(e.target) && !close.contains(e.target)) {
//      closed.classList.remove("active");
//      close.classList.remove("active");
//    }
//}

let call = document.querySelector('.call-click')
let call_open = document.querySelector('.call-order')
let call_closed = document.querySelector('.call-close-icon ')

call.onclick = function () {
  call_open.classList.toggle("active");
  call_closed.classList.toggle("active");
}

call_closed.onclick = function () {
  call_open.classList.toggle("active");
  call_closed.classList.toggle("active");
}

document.onclick = function (e) {
    if (!call.contains(e.target) && !call_open.contains(e.target)) {
      call_open.classList.remove("active");
      call_closed.classList.toggle("active");
    }
}

let small_call = document.querySelector('.menu-call-click')
let small_call_open = document.querySelector('.call-order ')
let small_call_closed = document.querySelector('.call-close-icon ')

small_call.onclick = function () {
  small_call_open.classList.toggle("active");
  small_call_closed.classList.toggle("active");
}

small_call_closed.onclick = function () {
  small_call_open.classList.toggle("active");
  small_call_closed.classList.toggle("active");
}

document.onclick = function (e) {
    if (!small_call.contains(e.target) && !small_call_open.contains(e.target)) {
      call_open.classList.remove("active");
      call_closed.classList.toggle("active");
    }
}
 
//big screen feedback block code
let big_feedback = document.querySelector('.big-feedback-click')
let big_feedback_open = document.querySelector('.bigger-view')
let big_feedback_closed = document.querySelector('.big-feedback-close-icon ')

big_feedback.onclick = function () {
  big_feedback_open.classList.toggle('active')
  big_feedback_closed.classList.toggle('active')
}

big_feedback_closed.onclick = function () {
  big_feedback_open.classList.toggle('active')
 big_feedback_closed.classList.toggle('active')
}

document.onclick = function (e) {
    if (!big_feedback.contains(e.target) && !big_feedback_open.contains(e.target)) {
      big_feedback_open.classList.remove('active')
     big_feedback_closed.classList.toggle('active')
    }
}


//big screen call order block code
let big_call = document.querySelector('.big-call-click')
let big_call_open = document.querySelector('.call-bigger-view')
let big_call_closed = document.querySelector('.big-call-close-icon ')

big_call.onclick = function () {
  big_call_open.classList.toggle('active')
  big_call_closed.classList.toggle('active')
}

big_call_closed.onclick = function () {
  big_call_open.classList.toggle('active')
 big_call_closed.classList.toggle('active')
}

document.onclick = function (e) {
    if (!big_call.contains(e.target) && !big_call_open.contains(e.target)) {
      big_call_open.classList.remove('active')
      big_call_closed.classList.toggle('active')
      
  }
  
  if (!opens.contains(e.target) && !closes.contains(e.target)) {
        closer.classList.remove("active");
        closes.classList.remove("active");
    }
  
     
}