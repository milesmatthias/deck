'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.manualJudgment', [
  require('../stage.module.js'),
  require('../core/stage.core.module.js'),
  require('./manualJudgmentExecutionDetails.controller.js'),
  require('./modal/editNotification.controller.modal.js'),
]).name;
