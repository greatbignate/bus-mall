'use strict';

var allItems = [];
var allItemTitles = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','tauntaun','unicorn','usb','water-can','wine-glass'];
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
  for (var n=0; n<(numberImageDisplay); n++) {
    if (n===0){
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
  for (var i=0; i<(numberImageDisplay); i++) {
    console.log(compareArray[i]+ ' : ' +allItems[compareArray[i]].name);
    if (i === 0) {
      var imageEl = document.createElement('img');
      imageEl.src = allItems[compareArray[i]].path;
      picsUlEl.appendChild(imageEl);
    } else {
      imageEl = document.createElement('img');
      imageEl.src = allItems[compareArray[i]].path;
      picsUlEl.appendChild(imageEl);
    }
  }
  // for (var i = 0; i<(numberImageDisplay-1); i++) {
  //   if (i === 0) {
  //     var imageEl = document.createElement('img');
  //     compareArray.push(allItems[rando]);
  //     imageEl.src = allItems[rando].path;
  //     picsUlEl.appendChild(imageEl);
  //     rando = Math.floor(allItems.length*Math.random());
  //   } else {
  //     for (var n = 0; n<(numberImageDisplay-1); n++){
  //       if (allItems[rando] === compareArray[n] && safety <100) {
  //         n--;
  //         safety++;
  //         rando = Math.floor(allItems.length*Math.random());
  //       } else {
  //         imageEl.src = allItems[rando].path;
  //         picsUlEl.appendChild(imageEl);
  //         compareArray.push(allItems[rando]);
  //         rando = Math.floor(allItems.length*Math.random());
  //       }
  //     }
  //   }
  // }
}

presentItems();

// picsUlEl.addEventListener('click', function(event) {
//   presentItems(event);
// });