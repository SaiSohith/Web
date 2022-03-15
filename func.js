// // console.log("hello");
// // function upload(){
// // var file = document.getElementById("fileupload").files[0];
// // if (file) {
// //     var reader = new FileReader();
// //     reader.readAsText(file, "UTF-8");
// //     reader.onload = function (evt) {
// //         document.getElementById("uploaded").innerHTML = evt.target.result;
// //     console.log(1);
// //     }
// //     reader.onerror = function (evt) {





// //         document.getElementById("uploaded").innerHTML = "error reading file";
// //     console.log(2);
// //     }
// // }
// // console.log(typeof file)
// // }
// var imageLoader = document.getElementById('imageLoader');
// // imageLoader.addEventListener('change', handleImage, false);
// imageLoader.addEventListener("change",handleImage,false);
// var canvas = document.getElementById('imageCanvas');
// var ctx = canvas.getContext('2d');

// function handleImage(e) {
//  var reader = new FileReader();
//  reader.onload = function(event) {
//   onReaderLoad(event);
//  }
// reader.readAsDataURL(e.target.files[0]);
// }
// var onReaderLoad = function(event) {
// var image = new Image();

// image.onload = function() {
//  onImageLoad(image);
// }

//  image.src = event.target.result;
// }

// var onImageLoad = function(img) {
//   canvas.width = img.width;
//   canvas.height = img.height;
//   ctx.drawImage(img, 0, 0);
// }
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


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



// const c = document.getElementById("imageCanvas");
// // c.addEventListener("click", penTool); // fires after mouse left btn is released
// c.addEventListener("mousedown", setLastCoords); // fires before mouse left btn is released
// c.addEventListener("mousemove", freeForm);


// const ctx = c.getContext("2d");

// function setLastCoords(e) {
//     const {x, y} = c.getBoundingClientRect();
//     lastX = e.clientX - x;
//     lastY = e.clientY - y;
// }

// function freeForm(e) {
//     if (e.buttons !== 1) return; // left button is not pushed yet
//     penTool(e);
// }

// function penTool(e) {
//     const {x, y} = c.getBoundingClientRect();
//     const newX = e.clientX - x;
//     const newY = e.clientY - y;

//     ctx.beginPath();
//     ctx.lineWidth = 5;
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(newX, newY);
//     ctx.strokeStyle = 'white';
//     ctx.stroke();
//     ctx.closePath();

//     lastX = newX;
//     lastY = newY;
// }

// let lastX = 0;
// let lastY = 0;  