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
		mobileWrapper: 'header .nav-mobile',
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
    if($(window).scrollTop() > 3970) {
      $('.btn__scrollTop').addClass('active')
    }
    else {
      $('.btn__scrollTop').removeClass('active')
    }
  })
}
function countUp(){
  $(window).scroll(function (){
    if($(window).scrollTop() > 1450) {
      $('.number').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
      
          duration: 4000,
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
  $(window).scroll(function (){
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 0) {
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