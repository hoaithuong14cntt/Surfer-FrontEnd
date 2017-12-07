$(document).ready(function(){
  $(".introduce_other-img li").click(function(){
    $(".introduce_other-img li").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function(){
  $("#board").click(function(){
    $(".board").show();
    $(".board1").hide();
    $(".board2").hide();
    $(".board3").hide();
  });
  $("#board1").click(function(){
    $(".board").hide();
    $(".board1").show();
    $(".board2").hide();
    $(".board3").hide();
  });
  $("#board2").click(function(){
    $(".board").hide();
    $(".board1").hide();
    $(".board2").show();
    $(".board3").hide();
  });
  $("#board3").click(function(){
    $(".board").hide();
    $(".board1").hide();
    $(".board2").hide();
    $(".board3").show();
  });
});