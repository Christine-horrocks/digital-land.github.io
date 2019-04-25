if(!window.location.hostname.includes('digital-land.github.io') && !window.location.hostname.includes('localhost')) {
	document.querySelectorAll("[href^='/']").forEach(function(element) {
		element.setAttribute('href', 'https://' + window.location.hostname + '/digital-land.github.io/' + element.getAttribute('href'));
	});
}
