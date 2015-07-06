'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.pipeline.executionDetails.controller', [
  require('angular-ui-router'),
  require('../../../../delivery/details/executionDetailsSection.service.js'),
  require('../../../../delivery/details/executionDetailsSectionNav.directive.js'),
])
  .controller('pipelineExecutionDetailsCtrl', function ($scope, $stateParams, executionDetailsSectionService) {

    $scope.configSections = ['pipelineConfig', 'taskStatus'];

    function initialize() {
      executionDetailsSectionService.synchronizeSection($scope.configSections);
      $scope.detailsSection = $stateParams.details;
    }

    initialize();

    $scope.$on('$stateChangeSuccess', initialize, true);

  }).name;
