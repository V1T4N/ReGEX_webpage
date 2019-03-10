
var userAgent = window.navigator.userAgent.toLowerCase();
var fade_mode = "fade"

if (userAgent.indexOf('msie') != -1 ||
    userAgent.indexOf('trident') != -1) {
    // IE
} else if (userAgent.indexOf('edge') != -1) {
    // Edge
} else if (userAgent.indexOf('chrome') != -1) {
    // chrome
} else if (userAgent.indexOf('safari') != -1) {
    // safari
    fade_mode = "slide"
} else if (userAgent.indexOf('firefox') != -1) {
    // firefox
} else if (userAgent.indexOf('opera') != -1) {
    // opera
} else {
    // ???
}

jQuery(function ($) {
    $('body').bgSwitcher({
        images: ['../materials/top_page/top_pictures/1.jpg',
            '../materials/top_page/top_pictures/2.jpg',
            '../materials/top_page/top_pictures/3.jpg'],
        interval: 4000,
        loop: true,
        shuffle: false,
        effect: fade_mode,
        duration: 600,
        easing: "swing"
    });
});