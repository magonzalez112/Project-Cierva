
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(37.961632, -1.133128);
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,
        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        // How you would like to style the map.
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png',
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', init);
