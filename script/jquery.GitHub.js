/*
**
**
**
**
*/

/*
** Use this object for API call
*/
var oOptions = {
	api: ['commits'|'repo'|'repos'],
	user: 'string',
	returned: ['template'!'json'],
	repo: 'string'
};


(function(jQ) {

	jQ.fn.GitHub2 = function(oOptions) {

		// available api calls
		var apis = {
			commits: 'http://github.com/api/v2/json/commits/list/%user%/%repo%/%branch%',
			repo: 'http://github.com/api/v2/json/repos/show/%user%/%repo%',
			repos: 'http://github.com/api/v2/json/repos/show/%user%',
			watched: 'http://github.com/api/v2/json/repos/watched/%user%'
		};

	
		switch ()
		{
		
		}

		return this;
	}
	
})(jQuery)