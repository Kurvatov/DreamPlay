var music = document.querySelectorAll("audio");

$("#btn-1").click(function(){
    music[0].play();
    $(".modal").show();
    $("#first").show();
});
$("#btn-2").click(function(){
    music[1].play();
    $(".modal").show();
    $("#second").show();
});
$("#btn-3").click(function(){
    music[2].play();
    $(".modal").show();
    $("#third").show();
});
$("#btn-4").click(function(){
    music[3].play();
    $(".modal").show();
    $("#fourth").show();
});
$("#btn-5").click(function(){
    music[4].play();
    $(".modal").show();
    $("#fifth").show();
});
$("#btn-6").click(function(){
    music[5].play();
    $(".modal").show();
    $("#sixth").show();
});
$("#btn-7").click(function(){
    music[6].play();
    $(".modal").show();
    $("#seventh").show();
});
$("#btn-8").click(function(){
    music[7].play();
    $(".modal").show();
    $("#eighth").show();
});
$("#btn-9").click(function(){
    music[8].play();
    $(".modal").show();
    $("#nineth").show();
});
$("#btn-10").click(function(){
    music[9].play();
    $(".modal").show();
    $("#tenth").show();
});
$("i").click(function(){
    for(var i = 0; i < music.length; i++){
        music[i].pause();
        music[i].currentTime = 0;
    }
    $(".modal").hide();
    $(".modal-content").hide();
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#menu-icon').css("color","white");
        } else {
            $('#menu-icon').css("color","black");
        }
    });
    });