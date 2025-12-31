var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PARCELAS_1 = new ol.format.GeoJSON();
var features_PARCELAS_1 = format_PARCELAS_1.readFeatures(json_PARCELAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELAS_1.addFeatures(features_PARCELAS_1);
var lyr_PARCELAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELAS_1, 
                style: style_PARCELAS_1,
                popuplayertitle: 'PARCELAS',
                interactive: true,
    title: 'PARCELAS<br />\
    <img src="styles/legend/PARCELAS_1_0.png" /> Equipamiento educativo<br />\
    <img src="styles/legend/PARCELAS_1_1.png" /> Residencial<br />' });
var format_REDVIAL_2 = new ol.format.GeoJSON();
var features_REDVIAL_2 = format_REDVIAL_2.readFeatures(json_REDVIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDVIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDVIAL_2.addFeatures(features_REDVIAL_2);
var lyr_REDVIAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDVIAL_2, 
                style: style_REDVIAL_2,
                popuplayertitle: 'RED VIAL ',
                interactive: true,
                title: '<img src="styles/legend/REDVIAL_2.png" /> RED VIAL '
            });
var format_AREASDERIESGO_3 = new ol.format.GeoJSON();
var features_AREASDERIESGO_3 = format_AREASDERIESGO_3.readFeatures(json_AREASDERIESGO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREASDERIESGO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASDERIESGO_3.addFeatures(features_AREASDERIESGO_3);
var lyr_AREASDERIESGO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASDERIESGO_3, 
                style: style_AREASDERIESGO_3,
                popuplayertitle: 'AREAS DE RIESGO',
                interactive: true,
    title: 'AREAS DE RIESGO<br />\
    <img src="styles/legend/AREASDERIESGO_3_0.png" /> ALTO<br />\
    <img src="styles/legend/AREASDERIESGO_3_1.png" /> MEDIO<br />\
    <img src="styles/legend/AREASDERIESGO_3_2.png" /> BAJO<br />' });
var format_REDDEAGUA_4 = new ol.format.GeoJSON();
var features_REDDEAGUA_4 = format_REDDEAGUA_4.readFeatures(json_REDDEAGUA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDDEAGUA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDDEAGUA_4.addFeatures(features_REDDEAGUA_4);
var lyr_REDDEAGUA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDDEAGUA_4, 
                style: style_REDDEAGUA_4,
                popuplayertitle: 'RED DE AGUA',
                interactive: true,
                title: '<img src="styles/legend/REDDEAGUA_4.png" /> RED DE AGUA'
            });
var format_LIMITEZONADEESTUDIO_5 = new ol.format.GeoJSON();
var features_LIMITEZONADEESTUDIO_5 = format_LIMITEZONADEESTUDIO_5.readFeatures(json_LIMITEZONADEESTUDIO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITEZONADEESTUDIO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITEZONADEESTUDIO_5.addFeatures(features_LIMITEZONADEESTUDIO_5);
var lyr_LIMITEZONADEESTUDIO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITEZONADEESTUDIO_5, 
                style: style_LIMITEZONADEESTUDIO_5,
                popuplayertitle: 'LIMITE ZONA DE ESTUDIO',
                interactive: true,
                title: '<img src="styles/legend/LIMITEZONADEESTUDIO_5.png" /> LIMITE ZONA DE ESTUDIO'
            });
var format_PUNTOSZONADEESTUDIO_6 = new ol.format.GeoJSON();
var features_PUNTOSZONADEESTUDIO_6 = format_PUNTOSZONADEESTUDIO_6.readFeatures(json_PUNTOSZONADEESTUDIO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOSZONADEESTUDIO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOSZONADEESTUDIO_6.addFeatures(features_PUNTOSZONADEESTUDIO_6);
var lyr_PUNTOSZONADEESTUDIO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOSZONADEESTUDIO_6, 
                style: style_PUNTOSZONADEESTUDIO_6,
                popuplayertitle: 'PUNTOS ZONA DE ESTUDIO',
                interactive: true,
                title: '<img src="styles/legend/PUNTOSZONADEESTUDIO_6.png" /> PUNTOS ZONA DE ESTUDIO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PARCELAS_1.setVisible(true);lyr_REDVIAL_2.setVisible(true);lyr_AREASDERIESGO_3.setVisible(true);lyr_REDDEAGUA_4.setVisible(true);lyr_LIMITEZONADEESTUDIO_5.setVisible(true);lyr_PUNTOSZONADEESTUDIO_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PARCELAS_1,lyr_REDVIAL_2,lyr_AREASDERIESGO_3,lyr_REDDEAGUA_4,lyr_LIMITEZONADEESTUDIO_5,lyr_PUNTOSZONADEESTUDIO_6];
lyr_PARCELAS_1.set('fieldAliases', {'fid': 'fid', 'tipo_uso_de_suelo': 'tipo_uso_de_suelo', });
lyr_REDVIAL_2.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Tipo_de_via': 'Tipo_de_via', 'Tipo_de_riesgo': 'Tipo_de_riesgo', 'Longitud': 'Longitud', 'Nivel_de_riesgo': 'Nivel_de_riesgo', });
lyr_AREASDERIESGO_3.set('fieldAliases', {'fid': 'fid', 'Tipo_riesgo': 'Tipo_riesgo', 'Nivel_de_riesgo': 'Nivel_de_riesgo', 'area_m2': 'area_m2', });
lyr_REDDEAGUA_4.set('fieldAliases', {'fid': 'fid', 'Material': 'Material', 'Estado operativo': 'Estado operativo', 'Longitud': 'Longitud', });
lyr_LIMITEZONADEESTUDIO_5.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_PUNTOSZONADEESTUDIO_6.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Este': 'Este', });
lyr_PARCELAS_1.set('fieldImages', {'fid': 'TextEdit', 'tipo_uso_de_suelo': 'TextEdit', });
lyr_REDVIAL_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo_de_via': 'TextEdit', 'Tipo_de_riesgo': 'TextEdit', 'Longitud': 'TextEdit', 'Nivel_de_riesgo': 'TextEdit', });
lyr_AREASDERIESGO_3.set('fieldImages', {'fid': 'TextEdit', 'Tipo_riesgo': 'TextEdit', 'Nivel_de_riesgo': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_REDDEAGUA_4.set('fieldImages', {'fid': 'TextEdit', 'Material': 'TextEdit', 'Estado operativo': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_LIMITEZONADEESTUDIO_5.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_PUNTOSZONADEESTUDIO_6.set('fieldImages', {'fid': 'TextEdit', 'Norte': '', 'Este': '', });
lyr_PARCELAS_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'tipo_uso_de_suelo': 'inline label - visible with data', });
lyr_REDVIAL_2.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Tipo_de_via': 'no label', 'Tipo_de_riesgo': 'no label', 'Longitud': 'no label', 'Nivel_de_riesgo': 'no label', });
lyr_AREASDERIESGO_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Tipo_riesgo': 'inline label - visible with data', 'Nivel_de_riesgo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_REDDEAGUA_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Estado operativo': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_LIMITEZONADEESTUDIO_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_PUNTOSZONADEESTUDIO_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Norte': 'inline label - visible with data', 'Este': 'inline label - visible with data', });
lyr_PUNTOSZONADEESTUDIO_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});