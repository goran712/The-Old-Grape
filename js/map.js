

function initMap() {
    "use strict";

    var findUs = {lat: 52.520381, lng: 13.413001};
    var center = {lat: 52.521932, lng: 13.436529};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom:13,
        center:center
    });

    var marker = new google.maps.Marker({
        position:findUs,
        map:map
    });

}

