var map = L.map('map').setView([-1.29, 36.82], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer){
	layer.bindPopup("Total Population in "+String(feature.properties.TOWN_NAME)+": "+ String(feature.properties.POPULATION))
	layer.on('mouseover', function(e){
		this.openPopup()
	})
	layer.on('mouseout', function(e){
		this.closePopup()
	})
}
var towns_populations = L.geoJSON(towns, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
        	radius:feature.properties.POPULATION/10000
        });
    },
    onEachFeature:onEachFeature
}).addTo(map);