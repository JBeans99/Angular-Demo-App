(function() {
    "use strict";

    var module = angular.module("snQuery");

    
    module.component("appResult", {
        templateUrl: "app/views/app-result.html",
        controllerAs: "appResult",
        
        controller: function(sharedData ) { 
            var model = this;

            model.data = sharedData.getIncidentResults();

            model.callerID = sharedData.getPersonResults();

        }        
    });

}());

