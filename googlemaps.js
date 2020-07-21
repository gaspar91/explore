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

//My Locations

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
function myAccomodationLocation() {
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
    {//Saga Hotel Oslo Central
      lat: 59.9100318,
      lng: 10.741466,
    },
    {//Thon Hotel Rosenkrantz Oslo
      lat: 59.9156194,
      lng: 10.7404806,
    },
    {//Central City Apartments
      lat: 59.9136725,
      lng: 10.7774321,
    },
    {// Center rooms
      lat: 59.9092528,
      lng: 10.7666435,
    },
    {// Citybox Oslo
      lat: 59.9103456,
      lng: 10.7472907,
    },
    {// Comfort Hotel Xpress Central Station
      lat: 59.9106631,
      lng: 10.748712,
    },
    {// P-Hotel Oslo
      lat: 59.9144276,
      lng: 10.7421132,
    },
    {// Saga Hotel Oslo Central
      lat: 59.9100318,
      lng: 10.741466,
    },
    {// Comfort Hotel Xpress Youngstorget
      lat: 59.9164346,
      lng: 10.749522,
    },
    {// Comfort Hotel Karl Johan
      lat: 59.9118434,
      lng: 10.7461162,
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
function myActivitiesLocation() {
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
    {//Friluftshuset
      lat: 59.9012828,
      lng: 10.7524521,
    },
    {//Oslo Visitor Center
      lat: 59.9108958,
      lng: 10.7508731,
    },
    {//Viking Biking & Viking Hiking
      lat: 59.9106119,
      lng: 10.7412764,
    },
    {// Norway Yacht Charter
      lat: 59.9104695,
      lng: 10.7316016,
    },
    {// Grünerløkka Minigolf Park
      lat: 59.9184768,
      lng: 10.7588392,
    },
    {// Free Walking Tours Oslo
      lat: 59.9111335,
      lng: 10.7502324,
    },
    {// Operahuset Oslo
      lat: 59.9074885,
      lng: 10.7531275,
    },
    {// Akershus Festning
      lat: 59.907586,
      lng: 10.7370841,
    },
    {// Norway Resistance Museum
      lat: 59.9077956,
      lng: 10.7356282,
    },
    {// Damstredet and Telthusbakken
      lat: 59.9200554,
      lng: 10.7475185,
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
function myParksLocation() {
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
    {//Frognerparken
      lat: 59.9264583,
      lng: 10.7034734,
    },
    {//Slottsparken
      lat: 59.917625,
      lng: 10.730332,
    },
    {//Vigelandsparken
      lat: 59.927029,
      lng: 10.700865,
    },
    {// Ekebergparken Skulpturpark
      lat: 59.8995816,
      lng: 10.7611578,
    },
    {// Tjuvholmen Sculpture Park
      lat: 59.9063176,
      lng: 10.7217175,
    },
    {// Sofienberg Park
      lat: 59.9230071,
      lng: 10.764023,
    },
    {// Middelalderparken
      lat: 59.9047091,
      lng: 10.7625675,
    },
    {// Tøyen Park
      lat: 59.9171009,
      lng: 10.7772202,
    },
    {// Studenterlunden Park
      lat: 59.9147141,
      lng: 10.734458,
    },
    {// Vaterlandsparken
      lat: 59.9131819,
      lng: 10.7570827,
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
function myBarsLocation() {
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
    {//Eight
      lat: 59.9136839,
      lng: 10.7399639,
    },
    {//Angst
      lat: 59.9139799,
      lng: 10.7487005,
    },
    {//Magic Ice Bar
      lat: 59.9154592,
      lng: 10.737899,
    },
    {// HIMKOK Storgata Destilleri
      lat: 59.9140704,
      lng: 10.7514605,
    },
    {// Aku-Aku Tiki Bar
      lat: 59.9248815,
      lng: 10.7594508,
    },
    {//Last Train
      lat: 59.9147255,
      lng: 10.7365552,
    },
    {// Crow Bar & Brewery
      lat: 59.9171972,
      lng: 10.7534148,
    },
    {// Brewgata
      lat: 59.9140818,
      lng: 10.7552122,
    },
    {// Bar Boca
      lat: 59.9254338,
      lng: 10.759332,
    },
    {// Summit Bar
      lat: 59.9187185,
      lng: 10.7339001,
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
let accomodation = [
    "A. Saga Hotel Oslo Central",
    "B. Thon Hotel Rosenkrantz Oslo",
    "C. Central City Apartments",
    "D. Center rooms", 
    "E. Citybox Oslo", 
    "F. Comfort Hotel Xpress Central Station",
    "G. P-Hotel Oslo",
    "H. Saga Hotel Oslo Central",
    "I. Comfort Hotel Xpress Youngstorget",
    "J. Comfort Hotel Karl Johan",
];
let activities = [
    "A. Friluftshuset",
    "B. Oslo Visitor Center",
    "C. Viking Biking & Viking Hiking",
    "D. Norway Yacht Charter", 
    "E. Grünerløkka Minigolf Park", 
    "F. Free Walking Tours Oslo",
    "G. Operahuset Oslo",
    "H. Akershus Festning",
    "I. Norway Resistance Museum",
    "J. Damstredet and Telthusbakken",
];
let parks = [
     "A. Frognerparken",
     "B. Slottsparken",
     "C. Vigelandsparken",
     "D. Ekebergparken Skulpturpark", 
     "E. Tjuvholmen Sculpture Park", 
     "F. Sofienberg Park",
     "G. Middelalderparken",
     "H. Tøyen Park",
     "I. Studenterlunden Park",
     "J. Vaterlandsparken",
];
let bars = [
    "A. Eight",
    "B. Angst",
    "C. Magic Ice Bar",
    "D. HIMKOK Storgata Destilleri", 
    "E. Aku-Aku Tiki Bar", 
    "F. Last Train",
    "G. Crow Bar & Brewery",
    "H. Brewgata",
    "I. Bar Boca",
    "J. Summit Bar",
];

function myRestaurants() {
  var x = document.getElementById("demo");
  x.innerHTML = restaurants.join("<br>");
}
function myCoffee() {
  var x = document.getElementById("demo");
  x.innerHTML = coffeeshops.join("<br>");
}
function myAccomodation(){
      var x = document.getElementById("demo");
      x.innerHTML = accomodation.join("<br>");
}
function myActivities(){
    var x = document.getElementById("demo");
    x.innerHTML = activities.join("<br>");
}
function myParks(){
    var x = document.getElementById("demo");
    x.innerHTML = parks.join("<br>");
}
function myBars(){
    var x = document.getElementById("demo");
    x.innerHTML = bars.join("<br>");
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
