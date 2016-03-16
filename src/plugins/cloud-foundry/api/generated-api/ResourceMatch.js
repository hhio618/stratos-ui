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
    apiManager.register('cloud-foundry.api.ResourceMatch', new ResourceMatchApi($http));
  }

  function ResourceMatchApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(ResourceMatchApi.prototype, {

   /*
    * List all matching resources
    * This endpoint matches given resource SHA / file size pairs against the Cloud Controller cache,
    * and reports the subset which describes already existing files.
    * This is usually used to avoid uploading duplicate files when
    * pushing an app which has only been partially changed.
    * Cloud Foundry operators may set minimum / maximum file sizes to match against.
    * If the file size provided is outside this range, it will not be matched against.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/resource_match/list_all_matching_resources.html
    */
    ListAllMatchingResources: function (value, params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/resource_match";
      config.method = 'PUT';
      config.data = value;
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
