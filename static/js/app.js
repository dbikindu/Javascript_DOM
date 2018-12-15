// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Use Arrow function to append data to the table
data.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Set filteredData to dataSet initially
var filteredData = {};

