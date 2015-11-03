var app = angular.module("wynbi-project", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise("/404");

	$stateProvider
		.state('404', {
			url: "/404",
			templateUrl: "404.html"
		})
		.state('home', {
			url: "/",
			templateUrl: "home/home.html"
		})
		.state('job', {
			url: "/jobs/:id",
			templateUrl: "job/job.html",
			controller: "job-ctrl"
		})
});
