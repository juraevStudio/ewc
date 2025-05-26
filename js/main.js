// paralax
$(window).scroll(function() {
    let st = $(this).scrollTop();
    $(".banner__bg").css({
        "transform" : "translate(0px, " + st/5 + "px"
    });
});

// scroll header
$(window).scroll(function(){
    // 1
    if ( $(this).scrollTop() > 55) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    };
});

// modal open
$('.modal-open').click(function() {
    $('.mainModal').addClass('active');
    setTimeout(function() {
        $('.mainModal').addClass('open');
    },100);
});

// modal close
$('.modal-close').click(function() {
    $('.mainModal').removeClass('open');
    setTimeout(function() {
        $('.mainModal').removeClass('active');
    },300);
});

// modal open time
setTimeout(function() {
    $('.mainModal').addClass('active');
    setTimeout(function() {
        $('.mainModal').addClass('open');
    },100);
},30000);

// burgir
$('.header__burgir .btn').click(function() {
    if($('.header__burgir .btn').hasClass('active')) {
        $('.header__burgir .btn').removeClass('rotate');
        $('.header').removeClass('open');
        setTimeout(function() {
            $('.header__burgir .btn').removeClass('active');
        }, 300);
    } else {
        $('.header__burgir .btn').addClass('active');
        $('.header').addClass('open');
        setTimeout(function() {
            $('.header__burgir .btn').addClass('rotate');
        }, 300);
    }
});

$('.services__open').click(function() {
    $(this).toggleClass('open');
});

// Banner Select
$(".banner__side_input li").click(function() {
    var textUl = $(this).text();
    $(".banner__side_input span").text(textUl);
    
    var textUrl = $(this).attr("data-href");
    $(".banner__side_btn").attr("href", textUrl);
});
$(".banner__side_input span").click(function() {
    $(this).toggleClass("open")
});
$(".banner__side_input li").click(function() {
    $(".banner__side_input span").removeClass("open")
});