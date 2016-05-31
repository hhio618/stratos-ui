/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.ServiceKeys', new ServiceKeysApi($http));
  }

  function ServiceKeysApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(ServiceKeysApi.prototype, {

   /*
    * Create a Service Key
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_keys/create_a_service_key.html
    */
    CreateServiceKey: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_keys';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * Delete a Particular Service Key
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_keys/delete_a_particular_service_key.html
    */
    DeleteServiceKey: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_keys/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * List all Service Keys
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_keys/list_all_service_keys.html
    */
    ListAllServiceKeys: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_keys';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Service Key
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_keys/retrieve_a_particular_service_key.html
    */
    RetrieveServiceKey: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_keys/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();