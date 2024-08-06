$(window).on('load', function() {
    $('.modal').modal('show');
    $(".overlay").removeClass("hidden");
});

$(".btn-close").on("click",function(){
    $('.modal').modal('hide');
    $(".overlay").addClass("hidden");
});