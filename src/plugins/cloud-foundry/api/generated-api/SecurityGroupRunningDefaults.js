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
    apiManager.register('cloud-foundry.api.SecurityGroupRunningDefaults', new SecurityGroupRunningDefaultsApi($http));
  }

  function SecurityGroupRunningDefaultsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(SecurityGroupRunningDefaultsApi.prototype, {

   /*
    * Removing a Security Group as a default for running Apps
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_running_defaults/removing_a_security_group_as_a_default_for_running_apps.html
    */
    RemovingSecurityGroupAsDefaultForRunningApps: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/running_security_groups/" + guid + "";
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Return the Security Groups used for running Apps
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_running_defaults/return_the_security_groups_used_for_running_apps.html
    */
    ReturnSecurityGroupsUsedForRunningApps: function (params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/running_security_groups";
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Set a Security Group as a default for running Apps
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_running_defaults/set_a_security_group_as_a_default_for_running_apps.html
    */
    SetSecurityGroupAsDefaultForRunningApps: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/running_security_groups/" + guid + "";
      config.method = 'PUT';
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
