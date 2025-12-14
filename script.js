// CREDIT:
// https://codepen.io/brittrademaker/pen/gJXXJo

$(document).ready(function() {
var width = 700;
var height = 700;
var center = {
  x: width / 2,
  y: height / 2
};
var radius = width / 2;
var radius2 = radius - 300;
var count = 44;
var angle = 0;
var slice = Math.PI * 2 / count;
var point = {
  x: 0,
  x2: 0,
  y: 0,
  y2: 0
};
var i;
var svg = d3.selectAll('.epi-banner-radial').append('svg').attr('width', width).attr('height', height).append('g');
for ( i = 0; i < count; i += 1 ) {
  angle = i * slice;
  point.x = center.x + Math.cos(angle) * radius;
  point.x2 = center.x + Math.cos(angle) * radius2;
  point.y = center.y + Math.sin(angle) * radius;
  point.y2 = center.y + Math.sin(angle) * radius2;
  
  svg
    .append('line')
    .attr('x1', point.x)
    .attr('x2', point.x2)
    .attr('y1', point.y)
    .attr('y2', point.y2);
}
});








// jQuery Modal Popups by Black
// http://code.jfbs.net/?showtopic=57

$(document).ready(function() {
	var fadeBackground = $(document.createElement("div")).hide().attr("id", "fade-background"),
	modalWindow = $(document.createElement("div")).hide().attr("id", "modal-window");
	$(document.body).append(fadeBackground, modalWindow);
	$(document).on("click", ".modal-link", function(e) {
		$("#fade-background").css({ "opacity": "1" }).fadeIn("fast");
                var newContents = $("#" + $(this).data("modal-target")).html();
                $("#modal-window").html(newContents);
		$("#modal-window").fadeIn("fast");
		e.preventDefault();
	});
	$(document).on("click", "#fade-background", function() {
		$("#fade-background").fadeOut("fast");
		$("#modal-window").fadeOut("fast");
	});
	$(document).keypress(function(e) {
		if(e.keyCode == 27) {
			$("#fade-background").fadeOut("fast");
			$("#modal-window").fadeOut("fast");
		}
	});
});









$(".epi-post-name").html(function(){
  var text= $(this).html().trim().split(" ");
  var last = text.pop();
  return text.join(" ") + (text.length > 0 ? " <div class='epi-post-name-1'>" + last + "</div>" : last);
});

$(".epi-post-name").html(function(){
  var text= $(this).html().trim().split(" ");
  var first = text.shift();
  return (text.length > 0 ? "<div class='epi-post-name-1'>"+ first + "</div> " : first) + text.join(" ");
});

fitty('#my-element div', { minSize: 20,  maxSize: 300, multiLine: true });





$(".mini, .closetabs") .on("click", function() {  
    $(this).parents("#mini-out").children(".tab").removeClass('show');
    $(this).parents("#mini-out").children(".mini1").removeClass("hide");
    $(this).parents("#mini-out").children(".mini3").removeClass("hide");
    $(this).parents("#mini-out").children(".closetabs").addClass("hide");
    $(this).parents("#mini-out").children(".mini2").addClass("hide");
    $(this).parents("#mini-out").children(".mini1").addClass("right");
    $(this).parents("#mini-out").children(".mini1").removeClass("left");
    $(this).parents("#mini-out").children(".mini3").addClass("left");
    $(this).parents("#mini-out").children(".mini3").removeClass("right");
});

$(".mini1").on("click", function() {
    $(this).parents("#mini-out").children(".tab0").addClass('show');
    $(this).parents("#mini-out").children(".tab10").addClass('show');
    $(this).parents("#mini-out").children(".tab1").addClass('show');
    $(this).parents("#mini-out").children(".closetabs").removeClass("hide");
    $(this).parents("#mini-out").children(".mini2").removeClass("hide");
    $(this).parents("#mini-out").children(".mini1").addClass("hide");
    $(this).parents("#mini-out").children(".mini3").addClass("hide");
    $(this).parents("#mini-out").children(".mini2").addClass("right");
    $(this).parents("#mini-out").children(".mini2").removeClass("left");
    $(this).parents("#mini-out").children(".closetabs").addClass("left");
    $(this).parents("#mini-out").children(".closetabs").removeClass("right");
 });

$(".mini2").on("click", function() {
    $(this).parents("#mini-out").children(".tab0").addClass('show');
    $(this).parents("#mini-out").children(".tab10").addClass('show');
    $(this).parents("#mini-out").children(".tab2").addClass('show');
    $(this).parents("#mini-out").children(".mini1").removeClass("hide");
    $(this).parents("#mini-out").children(".mini3").removeClass("hide");
    $(this).parents("#mini-out").children(".closetabs").addClass("hide");
    $(this).parents("#mini-out").children(".mini2").addClass("hide");
    $(this).parents("#mini-out").children(".mini1").addClass("left");
    $(this).parents("#mini-out").children(".mini1").removeClass("right");
    $(this).parents("#mini-out").children(".mini3").addClass("right");
    $(this).parents("#mini-out").children(".mini3").removeClass("left");
 });

$(".mini3").on("click", function() {
    $(this).parents("#mini-out").children(".tab0").addClass('show');
    $(this).parents("#mini-out").children(".tab10").addClass('show');
    $(this).parents("#mini-out").children(".tab3").addClass('show');
    $(this).parents("#mini-out").children(".closetabs").removeClass("hide");
    $(this).parents("#mini-out").children(".mini2").removeClass("hide");
    $(this).parents("#mini-out").children(".mini1").addClass("hide");
    $(this).parents("#mini-out").children(".mini3").addClass("hide");
    $(this).parents("#mini-out").children(".mini2").addClass("left");
    $(this).parents("#mini-out").children(".mini2").removeClass("right");
    $(this).parents("#mini-out").children(".closetabs").addClass("right");
    $(this).parents("#mini-out").children(".closetabs").removeClass("left");
 });