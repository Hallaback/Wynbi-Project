app.controller('home-ctrl', ['$scope', 'jobs', function($scope, jobs) {

	$scope.keywords = " ";

	$scope.searchJobs = function(keywords) {
		jobs.getJobs($scope.keywords).then(function(data) {
			$scope.jobs = data.data;
		});
		console.log($scope.jobs);
	};

}]);
