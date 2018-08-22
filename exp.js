
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
    } else {
      for (var i=0; i<numberImageDisplay; i++) {
        if (compareArray[i] === rando);
        rando = Math.floor(allItems.length*Math.random());
      }
    }
  }
  return compareArray;
}