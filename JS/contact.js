$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        $("p").remove();
        var input_name = $('#name').val();
        if (input_name.length < 1) {
            $("#name").css("border","1px solid red");
            $("#name").after("<p>Required input</p>");
        }else{
            $("#name").css("border","1px solid black");
        }
        var input_music = $('#music').val();
        if (input_music.length < 1) {
            $("#music").css("border","1px solid red");
            $("#music").after("<p>Required input</p>");
        }else{
            $("#music").css("border","1px solid black");
        }
        var input_reason = $('#reason').val();
        if (input_reason.length < 1) {
            $("#reason").css("border","1px solid red");
            $("#reason").after("<p>Required input</p>");
        }else{
            $("#reason").css("border","1px solid black");
        }
     
    });       
});
$(document).ready(function(){
    $("#menu-icon").css("color","black");
});

