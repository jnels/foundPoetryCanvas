//Problem: No user interactivity
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var $userText="";


//Allow user to add text to canvas
$("#submit").click(function(){
  $userText = $("#inputText").val();
  $("#outputText").append($userText);
	//Hide form, show new button
	$("#form").hide();
	$("#addNew").css("display","block");
});

//Clear fields to allow new text. Also clear canvas.
$("#addNew").click(function(){
	$userText = "";
	$("#form").show();
	//Why isn't this clearing the text area???
	$("#inputText").val("");
	$("#outputText").empty();
	$("#addNew").css("display","none");
});

//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
	$(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected")
  color = $(this).css("background-color");
});

//When add color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//Update new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
//When slider colors change
$("input[type=range]").change(changeColor);
            
//When add color is pressed
$("#addNewColor").click(function(){
  //Add color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});
  
//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  

  //Draw lines
	
	
  if(mouseDown) {
    
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
	context.lineWidth = 10;
	context.lineCap = 'round';
  context.stroke();
  lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});








