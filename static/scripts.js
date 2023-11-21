// myapp/static/myapp/js/script.js
// Optional: Use this file if you want more control over the marquee behavior with JavaScript.
// For example, you can stop the marquee on hover.

$(document).ready(function () {
    var $marquee = $('.marquee');

    // Pause the marquee on hover
    $marquee.hover(
        function () {
            $(this).css('animation-play-state', 'paused');
        },
        function () {
            $(this).css('animation-play-state', 'running');
        }
    );
});
