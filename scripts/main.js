(function(WIN, STEER) {
    'use strict';

    WIN.addEventListener('load', function() {

        var header = document.getElementsByTagName('header')[0];

        function showHeader() {
            header.classList.remove('header--hidden');
        }

        function hideHeader() {
            header.classList.add('header--hidden');
        }

        STEER.set({
            events: false,
            up: showHeader,
            down: hideHeader
        });

        WIN.addEventListener('scroll', function() {
            if (WIN.scrollY > 175) {
                STEER.trigger();
            } else {
                showHeader();
            }
        });
    });
})(window, steer);