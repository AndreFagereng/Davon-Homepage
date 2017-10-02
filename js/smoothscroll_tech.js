
$(".toTop-transparent").click(function() {
    $('html, body').animate({
        scrollTop: $(".page-wrap").offset().top - 200
    }, 1000);
    return false;
    });
