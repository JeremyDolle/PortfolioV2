/**
 * Created by jeremy on 23/06/2017.
 */
;
(function ($) {
    $.fn.show = function () {
        $(this).each(function () {
            $(this).on('mouseenter', function () {
                var $target = $(this);
                var opts = {
                    title: $target.data('title'),
                    text: $target.data('text'),
                    image: $target.data('image')
                };
                $target.addClass('hover');

                var $brothers = $target  = $(this).siblings();
                $brothers.each(function () {
                    $target.removeClass('hover');
                });

                $target  = $(this).parent().siblings("#experience-text");
                $target.css('transition','all 0.5s ease 0s');
                $target.css('transform','translateX(0px)');
                $target.css('opacity','1');

                $target.empty();
                $target.append('<h2>' + opts.title + '</h2><img src="'+ opts.image +'"/><p>' + opts.text + '</p>');
            });
        });
    }
})(jQuery);