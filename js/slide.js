$(function () {
    $('.slider .slide:gt(0)').hide();
    var interval = 6000,
        anim = (function () {
            var i = 0,
                timing = interval / 1000 * 60;
            return function () {
                if (i % timing === 0) {
                    $('.slider div:first-child').fadeOut(2000).next('.slide').fadeIn(2000).end().appendTo('.slider');
                }
                i++;
            };
        })();
    (function animloop() {
        anim();
        window.requestAnimationFrame(animloop);
    })();
});