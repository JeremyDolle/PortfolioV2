/**
 * Created by jeremy on 23/06/2017.
 */
;
(function ($) {
    $.fn.show = function () {
        $(this).each(function () {
            $(this).on('mouseenter', function () {
                var $mousetarget = $(this);
                if (!$mousetarget.hasClass('hover')){
                    var opts = {
                        title: $mousetarget.data('title'),
                        text: $mousetarget.data('text'),
                        image: $mousetarget.data('image')
                    };
                    $mousetarget.addClass('hover');

                    var $brothers = $(this).siblings();
                    $brothers.each(function () {
                        $brothers.removeClass('hover');
                    });

                    var $target  = $(this).parent().siblings("#experience-text");
                    $target.css('transition','all 0.5s ease 0s');
                    $target.css('transform','translateX(0px)');
                    $target.css('opacity','1');

                    $target.empty();
                    var html = '<h2>' + opts.title + '</h2><img src="'+ opts.image +'"/><p>' + opts.text + '</p>';
                    $(html).hide().appendTo($target).fadeIn(700);
                }
            });
        });
    }
})(jQuery);