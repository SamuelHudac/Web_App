//samotny controller v ktorom sa nacitaju vsetky hodnoty kurzoveho listku podla vyberu
var kurz = angular.module("dlzniciApp", []);

kurz.controller("dlzniciController", function ($scope, $http, $window) {

    $window.onload = function (e) {
        var queryString = e.target.URL.split('/');
        if (queryString[4] == 'DanovyUrad') {
            $http.get('http://localhost:13999/api/DanovyUrad').success(function (response) {
                $scope.result = response;
            });
        }
        else if (queryString[4] == 'SocialnaPoistovna') {
            $http.get('http://localhost:13999/api/SocialnaPoistovna').success(function (response) {
                $scope.result = response;
            });
        }
        else if (queryString[4] == 'VsZP_Samoplatitelia') {
            $http.get('http://localhost:13999/api/VsZP_Samoplatitelia').success(function (response) {
                $scope.result = response;
            });
        }
        else if (queryString[4] == 'VsZP_Zamestnavatelia') {
            $http.get('http://localhost:13999/api/VsZP_Zamestnavatelia').success(function (response) {
                $scope.result = response;
            });
        }
        else if (queryString[4] == 'Union') {
            $http.get('http://localhost:13999/api/Zp_Union').success(function (response) {
                $scope.result = response;
            });
        }
        else {
            return;
        }
    }
});