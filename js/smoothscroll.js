
$("#readmoretext").click(function() {
    $('html, body').animate({
        scrollTop: $(".content").offset().top - 20
    }, 1000);
    return false;
});

$(".toTop-transparent").click(function() {
    $('html, body').animate({
        scrollTop: $(".page-wrap").offset().top
    }, 1000);
    return false;
    });
