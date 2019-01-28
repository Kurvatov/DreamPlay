
var status = 0;
$(document).ready(function(){
    $('#menu-icon').click(function(){
    if(status == 0){
        $("#side-menu").css("width","250");
       $("#menu-icon").css("marginRight","250");
       $("#burger").removeClass('fa fa-bars fa-2x').addClass('fa fa-times fa-2x');
        $("main").css("opacity","0.3");
        $("footer").css("opacity","0.3");
        $("nav a").css("opacity","1");
        $("#side-menu div").css("opacity","1");
        $("#scroll").css("opacity","0");
        status = 1;
    }else{
        $("#side-menu").css("width","0");
        $("#menu-icon").css("marginRight","0");
        $("#burger").removeClass('fa fa-times fa-2x').addClass('fa fa-bars fa-2x');
        $("main").css("opacity","1");
        $("footer").css("opacity","1");
        $("nav a").css("opacity","0");
        $("#side-menu div").css("opacity","0");
        $("#scroll").css("opacity","1");
        status = 0;
    }      
    });
});
$(document).ready(function () {
$('main').mouseup(function(){
    $("#side-menu").css("width","0");
    $("#menu-icon").css("marginRight","0");
    $("#burger").removeClass('fa fa-times fa-2x').addClass('fa fa-bars fa-2x');
    $("main").css("opacity","1");
    $("footer").css("opacity","1");
    $("nav a").css("opacity","0");
    $("#side-menu div").css("opacity","0");
    $("#scroll").css("opacity","1");
    status = 0;
});
});

$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
      }
  });
  $('#scroll').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  });
});
  $(document).ready(function(){
    setInterval(function() {
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var hour= d.getHours();
    var minutes= d.getMinutes();
    var seconds=d.getSeconds();
    
    var output = (day<10 ? '0' : '') +day + '/' +(month<10 ? '0' : '') + month + '/' + d.getFullYear()+" "+
     (hour<10 ? '0' : '') + hour + ":" + (minutes<10 ? '0' : '') + minutes + ":" +(seconds<10 ? '0' : '') + seconds;
   
      $("#date").html(output);
    },1000);
  });

