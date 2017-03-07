(function() {
    "use strict";

    var module = angular.module("snQuery");

    
    module.component("appSearch", {
        templateUrl: "app/views/app-search.html",
        controllerAs: "appSearch",
        controller: function(sharedData, $state, query) {
            var model = this;

            var onCallerComplete = function(data) {
                sharedData.addPersonResults(data.result);
                $state.go('home.result');
            };

            var getCaller = function() {
                 return query.getUser(model.data.caller_id.value)
                     .then(onCallerComplete)
            };

            var onDataComplete = function(data) {
                model.data = data.result[0];
                sharedData.addIncidentResults(model.data);
                
                if(model.data === undefined) {
                    onError();
                } 
                else 
                {   
                    getCaller();
                }
            };


            var onError = function() {
                model.error = "Could not find: " + model.searchnum;
            };            

            model.input = function(searchnum) {
                model.searchnum = searchnum;
                return query.getData(model.searchnum)
                    .then(onDataComplete);
            };

            
        }        
    });

}());