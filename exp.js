
// var imageArray = generateNonRepeatingArray(); //Defines imageArray outside of a function to be referenced in multiple functions

// function presentItems(event){
//   for (var i=0; i<(numberImageDisplay); i++) {
//     var newPic = document.createElement('img');
//     newPic.src = allItems[imageArray[i]].path;
//     document.body.insertBefore(newPic, picsLocation);
//     allItems[imageArray[i]].timesShown++;
//   }
// }

// presentItems();

// function vanishImages(){
//   document.body.
// }

// function onClick(event) {

// }

// picsLocation.addEventListener('click',function(event){
//   console.log(event.target);
//   presentItems(event);
// });

// function generateNonRepeatingArray() {
//   var rando = Math.floor(allItems.length*Math.random());
//   var compareArray = [];
//   var safety = 0;
//   for (var n=0; n<(numberImageDisplay); n++) {
//     if (numberImageDisplay>=allItems.length/3){
//       alert('Too many images to display for sample size');
//       numberImageDisplay = 3;
//     }else if (n===0){
//       compareArray.push(rando);
//       rando = Math.floor(allItems.length*Math.random());
//     } else {
//       for (var i=0; i<numberImageDisplay; i++) {
//         if (compareArray[i] === rando);
//         rando = Math.floor(allItems.length*Math.random());
//       }
//     }
//   }
//   return compareArray;
// }

// allItems[imageArray[1]].timesSelected++;
//     iterations++;
//     imageArray = generateNonRepeatingArray();
//     renderImages(event);

//   } else {
//     leftImage.removeEventListener('click', function(event){
//       allItems[imageArray[0]].timesSelected++;
//       iterations++;
//       imageArray = generateNonRepeatingArray();
//       renderImages(event);
//     });
//     midImage.removeEventListener('click', function(event){
//       allItems[imageArray[1]].timesSelected++;
//       iterations++;
//       imageArray = generateNonRepeatingArray();
//       renderImages(event);
//     });
//     rightImage.removeEventListener('click', function(event){
//       allItems[imageArray[1]].timesSelected++;
//       iterations++;
//       imageArray = generateNonRepeatingArray();
//       renderImages(event);
//     });
//   }
// function createItemTable (){
//   var headerArray = ['Item','# Times Presented','# Times Selected','Selection Rate','% of Selections'];
//   var tableRowElement = document.createElement('tr');
//   for (var i=0; i<headerArray.length; i++) {
//     var tableHeaderElement = document.createElement('th');
//     tableHeaderElement.textConent = headerArray[i];
//     tableRowElement.appendChild(tableHeaderElement);
//   }
//   counterTable.appendChild(tableRowElement);
//   for (i=0; i<allItems; i++){
//     allItems[i].fillTable();
//   }
// }

// createItemTable();

// var headerArray = ['Item','# Times Presented','# Times Selected','Selection Rate','% of Selections'];
// var tableRowElement = document.createElement('tr');
// var tableHeaderElement = document.createElement('th');
// for (var i=0; i<headerArray.length; i++) {
//   tableHeaderElement.textConent = headerArray[i];
//   tableRowElement.appendChild(tableHeaderElement);
// }
// counterTable.appendChild(tableRowElement);
// for (i=0; i<allItems; i++){
//   allItems[i].fillTable();
// }