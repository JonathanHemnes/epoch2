(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Typed.new(".main-type", {
            strings: ["^1000WELCOME TO EFFICIENCY."],
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

    window.initMap = function() {
        if(!document.getElementById('map')){
            return;
        }
        var epochLocation = {lat: 40.0260352, lng: -105.2450594};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: epochLocation
        });
        var marker = new google.maps.Marker({
          position: epochLocation,
          map: map
        });
    }

})();
