(function(jQ) {

	jQ.fn.TileSet = function(asImgs) {

		for (var i = 0; i < asImgs.length; i++) {

			var oImg = document.createElement('img');
			oImg.src = asImgs[i];

			jQ(this).append(oImg);
		}
	
		return this;
	}
	
})(jQuery)