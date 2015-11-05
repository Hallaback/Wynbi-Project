app.controller('home-ctrl', ['$scope', 'jobs', function($scope, jobs) {
	jobs.getJobs().then(function(response) {
		$scope.jobs = response.data;
	});
	console.log($scope.jobs);

}]);
	// $scope.searchJobs = function(keywords) {
	// 	var newKeywords = keywords.split(' ').join('+');
	// 	$scope.jobs.search("newKeywords");
	// };