'use strict';

var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var numberImageDisplay = 3;
var leftImage = document.getElementById('leftimage');
var midImage = document.getElementById('midimage');
var rightImage = document.getElementById('rightimage');
var counterList = document.getElementById('counterlist');
var iterations = 0;
var MAX_ITERATIONS = 26;


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

//Generate data arrays
var itemNames = [];
var itemTimesSelected = [];
var itemTimesShown = [];
var chartColors = [];
for (var i=0; i<allItems.length; i++) {
  itemNames.push(allItems[i].name);
  itemTimesSelected.push(allItems[i].timesSelected);
  itemTimesShown.push(allItems[i]).timesShown;
  chartColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)} `);
}

function generateNonRepeatingArray() {
  var rando = Math.floor(allItems.length*Math.random());
  var compareArray = [];
  var feederArray = [];

  for (var n=0; n<allItems.length; n++) {
    feederArray.push(n);
  }
  for (var i=0; i<numberImageDisplay; i++){
    compareArray.push(feederArray[rando]);
    feederArray.splice(rando,1);
    rando = Math.floor(feederArray.length*Math.random());
  }
  return compareArray;
}

//Create table function to display click counts -- call later
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

var imageArray = generateNonRepeatingArray(); //Defines imageArray outside of a function to be referenced in multiple functions

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
renderImages();

function killListeners(){
  leftImage.removeEventListener('click', processClick);
  midImage.removeEventListener('click', processClick);
  rightImage.removeEventListener('click', processClick);
}


function processClick(event) {
  for (var i=0; i<allItems.length; i++){
    if (allItems[i].name === event.target.title) {
      console.log(event.target.title);
      allItems[i].timesSelected++;
    }
  }
  imageArray = generateNonRepeatingArray();
  renderImages();
  iterations++;
  console.log(iterations);

  if (iterations === MAX_ITERATIONS) {
    killListeners();
    //drawBarChart(); -- Edited out for now while I try to get the local storage bits working
    renderResults();
  }
}

//Configure chart data
// var data = {
//   labels: itemNames,
//   datasets: [{
//     data: itemTimesSelected,
//     backgroundColor: chartColors,
//   }]
// };

// // Set up the actual chart
// function drawBarChart() {
//   var ctx = document.getElementById('barchart').msGetInputContext('2d');
//   var chartSelected = new Chart(ctx, {
//     type: 'bar',
//     data:data,
//     options: {
//       responsive: false,
//       animation: {
//         duration: 1500,
//         easing: 'easeOutBounce'
//       }
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           max: 25,
//           min: 0,
//           stepSize: 1.0
//         }
//       }]
//     }
//   });
//   chartDrawn = true;
// }

leftImage.addEventListener('click', processClick);

midImage.addEventListener('click', processClick);

rightImage.addEventListener('click', processClick);