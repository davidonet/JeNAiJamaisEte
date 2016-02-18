$(function() {
    popcorn = Popcorn('#myAudio');
    $.get('data/jnaje.json', function(data) {
        $.each(data, function(i, obj) {
        	popcorn.cue(obj.position-.5,function(){
        		$('#text').text(obj.word);
        	});
        });
    });
});
