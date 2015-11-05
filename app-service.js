app.service('jobs', function($http) {

	this.getJobs = function(keywords) {
		return $http.jsonp('https://api.usa.gov/jobs/search.json?query=' + keywords);
	}
	console.log(this.getJobs());

	this.getOneJob = function(id) {
		return $http.jsonp('https://api.usa.gov/jobs/search.json?' + id);
	}

});