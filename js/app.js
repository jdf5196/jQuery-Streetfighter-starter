$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1050px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','550px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }   
  })
	.keyup(function(e) {
    	if (e.keyCode == 88) {
      		$('.ryu-cool').hide();
      		$('.ryu-still').show();
    }
  });