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
    apiManager.register('cloud-foundry.api.SecurityGroupStagingDefaults', new SecurityGroupStagingDefaultsApi($http));
  }

  function SecurityGroupStagingDefaultsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(SecurityGroupStagingDefaultsApi.prototype, {

   /*
    * Removing a Security Group as a default for staging
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_staging_defaults/removing_a_security_group_as_a_default_for_staging.html
    */
    RemovingSecurityGroupAsDefaultForStaging: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/staging_security_groups/" + guid + "";
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Return the Security Groups used for staging
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_staging_defaults/return_the_security_groups_used_for_staging.html
    */
    ReturnSecurityGroupsUsedForStaging: function (params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/staging_security_groups";
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Set a Security Group as a default for staging
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/security_group_staging_defaults/set_a_security_group_as_a_default_for_staging.html
    */
    SetSecurityGroupAsDefaultForStaging: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = "/api/cf/v2/config/staging_security_groups/" + guid + "";
      config.method = 'PUT';
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
