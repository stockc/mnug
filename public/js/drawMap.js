

function initialize() {
    var mapCanvas = document.getElementById('map');
    if (mapCanvas){
	    var latLng=mapCanvas.getAttribute('data-locationlatlng').split(',')
	    var myLatlng = new google.maps.LatLng(latLng[0], latLng[1]);
	    var mapOptions = {
		center: myLatlng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	    }

	    var infowindow = new google.maps.InfoWindow({
		content: mapCanvas.getAttribute('data-locationtext')
	    });

	    var map = new google.maps.Map(mapCanvas, mapOptions)

	    var marker = new google.maps.Marker({
		position: myLatlng,
		map: map
	    });

	    google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	    });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

