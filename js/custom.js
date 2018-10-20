

function openNav() {
    var wBar = "16.666%", wMain = "16.666%";
    if ($(window).width() < 767) {
        wBar = "100%";
        wMain = "0%";
    }
    document.getElementById("mySidenav").style.width =  wBar;

    document.getElementById("main").style.marginLeft = wMain;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*slider*/
$(document).ready(function () {
    /*animate last block click*/
    $('.fw-item').on("click" , function () {
       $("." + $(this).data('win')).fadeIn(400);

    });


    $('.exit-modal').on("click" , function () {
        $('.news-modal').fadeOut(300);

    });

    /*animate ends*/

    $('.slider').slick({
        infinite: true,
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    $(".navbar-brand").clickToggle(function(){
        openNav();
    },function(){
        closeNav();
    });
});

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.on('click', function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

