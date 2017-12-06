var myVideo = document.getElementById("video"); 

$("video, .about-us_play").click(function() {
    var video = $("#video").get(0);
    if ( video.paused ) {
        video.play();
        $(".about-us_play").hide();
    } else {
        video.pause();
        $(".about-us_play").show();
    }

    return false;
});
