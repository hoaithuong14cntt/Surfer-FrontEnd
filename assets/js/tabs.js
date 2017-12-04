$(document).ready(function(){
  $('.introduce_tabs-item').click(function(){
    // var id = $(this).attr('id');
    // console.log(id);
    $('.introduce_tabs-item').removeClass('active');
    $(this).addClass('active');
    $("#description").click(function(){
      $(".description").show();
      $(".feature").hide();
      $(".dimension").hide();
    });
    $("#feature").click(function(){
      $(".description").hide();
      $(".feature").show();
      $(".dimension").hide();
    });
    $("#dimension").click(function(){
      $(".description").hide();
      $(".feature").hide();
      $(".dimension").show();
    });
  });
});
 