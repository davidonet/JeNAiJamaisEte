$(function() {
  popcorn = Popcorn('#myAudio');
  $.get('http://api.bype.org/jnaje.json', function(data) {
    $.each(data, function(i, obj) {
      popcorn.cue(obj.position - .5, function() {
        $('#container').append('<div class="word">' + obj.word + '</div>');
        var n = Math.floor(Math.random() * (obj.twitt.length - 1));
        twttr.widgets.createTweet(
          obj.twitt[n],
          document.getElementById('container'), { conversation: 'none' }
        );
        $('html,body').animate({
          scrollTop: $('#container').height() + 200
        }, 2000, 'swing');
      });
    });
  });
  popcorn.cue(1, function() {
    $("#caution").fadeOut(20000);
  });
  popcorn.cue(250, function() {
    $('html,body').animate({
      scrollTop: $('#container').height() + 200
    }, 2000, 'swing', function() {
      $("#credits").fadeIn(5000);
    });
  });

  var startRefrain = function() {
    $("#vidcub")[0].play();
    $("#bis").fadeIn(5000)
  }

  var stopRefrain = function() {
    $("#bis").fadeOut(5000, function() {
      $("#vidcub")[0].pause();
    })
  }

  popcorn.cue(72, startRefrain);
  popcorn.cue(105, stopRefrain);
  popcorn.cue(150, startRefrain);
  popcorn.cue(160, stopRefrain);
  popcorn.cue(210, startRefrain);
  popcorn.cue(240, stopRefrain);

});
