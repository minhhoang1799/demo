//swiper-banner
function bannerSwiper(){
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4500,
    },
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ' .swiper-next',
      prevEl: ' .swiper-prev',
    },
    pagination: {
      el: ' .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    });
}
//seach-box
function search(){
$('.btn__search').on('click', function (){
  $('.form__search').toggleClass('active')
})
}
// menu-mobile
function navMenu(){
let menuRightTo = $('header .header__right').mapping({
  mobileWrapper: 'header .nav-mobile .nav',
  mobileMethod: 'appendTo',
  desktopWrapper: 'header .header-wrapper ',
  desktopMethod: 'appendTo',
  breakpoint: 1024
});
}
function activeMenuMobile(){
$('.btn__toggle--menu').on('click', function(){
  $('.btn__toggle--menu').toggleClass('active')
  $('.nav-mobile').toggleClass('active')
})
}

function scrollheight() {
$('.btn__scrollTop').on('click', function (){
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
});
})
$(window).scroll(function(){
  var height = $('.banner-wrapper').outerHeight() + $('.home-1').outerHeight() + $('.home-2').outerHeight() + $('.home-3').outerHeight() + $('.home-4').outerHeight() + $('.home-5').outerHeight() + $('.home-7').outerHeight()
  if($(window).scrollTop() > height) {
    $('.btn__scrollTop').addClass('active')
  }
  else {
    $('.btn__scrollTop').removeClass('active')
  }
})
}
function countUp(){
$(window).scroll(function (){
  var height = $('.banner-wrapper').outerHeight() + $('.home-1').outerHeight() + $('.home-2').outerHeight() + $('.home-3').outerHeight() + $('.home-4').outerHeight() - 200
  var heightTop = $('.banner-wrapper').outerHeight() + $('.home-1').outerHeight() + $('.home-2').outerHeight() + $('.home-3').outerHeight() - 200;
  console.log(heightTop);
  console.log(height);
  if( $(window).scrollTop() > heightTop &  $(window).scrollTop() < height) {
    console.log('aaa');
    $('.number').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
    
        duration: 6000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });
  }
})
}

//header sticky
function header(){
var bannerHeight = $('.banner-wrapper').outerHeight()
$(window).scroll(function (){
  if($(window).scrollTop() > bannerHeight) {
    $('header').addClass('active')
  }
  else {
    $('header').removeClass('active')
  }
})
}

$(document).ready(function(){
  bannerSwiper();
  search();
  navMenu();
  activeMenuMobile();
  scrollheight();
  countUp();
  header()
  // AOS.init();
})