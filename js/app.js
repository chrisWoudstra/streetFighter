
$(document).ready(function() {
    doIntro();
    playGame();
});

var ryuIntro = false; function ryuTheme () {
  ryuIntro = !ryuIntro; 
  if (ryuIntro) {
    $('#ryu-theme')[0].play();
  }
}

var mcHammer = false; 
function hammerTime () {
  mcHammer = !mcHammer;
  if (mcHammer) {
    $('#ryu-theme')[0].pause();
    $('#hammer-time')[0].play();
  }
}

 function playGame() { 
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
    $('.ryu-action').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
        {'left': '1020px'}, 500,
    	function() {
    	  $(this).hide();
    	  $(this).css('left', '520px');
    	}
      );
	})
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  });

  $(document).keydown(function(e) {
    if (e.which == 88) {
      hammerTime();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(e) {
    if (e.which == 88) {
      $('#hammer-time')[0].pause();
      $('#hammer-time')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }
  });
}

function doIntro() {
  $('#ryu-theme')[0].volume = 0.4;
  $('#ryu-theme')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.round').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.fight').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instructions').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
