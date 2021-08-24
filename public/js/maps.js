
/* The following example displays a map centered on Sydney, New South Wales, Australia.*/
// Map variable
let map;

function initMap() {
    //se crea un objeto donde se asigna como parametro la etiqueta donde se 
    //despliega el mapa.
    map = new google.maps.Map(document.getElementById("map"), {
        //coordenadas exactas del lugar a mostrar
        center: { lat: -34.397, lng: 150.644 },
        //Zoom
        zoom: 8,
    });
}
