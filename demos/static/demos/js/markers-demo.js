// OnEachFeature Function
    function onEachFeature(feature, layer) {
        layer.bindPopup(String(feature.properties.TOWN_NAME));
      }


    var map = L.map('map').setView([-1.2921, 36.8219], 7);

    // Adding the tileLayer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Adding the geoJSON
    var towns = L.geoJSON(towns_json,
    {
      onEachFeature:onEachFeature
    });

    var baseMaps = {
      "Open Street Map":osm,
    };
    var data = {
      "Towns":towns,
    };

    L.control.layers(baseMaps, data).addTo(map);

    // Declare the cluster group and add markers to the clusters
    var markers = L.markerClusterGroup();
    markers.addLayer(towns);
    map.addLayer(markers);