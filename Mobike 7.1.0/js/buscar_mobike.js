/**
 * Creates a new marker and adds it to a group
 * @param {H.map.Group} group       The group holding the new marker
 * @param {H.geo.Point} coordinate  The location of the marker
 * @param {H.map.Icon} icon         The icon of the market
 * @param {String} html             Data associated with the marker
 */

function reservarBici() {
    alert("Reserva realizada con éxito.\nEstás a 1.2 km. de distancia de tu selección.");
    document.getElementById('reservar').disabled = 'disabled';
    document.getElementById('reservar').style.backgroundColor = "#6b6d70";
}


function addMarkerToGroup(group, coordinate, icon, html) {
    var marker = new H.map.Marker(coordinate, icon);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}

// Arreglos con iconos a utilizar
var iconos = [new H.map.Icon('../img/puntero-de-ubicacion.png'),
new H.map.Icon('../img/bicicleta-32-negra.png'),
new H.map.Icon('../img/bicicleta-32-roja.png')];

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */

function addInfoBubble(map, group) {
    //var group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener(
        'tap',
        function (evt) {
            // event target is the marker itself, group is a parent event target
            // for all objects that it contains
            var bubble = new H.ui.InfoBubble(
                evt.target.getPosition(),
                {
                    // read custom data
                    content: evt.target.getData()
                }
            );
            bubble.add
            // show info bubble
            ui.addBubble(bubble);
        },
        false
    );


    // Estado del estacionamiento / botón de reserva de espacio
    var html = '<div><p style="font-size: 80%">Carmen Covarrubias 1840:</p></div>' +
        '<div><p style="font-size: 80%">30 reservados</p></div>' +
        '<div><p style="font-size: 80%">10 en espera </p></div>' +
        '<div><p style="font-size: 80%">15 disponibles<button style="font-size: 80%" id="reservar" onclick="reservarBici()">Reservar</button></p></div>';

    /*
    Límites de uso por comuna - Mobike
    lat: -33.45927073183047 , lng: -70.52370107645481
    lat: -33.433977925902376, lng: -70.53828033417551
    lat: -33.45488239314067, lng: -70.62928627438555
    lat: -33.437261047746816, lng: -70.63307762145996

    Origen
    lat: -33.45825547296345, lng: -70.5632055194684
    */

    addMarkerToGroup(
        group,
        { lat: -33.45825547296345, lng: -70.5632055194684 },
        { icon: iconos[0] },
        'Posición Actual'
    );

    function lat_rand() { return (Math.random() * (-33.433977925902376 - -33.45927073183047) + -33.45927073183047); }
    function lng_rand() { return (Math.random() * (-70.52370107645481 - -70.63307762145996) + -70.63307762145996); }

    for (var i = 0; i < 15; i++) {
        addMarkerToGroup(
            group,
            { lat: lat_rand(), lng: lng_rand() },
            { icon: iconos[1] },
            html
        );
    }
}

function areaPermitida(map) {

    var area = [
        -33.459474, -70.523294, 0,
        -33.459175, -70.529464, 0,
        -33.46554, -70.531302, 0,
        -33.463001, -70.540122, 0,
        -33.462856, -70.542117, 0,
        -33.463685, -70.544162, 0,
        -33.46266, -70.550937, 0,
        -33.462552, -70.562076, 0,
        -33.459072, -70.572157, 0,
        -33.470018, -70.577328, 0,
        -33.4743, -70.588502, 0,
        -33.4736, -70.59698, 0,
        -33.474952, -70.622875, 0,
        -33.470038, -70.624104, 0,
        -33.468995, -70.625979, 0,
        -33.436426, -70.635473, 0,
        -33.430598, -70.636243, 0,
        -33.429451, -70.636242, 0,
        -33.422876, -70.633024, 0,
        -33.419544, -70.629063, 0,
        -33.418593, -70.625556, 0,
        -33.411707, -70.617786, 0,
        -33.409964, -70.614293, 0,
        -33.409438, -70.606344, 0,
        -33.415863, -70.607992, 0,
        -33.417218, -70.604361, 0,
        -33.418184, -70.601309, 0,
        -33.431739, -70.584445, 0,
        -33.428823, -70.539249, 0,
        -33.429719, -70.539153, 0,
        -33.430684, -70.539084, 0,
        -33.431569, -70.538822, 0,
        -33.432097, -70.538616, 0,
        -33.433418, -70.537887, 0,
        -33.431628, -70.523016, 0,
        -33.433167, -70.519468, 0,
        -33.434201, -70.518519, 0,
        -33.459436, -70.523228, 0
    ]

    var polygon = new H.map.Polygon(
        new H.geo.LineString(area),
        {
            style: {
                lineWidth: 1,
                strokeColor: 'rgba(204, 34, 34, 0.66)',
                fillColor: 'rgba(95, 124, 183, 0.66)',//'rgba(204, 34, 34, 0.66)',
            }
        }
    );

    map.addObject(polygon);
}
