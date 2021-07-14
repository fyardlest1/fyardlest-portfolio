function makesvg(percentage, inner_text = "") {

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""

    if (percentage < 0) {
        classes = "danger-stroke circle-chart__circle--negative";
    } else if (percentage > 0 && percentage <= 30) {
        classes = "warning-stroke";
    } else {
        classes = "success-stroke";
    }

    var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
        '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
        '<circle class="circle-chart__circle ' + classes + '"' +
        'stroke-dasharray="' + abs_percentage + ',100"    cx="16.9" cy="16.9" r="15.9" />' +
        '<g class="circle-chart__info">'

    svg += ' </g></svg>';

    return svg
}

(function($) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            $(this).html(makesvg(percentage));
        });
        return this;
    };

}(jQuery));


/** 
 * ProgressBar : Simple animated progress bar
 * Author : Nayem > https://facebook.com/sadik5g
 * Version : 1.0.0
 */
(function($) {

    $.fn.ProgressBar = function() {
        var targetParent = $(this);
        targetParent.each(function() {

            //required variables
            var target = $(this).children();
            var offsetTop = $(this).offset().top;
            var winHeight = $(window).height();
            var data_width = target.attr("data-percent") + "%";
            var data_color = target.attr("data-color");

            //animation starts
            if (winHeight > offsetTop) {
                target.css({
                    backgroundColor: data_color,
                });
                target.animate({
                    width: data_width,
                }, 1000);
            }

            //animation with scroll 
            $(window).on('scroll', function() {
                var scrollBar = $(this).scrollTop();
                var animateStart = offsetTop - winHeight;
                if (scrollBar > animateStart) {
                    target.css({
                        backgroundColor: data_color,
                    });
                    target.animate({
                        width: data_width,
                    }, 1000);
                }
            });
        });

        return this;
    }
})(jQuery)