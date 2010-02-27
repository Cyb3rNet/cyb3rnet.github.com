
(function($) {

	//////
	////// PSEUDOCLASS
	//////
	//
	CTileSet = function (this) {

		this.prototype._o = {
			__constructor: function (oJQ) {
			
				this._oJQ = oJQ;
			
				//this._sTileSetId = sContainerId;
				//this._iRows = iRows;
				//this._iCols = iCols;
				
				//this._GenerateTileSet();
				
				return this;
			},
			
			_GenerateTileSet: function () {
				
				//
			},
			
			AddImage: function (sImgSrc) {
			
				var oMLNodeImg = document.createElement('img');
				oMLNodeImg.src = sImgSrc;
			
				this._oJQ.context.append(oMLNodeImg);
			}};
			
		this._o.__constructor(oJQ);
	};

	//this._oTileSet = new CTileSet(this);

	//////
	////// PLUGIN DEFINITION
	//////
	//
	$.TileSet = CTileSet;
	
	////// RETURN THIS
	//
	return this;
	
})(jQuery)