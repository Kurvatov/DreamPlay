var images=['images/back1.jpg','images/back2.jpg','images/back3.jpg'];
  var i=0;
showSlides();
function showSlides() {
  if(i == (images.length)){
    i=0;
  }
  $('#slideshow').removeClass('active1').addClass('active');
    $('#slideshow').css("background-image", 'url('+images[i]+')');
    $('#slideshow').removeClass('active').addClass('active1');
    i=i+1;
  setTimeout(showSlides, 5000);
}
 
$( "#one" ).mouseover(function() {
    $("#one div").css("opacity","1");
  });
$( "#one div" ).mouseout(function() {
    $("#one div").css("opacity","0");
  });

  $( "#two" ).mouseover(function() {
    $("#two div").css("opacity","1");
  });
$( "#two div" ).mouseout(function() {
    $("#two div").css("opacity","0");
  });

  $( "#three" ).mouseover(function() {
    $("#three div").css("opacity","1");
  });
$( "#three div" ).mouseout(function() {
    $("#three div").css("opacity","0");
  });

  $( "#four" ).mouseover(function() {
    $("#four div").css("opacity","1");
  });
$( "#four div" ).mouseout(function() {
    $("#four div").css("opacity","0");
  });