//oslo map

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: 59.911491,
                    lng: 10.757933
                }
            });
};


function myfunction() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: 59.911491,
                    lng: 10.757933
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            //restaurants
            
            var locations = [{
                lat: 59.910508,
                lng: 10.76032
            }, {
                lat: 59.91676,
                lng: 10.73776
            }, {
                lat: 59.9178541,
                lng: 10.7339675
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }






/*function initMap(){ 

      // Map options 

      var options = { 

        zoom:8, 

        center:{lat:42.3601,lng:-71.0589} 

      } 

      // New map 

      var map = new google.maps.Map(document.getElementById('map'), options); 

 
 

      // Listen for click on map 

      google.maps.event.addListener(map, 'click', function(event){ 

        // Add marker 

        addMarker({coords:event.latLng}); 

      }); 

      // Array of markers 

      var markers = [ 

        { 

          coords:{lat:42.4668,lng:-70.9495}, 

          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 

          content:'<h1>Lynn MA</h1>' 

        }, 

        { 

          coords:{lat:42.8584,lng:-70.9300}, 

          content:'<h1>Amesbury MA</h1>' 

        }, 

        { 

          coords:{lat:42.7762,lng:-71.0773} 

        } 

      ]; 

 
 

      // Loop through markers 

      for(var i = 0;i < markers.length;i++){ 

        // Add marker 

        addMarker(markers[i]); 

      } 

 
 

      // Add Marker Function 

      function addMarker(props){ 

        var marker = new google.maps.Marker({ 

          position:props.coords, 

          map:map, 

          //icon:props.iconImage 

        }); 

 
 

        // Check for customicon 

        if(props.iconImage){ 

          // Set icon image 

          marker.setIcon(props.iconImage); 

        } 

 
 

        // Check content 

        if(props.content){ 

          var infoWindow = new google.maps.InfoWindow({ 

            content:props.content 

          }); 

 
 

          marker.addListener('click', function(){ 

            infoWindow.open(map, marker); 

          }); 

        } 

      } 

    } */