$(document).ready(function() {
    $("#card-title1").mouseenter(function () {
          $("#card1").collapse('show');
    });
    $("#card-title1").mouseleave(function(){
        $("#card1").collapse('hide');
    });

    $("#card-title2").mouseenter(function () {
          $("#card2").collapse('show');
    });
    $("#card-title2").mouseleave(function(){
        $("#card2").collapse('hide');
    });

    $("#card-title3").mouseenter(function () {
          $("#card3").collapse('show');
    });
    $("#card-title3").mouseleave(function(){
        $("#card3").collapse('hide');
    });

    $("#card-title4").mouseenter(function () {
          $("#card4").collapse('show');
    });
    $("#card-title4").mouseleave(function(){
        $("#card4").collapse('hide');
    });
})
