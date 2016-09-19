(function (mock) {
  'use strict';

  /* eslint-disable quote-props */
  mock.cloudFoundryAPI = mock.cloudFoundryAPI || {};

  // NOTE: This is not complete, I've just dont the minimum I required for Endpoints/ACL tests
  mock.cloudFoundryAPI.Users = {

    ListAllAuditedOrganizationsForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/audited_organizations?results-per-page=100',

        response: {

          200: {
            body: {
              total_results: 0,
              total_pages: 0,
              prev_url: null,
              next_url: null,
              resources: []
            },

            500: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }

          }
        }
      };
    },

    ListAllAuditedSpacesForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/audited_spaces?results-per-page=100',

        response: {

          200: {
            body: {
              total_results: 0,
              total_pages: 0,
              prev_url: null,
              next_url: null,
              resources: []
            },

            500: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }

          }
        }
      };
    },

    ListAllBillingManagedOrganizationsForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/billing_managed_organizations?results-per-page=100',

        response: {

          200: {
            body: {
              total_results: 0,
              total_pages: 0,
              prev_url: null,
              next_url: null,
              resources: []
            },

            500: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }

          }
        }
      };
    },

    ListAllManagedOrganizationsForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/managed_organizations?results-per-page=100',

        response: {

          is_manager: {
            200: {
              body: {
                total_results: 1,
                total_pages: 1,
                prev_url: null,
                next_url: null,
                resources: [
                  {
                    metadata: {
                      guid: "guid",
                      url: "/v2/organizations/guid",
                      created_at: "2016-08-25T12:02:01Z",
                      updated_at: null
                    },
                    entity: {
                      name: "BRUI",
                      "billing_enabled": false,
                      "quota_definition_guid": "guid",
                      "status": "active",
                      "quota_definition_url": "/v2/quota_definitions/guid",
                      "spaces_url": "/v2/organizations/guid/spaces",
                      "domains_url": "/v2/organizations/guid/domains",
                      "private_domains_url": "/v2/organizations/guid/private_domains",
                      "users_url": "/v2/organizations/guid/users",
                      "managers_url": "/v2/organizations/guid/managers",
                      "billing_managers_url": "/v2/organizations/guid/billing_managers",
                      "auditors_url": "/v2/organizations/guid/auditors",
                      "app_events_url": "/v2/organizations/guid/app_events",
                      "space_quota_definitions_url": "/v2/organizations/guid/space_quota_definitions"
                    }
                  }
                ]
              }
            }
          },
          is_not_manager: {
            200: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }
          }
        }
      };
    },
    ListAllManagedSpacesForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/managed_spaces?results-per-page=100',

        response: {

          is_manager: {
            200: {
              body: {
                total_results: 1,
                total_pages: 1,
                prev_url: null,
                next_url: null,
                resources: [
                  {
                    metadata: {
                      guid: "guid",
                      url: "/v2/spaces/guid",
                      created_at: "2016-09-02T15:46:50Z",
                      updated_at: null
                    },
                    entity: {
                      name: "mySpace3",
                      organization_guid: "guid",
                      space_quota_definition_guid: null,
                      allow_ssh: true,
                      organization_url: "/v2/organizations/guid",
                      developers_url: "/v2/spaces/guid/developers",
                      managers_url: "/v2/spaces/guid/managers",
                      auditors_url: "/v2/spaces/guid/auditors",
                      apps_url: "/v2/spaces/guid/apps",
                      routes_url: "/v2/spaces/guid/routes",
                      domains_url: "/v2/spaces/guid/domains",
                      service_instances_url: "/v2/spaces/guid/service_instances",
                      app_events_url: "/v2/spaces/guid/app_events",
                      events_url: "/v2/spaces/guid/events",
                      security_groups_url: "/v2/spaces/guid/security_groups"
                    }
                  }]
              }
            }
          },
          is_not_manager: {
            200: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }
          }
        }
      };
    },
    ListAllOrganizationsForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/organizations?results-per-page=100',

        response: {

          200: {
            body: {
              total_results: 1,
              total_pages: 1,
              prev_url: null,
              next_url: null,
              resources: [
                {
                  metadata: {
                    guid: "guid",
                    url: "/v2/organizations/guid",
                    created_at: "2016-08-25T12:02:01Z",
                    updated_at: null
                  },
                  entity: {
                    name: "BRUI",
                    "billing_enabled": false,
                    "quota_definition_guid": "guid",
                    "status": "active",
                    "quota_definition_url": "/v2/quota_definitions/guid",
                    "spaces_url": "/v2/organizations/guid/spaces",
                    "domains_url": "/v2/organizations/guid/domains",
                    "private_domains_url": "/v2/organizations/guid/private_domains",
                    "users_url": "/v2/organizations/guid/users",
                    "managers_url": "/v2/organizations/guid/managers",
                    "billing_managers_url": "/v2/organizations/guid/billing_managers",
                    "auditors_url": "/v2/organizations/guid/auditors",
                    "app_events_url": "/v2/organizations/guid/app_events",
                    "space_quota_definitions_url": "/v2/organizations/guid/space_quota_definitions"
                  }
                }
              ]
            }
          }
        }
      };
    },
    ListAllSpacesForUser: function (guid) {
      return {
        url: '/pp/v1/proxy/v2/users/' + guid + '/spaces?results-per-page=100',

        response: {

          is_developer: {
            200: {
              body: {
                total_results: 1,
                total_pages: 1,
                prev_url: null,
                next_url: null,
                resources: [{
                  metadata: {
                    guid: "guid",
                    url: "/v2/spaces/guid",
                    created_at: "2016-09-02T15:46:50Z",
                    updated_at: null
                  },
                  entity: {
                    name: "mySpace3",
                    organization_guid: "guid",
                    space_quota_definition_guid: null,
                    allow_ssh: true,
                    organization_url: "/v2/organizations/guid",
                    developers_url: "/v2/spaces/guid/developers",
                    "managers_url": "/v2/spaces/guid/managers",
                    "auditors_url": "/v2/spaces/guid/auditors",
                    "apps_url": "/v2/spaces/guid/apps",
                    "routes_url": "/v2/spaces/guid/routes",
                    "domains_url": "/v2/spaces/guid/domains",
                    "service_instances_url": "/v2/spaces/guid/service_instances",
                    "app_events_url": "/v2/spaces/guid/app_events",
                    "events_url": "/v2/spaces/guid/events",
                    "security_groups_url": "/v2/spaces/guid/security_groups"
                  }
                }]
              }
            }
          },
          is_not_developer: {
            200: {
              body: {
                total_results: 0,
                total_pages: 0,
                prev_url: null,
                next_url: null,
                resources: []
              }
            }
          }
        }
      };
    }

  };

  /* eslint-enable quote-props */
})
(this.mock = this.mock || {});
