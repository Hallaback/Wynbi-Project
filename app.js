var app = angular.module("wynbi-project", []);

app.config(function($stateProvider, $urlProvider) {
	$urlRouterProvider.otherwise("/404");

	$stateProvider
		.state('404', {
			url: "/404",
			templateUrl: "404.html"
		})
		.state('home', {
			url: "/",
			templateUrl: "index.html"
		})
		.state('job', {
			url: "/job/:id",
			templateUrl: "job/job.html",
			controller: "job-ctrl"
		})
})

app.controller('main-ctrl', ['$scope', 'jobs', function($scope, jobs) {
	jobs.getJobs().then(function(data) {
		$scope.jobs = data.data.response;
	});
	console.log($scope.jobs);
}]);
