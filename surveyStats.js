<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

function refreshValues(){
    let FGGL = sessionStorage.getItem("FAvSalaryGGL");
    let MGGL = sessionStorage.getItem("MAvSalaryGGL");

    let FAPPL = sessionStorage.getItem("FAvSalaryAPPL");
    let MAPPL = sessionStorage.getItem("MAvSalaryAPPL");

    let FOMC = sessionStorage.getItem("FAvSalaryOMC");
    let MOMC = sessionStorage.getItem("MAvSalaryOMC");

    let FBAC = sessionStorage.getItem("FAvSalaryBAC");
    let MBAC = sessionStorage.getItem("MAvSalaryBAC");

    let FCVS = sessionStorage.getItem("FAvSalaryCVS");
    let MCVS = sessionStorage.getItem("MAvSalaryCVS");

    let FUNH = sessionStorage.getItem("FAvSalaryUNH");
    let MUNH = sessionStorage.getItem("MAvSalaryUNH");

    console.log("Female google: " + FGGL);
    console.log("Male google: " + MGGL);
    console.log("Female apple: " + FAPPL);
    console.log("male apple: " + MAPPL);
    console.log("Female omnicom: " + FOMC);
    console.log("Male omnicom: " + MOMC);
    console.log("Female bank of america: " + FBAC);
    console.log("Male bank of america: " + MBAC);
    console.log("Female CVS: " + FCVS);
    console.log("Male CVS: " + MCVS);
    console.log("Female UnitedHealth group: " + FUNH);
    console.log("Male UnitedHealth group: " + MUNH);

    // Google
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', FGGL],
  ['Gender Minorities (Females & Non-Binary)', MGGL]
]);

var options = {
  title:'Google'
};

var chart = new google.visualization.BarChart(document.getElementById('Google'));
  chart.draw(data, options);
}


// Apple
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', MAPPL],
  ['Gender Minorities (Females & Non-Binary)', FAPPL]
]);

var options = {
  title:'Apple'
};

var chart = new google.visualization.BarChart(document.getElementById('Apple'));
  chart.draw(data, options);
}

// Omnicom Group

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', 85],
  ['Gender Minorities (Females & Non-Binary)', 23]
]);

var options = {
  title:'Omnicom Group'
};

var chart = new google.visualization.BarChart(document.getElementById('Omnicom'));
  chart.draw(data, options);
}

// BOA

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', 85],
  ['Gender Minorities (Females & Non-Binary)', 23]
]);

var options = {
  title:'Bank of America'
};

var chart = new google.visualization.BarChart(document.getElementById('BOA'));
  chart.draw(data, options);
}

// CVS
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', 85],
  ['Gender Minorities (Females & Non-Binary)', 23]
]);

var options = {
  title:'CVS Health Corp.'
};

var chart = new google.visualization.BarChart(document.getElementById('CVS'));
  chart.draw(data, options);
}

// United Health Group

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Gender'],
  ['Males', 34],
  ['Gender Minorities (Females & Non-Binary)', 23]
]);

var options = {
  title:'United Health Group Inc.'
};

var chart = new google.visualization.BarChart(document.getElementById('UHC'));
  chart.draw(data, options);
}
}

