ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1380169.732976, 7482384.142316, 1393570.982009, 7490110.372626]);
var wms_layers = [];


        var lyr_Baggrundskort_0 = new ol.layer.Tile({
            'title': 'Baggrundskort',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_Strandbeskyttelse_2 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_2 = format_Strandbeskyttelse_2.readFeatures(json_Strandbeskyttelse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_2.addFeatures(features_Strandbeskyttelse_2);
var lyr_Strandbeskyttelse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_2, 
                style: style_Strandbeskyttelse_2,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/Strandbeskyttelse_2.png" /> Strandbeskyttelse'
            });
var format_Skovomrde_3 = new ol.format.GeoJSON();
var features_Skovomrde_3 = format_Skovomrde_3.readFeatures(json_Skovomrde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skovomrde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skovomrde_3.addFeatures(features_Skovomrde_3);
var lyr_Skovomrde_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skovomrde_3, 
                style: style_Skovomrde_3,
                popuplayertitle: 'Skovområde',
                interactive: true,
                title: '<img src="styles/legend/Skovomrde_3.png" /> Skovområde'
            });
var format_Lokalplanvedtaget_4 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_4 = format_Lokalplanvedtaget_4.readFeatures(json_Lokalplanvedtaget_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_4.addFeatures(features_Lokalplanvedtaget_4);
var lyr_Lokalplanvedtaget_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_4, 
                style: style_Lokalplanvedtaget_4,
                popuplayertitle: 'Lokalplan vedtaget',
                interactive: false,
                title: '<img src="styles/legend/Lokalplanvedtaget_4.png" /> Lokalplan vedtaget'
            });
var format_Frededeomrder_5 = new ol.format.GeoJSON();
var features_Frededeomrder_5 = format_Frededeomrder_5.readFeatures(json_Frededeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_5.addFeatures(features_Frededeomrder_5);
var lyr_Frededeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_5, 
                style: style_Frededeomrder_5,
                popuplayertitle: 'Fredede områder',
                interactive: true,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_5_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_5_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_5_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_5_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_5_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_5_5.png" /> <br />' });
var format_Togstation_6 = new ol.format.GeoJSON();
var features_Togstation_6 = format_Togstation_6.readFeatures(json_Togstation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstation_6.addFeatures(features_Togstation_6);
var lyr_Togstation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstation_6, 
                style: style_Togstation_6,
                popuplayertitle: 'Togstation',
                interactive: true,
                title: '<img src="styles/legend/Togstation_6.png" /> Togstation'
            });
var format_Tankstation_7 = new ol.format.GeoJSON();
var features_Tankstation_7 = format_Tankstation_7.readFeatures(json_Tankstation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstation_7.addFeatures(features_Tankstation_7);
var lyr_Tankstation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstation_7, 
                style: style_Tankstation_7,
                popuplayertitle: 'Tankstation',
                interactive: true,
                title: '<img src="styles/legend/Tankstation_7.png" /> Tankstation'
            });
var format_SuperMarked_8 = new ol.format.GeoJSON();
var features_SuperMarked_8 = format_SuperMarked_8.readFeatures(json_SuperMarked_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperMarked_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperMarked_8.addFeatures(features_SuperMarked_8);
var lyr_SuperMarked_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuperMarked_8, 
                style: style_SuperMarked_8,
                popuplayertitle: 'Super Marked',
                interactive: true,
                title: '<img src="styles/legend/SuperMarked_8.png" /> Super Marked'
            });
var format_Pizzaria_9 = new ol.format.GeoJSON();
var features_Pizzaria_9 = format_Pizzaria_9.readFeatures(json_Pizzaria_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzaria_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzaria_9.addFeatures(features_Pizzaria_9);
var lyr_Pizzaria_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzaria_9, 
                style: style_Pizzaria_9,
                popuplayertitle: 'Pizzaria',
                interactive: true,
                title: '<img src="styles/legend/Pizzaria_9.png" /> Pizzaria'
            });
var format_Mosk_10 = new ol.format.GeoJSON();
var features_Mosk_10 = format_Mosk_10.readFeatures(json_Mosk_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosk_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosk_10.addFeatures(features_Mosk_10);
var lyr_Mosk_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosk_10, 
                style: style_Mosk_10,
                popuplayertitle: 'Moské',
                interactive: true,
                title: '<img src="styles/legend/Mosk_10.png" /> Moské'
            });
var format_Lge_11 = new ol.format.GeoJSON();
var features_Lge_11 = format_Lge_11.readFeatures(json_Lge_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lge_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lge_11.addFeatures(features_Lge_11);
var lyr_Lge_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lge_11, 
                style: style_Lge_11,
                popuplayertitle: 'Læge',
                interactive: true,
                title: '<img src="styles/legend/Lge_11.png" /> Læge'
            });
var format_Legeplads_12 = new ol.format.GeoJSON();
var features_Legeplads_12 = format_Legeplads_12.readFeatures(json_Legeplads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_12.addFeatures(features_Legeplads_12);
var lyr_Legeplads_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_12, 
                style: style_Legeplads_12,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_12.png" /> Legeplads'
            });
var format_Kirke_13 = new ol.format.GeoJSON();
var features_Kirke_13 = format_Kirke_13.readFeatures(json_Kirke_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirke_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirke_13.addFeatures(features_Kirke_13);
var lyr_Kirke_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirke_13, 
                style: style_Kirke_13,
                popuplayertitle: 'Kirke',
                interactive: true,
                title: '<img src="styles/legend/Kirke_13.png" /> Kirke'
            });
var format_Idrt_14 = new ol.format.GeoJSON();
var features_Idrt_14 = format_Idrt_14.readFeatures(json_Idrt_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idrt_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idrt_14.addFeatures(features_Idrt_14);
var lyr_Idrt_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Idrt_14, 
                style: style_Idrt_14,
                popuplayertitle: 'Idræt',
                interactive: true,
                title: '<img src="styles/legend/Idrt_14.png" /> Idræt'
            });
var format_Folkeskole_15 = new ol.format.GeoJSON();
var features_Folkeskole_15 = format_Folkeskole_15.readFeatures(json_Folkeskole_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskole_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskole_15.addFeatures(features_Folkeskole_15);
var lyr_Folkeskole_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskole_15, 
                style: style_Folkeskole_15,
                popuplayertitle: 'Folkeskole',
                interactive: true,
                title: '<img src="styles/legend/Folkeskole_15.png" /> Folkeskole'
            });
var format_Brnehave_16 = new ol.format.GeoJSON();
var features_Brnehave_16 = format_Brnehave_16.readFeatures(json_Brnehave_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehave_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehave_16.addFeatures(features_Brnehave_16);
var lyr_Brnehave_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehave_16, 
                style: style_Brnehave_16,
                popuplayertitle: 'Børnehave',
                interactive: true,
                title: '<img src="styles/legend/Brnehave_16.png" /> Børnehave'
            });
var group_Teknisk = new ol.layer.Group({
                                layers: [lyr_Strandbeskyttelse_2,lyr_Skovomrde_3,lyr_Lokalplanvedtaget_4,lyr_Frededeomrder_5,],
                                fold: "open",
                                title: 'Teknisk'});

lyr_Baggrundskort_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_Strandbeskyttelse_2.setVisible(true);lyr_Skovomrde_3.setVisible(true);lyr_Lokalplanvedtaget_4.setVisible(true);lyr_Frededeomrder_5.setVisible(true);lyr_Togstation_6.setVisible(true);lyr_Tankstation_7.setVisible(true);lyr_SuperMarked_8.setVisible(true);lyr_Pizzaria_9.setVisible(true);lyr_Mosk_10.setVisible(true);lyr_Lge_11.setVisible(true);lyr_Legeplads_12.setVisible(true);lyr_Kirke_13.setVisible(true);lyr_Idrt_14.setVisible(true);lyr_Folkeskole_15.setVisible(true);lyr_Brnehave_16.setVisible(true);
var layersList = [lyr_Baggrundskort_0,lyr_Kommuneplan_1,group_Teknisk,lyr_Togstation_6,lyr_Tankstation_7,lyr_SuperMarked_8,lyr_Pizzaria_9,lyr_Mosk_10,lyr_Lge_11,lyr_Legeplads_12,lyr_Kirke_13,lyr_Idrt_14,lyr_Folkeskole_15,lyr_Brnehave_16];
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Strandbeskyttelse_2.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Skovomrde_3.set('fieldAliases', {'fid': 'fid', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'tempID': 'tempID', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringFra': 'registreringFra', 'registreringTil': 'registreringTil', 'virkningsaktoer': 'virkningsaktoer', 'virkningFra': 'virkningFra', 'virkningTil': 'virkningTil', 'planNoejagtighed': 'planNoejagtighed', 'planStedfaestelsesmetode': 'planStedfaestelsesmetode', 'vertikalNoejagtighed': 'vertikalNoejagtighed', 'vertikalStedfaestelsesmetode': 'vertikalStedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'anvendelse': 'anvendelse', 'ejerSkov': 'ejerSkov', 'underMinimumSkov': 'underMinimumSkov', });
lyr_Lokalplanvedtaget_4.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Frededeomrder_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Togstation_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstation_7.set('fieldAliases', {'tankstatio': 'tankstatio', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SuperMarked_8.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'by': 'by', 'åbningsti': 'åbningsti', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Pizzaria_9.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'telefonnum': 'telefonnum', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosk_10.set('fieldAliases', {'Moské': 'Moské', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lge_11.set('fieldAliases', {'læge': 'læge', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legeplads_12.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirke_13.set('fieldAliases', {'Kirke': 'Kirke', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'Åbningsti': 'Åbningsti', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Idrt_14.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskole_15.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehave_16.set('fieldAliases', {'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Antal bør': 'Antal bør', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'TextEdit', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Strandbeskyttelse_2.set('fieldImages', {'fid': 'Hidden', 'forretningshaendelse': 'Hidden', 'senesteSagLokalId': 'Hidden', 'forretningsproces': 'Hidden', 'id.namespace': 'Hidden', 'id.lokalId': 'Hidden', 'paataenktHandling': 'Hidden', 'registreringFra': 'Hidden', 'virkningFra': 'Hidden', 'virkningsaktoer': 'Hidden', 'temaFladeID': 'Hidden', 'tematype': 'Hidden', 'jordstykkeLokalId': 'Hidden', });
lyr_Skovomrde_3.set('fieldImages', {'fid': 'Hidden', 'id.namespace': 'Hidden', 'id.lokalId': 'Hidden', 'tempID': 'Hidden', 'status': 'Hidden', 'geometristatus': 'Hidden', 'registreringsspecifikation': 'Hidden', 'dataansvar': 'Hidden', 'forretningshaendelse': 'Hidden', 'forretningsomraade': 'Hidden', 'forretningsproces': 'Hidden', 'registreringsaktoer': 'Hidden', 'registreringFra': 'Hidden', 'registreringTil': 'Hidden', 'virkningsaktoer': 'Hidden', 'virkningFra': 'Hidden', 'virkningTil': 'Hidden', 'planNoejagtighed': 'Hidden', 'planStedfaestelsesmetode': 'Hidden', 'vertikalNoejagtighed': 'Hidden', 'vertikalStedfaestelsesmetode': 'Hidden', 'applikation': 'Hidden', 'kommentar': 'Hidden', 'anvendelse': 'Hidden', 'ejerSkov': 'Hidden', 'underMinimumSkov': 'Hidden', });
lyr_Lokalplanvedtaget_4.set('fieldImages', {'planid': 'Hidden', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'Hidden', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Frededeomrder_5.set('fieldImages', {'fid': 'Hidden', 'Temakode': 'Hidden', 'Temanavn': 'Hidden', 'Objekt_id': 'Hidden', 'Version_id': 'Hidden', 'Systid_fra': 'Hidden', 'Systid_til': 'Hidden', 'Oprettet': 'Hidden', 'Oprindkode': 'Hidden', 'Oprindelse': 'Hidden', 'Statuskode': 'Hidden', 'Status': 'Hidden', 'Off_kode': 'Hidden', 'Offentlig': 'Hidden', 'CVR_kode': 'Hidden', 'CVR_navn': 'Hidden', 'Bruger_id': 'Hidden', 'Link': 'Hidden', 'Shape_area': 'Hidden', 'Shape_leng': 'Hidden', 'Fred_tkode': 'Hidden', 'Fred_tnavn': 'Hidden', 'Reg_nr': 'Hidden', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Hidden', 'Aendrbegr': 'Hidden', 'Aar_fredn': 'Hidden', 'Gyldig_fra': 'Hidden', 'Gyldig_til': 'Hidden', });
lyr_Togstation_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstation_7.set('fieldImages', {'tankstatio': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SuperMarked_8.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'åbningsti': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Pizzaria_9.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'telefonnum': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Mosk_10.set('fieldImages', {'Moské': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Lge_11.set('fieldImages', {'læge': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legeplads_12.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kirke_13.set('fieldImages', {'Kirke': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'Åbningsti': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Idrt_14.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskole_15.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'Hidden', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Brnehave_16.set('fieldImages', {'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'Hidden', 'Antal bør': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'kommunenavn': 'no label', });
lyr_Strandbeskyttelse_2.set('fieldLabels', {});
lyr_Skovomrde_3.set('fieldLabels', {});
lyr_Lokalplanvedtaget_4.set('fieldLabels', {'plannr': 'no label', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Frededeomrder_5.set('fieldLabels', {'Fred_navn': 'no label', });
lyr_Togstation_6.set('fieldLabels', {'Name': 'no label', });
lyr_Tankstation_7.set('fieldLabels', {'tankstatio': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_SuperMarked_8.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'åbningsti': 'no label', 'Hjemmeside': 'no label', });
lyr_Pizzaria_9.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'telefonnum': 'no label', 'Hjemmeside': 'no label', });
lyr_Mosk_10.set('fieldLabels', {'Moské': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_Lge_11.set('fieldLabels', {'læge': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_Legeplads_12.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_Kirke_13.set('fieldLabels', {'Kirke': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', 'Åbningsti': 'no label', });
lyr_Idrt_14.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Folkeskole_15.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'Hjemmeside': 'no label', });
lyr_Brnehave_16.set('fieldLabels', {'Børnehave': 'no label', 'Adresse': 'no label', 'Antal bør': 'no label', });
lyr_Brnehave_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});