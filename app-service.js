app.service('jobs', function($http) {

	this.getJobs = function() {
		return $http.jsonp('https://api.usa.gov/jobs/search.json?query=nursing+jobs?callback=JSON_CALLBACK');
	}
	console.log(this.getJobs());

});