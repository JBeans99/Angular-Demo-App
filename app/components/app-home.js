(function () {
    "use strict";

    var module = angular.module("snQuery");


    module.component("appHome", {
        templateUrl: "app/views/app-home.html",
        controllerAs: "appHome",
        controller: function (sharedData, $state) {
            var model = this;

            model.goTo = function () {
                $state.go("Result");
            };

            model.input = function (searchnum) {
                model.searchnum = searchnum;

                sharedData.addSearchNum(model.searchnum);

                model.goTo()
            };

        }
    });

}());