$(function() {
  popcorn = Popcorn('#myAudio');
  $.get('http://api.bype.org/jnaje.json', function(data) {
    $.each(data, function(i, obj) {
      popcorn.cue(obj.position - .5, function() {
        $('#container').append('<div class="word">'+obj.word+'</div>');
        twttr.widgets.createTweet(
          obj.twitt,
          document.getElementById('container'), 
          { conversation: 'none' }
        );
        $('html,body').animate({
          scrollTop: $('#container').height()+200
        }, 2000, 'swing');
      });
    });
  });
  popcorn.cue(1,function(){
  	$("#caution").fadeOut(20000);
  });
});
