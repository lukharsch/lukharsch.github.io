google.charts.load('current', {
    'packages': ['geochart'],
});

var json;
var hashMapCountries = {};
var eraCountries;
var checkHC = false;
var hc;
var countryISO;

var $valueCOL;
var $valueEDU;
var $valueALC;
var $valueERA;
var $homeCountryERA;
var $enableERA;

var outgoingStudentsFromHC = {};
var outgoingStudentsFromHCReal = {};

var options = {colorAxis: {colors: ['#d9f2ff', '#1c00ba']}};
var resArr;

var isEurope = false;

/**
 * This block of code gets automatically executed if the documents is ready (so basically at the very beginning after reload)
 */
$(document).ready(function () {

    //fetching json of country data
    fetch("preprocessed_data_normalized.json").then(response => {
        return response.json();
     }).then(data => {
        json = data;
        eraCountries = findErasmusCountries();
        var list = document.getElementById('suggestions');
        eraCountries.forEach(function(item){
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        });
    });

    //fetching json of country codes (needed for getting flags of the countries)
    fetch("country_codes.json").then(response => {
        return response.json();
     }).then(data => {
        countryISO = data;
        for (var key in countryISO) {
            countryISO[countryISO[key]] = key;
        }
    });

    //initializing popovers (when clicking on the "info" fields at the filter possibilities) and other variables
    $('[data-toggle="popover"]').popover();

    $valueSpanCOL = $('#valueCOLSpan');
    $valueCOL = $('#sliderCOL');
    $valueSpanEDU = $('#valueEDUSpan');
    $valueEDU = $('#sliderEDU');
    $valueSpanALC = $('#valueALCSpan');
    $valueALC = $('#sliderALC');
    $valueSpanERA = $('#valueERASpan');
    $valueERA = $('#sliderERA');
    $homeCountryERA = $('#hcERA');
    $enableERA = $('#enableERA');

    $valueSpanCOL.html("Moderate");
    $valueSpanEDU.html("Moderate");
    $valueSpanALC.html("Moderate");
    $valueSpanERA.html("Moderate");

    //on-change event listeners for the sliders and homecountry fields
    $valueCOL.on('input change', () => {
        $valueSpanCOL.html(valueToString($valueCOL.val()));
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val());
    });
    $valueEDU.on('input change', () => {
        $valueSpanEDU.html(valueToString($valueEDU.val()));
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val());
    });
    $valueALC.on('input change', () => {
        $valueSpanALC.html(valueToString($valueALC.val()));
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val());
    });
    $valueERA.on('input change', () => {
        $valueSpanERA.html(valueToString($valueERA.val()));
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val());
    });
    $homeCountryERA.on('input change', () => {
        validateHC($homeCountryERA.val());
    });
    $enableERA.change(function(){
        if(this.checked) {
            showERA(true);
        }else{
            showERA(false);
        }
    });
});

/**
 * Function converting numerical value between 0 and 100 to a defined category
 * @param x numerical value (%)
 */
function valueToString(x){
    if(x < 10) {
        return "Very low"
    } else if(x < 30) {
        return "Low"
    } else if(x < 70) {
        return "Moderate"
    } else if(x < 90) {
        return "High"
    } else {
        return "Very high"
    }
}

/**
 * Function checks if a country is a Erasmus country
 * @param  country input
 */
function validateHC(country){
    if(eraCountries.includes(country)) {
        checkHC = true
        hc = country
        $('#sliderERA').prop('disabled', false)
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val())
    }else {
        checkHC = false
        $('#sliderERA').prop('disabled', true)
    }
}
/**
 * Function finds all countries in the erasmus program
 * An erasmus country is determined whether it's json object have an attribute "era" or not
 */
function findErasmusCountries(){
    temp = []
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            hashMapCountries[json[key]["country"]] = key
            if(json[key]["era"] != null) {
                temp.push(json[key]["country"])
            }
        }
    }
    return temp
}
/**
 * Finds and saves all erasmus countries for a give homecountry
 * The homecountry itself it not saved as a erasmus country for the homecountry
 * @param c homecountry
 */
function findEraCountriesForCountry(c) {
    index = hashMapCountries[c]
    outgoingStudentsFromHC = {}
    range = [0, 1]
    for(var i in json[index]["era"]) {
        if(i != c) {
            outgoingStudentsFromHC[i] = parseInt(json[index]["era"][i])
            outgoingStudentsFromHCReal[i] = parseInt(json[index]["era"][i])
        }
    }
    /**
     * Normalizing amount of outgoing students
     * @param  outgoingStudentsFromHC amount of outgoing students
     * @param  range of the normalization. In this case [0, 1]
     */
    const normaliseObject = (outgoingStudentsFromHC, range) => {
        const values = Object.values(outgoingStudentsFromHC);
        const min = Math.min.apply(Math, values);
        const max = Math.max.apply(Math, values);
        const variation = (range[1] - range[0]) / (max - min);
        Object.keys(outgoingStudentsFromHC).forEach(el => {
           const val = (range[0] + ((outgoingStudentsFromHC[el] - min) * variation)).toFixed(2);
           outgoingStudentsFromHC[el] = +val;
        });
    };
    normaliseObject(outgoingStudentsFromHC, range);
    return outgoingStudentsFromHC
}
/**
 * If a homecountry input is validated, show the slider as active and start the mapify-process
 * @param b whether or not it should be shown
 */
function showERA(b){
    if(b){
        $('#hcERA').prop('disabled', false);
        validateHC($homeCountryERA.val())
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val())
    }else{
        checkHC = false
        inputChanged($valueCOL.val(), $valueEDU.val(), $valueALC.val(), $valueERA.val(), $homeCountryERA.val())
        $('#sliderERA').prop('disabled', true);
        $('#hcERA').prop('disabled', true);
    }
}
/**
 * Switching region of the map from the world to Europe or vice versa
 * Also, changing the buttons inner HTML
 */
function switchRegion() {
    if(isEurope) {
        delete options["region"]
        document.getElementById("changeRegionButton").innerHTML = '<span style="font-size: 18px;" class="material-icons-outlined">star</span> Show Europe'
        isEurope = !isEurope
    } else {
        options["region"] = "150"
        document.getElementById("changeRegionButton").innerHTML = '<span style="font-size: 18px;" class="material-icons-outlined">public</span> Show World'
        isEurope = !isEurope
    }
    google.charts.setOnLoadCallback(drawRegionsMap(resArr));
}
/**
 * Compute scores for the countries
 * Used similarity method: euklidian distance
 * @param wCol value of the slider for Cost of Living
 * @param wEdu value of the slider for Level of Education
 * @param wAlc value of the slider for Alcohol Consumptio
 * @param wEra value of the slider for Erasmus Popularity
 * @param hcERA homecountry
 */
function inputChanged(wCol, wEdu, wAlc, wEra, hcERA){
    document.getElementById("placeholderMap").style.display = "none"
    document.getElementById("world_map").style.display = "block"
    document.getElementById("regionButtons").style.display = "block"
    if(checkHC) {
        eraMap = findEraCountriesForCountry(hcERA)
    }
    resArr = []
    resArr.push(["Country", "Score"])
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            temp = []
            c = json[key]["country"]
            temp.push(c)

            // if erasmus country, include value for erasmus popularity
            // else, exclude it
            if(checkHC && c in eraMap && c != hcERA){
                weighted = (1-(Math.abs(json[key]["col"]-(wCol/100)) + Math.abs(json[key]["edu"]-(wEdu/100)) + Math.abs(json[key]["alc"]-(wAlc/100)) + Math.abs(eraMap[c]-(wEra/100)))/4) * 100
                temp.push(weighted)
            } else {
                weighted = (1-(Math.abs(json[key]["col"]-(wCol/100)) + Math.abs(json[key]["edu"]-(wEdu/100)) + Math.abs(json[key]["alc"]-(wAlc/100)))/3) * 100
                temp.push(weighted)
            }
            resArr.push(temp)
        }
    }
    google.charts.setOnLoadCallback(drawRegionsMap(resArr));
}
/**
 * Drawing the map using Google's GeoChart and the previously build array of countries and their computed scores
 * @param arr
 */
function drawRegionsMap(arr) {
    var data = google.visualization.arrayToDataTable(arr);
    var chart = new google.visualization.GeoChart(document.getElementById('world_map'));
    
    /**
     * Click handler for generating and showing the Modal if the user clicks on a country
     */
    function myClickHandler(){
        var selection = chart.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null) {
                c = data.getFormattedValue(item.row, 0)
                var code = countryISO[c]
                modalT = "Overall score of <img src='https://www.countryflags.io/" + code + "/flat/32.png'> " + c + ": <b style='color: blue'>" + valueToString(data.getFormattedValue(item.row, 1)) + "</b> (" + data.getFormattedValue(item.row, 1) + "%)"
                p = document.createElement('p')
                p.innerHTML = "Cost of Living: <b style='color: blue'>" + valueToString(json[hashMapCountries[c]]["col"]*100) + "</b> (" + (json[hashMapCountries[c]]["col"]*100).toFixed(2) + "%)<br>"
                p.innerHTML += "Level of Education: <b style='color: blue'>" + valueToString(json[hashMapCountries[c]]["edu"]*100) + "</b> (" + (json[hashMapCountries[c]]["edu"]*100).toFixed(2) + "%)<br>"
                p.innerHTML += "Alcohol Consumption: <b style='color: blue'>" + valueToString(json[hashMapCountries[c]]["alc"]*100) + "</b> (" + (json[hashMapCountries[c]]["alc"]*100).toFixed(2) + "%)<br>"
                if(checkHC && hc != c && c in eraMap) {
                    p.innerHTML += "Amount of outgoing students from " + hc + ": <b style='color: blue'>" + valueToString(outgoingStudentsFromHC[c]*100) + "</b> (" + outgoingStudentsFromHCReal[c] + ")"
                }
                document.getElementById("countryInfoModalLabel").innerHTML = modalT
                document.getElementById("countryInfoBody").innerHTML = p.innerHTML
                $('#countryInfoModal').modal()
                break;
            }
        }
        if (message == '') {
            message = 'nothing';
        }
    }

    google.visualization.events.addListener(chart, 'select', function(){
        myClickHandler()
    });
    chart.draw(data, options);
}
/**
 * Showing the ranking if a user clicks on the "Show Ranking" button
 */
function showRanking() {
    var tbody = document.getElementById("rankingTBody")
    tbody.innerHTML = ""
    temp = resArr
    temp = temp.slice(1)
    temp.sort(function(a,b) {
        return b[1]-a[1]
    })
    for(var i = 0; i < temp.length; i++) {
        var row =  document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var th = document.createElement("th")
        th.setAttribute('scope', 'row');
        th.appendChild(document.createTextNode(i+1))
        var code = countryISO[temp[i][0]]
        td1.innerHTML = '<img src="https://www.countryflags.io/' + code + '/flat/32.png"> ' + temp[i][0]
        td2.appendChild(document.createTextNode((temp[i][1]).toFixed(3) + "%"))
        row.appendChild(th)
        row.appendChild(td1)
        row.appendChild(td2)
        tbody.appendChild(row)
    }
    $('#rankingModal').modal()
}