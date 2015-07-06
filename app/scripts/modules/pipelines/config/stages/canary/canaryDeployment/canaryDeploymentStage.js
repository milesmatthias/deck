'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.canary.canaryDeployment')
  .config(function(pipelineConfigProvider) {
    pipelineConfigProvider.registerStage({
      synthetic: true,
      key: 'canaryDeployment',
      executionDetailsUrl: 'scripts/modules/pipelines/config/stages/canary/canaryDeployment/canaryDeploymentExecutionDetails.html',
    });
  }).name;
