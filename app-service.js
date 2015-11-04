app.service('jobs', function($http) {

	this.getJobs = function() {
		return $http.jsonp('https://api.springrole.com/authorize?scope=Basic&redirect_uri=http://hallaback.github.io/Wynbi-Project&response_type=token&client_id=4d14b235?callback=JSON_CALLBACK');
	}

	this.getOneJob = function(id) {
		return $http.jsonp('https://api.springrole.com/authorize?scope=Basic&redirect_uri=http://hallaback.github.io/Wynbi-Project&response_type=token&client_id=4d14b235?callback=JSON_CALLBACK' + id);
	}

});
// curl -v -X GET "https://api.springrole.com/authorize?scope=Basic&redirect_uri=http://hallaback.github.io/Wynbi-Project&response_type=token&client_id=4d14b235