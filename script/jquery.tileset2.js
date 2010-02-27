(function($) {

	// Arguments are image paths relative to the current page.
	$.fn.TileSet2 = function(asImgs) {

		for (var i = 0; i < asImgs.length; i++) {

			var oImg = document.createElement('img');
			oImg.src = asImgs[i];
			
			/*
			var oDiv = document.createElement('div');
			
			var sStyle = "";
			sStyle += "float:left;";
			sStyle += "clear:right;";
			sStyle += "width:192px;";
			sStyle += "height:108px;";
			sStyle += "background-image:url("+asImgs[i]+");";
			sStyle += "background-repeat:no-repeat;";
			
			oDiv.setAttribute("style", sStyle)
			
			$(this).append(oDiv);
			*/
			$(this).append(oImg);
		}
	}
})(jQuery)