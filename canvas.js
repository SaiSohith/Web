let canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth - 60;
// canvas.height = window.innerHeight * 0.6;




let context = canvas.getContext("2d");

// context.fillStyle = "white";
// context.fillRect(0, 0, canvas.width, canvas.height);

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
// var canvas = document.getElementById('imageCanvas');
var ctx = context


function handleImage(e) {


  var reader = new FileReader();
  reader.onload = function(event) {
    onReaderLoad(event);
  }

  reader.readAsDataURL(e.target.files[0]);
}

var onReaderLoad = function(event) {
  var image = new Image();
	
  image.onload = function() {
    onImageLoad(image);
  }

  image.src = event.target.result;
}

var onImageLoad = function(img) {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
}
































let restore_array = [];
let start_index = -1;
let stroke_color = 'black';
let stroke_width = "2";
let is_drawing = false;

function change_color(element) {
  stroke_color = element.style.background;
}

function change_width(element) {
  stroke_width = element.innerHTML
}

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(getX(event), getY(event));
    console.log(getX(event));
    let x=[]
    x.push(getX(event))//array appending 
    let y=[]
    y.push(getY(event))//array appending
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
  restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  start_index += 1;
}

function getX(event) {
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function Restore() {
  if (start_index <= 0) {
    Clear()
  } else {
    start_index += -1;
    restore_array.pop();
    if ( event.type != 'mouseout' ) {
      context.putImageData(restore_array[start_index], 0, 0);
    }
  }
}

function Clear() {
    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    restore_array = [];
    start_index = -1;
}



function Save(a) {
    // var img = canvas.toDataURL('image/png');
    // a.href = img;
  
//   var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
//   var download = function(){
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
  

//   window.location.href=image; 
}




// Hey you can save it with this function:
// function Save(a) {
//   var img = canvas.toDataURL('image/png');
//   a.href = img;
// }
// Just bind the function to a button with the attribute onClick=„Save(this)“

// For getting the touch function, you can call the functions with javascript, not with the attribute „onClick“, for example:
// $("input.button").on("click touchend", function () {
//    call_your_function_here();
// });