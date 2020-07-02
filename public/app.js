/**
 * ---------------------------------------
 * Aplicacion creada con amCharts 4 y algo de Ember...
 * 
 * https://www.amcharts.com/
 * 
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);
am4core.ready(function() {
  var populations = {
    "AD": "84000",
    "AE": "4975593",
    "AF": "29121286",
    "AG": "86754",
    "AI": "13254",
    "AL": "2986952",
    "AM": "2968000",
    "AN": "300000",
    "AO": "13068161",
    "AQ": "0",
    "AR": "41343201",
    "AS": "57881",
    "AT": "8205000",
    "AU": "21515754",
    "AW": "71566",
    "AX": "26711",
    "AZ": "8303512",
    "BA": "4590000",
    "BB": "285653",
    "BD": "156118464",
    "BE": "10403000",
    "BF": "16241811",
    "BG": "7148785",
    "BH": "738004",
    "BI": "9863117",
    "BJ": "9056010",
    "BL": "8450",
    "BM": "65365",
    "BN": "395027",
    "BO": "9947418",
    "BQ": "18012",
    "BR": "201103330",
    "BS": "301790",
    "BT": "699847",
    "BV": "0",
    "BW": "2029307",
    "BY": "9685000",
    "BZ": "314522",
    "CA": "33679000",
    "CC": "628",
    "CD": "70916439",
    "CF": "4844927",
    "CG": "3039126",
    "CH": "7581000",
    "CI": "21058798",
    "CK": "21388",
    "CL": "16746491",
    "CM": "19294149",
    "CN": "1330044000",
    "CO": "47790000",
    "CR": "4516220",
    "CS": "10829175",
    "CU": "11423000",
    "CV": "508659",
    "CW": "141766",
    "CX": "1500",
    "CY": "1102677",
    "CZ": "10476000",
    "DE": "81802257",
    "DJ": "740528",
    "DK": "5484000",
    "DM": "72813",
    "DO": "9823821",
    "DZ": "34586184",
    "EC": "14790608",
    "EE": "1291170",
    "EG": "80471869",
    "EH": "273008",
    "ER": "5792984",
    "ES": "46505963",
    "ET": "88013491",
    "FI": "5244000",
    "FJ": "875983",
    "FK": "2638",
    "FM": "107708",
    "FO": "48228",
    "FR": "64768389",
    "GA": "1545255",
    "GB": "62348447",
    "GD": "107818",
    "GE": "4630000",
    "GF": "195506",
    "GG": "65228",
    "GH": "24339838",
    "GI": "27884",
    "GL": "56375",
    "GM": "1593256",
    "GN": "10324025",
    "GP": "443000",
    "GQ": "1014999",
    "GR": "11000000",
    "GS": "30",
    "GT": "13550440",
    "GU": "159358",
    "GW": "1565126",
    "GY": "748486",
    "HK": "6898686",
    "HM": "0",
    "HN": "7989415",
    "HR": "4284889",
    "HT": "9648924",
    "HU": "9982000",
    "ID": "242968342",
    "IE": "4622917",
    "IL": "7353985",
    "IM": "75049",
    "IN": "1173108018",
    "IO": "4000",
    "IQ": "29671605",
    "IR": "76923300",
    "IS": "308910",
    "IT": "60340328",
    "JE": "90812",
    "JM": "2847232",
    "JO": "6407085",
    "JP": "127288000",
    "KE": "40046566",
    "KG": "5776500",
    "KH": "14453680",
    "KI": "92533",
    "KM": "773407",
    "KN": "51134",
    "KP": "22912177",
    "KR": "48422644",
    "KW": "2789132",
    "KY": "44270",
    "KZ": "15340000",
    "LA": "6368162",
    "LB": "4125247",
    "LC": "160922",
    "LI": "35000",
    "LK": "21513990",
    "LR": "3685076",
    "LS": "1919552",
    "LT": "2944459",
    "LU": "497538",
    "LV": "2217969",
    "LY": "6461454",
    "MA": "33848242",
    "MC": "32965",
    "MD": "4324000",
    "ME": "666730",
    "MF": "35925",
    "MG": "21281844",
    "MH": "65859",
    "MK": "2062294",
    "ML": "13796354",
    "MM": "53414374",
    "MN": "3086918",
    "MO": "449198",
    "MP": "53883",
    "MQ": "432900",
    "MR": "3205060",
    "MS": "9341",
    "MT": "403000",
    "MU": "1294104",
    "MV": "395650",
    "MW": "15447500",
    "MX": "112468855",
    "MY": "28274729",
    "MZ": "22061451",
    "NA": "2128471",
    "NC": "216494",
    "NE": "15878271",
    "NF": "1828",
    "NG": "154000000",
    "NI": "5995928",
    "NL": "16645000",
    "NO": "5009150",
    "NP": "28951852",
    "NR": "10065",
    "NU": "2166",
    "NZ": "4252277",
    "OM": "2967717",
    "PA": "3410676",
    "PE": "29907003",
    "PF": "270485",
    "PG": "6064515",
    "PH": "99900177",
    "PK": "184404791",
    "PL": "38500000",
    "PM": "7012",
    "PN": "46",
    "PR": "3916632",
    "PS": "3800000",
    "PT": "10676000",
    "PW": "19907",
    "PY": "6375830",
    "QA": "840926",
    "RE": "776948",
    "RO": "21959278",
    "RS": "7344847",
    "RU": "140702000",
    "RW": "11055976",
    "SA": "25731776",
    "SB": "559198",
    "SC": "88340",
    "SD": "35000000",
    "SE": "9828655",
    "SG": "4701069",
    "SH": "7460",
    "SI": "2007000",
    "SJ": "2550",
    "SK": "5455000",
    "SL": "5245695",
    "SM": "31477",
    "SN": "12323252",
    "SO": "10112453",
    "SR": "492829",
    "SS": "8260490",
    "ST": "175808",
    "SV": "6052064",
    "SX": "37429",
    "SY": "22198110",
    "SZ": "1354051",
    "TC": "20556",
    "TD": "10543464",
    "TF": "140",
    "TG": "6587239",
    "TH": "67089500",
    "TJ": "7487489",
    "TK": "1466",
    "TL": "1154625",
    "TM": "4940916",
    "TN": "10589025",
    "TO": "122580",
    "TR": "77804122",
    "TT": "1228691",
    "TV": "10472",
    "TW": "22894384",
    "TZ": "41892895",
    "UA": "45415596",
    "UG": "33398682",
    "UM": "0",
    "US": "310232863",
    "UY": "3477000",
    "UZ": "27865738",
    "VA": "921",
    "VC": "104217",
    "VE": "27223228",
    "VG": "21730",
    "VI": "108708",
    "VN": "89571130",
    "VU": "221552",
    "WF": "16025",
    "WS": "192001",
    "XK": "1800000",
    "YE": "23495361",
    "YT": "159042",
    "ZA": "49000000",
    "ZM": "13460305",
    "ZW": "13061000"
  }
  
  var numberFormatter = new am4core.NumberFormatter();

  var backgroundColor = am4core.color("#1e2128");
  var activeColor = am4core.color("#ff8726");
  var confirmedColor = am4core.color("#d21a1a");
  var recoveredColor = am4core.color("#45d21a");
  var deathsColor = am4core.color("#1c5fe5");

  // Objeto de colores para una mejor legibilidad
  var colors = { active: activeColor, confirmed: confirmedColor, recovered: recoveredColor, deaths: deathsColor };

  var countryColor = am4core.color("#3b3b3b");
  var countryStrokeColor = am4core.color("#000000");
  var buttonStrokeColor = am4core.color("#ffffff");
  var countryHoverColor = am4core.color("#1b1b1b");
  var activeCountryColor = am4core.color("#0f0f0f");

  var currentIndex;
  var currentCountry = "World";

  // Ultima fecha obtenida
  var lastDate = new Date(covid_total_timeline[covid_total_timeline.length - 1].date);
  var currentDate = lastDate;

  var currentPolygon;

  var countryDataTimeout;

  var currentType;

  var currentTypeName;

  var sliderAnimation;

  var perCapita = false;

  //////////////////////////////////////////////////////////////////////////////
  // Preparar los datos
  //////////////////////////////////////////////////////////////////////////////

  // Crear indice de los paises en el mapa
  var countryIndexMap = {};

  //var list = covid_world_timeline[covid_world_timeline.length - 1].list;

  // Creamos una lista a partir de la respuesta que nos de el API
  /*
  var json_data;
  var list_all = [];
  var list_countries = [];
  var list_timeline_global = [];
  var list_timeline_countries = [];
  var list_timeline_country = [];

  var req_all = fetch('http://api.coronastatistics.live/all')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_all.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_countries = fetch('http://api.coronastatistics.live/countries')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_countries.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_timeline_countries = fetch('http://api.coronastatistics.live/timeline')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_timeline_countries.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_timeline_global = fetch('http://api.coronastatistics.live/timeline/global')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_timeline_global.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  console.log(list_all, 'datos globales');   
  console.log(list_countries, 'datos por pais');   
  console.log(list_timeline_countries, 'timeline de los paises');   
  console.log(list_timeline_global, 'timeline global');  

  */
  var countryIndexMap = {};
  var list = covid_world_timeline[covid_world_timeline.length - 1].list;
  for (let i = 0; i < list.length; i++) {
    var country = list[i]
    countryIndexMap[country.id] = i;
  }
  
  // Calcular numero de casos activos
  for (let i = 0; i < covid_total_timeline.length; i++) {
    var di = covid_total_timeline[i];
    di.active = di.confirmed - di.recovered;
  }

  // Funcion que regresa el ultimo slide 
  function getSlideData(index) {
    if (index == undefined) {
      index = covid_world_timeline.length - 1;
    }

    var data = covid_world_timeline[index];

    // Uso de los nombres de los paises
    for (let i = 0; i < data.list.length; i++) {
      data.list[i].name = idToName(data.list[i].id);
    }

    return data;
  }

  // Obtener los datos del slide
  var slideData = getSlideData();

  // creamos una copia de los datos antes de modificarlos o realizar operaciones sobre ellos
  var mapData = JSON.parse(JSON.stringify(slideData.list));

  // Quitamos items con 0 datos o entradas
  for (let i = mapData.length - 1; i >= 0; i--) {
    if (mapData[i].confirmed == 0) {
      mapData.splice(i, 1);
    }
  }

  var max = { confirmed: 0, recovered: 0, deaths: 0 };
  var maxPC = { confirmed: 0, recovered: 0, deaths: 0, active: 0 };

  for (let i = 0; i < mapData.length; i++) {
    let di = mapData[i];
    if (di.confirmed > max.confirmed) {
      max.confirmed = di.confirmed;
    }
    if (di.recovered > max.recovered) {
      max.recovered = di.recovered;
    }
    if (di.deaths > max.deaths) {
      max.deaths = di.deaths
    }
    max.active = max.confirmed;
  }

  // Fin de DATA o Datos

  //////////////////////////////////////////////////////////////////////////////
  // LAYOUT & CHARTS
  //////////////////////////////////////////////////////////////////////////////

  // Contenedor principal
  var container = am4core.create("chartdiv", am4core.Container);
  container.width = am4core.percent(100);
  container.height = am4core.percent(100);

  container.tooltip = new am4core.Tooltip();
  container.tooltip.background.fill = am4core.color("#000000");
  container.tooltip.background.stroke = activeColor;
  container.tooltip.fontSize = "0.9em";
  container.tooltip.getFillFromObject = false;
  container.tooltip.getStrokeFromObject = false;

  // Grafico del mapa
  var mapChart = container.createChild(am4maps.MapChart);
  mapChart.height = am4core.percent(80);
  mapChart.homeGeoPoint = { longitude: 0, latitude: -2 };
  mapChart.geodata = am4geodata_worldLow;

  // Proyeccion del mapa
  mapChart.projection = new am4maps.projections.Miller();
  mapChart.panBehavior = "move";

  // Serie de poligonos del mapa (Define como lucen y se comportan los paises)
  var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.dataFields.id = "id";
  polygonSeries.dataFields.value = "confirmedPC";
  polygonSeries.interpolationDuration = 0;

  polygonSeries.exclude = ["AQ"]; // Se excluye la antartida xd
  polygonSeries.useGeodata = true;
  polygonSeries.nonScalingStroke = true;
  polygonSeries.strokeWidth = 0.5;
  // Coloca las burbujas en medio del area visual
  polygonSeries.calculateVisualCenter = true;
  polygonSeries.data = mapData;

  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = countryColor;
  polygonTemplate.fillOpacity = 1
  polygonTemplate.stroke = countryStrokeColor;
  polygonTemplate.strokeOpacity = 0.15
  polygonTemplate.setStateOnChildren = true;
  polygonTemplate.tooltipPosition = "fixed";

  polygonTemplate.events.on("hit", handleCountryHit);
  polygonTemplate.events.on("over", handleCountryOver);
  polygonTemplate.events.on("out", handleCountryOut);

  polygonSeries.heatRules.push({
    "target": polygonTemplate,
    "property": "fill",
    "min": countryColor,
    "max": countryColor,
    "dataField": "value"
  })

  mapChart.deltaLongitude = -8;

  // Poligonos de los paises
  var polygonHoverState = polygonTemplate.states.create("hover");
  polygonHoverState.transitionDuration = 1400;
  polygonHoverState.properties.fill = countryHoverColor;

  var polygonActiveState = polygonTemplate.states.create("active")
  polygonActiveState.properties.fill = activeCountryColor;

  // Bubble series - Tooltip de los países
  var bubbleSeries = mapChart.series.push(new am4maps.MapImageSeries());
  bubbleSeries.data = JSON.parse(JSON.stringify(mapData));

  bubbleSeries.dataFields.value = "confirmed";
  bubbleSeries.dataFields.id = "id";
  bubbleSeries.tooltip.animationDuration = 2000;
  bubbleSeries.tooltip.showInViewport = false;
  bubbleSeries.tooltip.background.fillOpacity = 0.2;
  bubbleSeries.tooltip.getStrokeFromObject = true;
  bubbleSeries.tooltip.getFillFromObject = false;
  bubbleSeries.tooltip.background.fillOpacity = 0.2;
  bubbleSeries.tooltip.background.fill = am4core.color("#000000");

  var imageTemplate = bubbleSeries.mapImages.template;
  imageTemplate.nonScaling = false;
  imageTemplate.strokeOpacity = 0;
  imageTemplate.fillOpacity = 0.55;
  imageTemplate.tooltipText = "{name}: [bold]{value}[/]";
  imageTemplate.applyOnClones = true;

  imageTemplate.events.on("over", handleImageOver);
  imageTemplate.events.on("out", handleImageOut);
  imageTemplate.events.on("hit", handleImageHit);

  imageTemplate.adapter.add("tooltipY", function(tooltipY, target) {
    return -target.children.getIndex(0).radius;
  })

  // Opacidad de las burbujas
  var imageHoverState = imageTemplate.states.create("hover");
  imageHoverState.properties.fillOpacity = 1;

  var circle = imageTemplate.createChild(am4core.Circle);
  circle.hiddenState.properties.scale = 0.0001;
  circle.hiddenState.transitionDuration = 2000;
  circle.defaultState.transitionDuration = 2000;
  circle.defaultState.transitionEasing = am4core.ease.elasticOut;
  circle.applyOnClones = true;

  bubbleSeries.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 3,
    "max": 30,
    "dataField": "value"
  })

  bubbleSeries.events.on("dataitemsvalidated", function() {
    bubbleSeries.dataItems.each((dataItem) => {
      var mapImage = dataItem.mapImage;
      var circle = mapImage.children.getIndex(0);
      if (mapImage.dataItem.value == 0) {
        circle.hide(0);
      }
      else if (circle.isHidden || circle.isHiding) {
        circle.show();
      }
    })
  })

  // Funcion para colocar los circulos aproximadamente en el centro de los paises
  imageTemplate.adapter.add("latitude", function(latitude, target) {
    var polygon = polygonSeries.getPolygonById(target.dataItem.id);
    if (polygon) {
      target.disabled = false;
      return polygon.visualLatitude;
    }
    else {
      target.disabled = true;
    }
    return latitude;
  })

  imageTemplate.adapter.add("longitude", function(longitude, target) {
    var polygon = polygonSeries.getPolygonById(target.dataItem.id);
    if (polygon) {
      target.disabled = false;
      return polygon.visualLongitude;
    }
    else {
      target.disabled = true;
    }
    return longitude;
  })

  // Fin de MAP CHART

  // Titulo COVID-19 A lo largo del mundo
  var title = mapChart.titles.create();
  title.fontSize = "1.9em";
  title.text = "COVID-19 World Spread Data";
  title.align = "center";
  title.horizontalCenter = "center";
  title.marginLeft = 20;
  title.paddingBottom = 10;
  title.fill = am4core.color("#ffffff");
  title.y = 20;

  // Contenedor de botones y charts--TBD
  var buttonsAndChartContainer = container.createChild(am4core.Container);
  buttonsAndChartContainer.layout = "vertical";
  buttonsAndChartContainer.height = am4core.percent(45); 
  buttonsAndChartContainer.width = am4core.percent(100);
  buttonsAndChartContainer.valign = "bottom";

  // Contenedor de los nombres de los paises
  var nameAndButtonsContainer = buttonsAndChartContainer.createChild(am4core.Container)
  nameAndButtonsContainer.width = am4core.percent(100);
  nameAndButtonsContainer.padding(0, 10, 5, 20);
  nameAndButtonsContainer.layout = "horizontal";

  // Nombre del pais y etiqueta de datos
  var countryName = nameAndButtonsContainer.createChild(am4core.Label);
  countryName.fontSize = "2em";
  countryName.fill = am4core.color("#ffffff");
  countryName.valign = "middle";

  // Contenedor de los siguientes botones -> active/confirmed/recovered/deaths
  var buttonsContainer = nameAndButtonsContainer.createChild(am4core.Container);
  buttonsContainer.layout = "grid";
  buttonsContainer.width = am4core.percent(100);
  buttonsContainer.x = 10;
  buttonsContainer.contentAlign = "right";

  // Contenedor de la grafica y el slider de bottom
  var chartAndSliderContainer = buttonsAndChartContainer.createChild(am4core.Container);
  chartAndSliderContainer.layout = "vertical";
  chartAndSliderContainer.height = am4core.percent(100);
  chartAndSliderContainer.width = am4core.percent(100);
  chartAndSliderContainer.background = new am4core.RoundedRectangle();
  chartAndSliderContainer.background.fill = am4core.color("#000000");
  chartAndSliderContainer.background.cornerRadius(30, 30, 0, 0)
  chartAndSliderContainer.background.fillOpacity = 0.25;
  chartAndSliderContainer.paddingTop = 12;
  chartAndSliderContainer.paddingBottom = 0;

  // Contenedor del slider
  var sliderContainer = chartAndSliderContainer.createChild(am4core.Container);
  sliderContainer.width = am4core.percent(100);
  sliderContainer.padding(0, 15, 15, 10);
  sliderContainer.layout = "horizontal";

  var slider = sliderContainer.createChild(am4core.Slider);
  slider.width = am4core.percent(100);
  slider.valign = "middle";
  slider.background.opacity = 0.4;
  slider.opacity = 0.7;
  slider.background.fill = am4core.color("#ffffff");
  slider.marginLeft = 20;
  slider.marginRight = 35;
  slider.height = 15;
  slider.start = 1;


  // what to do when slider is dragged
  slider.events.on("rangechanged", function(event) {
    var index = Math.round((covid_world_timeline.length - 1) * slider.start);
    updateMapData(getSlideData(index).list);
    updateTotals(index);
  })
  // stop animation if dragged
  slider.startGrip.events.on("drag", () => {
    stop();
    if (sliderAnimation) {
      sliderAnimation.setProgress(slider.start);
    }
  });

  // BOTTOM CHART en X y Y
  var lineChart = chartAndSliderContainer.createChild(am4charts.XYChart);
  lineChart.fontSize = "0.8em";
  lineChart.paddingRight = 30;
  lineChart.paddingLeft = 30;
  lineChart.maskBullets = false;
  lineChart.zoomOutButton.disabled = true;
  lineChart.paddingBottom = 5;
  lineChart.paddingTop = 3;

  // Copiar los datos para luego modificarlos
  lineChart.data = JSON.parse(JSON.stringify(covid_total_timeline));

  // Eje de la fecha
  var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 50;
  dateAxis.renderer.grid.template.stroke = am4core.color("#000000");
  dateAxis.renderer.grid.template.strokeOpacity = 0.25;
  dateAxis.max = lastDate.getTime() + am4core.time.getDuration("day", 5);
  dateAxis.tooltip.label.fontSize = "0.8em";
  dateAxis.tooltip.background.fill = activeColor;
  dateAxis.tooltip.background.stroke = activeColor;
  dateAxis.renderer.labels.template.fill = am4core.color("#ffffff");

  // Eje del valor
  var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.opposite = true;
  valueAxis.interpolationDuration = 3000;
  valueAxis.renderer.grid.template.stroke = am4core.color("#000000");
  valueAxis.renderer.grid.template.strokeOpacity = 0.25;
  valueAxis.renderer.minGridDistance = 30;
  valueAxis.renderer.maxLabelPosition = 0.98;
  valueAxis.tooltip.disabled = true;
  valueAxis.extraMax = 0.05;
  valueAxis.maxPrecision = 0;
  valueAxis.renderer.inside = true;
  valueAxis.renderer.labels.template.verticalCenter = "bottom";
  valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
  valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
  valueAxis.adapter.add("max", function(max, target) {
    if (max < 5) {
      max = 5
    }
    return max;
  })

  valueAxis.adapter.add("min", function(min, target) {
    if (!seriesTypeSwitch.isActive) {
      if (min < 0) {
        min = 0;
      }
    }
    return min;
  })

  // Cursor
  lineChart.cursor = new am4charts.XYCursor();
  lineChart.cursor.maxTooltipDistance = 0;
  lineChart.cursor.behavior = "none"; 
  lineChart.cursor.lineY.disabled = true;
  lineChart.cursor.lineX.stroke = activeColor;
  lineChart.cursor.xAxis = dateAxis;
  // Estas lineas previenen que el cursor se mueva cuando arrastramos el mapa
  am4core.getInteraction().body.events.off("down", lineChart.cursor.handleCursorDown, lineChart.cursor)
  am4core.getInteraction().body.events.off("up", lineChart.cursor.handleCursorUp, lineChart.cursor)

  // Leyenda de BOTTOM CHART (Leyenda tambien puede significar...)
  lineChart.legend = new am4charts.Legend();
  lineChart.legend.parent = lineChart.plotContainer;
  lineChart.legend.labels.template.fill = am4core.color("#ffffff");
  lineChart.legend.markers.template.height = 8;
  lineChart.legend.contentAlign = "left";
  lineChart.legend.itemContainers.template.valign = "middle";
  var legendDown = false;
  lineChart.legend.itemContainers.template.events.on("down", function() {
    legendDown = true;
  })
  lineChart.legend.itemContainers.template.events.on("up", function() {
    setTimeout(function() {
      legendDown = false;
    }, 100)
  })

  var seriesTypeSwitch = lineChart.legend.createChild(am4core.SwitchButton);
  seriesTypeSwitch.leftLabel.text = "totals";
  seriesTypeSwitch.rightLabel.text = "day change"
  seriesTypeSwitch.leftLabel.fill = am4core.color("#ffffff");
  seriesTypeSwitch.rightLabel.fill = am4core.color("#ffffff");

  seriesTypeSwitch.events.on("down", function() {
    legendDown = true;
  })
  seriesTypeSwitch.events.on("up", function() {
    setTimeout(function() {
      legendDown = false;
    }, 100)
  })

  seriesTypeSwitch.events.on("toggled", function() {
    if (seriesTypeSwitch.isActive) {
      if (!columnSeries) {
        createColumnSeries();
      }

      for (let key in columnSeries) {
        columnSeries[key].hide(0);
      }

      for (let key in series) {
        series[key].hiddenInLegend = true;
        series[key].hide();
      }

      columnSeries[currentType].show();
    }
    else {
      for (let key in columnSeries) {
        columnSeries[key].hiddenInLegend = true;
        columnSeries[key].hide();
      }

      for (let key in series) {
        series[key].hiddenInLegend = false;
        series[key].hide();
      }

      series[currentType].show();

    }
  })

  function updateColumnsFill() {
    columnSeries.active.columns.each(function(column) {
      if (column.dataItem.values.valueY.previousChange < 0) {
        column.fillOpacity = 0;
        column.strokeOpacity = 0.6;
      }
      else {
        column.fillOpacity = 0.6;
        column.strokeOpacity = 0;
      }
    })
  }


  // create series
  var activeSeries = addSeries("active", activeColor);
  // active series is visible initially
  activeSeries.tooltip.disabled = true;
  activeSeries.hidden = false;

  var confirmedSeries = addSeries("confirmed", confirmedColor);
  var recoveredSeries = addSeries("recovered", recoveredColor);
  var deathsSeries = addSeries("deaths", deathsColor);

  var series = { active: activeSeries, confirmed: confirmedSeries, recovered: recoveredSeries, deaths: deathsSeries };
  // add series
  function addSeries(name, color) {
    var series = lineChart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = name;
    series.dataFields.dateX = "date";
    series.name = capitalizeFirstLetter(name);
    series.strokeOpacity = 0.6;
    series.stroke = color;
    series.fill = color;
    series.maskBullets = false;
    series.minBulletDistance = 10;
    series.hidden = true;
    series.hideTooltipWhileZooming = true;


    // series bullet
    var bullet = series.bullets.push(new am4charts.CircleBullet());

    // only needed to pass it to circle
    var bulletHoverState = bullet.states.create("hover");
    bullet.setStateOnChildren = true;

    bullet.circle.fillOpacity = 1;
    bullet.circle.fill = backgroundColor;
    bullet.circle.radius = 2;

    var circleHoverState = bullet.circle.states.create("hover");
    circleHoverState.properties.fillOpacity = 1;
    circleHoverState.properties.fill = color;
    circleHoverState.properties.scale = 1.4;

    // tooltip setup
    series.tooltip.pointerOrientation = "down";
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fillOpacity = 0.2;
    series.tooltip.background.fill = am4core.color("#000000");
    series.tooltip.dy = -4;
    series.tooltip.fontSize = "0.8em";
    series.tooltipText = "Total {name}: {valueY}";

    return series;
  }


  var series = { active: activeSeries, confirmed: confirmedSeries, recovered: recoveredSeries, deaths: deathsSeries };

  var columnSeries;

  function createColumnSeries() {
    columnSeries = {}
    columnSeries.active = addColumnSeries("active", activeColor);
    columnSeries.active.events.on("validated", function() {
      updateColumnsFill();
    })

    columnSeries.confirmed = addColumnSeries("confirmed", confirmedColor);
    columnSeries.recovered = addColumnSeries("recovered", recoveredColor);
    columnSeries.deaths = addColumnSeries("deaths", deathsColor);
  }

  // add series
  function addColumnSeries(name, color) {
    var series = lineChart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = name;
    series.dataFields.valueYShow = "previousChange";
    series.dataFields.dateX = "date";
    series.name = capitalizeFirstLetter(name);
    series.hidden = true;
    series.stroke = color;
    series.fill = color;
    series.columns.template.fillOpacity = 0.6;
    series.columns.template.strokeOpacity = 0;
    series.hideTooltipWhileZooming = true;
    series.clustered = false;
    series.hiddenInLegend = true;
    series.columns.template.width = am4core.percent(50);

    // tooltip setup
    series.tooltip.pointerOrientation = "down";
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fillOpacity = 0.2;
    series.tooltip.background.fill = am4core.color("#000000");
    series.tooltip.fontSize = "0.8em";
    series.tooltipText = "{name}: {valueY.previousChange.formatNumber('+#,###|#,###|0')}";

    return series;
  }


  lineChart.plotContainer.events.on("up", function() {
    if (!legendDown) {
      slider.start = lineChart.cursor.xPosition * ((dateAxis.max - dateAxis.min) / (lastDate.getTime() - dateAxis.min));
    }
  })


  // BOTONES
  // Creacion de los botones
  var activeButton = addButton("active", activeColor);
  var confirmedButton = addButton("confirmed", confirmedColor);
  var recoveredButton = addButton("recovered", recoveredColor);
  var deathsButton = addButton("deaths", deathsColor);

  var buttons = { active: activeButton, confirmed: confirmedButton, recovered: recoveredButton, deaths: deathsButton };

  // Anadir boton
  function addButton(name, color) {
    var button = buttonsContainer.createChild(am4core.Button)
    button.label.valign = "middle"
    button.label.fill = am4core.color("#ffffff");
    button.background.cornerRadius(30, 30, 30, 30);
    button.background.strokeOpacity = 0.3
    button.background.fillOpacity = 0;
    button.background.stroke = buttonStrokeColor;
    button.background.padding(2, 3, 2, 3);
    button.states.create("active");
    button.setStateOnChildren = true;

    var activeHoverState = button.background.states.create("hoverActive");
    activeHoverState.properties.fillOpacity = 0;

    var circle = new am4core.Circle();
    circle.radius = 8;
    circle.fillOpacity = 0.3;
    circle.fill = buttonStrokeColor;
    circle.strokeOpacity = 0;
    circle.valign = "middle";
    circle.marginRight = 5;
    button.icon = circle;

    button.dummyData = name;

    var circleActiveState = circle.states.create("active");
    circleActiveState.properties.fill = color;
    circleActiveState.properties.fillOpacity = 0.5;

    button.events.on("hit", handleButtonClick);

    return button;
  }

  // Click
  function handleButtonClick(event) {
    changeDataType(event.target.dummyData);
  }

  function changeDataType(name) {
    currentType = name;
    currentTypeName = name;
    if (name != "deaths") {
      currentTypeName += " cases";
    }

    bubbleSeries.mapImages.template.tooltipText = "[bold]{name}: {value}[/] [font-size:10px]\n" + currentTypeName;

    var activeButton = buttons[name];
    activeButton.isActive = true;
    for (let key in buttons) {
      if (buttons[key] != activeButton) {
        buttons[key].isActive = false;
      }
    }
    bubbleSeries.dataFields.value = name;
    polygonSeries.dataFields.value = name + "PC";

    bubbleSeries.dataItems.each(function(dataItem) {
      dataItem.setValue("value", dataItem.dataContext[currentType]);
    })

    polygonSeries.dataItems.each(function(dataItem) {
      dataItem.setValue("value", dataItem.dataContext[currentType + "PC"]);
      dataItem.mapPolygon.defaultState.properties.fill = undefined;
    })


    // Cambiar el color de las burbujas en relacion al boton activado
    bubbleSeries.mapImages.template.fill = colors[name];
    bubbleSeries.mapImages.template.stroke = colors[name];
    bubbleSeries.mapImages.template.children.getIndex(0).fill = colors[name];

    dateAxis.tooltip.background.fill = colors[name];
    dateAxis.tooltip.background.stroke = colors[name];
    lineChart.cursor.lineX.stroke = colors[name];

    // Mostrar las burbujas
    if (seriesTypeSwitch.isActive) {
      var currentSeries = columnSeries[name];
      currentSeries.show();
      // Ocultar las que no queremos que aparezcan
      for (let key in columnSeries) {
        if (columnSeries[key] != currentSeries) {
          columnSeries[key].hide();
        }
      }
    }
    else {
      var currentSeries = series[name];
      currentSeries.show();
      // Ocultar las que no queremos que aparezcan
      for (let key in series) {
        if (series[key] != currentSeries) {
          series[key].hide();
        }
      }
    }
    bubbleSeries.heatRules.getIndex(0).maxValue = max[currentType];
    polygonSeries.heatRules.getIndex(0).maxValue = maxPC[currentType];
    if (perCapita) {
      polygonSeries.heatRules.getIndex(0).max = colors[name];
      updateCountryTooltip();
    }
  }

  // Funcion para seleccionar un pais
  function selectCountry(mapPolygon) {
    resetHover();
    polygonSeries.hideTooltip();

    if (currentPolygon == mapPolygon) {
      currentPolygon.isActive = false;
      currentPolygon = undefined;
      showWorld();
      return;
    }
    // guardar el pais o poligono actual
    currentPolygon = mapPolygon;
    var countryIndex = countryIndexMap[mapPolygon.dataItem.id];
    currentCountry = mapPolygon.dataItem.dataContext.name;

    // Hacer que los demas se vuelvan inactivos
    polygonSeries.mapPolygons.each(function(polygon) {
      polygon.isActive = false;
    })

    if (countryDataTimeout) {
      clearTimeout(countryDataTimeout);
    }
    // Timeout para retrieve de los datos(?)
    countryDataTimeout = setTimeout(function() {
      setCountryData(countryIndex);
    }, 1000); // -> un segundo

    updateTotals(currentIndex);
    updateCountryName();

    mapPolygon.isActive = true;
    // meaning it's globe
    if (mapGlobeSwitch.isActive) {
      // animate deltas (results the map to be rotated to the selected country)
      if (mapChart.zoomLevel != 1) {
        mapChart.goHome();
        rotateAndZoom(mapPolygon);
      }
      else {
        rotateAndZoom(mapPolygon);
      }
    }
    // if it's not a globe, simply zoom to the country
    else {
      mapChart.zoomToMapObject(mapPolygon, getZoomLevel(mapPolygon));
    }
  }

  // Set de los datos de los paises
  function setCountryData(countryIndex) {
    for (let i = 0; i < lineChart.data.length; i++) {
      var di = covid_world_timeline[i].list;
      var countryData = di[countryIndex];
      var dataContext = lineChart.data[i];
      if (countryData) {
        dataContext.recovered = countryData.recovered;
        dataContext.confirmed = countryData.confirmed;
        dataContext.deaths = countryData.deaths;
        dataContext.active = countryData.confirmed - countryData.recovered - countryData.deaths;
        valueAxis.min = undefined;
        valueAxis.max = undefined;
      }
      else {
        dataContext.recovered = 0;
        dataContext.confirmed = 0;
        dataContext.deaths = 0;
        dataContext.active = 0;
        valueAxis.min = 0;
        valueAxis.max = 10;
      }
    }

    lineChart.invalidateRawData();
    updateTotals(currentIndex);
    setTimeout(updateSeriesTooltip, 1000);
  }

  function updateSeriesTooltip() {

    var position = dateAxis.dateToPosition(currentDate);
    position = dateAxis.toGlobalPosition(position);
    var x = dateAxis.positionToCoordinate(position);

    lineChart.cursor.triggerMove({ x: x, y: 0 }, "soft", true);
    lineChart.series.each(function(series) {
      if (!series.isHidden) {
        series.tooltip.disabled = false;
        series.showTooltipAtDataItem(series.tooltipDataItem);
      }
    })
  }

  function rollOverCountry(mapPolygon) {

    resetHover();
    if (mapPolygon) {
      mapPolygon.isHover = true;

      var image = bubbleSeries.getImageById(mapPolygon.dataItem.id);
      if (image) {
        image.dataItem.dataContext.name = mapPolygon.dataItem.dataContext.name;
        image.isHover = true;
      }
    }
  }
  function rollOutCountry(mapPolygon) {
    var image = bubbleSeries.getImageById(mapPolygon.dataItem.id)

    resetHover();
    if (image) {
      image.isHover = false;
    }
  }

  function getZoomLevel(mapPolygon) {
    var w = mapPolygon.polygon.bbox.width;
    var h = mapPolygon.polygon.bbox.width;
    return Math.min(mapChart.seriesWidth / (w * 2), mapChart.seriesHeight / (h * 2))
  }

  // Mostrar datos mundiales
  function showWorld() {
    currentCountry = "World";
    currentPolygon = undefined;
    resetHover();

    if (countryDataTimeout) {
      clearTimeout(countryDataTimeout);
    }
    polygonSeries.mapPolygons.each(function(polygon) {
      polygon.isActive = false;
    })

    updateCountryName();

    for (let i = 0; i < lineChart.data.length; i++) {
      var di = covid_total_timeline[i];
      var dataContext = lineChart.data[i];

      dataContext.recovered = di.recovered;
      dataContext.confirmed = di.confirmed;
      dataContext.deaths = di.deaths;
      dataContext.active = di.confirmed - di.recovered;
      valueAxis.min = undefined;
      valueAxis.max = undefined;
    }

    lineChart.invalidateRawData();

    updateTotals(currentIndex);
    mapChart.goHome();
  }

  function updateCountryName() {
    countryName.text = currentCountry + ", " + mapChart.dateFormatter.format(currentDate, "MMM dd, yyyy");
  }

  // Actualiza el valor total en los botones
  function updateTotals(index) {
    if (!isNaN(index)) {
      var di = covid_total_timeline[index];
      var date = new Date(di.date);
      currentDate = date;

      updateCountryName();

      var position = dateAxis.dateToPosition(date);
      position = dateAxis.toGlobalPosition(position);
      var x = dateAxis.positionToCoordinate(position);

      if (lineChart.cursor) {
        lineChart.cursor.triggerMove({ x: x, y: 0 }, "soft", true);
      }
      for (let key in buttons) {
        var count = Number(lineChart.data[index][key])
        if (!isNaN(count)) {
          buttons[key].label.text = capitalizeFirstLetter(key) + ": " + numberFormatter.format(count, '#,###');
        }
      }
      currentIndex = index;
    }
  }

  function updateMapData(data) {
    bubbleSeries.dataItems.each(function(dataItem) {
      dataItem.dataContext.confirmed = 0;
      dataItem.dataContext.deaths = 0;
      dataItem.dataContext.recovered = 0;
      dataItem.dataContext.active = 0;
    })

    maxPC = { active: 0, confirmed: 0, deaths: 0, recovered: 0 };

    for (let i = 0; i < data.length; i++) {
      var di = data[i];
      var image = bubbleSeries.getImageById(di.id);
      var polygon = polygonSeries.getPolygonById(di.id);

      if (image) {
        var population = Number(populations[image.dataItem.dataContext.id]);

        image.dataItem.dataContext.confirmed = di.confirmed;
        image.dataItem.dataContext.deaths = di.deaths;
        image.dataItem.dataContext.recovered = di.recovered;
        image.dataItem.dataContext.active = di.confirmed - di.recovered - di.deaths;
      }

      if (polygon) {
        polygon.dataItem.dataContext.confirmedPC = di.confirmed / population * 1000000;
        polygon.dataItem.dataContext.deathsPC = di.deaths / population * 1000000;
        polygon.dataItem.dataContext.recoveredPC = di.recovered / population * 1000000;
        polygon.dataItem.dataContext.active = di.confirmed - di.recovered - di.deaths;
        polygon.dataItem.dataContext.activePC = polygon.dataItem.dataContext.active / population * 1000000;

        if (population > 100000) {
          if (polygon.dataItem.dataContext.confirmedPC > maxPC.confirmed) {
            maxPC.confirmed = polygon.dataItem.dataContext.confirmedPC;
          }
          if (polygon.dataItem.dataContext.deathsPC > maxPC.deaths) {
            maxPC.deaths = polygon.dataItem.dataContext.deathsPC;
          }
          if (polygon.dataItem.dataContext.recoveredPC > maxPC.recovered) {
            maxPC.recovered = polygon.dataItem.dataContext.recoveredPC;
          }
          if (polygon.dataItem.dataContext.activePC > maxPC.active) {
            maxPC.active = polygon.dataItem.dataContext.activePC;
          }
        }
      }

      bubbleSeries.heatRules.getIndex(0).maxValue = max[currentType];
      polygonSeries.heatRules.getIndex(0).maxValue = maxPC[currentType];

      bubbleSeries.invalidateRawData();
      polygonSeries.invalidateRawData();
    }
  }

  // capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function handleImageOver(event) {
    rollOverCountry(polygonSeries.getPolygonById(event.target.dataItem.id));
  }

  function handleImageOut(event) {
    rollOutCountry(polygonSeries.getPolygonById(event.target.dataItem.id));
  }

  function handleImageHit(event) {
    selectCountry(polygonSeries.getPolygonById(event.target.dataItem.id));
  }

  function handleCountryHit(event) {
    selectCountry(event.target);
  }

  function handleCountryOver(event) {
    rollOverCountry(event.target);
  }

  function handleCountryOut(event) {
    rollOutCountry(event.target);
  }

  function resetHover() {
    polygonSeries.mapPolygons.each(function(polygon) {
      polygon.isHover = false;
    })

    bubbleSeries.mapImages.each(function(image) {
      image.isHover = false;
    })
  }

  container.events.on("layoutvalidated", function() {
    dateAxis.tooltip.hide();
    lineChart.cursor.hide();
    updateTotals(currentIndex);
  });

  updateCountryName();
  changeDataType("active");
  populateCountries(slideData.list);

  setTimeout(updateSeriesTooltip, 3000);

  function updateCountryTooltip() {
    polygonSeries.mapPolygons.template.tooltipText = "[bold]{name}: {value.formatNumber('#.')}[/]\n[font-size:10px]" + currentTypeName + " per million"
  }


  /**
   * Lista/Tabla de paises a la derecha
   */

  function populateCountries(list) {
    var table = $("#areas tbody");
    table.find(".area").remove();
    for (let i = 0; i < list.length; i++) {
      var area = list[i];
      var tr = $("<tr>").addClass("area").data("areaid", area.id).appendTo(table).on("click", function() {
        selectCountry(polygonSeries.getPolygonById($(this).data("areaid")));
      }).hover(function() {
        rollOverCountry(polygonSeries.getPolygonById($(this).data("areaid")));
      });
      $("<td>").appendTo(tr).data("areaid", area.id).html(area.name);
      $("<td>").addClass("value").appendTo(tr).html(area.confirmed);
      $("<td>").addClass("value").appendTo(tr).html(area.deaths);
      $("<td>").addClass("value").appendTo(tr).html(area.recovered);

    }
    $("#areas").DataTable({
      "paging": false,
      "select": true
    }).column("1")
      .order("desc")
      .draw();
  }


  function idToName(id) {
    return am4geodata_data_countries2[id] ? am4geodata_data_countries2[id].country : id == "XX" ? "Others" : id;
  }

  function removeAntarctica(mapData) {
    for (let i = mapData.length - 1; i >= 0; i--) {
      if (mapData[i].id == "AQ") {
        mapData.splice(i, 1);
      }
    }
  }

});