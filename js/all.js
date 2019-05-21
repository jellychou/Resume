$('#about').smoove({
    moveY: '60%'
});

AOS.init();


$(document).ready(function () {
    $(window).on('scroll', () => {
        if ($('#skills').is(':in-viewport')) {
            $(window).off('scroll');
            $("#circle-one").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'HTML',
                textStyle: 'font-size: 32px',
                percent: 85,
            });
            $("#circle-two").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'CSS',
                textStyle: 'font-size: 42px',
                percent: 85,
            });
            $("#circle-three").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'JS',
                textStyle: 'font-size: 42px',
                percent: 75,
            });
            $("#circle-four").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'jQuery',
                textStyle: 'font-size: 31px',
                percent: 75,
            });
            $("#circle-five").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'Bootstrap',
                textStyle: 'font-size: 23px',
                percent: 80,
            });
            $("#circle-six").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'Sass',
                textStyle: 'font-size: 42px',
                percent: 80,
            });
            $("#circle-sev").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
                text: 'Git',
                textStyle: 'font-size: 42px',
                percent: 70,
            });
        }
    });
    $('a').click(function (e) {
        e.preventDefault();
        let anchor = e.target.dataset.anchor;
        $('html, body').animate({
            scrollTop: $(`#${anchor}`).offset().top - 100
        }, "show");
    })

});


