
var sGH_ACCOUNT = "Cyb3rNet";


function loadTileSet()
{
	var asImgSrcs = new Array();

	asImgSrcs.push("images/bbg1/Untitled-0-0.jpg");
	asImgSrcs.push("images/bbg1/Untitled-1-0.jpg");
	asImgSrcs.push("images/bbg1/Untitled-2-0.jpg");
	asImgSrcs.push("images/bbg1/Untitled-3-0.jpg");

	asImgSrcs.push("images/bbg1/Untitled-0-1.jpg");
	asImgSrcs.push("images/bbg1/Untitled-1-1.jpg");
	asImgSrcs.push("images/bbg1/Untitled-2-1.jpg");
	asImgSrcs.push("images/bbg1/Untitled-3-1.jpg");

	asImgSrcs.push("images/bbg1/Untitled-0-2.jpg");
	asImgSrcs.push("images/bbg1/Untitled-1-2.jpg");
	asImgSrcs.push("images/bbg1/Untitled-2-2.jpg");
	asImgSrcs.push("images/bbg1/Untitled-3-2.jpg");

	asImgSrcs.push("images/bbg1/Untitled-0-3.jpg");
	asImgSrcs.push("images/bbg1/Untitled-1-3.jpg");
	asImgSrcs.push("images/bbg1/Untitled-2-3.jpg");
	asImgSrcs.push("images/bbg1/Untitled-3-3.jpg");
	
	jQuery('#bbg1').TileSet(asImgSrcs);
}


var sReposDisplayId = '#gh-public-repos-display';


function _showRepos()
{
	jQuery(sReposDisplayId).fadeIn('slow', function () {

	});
}


function _loadRepos()
{
	jQuery(sReposDisplayId).github({ user: sGH_ACCOUNT, tpl: '<li><p><a href="%url%">%name%</a> %description%</p><div></div></li>', cb: "_showRepos()" });

}


function _positionLogo()
{
	iVPHeight = window.innerHeight;
	
	//jQuery("#logo-front").css("top", (iVPHeight - 80));
	//jQuery("#logo-front").css("left", 100);
}


jQuery(document).ready(function(){
	
	//// TILE SET
	//
	loadTileSet();

	
	//// GITHUB ACTIVITY
	//	
	//_setTimer("_loadRepos()");
	_loadRepos()
	
	_positionLogo();
});
	