app.service('jobs', function($http) {

	this.getJobs = function() {
		return $http.jsonp('http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0?callback=JSON_CALLBACK');
	}

	this.getOneJob = function() {
		return $http.jsonp('http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0?callback=JSON_CALLBACK');
	}

});