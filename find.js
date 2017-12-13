var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = 200;
var targetY = 200;


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
  var x = e.clientX;
  var y = e.clientY;
  console.log(targetX + " " + targetY);
  console.log(x + " " + y);

  //for some reason the top left corner is at (~10,~100) so subtract this from the coordinate position of the mouse
  var dist = distance(targetX, targetY, x, y);
  console.log(dist);
	
  //scaled the distance to a number between 1 and 255 (grayscale)
  var colorPercent = 256 - Math.floor(255 * (dist / findMinDist()));

  box.style.backgroundColor = 'rgb(' + [colorPercent,colorPercent,colorPercent].join(',') + ')';
  //console.log('rgb(' + [colorPercent,colorPercent,colorPercent].join(',') + ')');
}

//this is just to find where the 
var findMinDist = function(){
	return Math.min(distance(0, 0, targetX, targetY), distance(0, boxHeight, targetX, targetY), distance(boxWidth, 0, targetX, targetY), distance(boxWidth, boxWidth, targetX, targetY));
};

box.addEventListener("mousemove", findIt);

