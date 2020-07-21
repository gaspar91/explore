//oslo map

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 59.911491,
      lng: 10.757933,
    },
  });
}

function myRestaurantLocation() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 59.911491,
      lng: 10.757933,
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  //restaurant locations

  var locations = [
    {//Den Glade Gris
      lat: 59.9178541,
      lng: 10.7339675,
    },
    {//Rorbua Aker Brygge
      lat: 59.9088001,
      lng: 10.7247294,
    },
    {//Maaemo
      lat: 59.9075576,
      lng: 10.758191,
    },
    {// Sofies mat og vinhus
      lat: 59.9226899,
      lng: 10.7356068,
    },
    {// Restaurant Fjord
      lat: 59.9167545,
      lng: 10.7377502,
    },
    {// Rest
      lat: 59.9091625,
      lng: 10.7422209,
    },
    {// Arakataka
      lat: 59.9163672,
      lng: 10.7506229,
    },
    {// Elias mat & sånt
      lat: 59.9163238,
      lng: 10.7387246,
    },
    {// Restaurant Kontrast
      lat: 59.9229418,
      lng: 10.7511292,
    },
    {// Hos Thea
      lat: 59.912725,
      lng: 10.7093833,
    }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
function myCoffeeLocation() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 59.911491,
      lng: 10.757933,
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  //coffee shops locations

  var locations = [
    {//Espresso House
      lat: 59.9087961,
      lng: 10.7578227,
    },
    {//Starbucks
      lat: 59.9111736,
      lng: 10.7530403,
    },
    {//Tim Wendelboe
      lat: 59.9233709,
      lng: 10.7556998,
    },
    {// Fuglen
      lat: 59.9172303,
      lng: 10.7397703,
    },
    {// Stockfleths
      lat: 59.9121364,
      lng: 10.7486613,
    },
    {// Hendrix Ibsen
      lat: 59.9220352,
      lng: 10.7512782,
    },
    {// Supreme Roastworks AS
      lat: 59.9280583,
      lng: 10.7592917,
    },
    {// My ugly baby
      lat: 59.9149799,
      lng: 10.7504415,
    },
    {// Java espresso
      lat: 59.9243908,
      lng: 10.7396507,
    },
    {// Kaffebrenneriet
      lat: 59.9187663,
      lng: 10.7574981,
    }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

let restaurants = [
  "A. Den Glade Gris",
  "B. Rorbua Aker Brygge",
  "C. Maaemo",
  "D. Sofies mat og vinhus",
  "E. Restaurant Fjord",
  "F. Rest",
  "G. Arakataka",
  "H. Elias mat & sånt",
  "I. Restaurant Kontrast",
  "J. Hos Thea",
];

let coffeeshops = [
  "A. Espresso House",
  "B. Starbucks",
  "C. Tim Wendelboe",
  "D. Fuglen",
  "E. Stockfleths",
  "F. Hendrix Ibsen",
  "G. Supreme Roastworks AS",
  "H. My ugly baby",
  "I. Java espresso",
  "J. Kaffebrenneriet",
];

function myRestaurants() {
  var x = document.getElementById("demo");
  x.innerHTML = restaurants.join("<br>");
}

function myCoffee() {
  var x = document.getElementById("demo");
  x.innerHTML = coffeeshops.join("<br>");
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
