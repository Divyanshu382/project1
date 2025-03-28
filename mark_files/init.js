//Old JS
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 55) {
            $('header').addClass('Active');
    //        $('.ResponsiveMenuIcon').addClass('Active');
    //        $('.Navigation').addClass('Active');
    //        $('#Menu').addClass('Active');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() < 55) {
            $('header').removeClass('Active');
    //        $('.ResponsiveMenuIcon').removeClass('Active');
    //        $('.Navigation').removeClass('Active');
    //        $('#Menu').removeClass('Active');
        }
    });
    $(".ResponsiveMenuIcon").click(function () {
        $(this).toggleClass('Open');
        $(".ResponsiveMenu").toggleClass('Open');
        $("#page").toggleClass('Open');
    });
    $('.Bars.Desk').click(function () {
        $('.NavIcon').toggleClass('open');
        $('#Menu').toggleClass('Open');
    });
    $('#AboutL').mouseover(function () {
        if ($('#Services').is(':visible')) {
            $('#Services').slideUp();
        }
        if ($('#Technology').is(':visible')) {
            $('#Technology').slideUp();
        }
        $('#Menu .Main ul li').removeClass('Open');
        $(this).addClass('Open');
        $('#About').slideDown();
    });
    $('#ServicesL').mouseover(function () {
        if ($('#About').is(':visible')) {
            $('#About').slideUp();
        }
        if ($('#Technology').is(':visible')) {
            $('#Technology').slideUp();
        }
        $('#Menu .Main ul li').removeClass('Open');
        $(this).addClass('Open');
        $('#Services').slideDown();
    });
    $('#TechnologyL').mouseover(function () {
        if ($('#Services').is(':visible')) {
            $('#Services').slideUp();
        }
        if ($('#About').is(':visible')) {
            $('#About').slideUp();
        }
        $('#Menu .Main ul li').removeClass('Open');
        $(this).addClass('Open');
        $('#Technology').slideDown();
    });
    $('#PortfolioL').mouseover(function () {
        if ($('#Menu .SubMenu > div').is(':visible')) {
            $('#Menu .SubMenu > div').slideUp();
        }
        $('#Menu .Main ul li').removeClass('Open');
        $(this).addClass('Open');
    });
    $('#ContactL').mouseover(function () {
        if ($('#Menu .SubMenu > div').is(':visible')) {
            $('#Menu .SubMenu > div').slideUp();
        }
        $('#Menu .Main ul li').removeClass('Open');
        $(this).addClass('Open');
    });
});


//Nav Utility
$('.Bars').click(function () {
    $('.NavIcon').toggleClass('Open');
    $('#Nav').toggleClass('Open');
});
$('#Search').click(function () {
    $('#SearchBar').toggleClass('Open');
});
$('#Close').click(function () {
    $('#Nav').toggleClass('Open');
});



jQuery(document).ready(function () {
    jQuery('.HomeSlider').slick({
        dots: true,
        arrows: true,
        prevArrow: '.ArrowPrev',
        nextArrow: '.ArrowNext',
        appendDots: $('.SlickDotsCtm'),
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.Head').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

//function hasScrolled() {
//    var st = $(this).scrollTop();
//
//    // Make sure they scroll more than delta
//    if (Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight) {
//        // Scroll Down
//        $('header').removeClass('nav-down').addClass('nav-up');
//    } else {
//        // Scroll Up
//        if (st + $(window).height() < $(document).height()) {
//            $('header').removeClass('nav-up').addClass('nav-down');
//        }
//    }
//
//    lastScrollTop = st;
//}


//Full Animation
$('h1, h2, h3, h4, h5, p, .Col, li, .DarkBlock, .BlackBlock').addClass('Hidden');
$('.NoAnim').removeClass('Hidden');
var animateHTML = function () {
    var elems;
    var windowHeight;
    function init() {
        elems = document.querySelectorAll('.Hidden');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'Hidden',
                    'Animate'
                );
            }
        }
    }
    return {
        init: init
    };
};
animateHTML().init();

//tabs
$(document).ready(function () {
    $('#Tabs li a:not(:first)').addClass('inactive');
    $('.TabContainer').hide();
    $('.TabContainer:first').show();

    $('#Tabs li a').click(function () {
        var t = $(this).attr('id');

        if ($(this).hasClass('inactive')) { //this is the start of our condition 
            $('#Tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.TabContainer').hide();
            $('#' + t + 'C').fadeIn('slow');
        }
    });
});

// Portfolio /
$('.Post .Info span:contains("Portfolio")').text('Website');

//Accordion
var Accordion1 = new Spry.Widget.Accordion("Accordion1", {useFixedPanelHeights: false, defaultPanel: -1 });