(function(){

  var app = angular.module("myApp", []);

  app.controller("TabCtrl", function(){

    // init
    this.name = "hello";
    this.selected_tab = 'profile';

    this.setTab = function(tab) {
      this.selected_tab = tab;
    }
    this.isActive = function(tab) {
      return this.selected_tab == tab;
    }

  });

})();