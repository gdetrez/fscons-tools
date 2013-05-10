'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('VideoPublisherCtrl', ['$scope', function($scope) {
    $scope.year = "2012";

    $scope.getNameForTwitter = function() {
      return $scope.twitter_name ? $scope.twitter_name :
        ($scope.full_name ? $scope.full_name : "[speaker name/@account]");
    };

    $scope.getNameForIdentica = function() {
      return $scope.identica_name ? $scope.identica_name :
        ($scope.full_name ? $scope.full_name : "[speaker name/@account]");
    };

    $scope.getYoutubeLink = function() {
      return $scope.youtube_url ? $scope.youtube_url : "[short url]";
    };

    $scope.getShortTitle = function() {
      return $scope.short_title ? $scope.short_title :
        ($scope.title ? $scope.title : "[short title]");
    };

    $scope.getSpeakers = function() {
      return $scope.full_name ? $scope.full_name : "[speakers]";
    };

    $scope.getTitle = function() {
      return $scope.title ? $scope.title : "[title]";
    };

  }])
  .controller('MyCtrl2', [function() {

  }]);
