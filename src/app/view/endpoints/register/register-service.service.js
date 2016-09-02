(function () {
  'use strict';

  angular
    .module('app.view')
    .factory('app.view.registerService', ServiceRegistrationService);

  ServiceRegistrationService.$inject = [
    'app.model.modelManager',
    'app.view.notificationsService',
    'helion.framework.widgets.asyncTaskDialog'
  ];

  /**
   * @name ServiceRegistrationService
   * @description Register a service via a slide out
   * @namespace app.view.registerService.ServiceRegistrationService
   * @param {app.model.modelManager} modelManager The console model manager service
   * @param {app.view.notificationsService} notificationsService The console notification service
   * @param {helion.framework.widgets.asyncTaskDialog} asyncTaskDialog The framework async detail view
   * @property {function} add Opens slide out containing registration form
   * @constructor
   */
  function ServiceRegistrationService(modelManager, notificationsService, asyncTaskDialog) {
    var serviceInstanceModel = modelManager.retrieve('app.model.serviceInstance');

    function createInstances(serviceInstances, filter) {
      var filteredInstances = _.filter(serviceInstances, {cnsi_type: filter});
      return _.map(filteredInstances,
        function (c) {
          var endpoint = c.api_endpoint;
          return endpoint.Scheme + '://' + endpoint.Host;
        });
    }

    return {
      /**
       * @name add
       * @description Opens slide out containing registration form
       * @namespace app.view.registerService.ServiceRegistrationService
       * @param {string} type The type of service. For example hce or hcf
       * @param {string} title The title of the detail view
       * @param {string=} description optional description to add in the detail view
       * @param {string=} urlHint optional hint to use for the URL field
       * @returns {promise}
       */
      add: function (type, title, description, urlHint) {
        var data = {
          name: '',
          url: ''
        };
        return asyncTaskDialog(
          {
            title: title,
            templateUrl: 'app/view/endpoints/register/register-service.html',
            class: 'detail-view-thin',
            buttonTitles: {
              submit: gettext('Register')
            }
          },
          {
            data: data,
            instances: createInstances(serviceInstanceModel.serviceInstances, type),
            description: description,
            urlHint: urlHint
          },
          function () {
            return serviceInstanceModel.create(type, data.url, data.name).then(function () {
              notificationsService.notify('success',
                gettext('{{endpointType}} endpoint \'{{name}}\' successfully registered'),
                {endpointType: type.toUpperCase(), name: data.name});
            });
          }
        ).result;
      }
    };
  }

})();