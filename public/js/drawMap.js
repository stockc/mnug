/*var key = {
    'mnug.de': 'AIzaSyDvsGfCR2q58do1B2Hy1efNzpK306VdPLk',
    'www.mnug.de': 'AIzaSyDvsGfCR2q58do1B2Hy1efNzpK306VdPLk'
}[document.location.host];

document.write(
    '<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyDvsGfCR2q58do1B2Hy1efNzpK306VdPLk" type="text/javascript"><\/script>');
*/
//<![CDATA[

function drawMap() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));

        map.addControl(new GSmallMapControl());
        map.addControl(new GOverviewMapControl());
        map.addControl(new GScaleControl());
        map.setCenter(new GLatLng(48.187663, 11.654348), 15, G_NORMAL_MAP);

        var praxisll = new GLatLng(48.187663, 11.654348);
        var praxismark = new GMarker(praxisll);
        map.addOverlay(praxismark);

        var praxisdesc = "<div style='font-weight:bold;border-bottom:1px solid #cccccc;padding-bottom:5px;font-color:#000000'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TNG<br/>"
            + "Betastraße 13a<br />"
            + "85774 Unterföhring<br /><br /></div>"
        praxismark.openInfoWindowHtml(praxisdesc);

        GEvent.addListener(praxismark, "click", function () {
            praxismark.openInfoWindowHtml(praxisdesc);
        });
    }
}
//]]>
