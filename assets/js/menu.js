 $(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var heightMenu = $(".menu").height();

  if (scroll >= heightMenu) {
      $(".menu").addClass("bg-menu");
  } else {
      $(".menu").removeClass("bg-menu");
  }
});