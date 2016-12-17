var map;
var infowindow;
function initMap() {
    var myLatLng = {lat: 40.7128, lng :-74.0059};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });
 
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: myLatLng,
        radius: 1000,
        type: ['hospital']
        }, callback);
}
      
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}
    
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
    });
}

    