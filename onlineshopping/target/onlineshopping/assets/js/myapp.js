$(function() {

	switch (menu) {
	case 'About us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#Contact').addClass('active');
		break;
	case 'default':
		$('#home').addClass('active');
		break;
	}

});