// ==============================================
// K3G Javascripts
// ==============================================

// fixed header 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1){  
        jQuery('.site-header').addClass("sticky");
    }
    else{
        jQuery('.site-header').removeClass("sticky");
    }
});

jQuery(document).ready(function($){
    // header-popup
    $(".header_popup").hide();
    $(".header_popup").delay(5000).slideDown('500');
    $('.close_btn').on('click', function(){
      $('.header_popup').slideUp('100')
    })
    //Menu
      $('body').append('<div class="mask"></div>');
      $('#menu-button').on('click', function(){
        $(this).toggleClass('active');
        $('html').toggleClass('overflow_no');
        $('body').toggleClass('overflow_hide');
        $('#site-header-menu').fadeToggle('slow');
        $('#masthead').toggleClass('nav-activated');
        $('.mask').toggleClass('show_mask');
      })
    // On Scroll Animation
      AOS.init({
        easing: 'ease',
        duration: 1000
      })
    // Custom scrollbar
      $('.collapse_menu').mCustomScrollbar({
        theme: "inset",    
        scrollButtons:{ enable: true }   
      });
});

// Testimonial Slider
( window.MSReady = window.MSReady || [] ).push( function( $ ) {

  "use strict";
  var masterslider_83fa = new MasterSlider();

  // slider controls
  masterslider_83fa.control('arrows'     ,{ autohide:true, overVideo:true  });
  masterslider_83fa.control('slideinfo'  ,{ autohide:false, overVideo:true, dir:'h', align:'bottom',inset:false , margin:10   });
  // slider setup
  masterslider_83fa.setup("MS5b75174ad83fa", {
    width           : 160,
    height          : 160,
    minHeight       : 0,
    space           : 20,
    start           : 1,
    grabCursor      : true,
    swipe           : true,
    mouse           : true,
    keyboard        : false,
    layout          : "partialview",
    wheel           : false,
    autoplay        : false,
    instantStartLayers:false,
    mobileBGVideo:false,
    loop            : true,
    shuffle         : false,
    preload         : 8,
    heightLimit     : true,
    autoHeight      : false,
    smoothHeight    : true,
    endPause        : false,
    overPause       : true,
    fillMode        : "fill",
    centerControls  : true,
    startOnAppear   : false,
    layersMode      : "center",
    autofillTarget  : "",
    hideLayers      : false,
    fullscreenMargin: 0,
    speed           : 20,
    dir             : "h",
    parallaxMode    : 'swipe',
    view            : "fadeBasic",
    
  });


  window.masterslider_instances = window.masterslider_instances || [];
  window.masterslider_instances.push( masterslider_83fa );
});
