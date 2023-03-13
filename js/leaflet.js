const mapContainer=document.querySelector("#map"),mapBackground=mapContainer.querySelector(".map__background"),LAT=59.96836,LNG=30.31758,ZOOM=25,map=L.map(mapContainer,{zoomControl:!1,attributionControl:!1});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);const pinIcon=L.icon({iconUrl:"./img/pin.svg",iconSize:[50,50],iconAnchor:[25,50]}),mainMarker=L.marker({lat:LAT,lng:LNG},{icon:pinIcon,alt:"Наше местоположение"}).addTo(map);map.setView({lat:LAT,lng:LNG},25),mapBackground.remove();