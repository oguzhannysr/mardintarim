var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_rnler_1 = new ol.format.GeoJSON();
var features_rnler_1 = format_rnler_1.readFeatures(json_rnler_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rnler_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rnler_1.addFeatures(features_rnler_1);
var lyr_rnler_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rnler_1, 
                style: style_rnler_1,
                popuplayertitle: "Ürünler",
                interactive: true,
    title: 'Ürünler<br />\
    <img src="styles/legend/rnler_1_0.png" /> HUBUBAT<br />\
    <img src="styles/legend/rnler_1_1.png" /> (MERCIMEK-HUBUBAT)+MISIR<br />\
    <img src="styles/legend/rnler_1_2.png" /> MERCIMEK<br />\
    <img src="styles/legend/rnler_1_3.png" /> YONCA<br />\
    <img src="styles/legend/rnler_1_4.png" /> NOHUT<br />\
    <img src="styles/legend/rnler_1_5.png" /> PAMUK<br />\
    <img src="styles/legend/rnler_1_6.png" /> SOYA<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_rnler_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_rnler_1];
lyr_rnler_1.set('fieldAliases', {'fid': 'fid', 'predicted_label': 'predicted_label', });
lyr_rnler_1.set('fieldImages', {'fid': 'Range', 'predicted_label': 'Range', });
lyr_rnler_1.set('fieldLabels', {'fid': 'hidden field', 'predicted_label': 'inline label - visible with data', });
lyr_rnler_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});