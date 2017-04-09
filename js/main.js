(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Typed.new(".main-type", {
            strings: ["You're in the right place. ^1000 You know what we do."],
            typeSpeed: 0,
            startDelay: 1000,
            loop: false,
            showCursor: false
        });

        $('.manufacturing-click').click(function () {
            if ($('.manufacturing-content').css('display') == 'none') {
                $('.manufacturing-content').show(200)
            } else {
                $('.manufacturing-content').hide(200)
            }
        });

        $('.retail-click').click(function () {
            if ($('.retail-content').css('display') == 'none') {
                $('.retail-content').show(200)
            } else {
                $('.retail-content').hide(200)
            }
        });

        $('.logistics-click').click(function () {
            if ($('.logistics-content').css('display') == 'none') {
                $('.logistics-content').show(200)
            } else {
                $('.logistics-content').hide(200)
            }
        });
    });


})();
