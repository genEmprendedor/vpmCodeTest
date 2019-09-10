$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/







$('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

  $('.click-btnP').on('click', function(e){
      $('.show-content').addClass('d-none');
      $('.click-to-show-content').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content').addClass('d-none');
      $('.show-content').removeClass('d-none');
    });



  $('.click-btn.1').on('click', function(e){
      $('.show-content.one').addClass('d-none');
      $('.click-to-show-content.one').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.one').addClass('d-none');
      $('.show-content.one').removeClass('d-none');
    });

  $('.click-btn.2').on('click', function(e){
      $('.show-content.two').addClass('d-none');
      $('.click-to-show-content.two').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.two').addClass('d-none');
      $('.show-content.two').removeClass('d-none');
    });

    
  $('.click-btn.3').on('click', function(e){
      $('.show-content.three').addClass('d-none');
      $('.click-to-show-content.three').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.three').addClass('d-none');
      $('.show-content.three').removeClass('d-none');
    });
    
  $('.click-btn.4').on('click', function(e){
      $('.show-content.four').addClass('d-none');
      $('.click-to-show-content.four').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.four').addClass('d-none');
      $('.show-content.four').removeClass('d-none');
    });
    
  $('.click-btn.5').on('click', function(e){
      $('.show-content.five').addClass('d-none');
      $('.click-to-show-content.five').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.five').addClass('d-none');
      $('.show-content.five').removeClass('d-none');
    });

    
  $('.click-btn.6').on('click', function(e){
      $('.show-content.six').addClass('d-none');
      $('.click-to-show-content.six').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.six').addClass('d-none');
      $('.show-content.six').removeClass('d-none');
    });






    $('.click-btnP').on('click', function(e){
      $('.single_project_list_im').addClass('color_bg');
    });
    $('.clickOnHide').on('click', function(e){
      $('.single_project_list_im').removeClass('color_bg');
    });



 // ------------------------------- AOS Animation 
        AOS.init({
          duration: 1000,
          mirror: true
        });

});

