app.controller('job-ctrl', function($scope, $stateParams, jobs) {
    jobs.getOneJob($stateParams.id).then(function(data) {
        $scope.job = data.data;
    });
    console.log($scope.job);
});