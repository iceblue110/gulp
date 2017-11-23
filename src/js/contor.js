console.log('this is contor.js');

$('div').on('click', 'img', function(event) {
	event.preventDefault();
	/* Act on the event */
	alert($(this).attr('alt'));
	console.log($(this).attr('alt'));
});
