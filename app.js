'use strict';

var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var numberImageDisplay = 3;
var picsLocation = document.getElementById('itempics');

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

function generateNonRepeatingArray() {
  var rando = Math.floor(allItems.length*Math.random());
  var compareArray = [];
  var safety = 0;
  for (var n=0; n<(numberImageDisplay); n++) {
    if (numberImageDisplay>=allItems.length){
      alert('Too many images to display for sample size');
      break;
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

function presentItems(){
  for (var i=0; i<(numberImageDisplay); i++) {
    console.log(imageArray[i]+ ' : ' +allItems[imageArray[i]].name);
    var newPic = document.createElement('img');
    newPic.src = allItems[imageArray[i]].path;
    document.body.insertBefore(newPic, picsLocation);
    allItems[imageArray[i]].timesShown++;
  }
}

presentItems();

