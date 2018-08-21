'use strict';

var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var numberImageDisplay = 3;
var picsUlEl = document.getElementById('itempics');

//Create constructor function for SKUs named "Item"
function Item(name) {
  this.name = name;
  this.timesShown = 0;
  this.path = `img/${name}.jpg`;
  allItems.push(this);
}

// Here is where the new function for allItemTitles will eventually go

//Fill Item constructor function
allItemTitles.forEach(function(itemName) {
  new Item(itemName);
});

function presentItems() {
  var rando = Math.floor(allItems.length*Math.random());
  var compareArray = [];
  var safety = 0;
  for (var i = 0; i<(numberImageDisplay-1); i++) {
    if (i === 0) {
      var imageEl = document.createElement('img');
      compareArray.push(allItems[rando]);
      imageEl.src = allItems[rando].path;
      picsUlEl.appendChild(imageEl);
      rando = Math.floor(allItems.length*Math.random());
    } else {
      for (var n = 0; n<(numberImageDisplay-1); n++){
        if (allItems[rando] === compareArray[n] && safety <100) {
          n--;
          safety++;
          rando = Math.floor(allItems.length*Math.random());
        } else {
          imageEl.src = allItems[rando].path;
          picsUlEl.appendChild(imageEl);
          compareArray.push(allItems[rando]);
          rando = Math.floor(allItems.length*Math.random());
        }
      }
    }
  }
}

presentItems();

// picsUlEl.addEventListener('click', function(event) {
//   presentItems(event);
// });