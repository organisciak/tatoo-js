// Front-End TAToo. Deals with the display and interactivity of 
// TAToo, interacting with the tatools text analysis code.
// Needs jQuery. To avoid conflicts, remove jQuery (with noConflict) and pass
// in limited scope.

var tatoo = (function($) {
	//Private Variables
	var s = {
		tw : "tatoo\\:widget", //Widget tag
	},
	settings = {
		comment: "<!-- This is TAToo JS 0.01 by Peter Organisciak. Email organisciak@gmail.com for details. -->",
		width: $(s.tw).attr("width") ? parseInt($(s.tw).attr("width")) : 200, //default 200
		height: $(s.tw).attr("height") ? parseInt($(s.tw).attr("height")) : 400, //default 600
		colours : {
		bg: "#555555",	header:"#777777", text: "#FFFFFF"
		},
		font: [	"Helvetica, Arial", "9pt" ],
	},
	//create css in string, to avoid overuse of .css() function
	style = 
	"background:"+settings.colours.bg
	+";font-family:"+settings.font[0]+", Arial" //falls back on Arial when bad input
	+";font-size:"+settings.font[1]
	+";color:"+settings.colours.text
	+";text-align:center";
	
	//Private Methods
	function logging(msg) {
		//do stuff here
		console.log(msg);
	}
	function header(title, contentDiv) {
		newh = 
			$("<div style='background:"+settings.colours.header+";margin-top:1px'>"+title+"</div>")
				.height(15)
				.width("100%")
				.click(function() {
						if ($("#"+contentDiv).is(":visible") == false) {
							$(".tatooC").slideUp()
							$("#"+contentDiv).slideDown()
						}
					})
		return newh
	}
	function content(id) {
		newc = 
			$("<div style='background:#666' class='tatooC' id='"+id+"'>Content 2</div>")
				.height(settings.height-2*(15+1))
				.width("100%")
				.hide()
		return newc
	}
	
	//Public Methods
	return {
		draw : function() {
			H1 = new header("Header 1", "div1");
			H2 = new header("Header 2", "div2");
			C1 = new content("div1");
			C2 = new content("div2");
			
			dom = $('<div style="'+style+'">')
					.width(settings.width)
					.height(settings.height)
					.append(H1)
					.append(C1)
					.append(H2)
					.append(C2)
		
			$(s.tw)
			.before(settings.comment)
			.before(dom) //Add widget code
			.after("<!-- End TAToo JS -->") 
			.remove(); //Remove the <tatoo:widget> from the DOM
		}
	};
})(jQuery);