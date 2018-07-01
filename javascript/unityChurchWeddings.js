$(function () {

    $( ".accordion" ).accordion({collapsible: true, active: false,  heightStyle: "content", icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }});
    $("#pricing").click();
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        debugger;
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
            center: new google.maps.LatLng(34.717944,-86.564565),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position:new google.maps.LatLng(34.717944,-86.564565),
            map: map,
            title: 'Unity Church on the Mountain'
        });
    }
});