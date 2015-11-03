app.controller('home-ctrl', ['$scope', 'jobs', function($scope, jobs) {
	jobs.getJobs().then(function(data) {
		$scope.jobs = data.data.data;
	});
	console.log($scope.jobs);

}]);