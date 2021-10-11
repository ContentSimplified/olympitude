window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
$(document).ready(function(){
    // // $('.olympi').click(function() {
    // //   $('.olympi').toggleClass("back")
    // // });
        
          
    //   $('#NSO').click(function() {
    //   $('#NSO').toggleClass("back");
    //       $('#IMO').removeClass("back");
    //       $('#IEO').removeClass("back");
    //       $('#NTSE').removeClass("back");
    //       $('#NCO').removeClass("back");
    // });
    //   $('#NCO').click(function() {
    //   $('#NCO').toggleClass("back");
    //       $('#IMO').removeClass("back");
    //       $('#IEO').removeClass("back");
    //       $('#NTSE').removeClass("back");
    //       $('#NSO').removeClass("back");
    // });
    //   $('#NTSE').click(function() {
    //   $('#NTSE').toggleClass("back");
    //       $('#IMO').removeClass("back");
    //       $('#IEO').removeClass("back");
    //       $('#NCO').removeClass("back");
    //       $('#NSO').removeClass("back");
    // });
    //   $('#IMO').click(function() {
    //   $('#IMO').toggleClass("back");
    //       $('#NCO').removeClass("back");
    //       $('#IEO').removeClass("back");
    //       $('#NTSE').removeClass("back");
    //       $('#NSO').removeClass("back");
    // });
    //   $('#IEO').click(function() {
    //   $('#IEO').toggleClass("back");
    //       $('#IMO').removeClass("back");
    //       $('#NCO').removeClass("back");
    //       $('#NTSE').removeClass("back");
    //       $('#NSO').removeClass("back");
    // });
    //   // $('#NTSE').click(function() {
    // //   $('#NTSE').toggleClass("back")
    // // });
    //   // $('#NCO').click(function() {
    // //   $('#NCO').toggleClass("back")
    // // });
    //   // $('#IEO').click(function() {
    // //   $('#IEO').toggleClass("back")
    // // });
  
    //   $("#IMO").click(function(){
    //       $("#imo").toggle();
    //   });
    //   $("#NSO").click(function(){
    //       $("#nso").toggle();
    //   });
    //   $("#NCO").click(function(){
    //       $("#nco").toggle();
    //   });
    //   $("#IEO").click(function(){
    //       $("#ieo").toggle();
    //   });
    //   $("#NTSE").click(function(){
    //       $("#ntse").toggle();
    //   });
    //       $("#NTSE").click(function(){
    //       $("#imo").hide();
    //   });
    //       $("#NSO").click(function(){
    //       $("#nco").hide();
    //   });
    //       $("#NCO").click(function(){
    //       $("#nso").hide();
    //   });
    //       $("#IMO").click(function(){
    //       $("#ntse").hide();
    //   });
    //   });

//       var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();

//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();

//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');

//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });

// }

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('current');
      sections.removeClass('current');
      
      $(this).addClass('current');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});
});