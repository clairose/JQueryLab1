$(".login").hide();
$(".table").hover(function(){
    $(this).addClass("hover");
    });
$(".table").mouseleave(function(){
    $(this).removeClass("hover");
})
$(".table").click(function(){
    $(".login").show();
});

$(".table").css( 'cursor', 'pointer');

$("h3").click(function(){
    $(".login").hide();
});

$("h3").css('cursor', 'pointer');

$(".submit").click(function(){
    $(".login").hide();
})

$("#1").click(function(){
    $("#1").addClass("reserved");
    $("p").text("Table Number 1");
})

$("#2").click(function(){
    $("#2").addClass("reserved");
    $("p").text("Table Number 2");
})

$("#3").click(function(){
    $("#3").addClass("reserved");
    $("p").text("Table Number 3");
})

$("#4").click(function(){
    $("#4").addClass("reserved");
    $("p").text("Table Number 4");
})

$("#5").click(function(){
    $("#5").addClass("reserved");
    $("p").text("Table Number 5");
})

$("#6").click(function(){
    $("#6").addClass("reserved");
    $("p").text("Table Number 6");
})
$("#7").click(function(){
    $("#7").addClass("reserved");
    $("p").text("Table Number 7");
})
$("#8").click(function(){
    $("#8").addClass("reserved");
    $("p").text("Table Number 8");
})
$("#9").click(function(){
    $("#9").addClass("reserved");
    $("p").text("Table Number 9");
})
