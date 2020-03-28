$(".certificates-container").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {

        }
    } ,]
});
$(".clients-container").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        }
    } ,]
});
$(".examples-slider").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {

        }
    }]
});
$(".reviews-slider").slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {

        }
    } ,]
});
// $(function(){
//     $(".certificates-item-new").twentytwenty();
// });
if ($(window).width() <= 991) {
    $('#myDiv1>.tel').prependTo('#myDiv2');
}
$('#burger').click(function () {
    if ($(".header-container-nav").hasClass('header-open')) {
        $('.header-container-nav').removeClass('header-open')
        $('.line-1').removeClass('burger-transform-1');
        $('.line-2').removeClass('burger-transform-2');
        $('.line-3').removeClass('burger-transform-3');
    }
    else {
        $('.header-container-nav').addClass('header-open');
        $('.line-1').addClass('burger-transform-1');
        $('.line-2').addClass('burger-transform-2');
        $('.line-3').addClass('burger-transform-3');
    }
});
$(document).on('click', function (e){
if (e.target.closest('.header-item')) {
    var whitebuthead = e.target.closest('.header-item').getAttribute("href");
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(whitebuthead).offset().top
    }, 2000);
    $(".header-container-nav").removeClass("header-open");
    }
});
$(document).on('click', function (e){
    if (e.target.closest('.orange-button')) {
        var whitebuthead = e.target.closest('.orange-button').getAttribute("href");
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(whitebuthead).offset().top
        }, 2000);
    }
});
$(".feedback").on('submit', function (e) {
    e.preventDefault();
    var infoData = $(this).serialize();
    console.log(infoData);
    $.ajax({
        type: "POST",
        url: "send.php",
        data: infoData,
    }).success(function(){
        $('#exampleModalCenter').modal('show');
        ym(61345129,'reachGoal','order-ok')
    });
});
$('.orange-button-banner').click(function ()  {
    ym(61345129,'reachGoal','call')
});
$('.orange-button').click(function ()  {
    ym(61345129,'reachGoal','call')
});