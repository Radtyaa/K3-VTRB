var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kunduran_1 = new ol.format.GeoJSON();
var features_Kunduran_1 = format_Kunduran_1.readFeatures(json_Kunduran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kunduran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kunduran_1.addFeatures(features_Kunduran_1);
var lyr_Kunduran_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kunduran_1, 
                style: style_Kunduran_1,
                popuplayertitle: 'Kunduran',
                interactive: true,
                title: '<img src="styles/legend/Kunduran_1.png" /> Kunduran'
            });
var format_BANGUNAN_SARPRAS_2 = new ol.format.GeoJSON();
var features_BANGUNAN_SARPRAS_2 = format_BANGUNAN_SARPRAS_2.readFeatures(json_BANGUNAN_SARPRAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_SARPRAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_SARPRAS_2.addFeatures(features_BANGUNAN_SARPRAS_2);
var lyr_BANGUNAN_SARPRAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_SARPRAS_2, 
                style: style_BANGUNAN_SARPRAS_2,
                popuplayertitle: 'BANGUNAN_SARPRAS',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_SARPRAS_2.png" /> BANGUNAN_SARPRAS'
            });
var format_SUNGAI_3 = new ol.format.GeoJSON();
var features_SUNGAI_3 = format_SUNGAI_3.readFeatures(json_SUNGAI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_3.addFeatures(features_SUNGAI_3);
var lyr_SUNGAI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_3, 
                style: style_SUNGAI_3,
                popuplayertitle: 'SUNGAI',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_3.png" /> SUNGAI'
            });
var format_JALAN_LN_4 = new ol.format.GeoJSON();
var features_JALAN_LN_4 = format_JALAN_LN_4.readFeatures(json_JALAN_LN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_4.addFeatures(features_JALAN_LN_4);
var lyr_JALAN_LN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_4, 
                style: style_JALAN_LN_4,
                popuplayertitle: 'JALAN_LN',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_4.png" /> JALAN_LN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kunduran_1.setVisible(true);lyr_BANGUNAN_SARPRAS_2.setVisible(true);lyr_SUNGAI_3.setVisible(true);lyr_JALAN_LN_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kunduran_1,lyr_BANGUNAN_SARPRAS_2,lyr_SUNGAI_3,lyr_JALAN_LN_4];
lyr_Kunduran_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_SARPRAS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SUNGAI_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'LANDUSE': 'LANDUSE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_LN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AS_JALAN': 'AS_JALAN', 'Shape_Length': 'Shape_Length', });
lyr_Kunduran_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BANGUNAN_SARPRAS_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SUNGAI_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'LANDUSE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JALAN_LN_4.set('fieldImages', {'OBJECTID': '', 'Id': '', 'AS_JALAN': '', 'Shape_Length': '', });
lyr_Kunduran_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_SARPRAS_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SUNGAI_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'LANDUSE': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_JALAN_LN_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'AS_JALAN': 'inline label - visible with data', 'Shape_Length': 'hidden field', });
lyr_JALAN_LN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});