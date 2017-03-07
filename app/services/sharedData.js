(function() { 
    "use strict";

    var module = angular.module("snQuery");

    module.factory('sharedData', function() {
      var incidentResult;
      var personResult;

      return {
        addIncidentResults: addIncidentResults,
        getIncidentResults: getIncidentResults,
        addPersonResults: addPersonResults,
        getPersonResults: getPersonResults,
        // incidentRes: null,
        // personRes: null 

      };

      // function addSearchNum(num) {
      //   searchnum = num;
      // }
      
      // function getSearchNum() {
      //   return searchnum;
      // }

      function addIncidentResults(incidentResults) {
        incidentResult = incidentResults;
      }

      function getIncidentResults() {
        return incidentResult;
      }

      function addPersonResults(personResults) {
        personResult = personResults;
      }

      function getPersonResults() {
        return personResult;
      }

  });

} ());



