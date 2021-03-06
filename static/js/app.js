// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Use Arrow function to append data to the table
data.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.values(ufo).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Set filteredData to select filter button 
var filteredData = d3.select("#filter-btn");

filteredData.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  var filteredData = tableData.filter(row => row.datetime === inputValue);

  console.log(filteredData);
});
