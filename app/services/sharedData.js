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
      };

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



