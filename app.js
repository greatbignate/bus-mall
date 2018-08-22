'use strict';

var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var numberImageDisplay = 3;
var leftImage = document.getElementById('leftimage');
var midImage = document.getElementById('midimage');
var rightImage = document.getElementById('rightimage');
var counterTable = document.getElementById('countertable');
var iterations = 0;
let maxIterations = 25;


//Create constructor function for SKUs named "Item"
function Item(name) {
  this.name = name;
  this.timesShown = 0;
  this.timesSelected = 0;
  this.path = `img/${name}.jpg`;
  allItems.push(this);
}

// Here is where the new function for allItemTitles will eventually go

//Fill Item constructor function
allItemTitles.forEach(function(itemName) {
  new Item(itemName);
});

//Create table function to display click counts -- call later
Item.prototype.fillTable = function (){
  var tableRowElement = document.createElement('tr');
  var tableCellElement = document.createElement('td');
  tableCellElement.textContent = this.name;
  tableRowElement.appendChild(tableCellElement);
  tableCellElement.textContent = this.timesShown;
  tableRowElement.appendChild(tableCellElement);
  tableCellElement.textContent = this.timesSelected;
  tableRowElement.appendChild(tableCellElement);
  tableCellElement.textContent = (this.timesSelected)/(this.timesShown);
  tableRowElement.appendChild(tableCellElement);
  tableCellElement.textContent = (this.timesSelected)/iterations;
  tableRowElement.appendChild(tableCellElement);
  counterTable.appendChild(tableRowElement);
};

function generateNonRepeatingArray() {
  var rando = Math.floor(allItems.length*Math.random());
  var compareArray = [];
  var safety = 0;
  for (var n=0; n<(numberImageDisplay); n++) {
    if (numberImageDisplay>=allItems.length/3){
      alert('Too many images to display for sample size');
      numberImageDisplay = 3;
    }else if (n===0){
      compareArray.push(rando);
      rando = Math.floor(allItems.length*Math.random());
    } else if (compareArray[(n-1)] === rando && safety<100) {
      n--;
      safety++;
      rando = Math.floor(allItems.length*Math.random());
    } else {
      compareArray.push(rando);
      safety++;
      rando = Math.floor(allItems.length*Math.random());
    }
  }
  return compareArray;
}

var imageArray = generateNonRepeatingArray(); //Defines imageArray outside of a function to be referenced in multiple functions

function renderImages(event) {
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

if (iterations<maxIterations) {
  leftImage.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(iterations);
    allItems[imageArray[0]].timesSelected++;
    iterations++;
    imageArray = generateNonRepeatingArray();
    renderImages(event);
  });

  midImage.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(iterations);
    allItems[imageArray[1]].timesSelected++;
    iterations++;
    imageArray = generateNonRepeatingArray();
    renderImages(event);
  });

  rightImage.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(iterations);
    allItems[imageArray[1]].timesSelected++;
    iterations++;
    imageArray = generateNonRepeatingArray();
    renderImages(event);
  });
} else {
  var headerArray = ['Item','# Times Presented','# Times Selected','Selection Rate','% of Selections'];
  var tableRowElement = document.createElement('tr');
  var tableHeaderElement = document.createElement('th');
  for (var i=0; i<headerArray.length; i++) {
    tableHeaderElement.textConent = headerArray[i];
    tableRowElement.appendChild(tableHeaderElement);
  }
  counterTable.appendChild(tableRowElement);
  for (var i=0; i<allItems; i++){
    allItems[i].fillTable();
  }
}