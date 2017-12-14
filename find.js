
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(boxWidth * Math.random());
var targetY = Math.floor(boxHeight * Math.random());


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
  var x = e.pageX;
  var y = e.pageY;
  var dist = distance(targetX,targetY,x,y);
  console.log("target: " + targetX + " " + targetY);
  console.log("mouse: " + x + " " + y);
  console.log("distance from mouse to targert: "+ dist);
  var maxDistFromBoxCorners = Math.max(distance(0,0,x,y), distance(boxWidth,0,x,y), distance(0,boxHeight,x,y), distance(boxWidth,boxHeight,x,y));
  console.log("max distance from corners: "+ maxDistFromBoxCorners);
  console.log("ratio: " + dist/maxDistFromBoxCorners);
  
  dist = dist / maxDistFromBoxCorners;
  //scaled the distance to a number between 1 and 255 (grayscale)
  var colorPercent = Math.floor(255 * dist);
  /*
  dist = distance(targetX,targetY,x,y) / distance(boxHeight,boxWidth,targetX,targetY) is to get the ratio of how close you are to the designated target
    If this ratio = 1, it is at the target.
  Then you multiply this ratio by 255 to get the % of the color / the shade of the color.
  */
  console.log(colorPercent);
  if (colorPercent <= 10){
    document.getElementById("box").style.backgroundColor = "cyan";
  }
  else{
    document.getElementById("box").style.backgroundColor = 'rgb(' + [colorPercent,colorPercent,colorPercent].join(',') + ')';
  }
  //console.log('rgb(' + [colorPercent,colorPercent,colorPercent].join(',') + ')');
}

box.addEventListener("mousemove", findIt);
