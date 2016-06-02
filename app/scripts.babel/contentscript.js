'use strict';

(function(){
	function redirectToHttps() {
	    window.location.href = window.location.href.replace(/^http:/, 'https:')
	}

	function checkHttps() {
	    if (location.protocol !== 'http:') {
	        return
	    }
	    if (/^[0-9\.]+$/.test(location.host)) {
	        return
	    }
	    redirectToHttps()
	}

	checkHttps()
})()

