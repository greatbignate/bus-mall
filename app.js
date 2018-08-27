'use strict';

// Declare global variables
var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var numberImageDisplay = 3;
var leftImage = document.getElementById('leftimage');
var midImage = document.getElementById('midimage');
var rightImage = document.getElementById('rightimage');
var counterList = document.getElementById('counterlist');
var iterations = 0;
var MAX_ITERATIONS = 26;
var TOTAL_CLICKS = 'totalclicks';
var STORE_ALL_ITEMS = [];
var imageArray = generateNonRepeatingArray();
// Checking to see if git merge worked

//Create constructor function for SKUs named "Item"
function Item(name) {
  this.name = name;
  this.timesShown = 0;
  this.timesSelected = 0;
  this.path = `img/${name}.jpg`;
  allItems.push(this);
}

//Fill Item constructor function
allItemTitles.forEach(function(itemName) {
  new Item(itemName);
});

//Establish local storage data
if (localStorage.getItem(TOTAL_CLICKS) === null) {
  localStorage.setItem(TOTAL_CLICKS, iterations);
  localStorage.setItem(STORE_ALL_ITEMS, JSON.stringify(allItems));

} else {
  iterations = parseInt(localStorage.getItem(TOTAL_CLICKS));
  allItems = JSON.parse(localStorage.getItem(STORE_ALL_ITEMS));
}

//Generate data arrays for chart - these are more global variables
var itemNames = [];
var itemTimesSelected = [];
var itemTimesShown = [];
var chartColors = [];
// Populate above empy global arrays for use in chart
function updateChartData(){
  for (var i=0; i<allItems.length; i++) {
    itemNames.push(allItems[i].name);
    itemTimesSelected.push(allItems[i].timesSelected);
    itemTimesShown.push(allItems[i]).timesShown;
    chartColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)} `);
  }
}
// find largest itemsTimesSelected to scale chart
function chartScale(){
  var scale = 0;
  for (var i=0; i<allItems.length; i++) {
    if (scale <= allItems.timesSelected){
      scale = allItems.timesSelected;
    }
  }
  return scale;
}

//Function to generate an array that does not repeat itself - given the way it's called later it will not repeat its previous calling either.
function generateNonRepeatingArray() {
  var rando = Math.floor(allItems.length*Math.random());
  var feederArray = [];
  for (var n=0; n<allItems.length; n++) {
    feederArray.push(n);
  }
  if (iterations === 0 || imageArray === null) {
    var compareArray = [];
    for (var i=0; i<numberImageDisplay; i++){
      compareArray.push(feederArray[rando]);
      feederArray.splice(rando,1);
      rando = Math.floor(feederArray.length*Math.random());
    }
  } else {
    compareArray = imageArray;
    for (i=0; i<compareArray.length; i++) {
      feederArray.splice(compareArray[i],1);
      rando = Math.floor(feederArray.length*Math.random());
    }
    for (i=0; i<numberImageDisplay; i++){
      compareArray[i] = feederArray[rando];
      feederArray.splice(rando,1);
      rando = Math.floor(feederArray.length*Math.random());
    }
  }
  return compareArray;
}
imageArray = generateNonRepeatingArray(); //Defines imageArray outside of a function to be referenced in multiple functions

//Create function to display click counts in a list
Item.prototype.tabulateResults = function (){
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  liEl.textContent = `${this.name} was presented ${this.timesShown} times and selected ${this.timesSelected} times.`;
  ulEl.appendChild(liEl);
  counterList.appendChild(ulEl);
};

//Create function to render tabulated results
function renderResults(){
  for (var i=0; i<allItems.length; i++){
    allItems[i].tabulateResults();
  }
}

// Render three random images into specified HTML list items
function renderImages() {
  leftImage.src = allItems[imageArray[0]].path;
  leftImage.title = allItems[imageArray[0]].name;
  allItems[imageArray[0]].timesShown++;

  midImage.src = allItems[imageArray[1]].path;
  midImage.title = allItems[imageArray[1]].name;
  allItems[imageArray[1]].timesShown++;

  rightImage.src = allItems[imageArray[2]].path;
  rightImage.title = allItems[imageArray[2]].name;
  allItems[imageArray[2]].timesShown++;
}
//renderImages(); -- Line edited out to eliminate repetition error, keep for potential later use


// Function to turn off selection of items on click
function killListeners(){
  leftImage.removeEventListener('click', processClick);
  midImage.removeEventListener('click', processClick);
  rightImage.removeEventListener('click', processClick);
}

// Function to actuate data gathering
function processClick(event) {
  for (var i=0; i<allItems.length; i++){
    if (allItems[i].name === event.target.title) {
      allItems[i].timesSelected++;
    }
  }
  imageArray = generateNonRepeatingArray();
  renderImages();
  iterations++;
  localStorage.setItem(TOTAL_CLICKS, iterations);
  localStorage.setItem(STORE_ALL_ITEMS, JSON.stringify(allItems));

  if (iterations >= MAX_ITERATIONS) {
    killListeners();
    updateChartData();
    drawBarChart();
    renderResults();
  }
}

//Configure chart data
var data = {
  labels: itemNames,
  datasets: [{
    label: 'Vote Total',
    data: itemTimesSelected,
    backgroundColor: chartColors,
  }]
};

// Set up the actual chart
function drawBarChart() {
  var ctx = document.getElementById('barchart').getContext('2d');
  //eslint-disable-next-line
  var chartSelected = new Chart(ctx, {
    type: 'horizontalBar',
    data:data,
    options: {
      responsive: false,
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: chartScale(),
          min: 0,
          stepSize: 1.0,
        }
      }]
    }
  });
}

// Make the action happen!
leftImage.addEventListener('click', processClick);
midImage.addEventListener('click', processClick);
rightImage.addEventListener('click', processClick);