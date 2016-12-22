//samotny controller v ktorom sa nacitaju vsetky hodnoty kurzoveho listku podla vyberu
var kurz = angular.module("kurzovyListokApp", []);

kurz.controller("kurzovyListokController", function ($scope, $http) {
    $http.get('http://localhost:13999/api/KurzovyListok').success(function (response) {
        $scope.result = response;
    });
});