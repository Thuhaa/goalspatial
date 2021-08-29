bounds = new L.LatLngBounds(new L.LatLng(73.448263, -169.448588), new L.LatLng(-54.676427, 178.580836));
			var map = L.map('map-div', {
				minZoom: 2,
				maxZoom: 5,
				defaultZoom: 3,
				maxBounds: bounds,
				maxBoundsViscosity: 0.5
			})
				.setView([15, 20], 3)
				.setZoom(2);

			// Create a style object to style the map on the first load.
			var myStyle = {
				"color": "#0000FF",
				"weight": 0.5,
				"opacity": 0.5,
				"fillColor": "#00FFFF",
				"fillOpacity": 1
			};

			// Leaflet Basic Code. Note that I have used a label-less tileLayer(Basemap) to ensure that the labels are not displayed(That is the whole point of this app XD!!)
			L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
			}).addTo(map);

			// Layer control to add the scale
			L.control.scale().addTo(map);

			// This function ensures that the selected feature changes color respectively according to the required and selected country
			function onEachFeature(feature, layer) {
				layer.on('click', function (e) {
					var feat = feature.properties.name;
					var country = document.querySelector('#point-to').textContent;
					if (country === feat) {
						layer.setStyle({
							fillColor: "#00FF00",
							fillOpacity: 1,
							weight: 0.5
						});
					}
					else {
						var right_l = L.geoJson(countries, {filter: rightCountryFilter});
						function rightCountryFilter(feature) {
							if (feature.properties.name === country)
								return true;
						}
						// Set this style on the right country NOT on the clicked country
						var id_1 = right_l._leaflet_id;
						var id = id_1-1;
						var newStyle = {
							color:"FF0000",
							fillColor:"FF0000",
							fillOpacity:1,
							weight:0.5
						};
						try{
						right_l["_layers"][id]["options"].color="FF0000";
						right_l["_layers"][id]["options"].fillOpacity=1;
						right_l["_layers"][id]["options"].fillColor="FF0000";
						right_l["_layers"][id]["options"].weight=0.5;
						right_l["_layers"][id]["options"].style = newStyle;
						right_l.addTo(map);
					}
					catch(err){
						alert("You have traversed the world. Please refresh the browser to travel again.")
					}
					};

					// Call the following function to ensure that another country is generated dynamically once the previous country is selected.
					generateRandomCountry();
				});
			}

			// Code to add the GeoJSON data to the map
			L.geoJSON(countries, {
				style: myStyle,
				onEachFeature: onEachFeature,
			}).addTo(map);

			// Create an array of countries to compare with the selected country and fill the array with all the required values
			var country_array = new Array();
			for (feat in Object.keys(countries['features'])) {
				country_array.push(countries['features'][feat]['properties']['name']);
			};

			// The generateRandomCountry() function is initially called here when the page is generated to ensure that there is an initial country.
			generateRandomCountry(country_array);


			// This function generates a random country from the array created above and removes that country from the array once a country is selected
			function generateRandomCountry(array) {
				// Grab the country tag and store it in the variable.
				var point_to = document.getElementById("point-to");
				// code to generate a random country
				var randomCountry = country_array[Math.floor(Math.random() * country_array.length)];
				point_to.innerHTML = randomCountry;
				// Remove the country from the array to prevent re-generation of the country again
				var index = country_array.indexOf(randomCountry);
				country_array.splice(index, 1);
				// Once the array rans out of items, Show a PopUp Over the Map to show the score and disable any more clicking on the map
				if (country_array.length < 1) {
					text_to.innerHTML = "";
					point_to.innerHTML = "Congratulations";
					point_to.style.color = "red";
					point_to.style.fontSize = "x-large";
					var map_div = document.getElementById("map-div");
					map_div.style.static = "yes";
				} else {
					return country_array;
				};
			};
			var text_to = document.querySelector("#text-to");