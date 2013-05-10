'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should ....', inject(function() {
    //spec body
  }));

  it('should ....', inject(function() {
    //spec body
  }));

  describe('VideoPublisher Controller', function() {
    var scope, ctrl;

    beforeEach(function() {
      inject(function($rootScope, $controller) {
        scope = $rootScope.$new(),
        ctrl = $controller("VideoPublisherCtrl", {$scope: scope });
      });
    });

    it("should set the default year", function(){
      expect(scope.year).toBe("2012");
    });

    describe("getNameForTwitter", function() {
      it("should return an informative default value", function(){
        inject(function($rootScope, $controller) {
          var scope = $rootScope.$new();
          var ctrl = $controller("VideoPublisherCtrl", {$scope: scope });
          expect(scope.getNameForTwitter()).toEqual("[speaker name/@account]");
        });
      });
      it("should return the twitter name if set", function(){
        inject(function($rootScope, $controller) {
          var scope = $rootScope.$new();
          scope.twitter_name = "@me";
          scope.full_name = "Someone";
          var ctrl = $controller("VideoPublisherCtrl", {$scope: scope });
          expect(scope.getNameForTwitter()).toEqual("@me");
        });
      });
      it("should return the full name if no twitter", function(){
        inject(function($rootScope, $controller) {
          var scope = $rootScope.$new();
          scope.twitter_name = "";
          scope.full_name = "Someone";
          var ctrl = $controller("VideoPublisherCtrl", {$scope: scope });
          expect(scope.getNameForTwitter()).toEqual("Someone");
        });
      });
    });
  });
});
