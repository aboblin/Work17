var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  /* YOUR IMPLEMENTATION */

  // Let (x0,y0) be the current pos
  return Math.sqrt(((x0 - x1)**2 + (y0 - y1)**2));

  //but wut if the distance is grater than 256 (therefore no bigger rgb value?)
  
};


var findIt = function(e) {
  var x = e.screenX;
  var y = e.screenY;
  console.log(targetX + " " + targetY);
  console.log(x + " " + y);

  //for some reason the top left corner is at (~10,~100) so subtract this from the coordinate position of the mouse
  var dist = Math.floor(distance(targetX, targetY, x-10, y-100));
  console.log(dist);

  document.getElementById("box").style.backgroundColor = 'rgb(' + [dist,dist,dist].join(',') + ')';
  //console.log('rgb(' + [dist,dist,dist].join(',') + ')');
}
/*
your OTHER FXNS
*/


box.addEventListener("mousemove", findIt);

