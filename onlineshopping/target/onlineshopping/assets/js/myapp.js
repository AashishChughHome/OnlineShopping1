$(function() {
	switch (menu) {
	case 'About us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#Contact').addClass('active');
		break;
	/*
	 * case 'List Product': $('#viewProduct').addClass('active');
	 */
	case 'default':
		$('#home').addClass('active');
	}
});