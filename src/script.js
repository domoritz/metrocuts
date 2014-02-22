$(function() {
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    var map = L.map('map', {
        center: [47.6210, -122.3328],
        zoom: 13,
        layers: [osm]
    });

    var heatmapLayer = L.TileLayer.heatMap({
        radius: { value: 100, absolute: true },
        opacity: 0.9,

    });

    $.getJSON('data/heatmap.json', function(data) {
        var heatmapData = [];
        $.each(data, function(ind, pt) {
          // pt.value = pt.delta;
          console.log(pt);
          heatmapData.push(pt);
        });
        heatmapLayer.setData(heatmapData);
        heatmapLayer.addTo(map);
    });

    var hash = new L.Hash(map);
});