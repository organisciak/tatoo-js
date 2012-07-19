/*
	Main JS script. Injects JQuery into the page, if not already loaded,
	and then loads TAToo.
*/

//jQuery Load code by Rob Hudson
(function(window, document, version, callback) {
    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
    	var script = document.createElement("script");
	   var head = document.getElementsByTagName('head')[0];
	   script.src = "../src/lib/jquery.js";
		script.onload = script.onreadystatechange = function() {
			if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
				// No Conflict remove jQuery from global scope
				callback((j = window.jQuery).noConflict(0), loaded = true, head = head);
				j(script).remove();
			}
	   }
	   head.appendChild(script);
	}
})(window, document, "1.5.1", function($, jquery_loaded, head) {
	   var script = document.createElement("script");
	   script.src = "../src/tatoo.js";
	   script.onload = script.onreadystatechange = function() {
	   		tatoo.draw();
	   }
	   head.appendChild(script);
});