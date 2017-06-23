/**
 * Created by jeremy on 08/12/2016.
 */

$(document).ready(function () {
    jd_animate();
    jd_animate_delay();
    jd_circle_progress();
    jd_animate_right();
    $(window).scroll(function () {
        jd_animate();
        jd_animate_delay();
        jd_animate_parralax();
        jd_animate_parralax_delay();
        jd_circle_progress();
        jd_animate_right();
    });
});

function jd_animate() {
    $('.animate').each(function () {
        var $target = $(this);
        if($target.offset().top + $target.outerHeight()/2 - $(window).scrollTop() <= $(window).height()) {
            $target.addClass('anim');
            setTimeout(function(){
                $target.removeClass('anim');
                $target.removeClass('animate');
            }, 900);
        }
    });
}

function jd_animate_right() {
    $('.animate-right').each(function () {
        var $target = $(this);
        if($target.offset().top + $target.outerHeight()/2 - $(window).scrollTop() <= $(window).height()) {
            $target.addClass('animRight');
        }
    });
}

function jd_animate_delay() {
    $('.animate-delay').each(function () {
        var $target = $(this);
        if($target.offset().top + $target.outerHeight()/2 - $(window).scrollTop() <= $(window).height()) {
            $target.addClass('anim');
            $target.addClass('animate');
            setTimeout(function(){
                $target.removeClass('animate-delay');
                $target.removeClass('anim');
                $target.removeClass('animate');
            }, 900);

        }
    });
}

function jd_animate_parralax() {
    var wScroll = $(window).scrollTop();
    $('.parralax').each(function () {
        $(this).css({
            'transform' : 'translate(0px, '+ wScroll / 2 +'px)'
        })
    })
}

function jd_animate_parralax_delay() {
    var wScroll = $(document).scrollTop();
    $('.parralax-delay').each(function () {
        $(this).css({
            'transform' : 'translate(-50%, '+ -wScroll / 5 +'px)'
        })
    })
}

function jd_circle_progress() {
    $(".progress-bar").each(function () {
        if(!$(this).hasClass('full') && $(this).offset().top + $(this).outerHeight()/2 - $(window).scrollTop() <= $(window).height()) {
            $(this).loading();
            $(this).addClass('full');
        }
    });
}
