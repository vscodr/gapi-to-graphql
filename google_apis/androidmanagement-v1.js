module.exports = {
  "id": "androidmanagement:v1",
  "auth": {"oauth2": {"scopes": {"https://www.googleapis.com/auth/androidmanagement": {"description": "Manage Android devices and apps for your customers"}}}},
  "description": "The Android Management API provides remote enterprise management of Android devices and apps.",
  "protocol": "rest",
  "title": "Android Management API",
  "resources": {
    "signupUrls": {
      "methods": {
        "create": {
          "id": "androidmanagement.signupUrls.create",
          "response": {"$ref": "SignupUrl"},
          "parameterOrder": [],
          "description": "Creates an enterprise signup URL.",
          "flatPath": "v1/signupUrls",
          "httpMethod": "POST",
          "parameters": {
            "callbackUrl": {
              "description": "The callback URL to which the admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.",
              "location": "query",
              "type": "string"
            },
            "projectId": {
              "description": "The id of the Google Cloud Platform project which will own the enterprise.",
              "location": "query",
              "type": "string"
            }
          },
          "path": "v1/signupUrls",
          "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
        }
      }
    },
    "enterprises": {
      "resources": {
        "policies": {
          "methods": {
            "get": {
              "id": "androidmanagement.enterprises.policies.get",
              "response": {"$ref": "Policy"},
              "parameterOrder": ["name"],
              "description": "Gets a policy.",
              "flatPath": "v1/enterprises/{enterprisesId}/policies/{policiesId}",
              "httpMethod": "GET",
              "parameters": {
                "name": {
                  "description": "The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/policies/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "list": {
              "id": "androidmanagement.enterprises.policies.list",
              "response": {"$ref": "ListPoliciesResponse"},
              "parameterOrder": ["parent"],
              "description": "Lists policies for a given enterprise.",
              "flatPath": "v1/enterprises/{enterprisesId}/policies",
              "httpMethod": "GET",
              "parameters": {
                "pageSize": {
                  "description": "The requested page size. The actual page size may be fixed to a min or max value.",
                  "location": "query",
                  "type": "integer",
                  "format": "int32"
                },
                "parent": {
                  "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+$",
                  "location": "path",
                  "type": "string"
                },
                "pageToken": {
                  "description": "A token identifying a page of results the server should return.",
                  "location": "query",
                  "type": "string"
                }
              },
              "path": "v1/{+parent}/policies",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "patch": {
              "id": "androidmanagement.enterprises.policies.patch",
              "response": {"$ref": "Policy"},
              "parameterOrder": ["name"],
              "description": "Updates or creates a policy.",
              "request": {"$ref": "Policy"},
              "flatPath": "v1/enterprises/{enterprisesId}/policies/{policiesId}",
              "httpMethod": "PATCH",
              "parameters": {
                "updateMask": {
                  "description": "The field mask indicating the fields to update. If not set, all modifiable fields will be modified.",
                  "location": "query",
                  "type": "string",
                  "format": "google-fieldmask"
                },
                "name": {
                  "description": "The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/policies/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "delete": {
              "id": "androidmanagement.enterprises.policies.delete",
              "response": {"$ref": "Empty"},
              "parameterOrder": ["name"],
              "description": "Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.",
              "flatPath": "v1/enterprises/{enterprisesId}/policies/{policiesId}",
              "httpMethod": "DELETE",
              "parameters": {
                "name": {
                  "description": "The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/policies/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            }
          }
        },
        "applications": {
          "methods": {
            "get": {
              "id": "androidmanagement.enterprises.applications.get",
              "response": {"$ref": "Application"},
              "parameterOrder": ["name"],
              "description": "Gets info about an application.",
              "flatPath": "v1/enterprises/{enterprisesId}/applications/{applicationsId}",
              "httpMethod": "GET",
              "parameters": {
                "languageCode": {
                  "description": "The preferred language for localized application info, as a BCP47 tag (e.g. \"en-US\", \"de\"). If not specified the default language of the application will be used.",
                  "location": "query",
                  "type": "string"
                },
                "name": {
                  "description": "The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/applications/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            }
          }
        },
        "enrollmentTokens": {
          "methods": {
            "create": {
              "id": "androidmanagement.enterprises.enrollmentTokens.create",
              "response": {"$ref": "EnrollmentToken"},
              "parameterOrder": ["parent"],
              "description": "Creates an enrollment token for a given enterprise.",
              "request": {"$ref": "EnrollmentToken"},
              "flatPath": "v1/enterprises/{enterprisesId}/enrollmentTokens",
              "httpMethod": "POST",
              "parameters": {
                "parent": {
                  "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+parent}/enrollmentTokens",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "delete": {
              "id": "androidmanagement.enterprises.enrollmentTokens.delete",
              "response": {"$ref": "Empty"},
              "parameterOrder": ["name"],
              "description": "Deletes an enrollment token, which prevents future use of the token.",
              "flatPath": "v1/enterprises/{enterprisesId}/enrollmentTokens/{enrollmentTokensId}",
              "httpMethod": "DELETE",
              "parameters": {
                "name": {
                  "description": "The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/enrollmentTokens/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            }
          }
        },
        "webTokens": {
          "methods": {
            "create": {
              "id": "androidmanagement.enterprises.webTokens.create",
              "response": {"$ref": "WebToken"},
              "parameterOrder": ["parent"],
              "description": "Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.",
              "request": {"$ref": "WebToken"},
              "flatPath": "v1/enterprises/{enterprisesId}/webTokens",
              "httpMethod": "POST",
              "parameters": {
                "parent": {
                  "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+parent}/webTokens",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            }
          }
        },
        "devices": {
          "resources": {
            "operations": {
              "methods": {
                "get": {
                  "id": "androidmanagement.enterprises.devices.operations.get",
                  "response": {"$ref": "Operation"},
                  "parameterOrder": ["name"],
                  "description": "Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.",
                  "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}/operations/{operationsId}",
                  "httpMethod": "GET",
                  "parameters": {
                    "name": {
                      "description": "The name of the operation resource.",
                      "required": true,
                      "pattern": "^enterprises/[^/]+/devices/[^/]+/operations/[^/]+$",
                      "location": "path",
                      "type": "string"
                    }
                  },
                  "path": "v1/{+name}",
                  "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
                },
                "list": {
                  "id": "androidmanagement.enterprises.devices.operations.list",
                  "response": {"$ref": "ListOperationsResponse"},
                  "parameterOrder": ["name"],
                  "description": "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as \"/v1/{name=users/*}/operations\" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.",
                  "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}/operations",
                  "httpMethod": "GET",
                  "parameters": {
                    "pageSize": {
                      "description": "The standard list page size.",
                      "location": "query",
                      "type": "integer",
                      "format": "int32"
                    },
                    "filter": {"description": "The standard list filter.", "location": "query", "type": "string"},
                    "name": {
                      "description": "The name of the operation's parent resource.",
                      "required": true,
                      "pattern": "^enterprises/[^/]+/devices/[^/]+/operations$",
                      "location": "path",
                      "type": "string"
                    },
                    "pageToken": {"description": "The standard list page token.", "location": "query", "type": "string"}
                  },
                  "path": "v1/{+name}",
                  "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
                },
                "delete": {
                  "id": "androidmanagement.enterprises.devices.operations.delete",
                  "response": {"$ref": "Empty"},
                  "parameterOrder": ["name"],
                  "description": "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.",
                  "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}/operations/{operationsId}",
                  "httpMethod": "DELETE",
                  "parameters": {
                    "name": {
                      "description": "The name of the operation resource to be deleted.",
                      "required": true,
                      "pattern": "^enterprises/[^/]+/devices/[^/]+/operations/[^/]+$",
                      "location": "path",
                      "type": "string"
                    }
                  },
                  "path": "v1/{+name}",
                  "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
                },
                "cancel": {
                  "id": "androidmanagement.enterprises.devices.operations.cancel",
                  "response": {"$ref": "Empty"},
                  "parameterOrder": ["name"],
                  "description": "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.",
                  "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}/operations/{operationsId}:cancel",
                  "httpMethod": "POST",
                  "parameters": {
                    "name": {
                      "description": "The name of the operation resource to be cancelled.",
                      "required": true,
                      "pattern": "^enterprises/[^/]+/devices/[^/]+/operations/[^/]+$",
                      "location": "path",
                      "type": "string"
                    }
                  },
                  "path": "v1/{+name}:cancel",
                  "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
                }
              }
            }
          },
          "methods": {
            "get": {
              "id": "androidmanagement.enterprises.devices.get",
              "response": {"$ref": "Device"},
              "parameterOrder": ["name"],
              "description": "Gets a device.",
              "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}",
              "httpMethod": "GET",
              "parameters": {
                "name": {
                  "description": "The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/devices/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "list": {
              "id": "androidmanagement.enterprises.devices.list",
              "response": {"$ref": "ListDevicesResponse"},
              "parameterOrder": ["parent"],
              "description": "Lists devices for a given enterprise.",
              "flatPath": "v1/enterprises/{enterprisesId}/devices",
              "httpMethod": "GET",
              "parameters": {
                "pageSize": {
                  "description": "The requested page size. The actual page size may be fixed to a min or max value.",
                  "location": "query",
                  "type": "integer",
                  "format": "int32"
                },
                "parent": {
                  "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+$",
                  "location": "path",
                  "type": "string"
                },
                "pageToken": {
                  "description": "A token identifying a page of results the server should return.",
                  "location": "query",
                  "type": "string"
                }
              },
              "path": "v1/{+parent}/devices",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "issueCommand": {
              "id": "androidmanagement.enterprises.devices.issueCommand",
              "response": {"$ref": "Operation"},
              "parameterOrder": ["name"],
              "description": "Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.",
              "request": {"$ref": "Command"},
              "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}:issueCommand",
              "httpMethod": "POST",
              "parameters": {
                "name": {
                  "description": "The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/devices/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}:issueCommand",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "patch": {
              "id": "androidmanagement.enterprises.devices.patch",
              "response": {"$ref": "Device"},
              "parameterOrder": ["name"],
              "description": "Updates a device.",
              "request": {"$ref": "Device"},
              "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}",
              "httpMethod": "PATCH",
              "parameters": {
                "updateMask": {
                  "description": "The field mask indicating the fields to update. If not set, all modifiable fields will be modified.",
                  "location": "query",
                  "type": "string",
                  "format": "google-fieldmask"
                },
                "name": {
                  "description": "The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/devices/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            },
            "delete": {
              "id": "androidmanagement.enterprises.devices.delete",
              "response": {"$ref": "Empty"},
              "parameterOrder": ["name"],
              "description": "Deletes a device, which causes the device to be wiped.",
              "flatPath": "v1/enterprises/{enterprisesId}/devices/{devicesId}",
              "httpMethod": "DELETE",
              "parameters": {
                "name": {
                  "description": "The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}",
                  "required": true,
                  "pattern": "^enterprises/[^/]+/devices/[^/]+$",
                  "location": "path",
                  "type": "string"
                }
              },
              "path": "v1/{+name}",
              "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
            }
          }
        }
      },
      "methods": {
        "create": {
          "id": "androidmanagement.enterprises.create",
          "response": {"$ref": "Enterprise"},
          "parameterOrder": [],
          "description": "Creates an enterprise by completing the enterprise signup flow.",
          "request": {"$ref": "Enterprise"},
          "flatPath": "v1/enterprises",
          "httpMethod": "POST",
          "parameters": {
            "signupUrlName": {
              "description": "The name of the SignupUrl used to sign up for the enterprise.",
              "location": "query",
              "type": "string"
            },
            "enterpriseToken": {
              "description": "The enterprise token appended to the callback URL.",
              "location": "query",
              "type": "string"
            },
            "projectId": {
              "description": "The id of the Google Cloud Platform project which will own the enterprise.",
              "location": "query",
              "type": "string"
            }
          },
          "path": "v1/enterprises",
          "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
        },
        "get": {
          "id": "androidmanagement.enterprises.get",
          "response": {"$ref": "Enterprise"},
          "parameterOrder": ["name"],
          "description": "Gets an enterprise.",
          "flatPath": "v1/enterprises/{enterprisesId}",
          "httpMethod": "GET",
          "parameters": {
            "name": {
              "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
              "required": true,
              "pattern": "^enterprises/[^/]+$",
              "location": "path",
              "type": "string"
            }
          },
          "path": "v1/{+name}",
          "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
        },
        "patch": {
          "id": "androidmanagement.enterprises.patch",
          "response": {"$ref": "Enterprise"},
          "parameterOrder": ["name"],
          "description": "Updates an enterprise.",
          "request": {"$ref": "Enterprise"},
          "flatPath": "v1/enterprises/{enterprisesId}",
          "httpMethod": "PATCH",
          "parameters": {
            "updateMask": {
              "description": "The field mask indicating the fields to update. If not set, all modifiable fields will be modified.",
              "location": "query",
              "type": "string",
              "format": "google-fieldmask"
            },
            "name": {
              "description": "The name of the enterprise in the form enterprises/{enterpriseId}",
              "required": true,
              "pattern": "^enterprises/[^/]+$",
              "location": "path",
              "type": "string"
            }
          },
          "path": "v1/{+name}",
          "scopes": ["https://www.googleapis.com/auth/androidmanagement"]
        }
      }
    }
  },
  "schemas": {
    "Device": {
      "description": "A device owned by an enterprise. Unless otherwise noted, all fields are read-only and cannot be modified by an update device request.",
      "type": "object",
      "properties": {
        "userName": {
          "description": "The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.",
          "type": "string"
        },
        "disabledReason": {
          "description": "If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field may be modified by an update request.",
          "$ref": "UserFacingMessage"
        },
        "policyName": {
          "description": "The name of the policy that is intended to be applied to the device. If empty, the policy_name for the user that owns this device is applied. This field may be modified by an update request. The name of the policy is in the form enterprises/{enterpriseId}/policies/{policyId}. It is also permissible to only specify the policyId when updating this field as long as the policyId contains no slashes since the rest of the policy name can be inferred from context.",
          "type": "string"
        },
        "lastPolicyComplianceReportTime": {
          "description": "The last time the device sent a policy compliance report.",
          "type": "string",
          "format": "google-datetime"
        },
        "nonComplianceDetails": {
          "description": "Details about policy settings for which the device is not in compliance.",
          "type": "array",
          "items": {"$ref": "NonComplianceDetail"}
        },
        "lastPolicySyncTime": {
          "description": "The last time the device fetched its policy.",
          "type": "string",
          "format": "google-datetime"
        },
        "networkInfo": {
          "description": "Device network information. This information is only available when networkInfoEnabled is true in the device's policy.",
          "$ref": "NetworkInfo"
        },
        "appliedState": {
          "description": "The state that is currently applied by the device.",
          "enum": ["DEVICE_STATE_UNSPECIFIED", "ACTIVE", "DISABLED", "DELETED", "PROVISIONING"],
          "enumDescriptions": ["This value is disallowed.", "The device is active.", "The device is disabled.", "The device was deleted. This state will never be returned by an API call, but will be used in the final policy compliance report published to Cloud Pub/Sub when the device acknowledges the deletion.", "The device is being provisioned. Newly enrolled devices will be in this state until they have applied policy."],
          "type": "string"
        },
        "enrollmentTokenData": {
          "description": "If this device was enrolled with an enrollment token with additional data provided, this field contains that data.",
          "type": "string"
        },
        "enrollmentTokenName": {
          "description": "If this device was enrolled with an enrollment token, this field contains the name of the token.",
          "type": "string"
        },
        "memoryInfo": {
          "description": "Memory information. This information is only available when memoryInfoEnabled is true in the device's policy.",
          "$ref": "MemoryInfo"
        },
        "state": {
          "description": "The state that is intended to be applied to the device. This field may be modified by an update request. Note that UpdateDevice only handles toggling between ACTIVE and DISABLED states. Use the delete device method to cause the device to enter the DELETED state.",
          "enum": ["DEVICE_STATE_UNSPECIFIED", "ACTIVE", "DISABLED", "DELETED", "PROVISIONING"],
          "enumDescriptions": ["This value is disallowed.", "The device is active.", "The device is disabled.", "The device was deleted. This state will never be returned by an API call, but will be used in the final policy compliance report published to Cloud Pub/Sub when the device acknowledges the deletion.", "The device is being provisioned. Newly enrolled devices will be in this state until they have applied policy."],
          "type": "string"
        },
        "softwareInfo": {
          "description": "Detailed information about the device software. This information is only available when softwareInfoEnabled is true in the device's policy.",
          "$ref": "SoftwareInfo"
        },
        "memoryEvents": {
          "description": "Events related to memory and storage measurements in chronological order. This information is only available when memoryInfoEnabled is true in the device's policy.",
          "type": "array",
          "items": {"$ref": "MemoryEvent"}
        },
        "previousDeviceNames": {
          "description": "The previous device names used for the same physical device when it has been enrolled multiple times. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.",
          "type": "array",
          "items": {"type": "string"}
        },
        "policyCompliant": {"description": "Whether the device is compliant with its policy.", "type": "boolean"},
        "lastStatusReportTime": {
          "description": "The last time the device sent a status report.",
          "type": "string",
          "format": "google-datetime"
        },
        "name": {
          "description": "The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}",
          "type": "string"
        },
        "hardwareStatusSamples": {
          "description": "Hardware status samples in chronological order. This information is only available when hardwareStatusEnabled is true in the device's policy.",
          "type": "array",
          "items": {"$ref": "HardwareStatus"}
        },
        "enrollmentTime": {
          "description": "The time of device enrollment.",
          "type": "string",
          "format": "google-datetime"
        },
        "appliedPolicyVersion": {
          "description": "The version of the policy that is currently applied by the device.",
          "type": "string",
          "format": "int64"
        },
        "apiLevel": {
          "description": "The API level of the Android platform version running on the device.",
          "type": "integer",
          "format": "int32"
        },
        "hardwareInfo": {"description": "Detailed information about the device hardware.", "$ref": "HardwareInfo"},
        "appliedPolicyName": {
          "description": "The name of the policy that is currently applied by the device.",
          "type": "string"
        },
        "displays": {
          "description": "Displays on the device. This information is only available when displayInfoEnabled is true in the device's policy.",
          "type": "array",
          "items": {"$ref": "Display"}
        },
        "powerManagementEvents": {
          "description": "Power management events on the device in chronological order. This information is only available when powerManagementEventsEnabled is true in the device's policy.",
          "type": "array",
          "items": {"$ref": "PowerManagementEvent"}
        }
      },
      "id": "Device"
    },
    "PermissionGrant": {
      "description": "Configuration for an Android permission and its grant state.",
      "type": "object",
      "properties": {
        "permission": {
          "description": "The android permission, e.g. android.permission.READ_CALENDAR.",
          "type": "string"
        },
        "policy": {
          "description": "The policy for granting the permission.",
          "enum": ["PERMISSION_POLICY_UNSPECIFIED", "PROMPT", "GRANT", "DENY"],
          "enumDescriptions": ["Policy not specified. If no policy is specified for a permission at any level, then the PROMPT behavior is used by default.", "Prompt the user to grant a permission.", "Automatically grant a permission.", "Automatically deny a permission."],
          "type": "string"
        }
      },
      "id": "PermissionGrant"
    },
    "Application": {
      "description": "Application information.",
      "type": "object",
      "properties": {
        "managedProperties": {
          "description": "The set of managed properties available to be pre-configured for the application.",
          "type": "array",
          "items": {"$ref": "ManagedProperty"}
        },
        "title": {"description": "The title of the application. Localized.", "type": "string"},
        "permissions": {
          "description": "The permissions required by the app.",
          "type": "array",
          "items": {"$ref": "ApplicationPermission"}
        },
        "name": {
          "description": "The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}",
          "type": "string"
        }
      },
      "id": "Application"
    },
    "Status": {
      "description": "The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:\nSimple to use and understand for most users\nFlexible enough to meet unexpected needsOverviewThe Status message contains three pieces of data: error code, error message, and error details. The error code should be an enum value of google.rpc.Code, but it may accept additional error codes if needed. The error message should be a developer-facing English message that helps developers understand and resolve the error. If a localized user-facing error message is needed, put the localized message in the error details or localize it in the client. The optional error details may contain arbitrary information about the error. There is a predefined set of error detail types in the package google.rpc that can be used for common error conditions.Language mappingThe Status message is the logical representation of the error model, but it is not necessarily the actual wire format. When the Status message is exposed in different client libraries and different wire protocols, it can be mapped differently. For example, it will likely be mapped to some exceptions in Java, but more likely mapped to some error codes in C.Other usesThe error model and the Status message can be used in a variety of environments, either with or without APIs, to provide a consistent developer experience across different environments.Example uses of this error model include:\nPartial errors. If a service needs to return partial errors to the client, it may embed the Status in the normal response to indicate the partial errors.\nWorkflow errors. A typical workflow has multiple steps. Each step may have a Status message for error reporting.\nBatch operations. If a client uses batch request and batch response, the Status message should be used directly inside batch response, one for each error sub-response.\nAsynchronous operations. If an API call embeds asynchronous operation results in its response, the status of those operations should be represented directly using the Status message.\nLogging. If some API errors are stored in logs, the message Status could be used directly after any stripping needed for security/privacy reasons.",
      "type": "object",
      "properties": {
        "code": {
          "description": "The status code, which should be an enum value of google.rpc.Code.",
          "type": "integer",
          "format": "int32"
        },
        "details": {
          "description": "A list of messages that carry the error details. There is a common set of message types for APIs to use.",
          "type": "array",
          "items": {
            "additionalProperties": {
              "description": "Properties of the object. Contains field @type with type URL.",
              "type": "any"
            }, "type": "object"
          }
        },
        "message": {
          "description": "A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.",
          "type": "string"
        }
      },
      "id": "Status"
    },
    "ApplicationPolicy": {
      "description": "Policy for an individual app.",
      "type": "object",
      "properties": {
        "lockTaskAllowed": {
          "description": "Whether the application is allowed to lock itself in full-screen mode.",
          "type": "boolean"
        },
        "permissionGrants": {
          "description": "Explicit permission grants or denials for the app. These values override the default_permission_policy.",
          "type": "array",
          "items": {"$ref": "PermissionGrant"}
        },
        "managedConfiguration": {
          "description": "Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: <table> <tr><td><i>type</i></td><td><i>JSON value</i></td></tr> <tr><td>BOOL</td><td>true or false</td></tr> <tr><td>STRING</td><td>string</td></tr> <tr><td>INTEGER</td><td>number</td></tr> <tr><td>CHOICE</td><td>string</td></tr> <tr><td>MULTISELECT</td><td>array of strings</td></tr> <tr><td>HIDDEN</td><td>string</td></tr> <tr><td>BUNDLE_ARRAY</td><td>array of objects</td></tr> </table>",
          "additionalProperties": {"description": "Properties of the object.", "type": "any"},
          "type": "object"
        },
        "packageName": {
          "description": "The package name of the app, e.g. com.google.android.youtube for the YouTube app.",
          "type": "string"
        },
        "installType": {
          "description": "The type of installation to perform.",
          "enum": ["INSTALL_TYPE_UNSPECIFIED", "PREINSTALLED", "FORCE_INSTALLED"],
          "enumDescriptions": ["No automatic installation is performed. Any other app policies will be applied if the user installs the app.", "The application is automatically installed and can be removed by the user.", "The application is automatically installed and cannot be removed by the user."],
          "type": "string"
        },
        "defaultPermissionPolicy": {
          "description": "The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps.",
          "enum": ["PERMISSION_POLICY_UNSPECIFIED", "PROMPT", "GRANT", "DENY"],
          "enumDescriptions": ["Policy not specified. If no policy is specified for a permission at any level, then the PROMPT behavior is used by default.", "Prompt the user to grant a permission.", "Automatically grant a permission.", "Automatically deny a permission."],
          "type": "string"
        }
      },
      "id": "ApplicationPolicy"
    },
    "ApplicationPermission": {
      "description": "Application permission.",
      "type": "object",
      "properties": {
        "description": {
          "description": "A longer description of the permission, giving more details of what it affects. Localized.",
          "type": "string"
        },
        "permissionId": {
          "description": "An opaque string uniquely identifying the permission. Not localized.",
          "type": "string"
        },
        "name": {"description": "The name of the permission. Localized.", "type": "string"}
      },
      "id": "ApplicationPermission"
    },
    "ManagedProperty": {
      "description": "Managed property.",
      "type": "object",
      "properties": {
        "nestedProperties": {
          "description": "For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.",
          "type": "array",
          "items": {"$ref": "ManagedProperty"}
        },
        "description": {
          "description": "A longer description of the property, giving more detail of what it affects. Localized.",
          "type": "string"
        },
        "defaultValue": {
          "description": "The default value of the properties. BUNDLE_ARRAY properties never have a default value.",
          "type": "any"
        },
        "title": {"description": "The name of the property. Localized.", "type": "string"},
        "key": {
          "description": "The unique key that the application uses to identify the property, e.g. \"com.google.android.gm.fieldname\".",
          "type": "string"
        },
        "entries": {
          "description": "For CHOICE or MULTISELECT properties, the list of possible entries.",
          "type": "array",
          "items": {"$ref": "ManagedPropertyEntry"}
        },
        "type": {
          "description": "The type of the property.",
          "enum": ["MANAGED_PROPERTY_TYPE_UNSPECIFIED", "BOOL", "STRING", "INTEGER", "CHOICE", "MULTISELECT", "HIDDEN", "BUNDLE_ARRAY"],
          "enumDescriptions": ["Not used.", "A property of boolean type.", "A property of string type.", "A property of integer type.", "A choice of one item from a set.", "A choice of multiple items from a set.", "A hidden restriction of string type (the default value can be used to pass along information that cannot be modified, such as a version code).", "An array of property bundles."],
          "type": "string"
        }
      },
      "id": "ManagedProperty"
    },
    "Operation": {
      "description": "This resource represents a long-running operation that is the result of a network API call.",
      "type": "object",
      "properties": {
        "error": {
          "description": "The error result of the operation in case of failure or cancellation.",
          "$ref": "Status"
        },
        "done": {
          "description": "If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.",
          "type": "boolean"
        },
        "metadata": {
          "description": "Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.",
          "additionalProperties": {
            "description": "Properties of the object. Contains field @type with type URL.",
            "type": "any"
          },
          "type": "object"
        },
        "response": {
          "description": "The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.",
          "additionalProperties": {
            "description": "Properties of the object. Contains field @type with type URL.",
            "type": "any"
          },
          "type": "object"
        },
        "name": {
          "description": "The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.",
          "type": "string"
        }
      },
      "id": "Operation"
    },
    "NonComplianceDetailCondition": {
      "description": "A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.",
      "type": "object",
      "properties": {
        "nonComplianceReason": {
          "description": "The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.",
          "enum": ["NON_COMPLIANCE_REASON_UNSPECIFIED", "API_LEVEL", "ADMIN_TYPE", "USER_ACTION", "INVALID_VALUE", "APP_NOT_INSTALLED", "UNSUPPORTED", "APP_INSTALLED", "PENDING", "APP_INCOMPATIBLE", "APP_NOT_UPDATED"],
          "enumDescriptions": ["This value is disallowed.", "The setting is not supported in the API level of Android OS version the device is running.", "The admin type (profile owner, device owner, etc.) does not support the setting.", "The user has not taken required action to comply with the setting.", "The setting has an invalid value.", "The application required to implement the policy is not installed.", "The policy is not supported by the version of Android Device Policy on the device.", "A blocked application is installed.", "The setting was not applied yet at the time of the report, but is expected to be applied shortly.", "The setting cannot be applied to the application because the application doesn't support it, for example because its target SDK version is not high enough.", "The application is installed but not updated to the minimum version code specified by policy"],
          "type": "string"
        },
        "settingName": {
          "description": "The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.",
          "type": "string"
        },
        "packageName": {
          "description": "The package name indicating which application is out of compliance. If not set, then this condition matches any package name.",
          "type": "string"
        }
      },
      "id": "NonComplianceDetailCondition"
    },
    "NonComplianceDetail": {
      "description": "Provides detail about non-compliance with a policy setting.",
      "type": "object",
      "properties": {
        "settingName": {
          "description": "The name of the policy setting. This is the JSON field name of a top-level Policy  field.",
          "type": "string"
        },
        "currentValue": {
          "description": "If the policy setting could not be applied, the current value of the setting on the device.",
          "type": "any"
        },
        "packageName": {
          "description": "The package name indicating which application is out of compliance, if applicable.",
          "type": "string"
        },
        "installationFailureReason": {
          "description": "If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app cannot be installed or updated.",
          "enum": ["INSTALLATION_FAILURE_REASON_UNSPECIFIED", "INSTALLATION_FAILURE_REASON_UNKNOWN", "IN_PROGRESS", "NOT_FOUND", "NOT_COMPATIBLE_WITH_DEVICE", "NOT_APPROVED", "PERMISSIONS_NOT_ACCEPTED", "NOT_AVAILABLE_IN_COUNTRY", "NO_LICENSES_REMAINING", "NOT_ENROLLED", "USER_INVALID"],
          "enumDescriptions": ["This value is disallowed.", "An unknown condition is preventing the app from being installed. Some potential reaons are that the device does not have enough storage, the device network connection is unreliable, or the installation is taking longer than expected. The installation will be retried automatically.", "The installation is still in progress.", "The app was not found in Play.", "The app is incompatible with the device.", "The app has not been approved by the admin.", "The app has new permissions that have not been accepted by the admin.", "The app is not available in the user's country.", "There are no more licenses to assign to the user.", "The enterprise is no longer enrolled with Play for Work or Android Device Policy is not enabled for the enterprise.", "The user is no longer valid. The user may have been deleted or disabled."],
          "type": "string"
        },
        "fieldPath": {
          "description": "For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a  subfield name. 2) For array-typed fields, the field name is followed by the array index  enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url",
          "type": "string"
        },
        "nonComplianceReason": {
          "description": "The reason the device is not in compliance with the setting.",
          "enum": ["NON_COMPLIANCE_REASON_UNSPECIFIED", "API_LEVEL", "ADMIN_TYPE", "USER_ACTION", "INVALID_VALUE", "APP_NOT_INSTALLED", "UNSUPPORTED", "APP_INSTALLED", "PENDING", "APP_INCOMPATIBLE", "APP_NOT_UPDATED"],
          "enumDescriptions": ["This value is disallowed.", "The setting is not supported in the API level of Android OS version the device is running.", "The admin type (profile owner, device owner, etc.) does not support the setting.", "The user has not taken required action to comply with the setting.", "The setting has an invalid value.", "The application required to implement the policy is not installed.", "The policy is not supported by the version of Android Device Policy on the device.", "A blocked application is installed.", "The setting was not applied yet at the time of the report, but is expected to be applied shortly.", "The setting cannot be applied to the application because the application doesn't support it, for example because its target SDK version is not high enough.", "The application is installed but not updated to the minimum version code specified by policy"],
          "type": "string"
        }
      },
      "id": "NonComplianceDetail"
    },
    "ListDevicesResponse": {
      "description": "Response to a request to list devices for a given enterprise.",
      "type": "object",
      "properties": {
        "nextPageToken": {
          "description": "If there are more results, a token to retrieve next page of results.",
          "type": "string"
        }, "devices": {"description": "The list of devices.", "type": "array", "items": {"$ref": "Device"}}
      },
      "id": "ListDevicesResponse"
    },
    "PersistentPreferredActivity": {
      "description": "A default activity for handling intents that match a particular intent filter.",
      "type": "object",
      "properties": {
        "receiverActivity": {
          "description": "The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.",
          "type": "string"
        },
        "actions": {
          "description": "The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.",
          "type": "array",
          "items": {"type": "string"}
        },
        "categories": {
          "description": "The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.",
          "type": "array",
          "items": {"type": "string"}
        }
      },
      "id": "PersistentPreferredActivity"
    },
    "Policy": {
      "description": "A policy, which governs behavior for a device.",
      "type": "object",
      "properties": {
        "openNetworkConfiguration": {
          "description": "Network configuration for the device. See configure networks for more information.",
          "additionalProperties": {"description": "Properties of the object.", "type": "any"},
          "type": "object"
        },
        "adjustVolumeDisabled": {"description": "Whether adjusting the master volume is disabled.", "type": "boolean"},
        "passwordRequirements": {"description": "Password requirements.", "$ref": "PasswordRequirements"},
        "modifyAccountsDisabled": {
          "description": "Whether adding or removing accounts is disabled.",
          "type": "boolean"
        },
        "statusReportingSettings": {"description": "Status reporting settings", "$ref": "StatusReportingSettings"},
        "factoryResetDisabled": {
          "description": "Whether factory resetting from settings is disabled.",
          "type": "boolean"
        },
        "funDisabled": {
          "description": "Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.",
          "type": "boolean"
        },
        "applications": {
          "description": "Policy applied to apps.",
          "type": "array",
          "items": {"$ref": "ApplicationPolicy"}
        },
        "safeBootDisabled": {
          "description": "Whether rebooting the device into safe boot is disabled.",
          "type": "boolean"
        },
        "wifiConfigsLockdownEnabled": {
          "description": "Whether WiFi networks defined in Open Network Configuration are locked so they cannot be edited by the user.",
          "type": "boolean"
        },
        "complianceRules": {
          "description": "Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules.",
          "type": "array",
          "items": {"$ref": "ComplianceRule"}
        },
        "wifiConfigDisabled": {"description": "Whether configuring WiFi access points is disabled.", "type": "boolean"},
        "unmuteMicrophoneDisabled": {
          "description": "Whether the microphone is muted and adjusting microphone volume is disabled.",
          "type": "boolean"
        },
        "installUnknownSourcesAllowed": {
          "description": "Whether the user is allowed to enable the \"Unknown Sources\" setting, which allows installation of apps from unknown sources.",
          "type": "boolean"
        },
        "autoTimeRequired": {
          "description": "Whether auto time is required, which prevents the user from manually setting the date and time.",
          "type": "boolean"
        },
        "removeUserDisabled": {"description": "Whether removing other users is disabled.", "type": "boolean"},
        "statusBarDisabled": {
          "description": "Whether the status bar is disabled. This disables notifications, quick settings and other screen overlays that allow escape from full-screen mode.",
          "type": "boolean"
        },
        "stayOnPluggedModes": {
          "description": "The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.",
          "enumDescriptions": ["This value is ignored.", "Power source is an AC charger.", "Power source is a USB port.", "Power source is wireless."],
          "type": "array",
          "items": {"enum": ["BATTERY_PLUGGED_MODE_UNSPECIFIED", "AC", "USB", "WIRELESS"], "type": "string"}
        },
        "cameraDisabled": {"description": "Whether all cameras on the device are disabled.", "type": "boolean"},
        "blockApplicationsEnabled": {
          "description": "Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.",
          "type": "boolean"
        },
        "debuggingFeaturesAllowed": {
          "description": "Whether the user is allowed to enable debugging features.",
          "type": "boolean"
        },
        "maximumTimeToLock": {
          "description": "Maximum time in milliseconds for user activity until the device will lock. A value of 0 means there is no restriction.",
          "type": "string",
          "format": "int64"
        },
        "name": {
          "description": "The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}",
          "type": "string"
        },
        "defaultPermissionPolicy": {
          "description": "The default permission policy for requests for runtime permissions.",
          "enum": ["PERMISSION_POLICY_UNSPECIFIED", "PROMPT", "GRANT", "DENY"],
          "enumDescriptions": ["Policy not specified. If no policy is specified for a permission at any level, then the PROMPT behavior is used by default.", "Prompt the user to grant a permission.", "Automatically grant a permission.", "Automatically deny a permission."],
          "type": "string"
        },
        "persistentPreferredActivities": {
          "description": "Default intent handler activities.",
          "type": "array",
          "items": {"$ref": "PersistentPreferredActivity"}
        },
        "networkEscapeHatchEnabled": {
          "description": "Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.",
          "type": "boolean"
        },
        "systemUpdate": {
          "description": "The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.",
          "$ref": "SystemUpdate"
        },
        "frpAdminEmails": {
          "description": "Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device will not provide factory reset protection.",
          "type": "array",
          "items": {"type": "string"}
        },
        "version": {
          "description": "The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.",
          "type": "string",
          "format": "int64"
        },
        "screenCaptureDisabled": {"description": "Whether screen capture is disabled.", "type": "boolean"},
        "keyguardDisabled": {"description": "Whether the keyguard is disabled.", "type": "boolean"},
        "addUserDisabled": {"description": "Whether adding new users and profiles is disabled.", "type": "boolean"}
      },
      "id": "Policy"
    },
    "Command": {
      "description": "A command.",
      "type": "object",
      "properties": {
        "duration": {
          "description": "The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.",
          "type": "string",
          "format": "google-duration"
        },
        "newPassword": {
          "description": "For commands of type RESET_PASSWORD, optionally specifies the new password.",
          "type": "string"
        },
        "type": {
          "description": "The type of the command.",
          "enum": ["COMMAND_TYPE_UNSPECIFIED", "LOCK", "RESET_PASSWORD", "REBOOT"],
          "enumDescriptions": ["This value is disallowed.", "Lock the device, as if the lock screen timeout had expired.", "Reset the user's password.", "Reboot the device. Only supported on API level 24+."],
          "type": "string"
        },
        "createTime": {
          "description": "The timestamp at which the command was created. The timestamp is automatically generated by the server.",
          "type": "string",
          "format": "google-datetime"
        },
        "resetPasswordFlags": {
          "description": "For commands of type RESET_PASSWORD, optionally specifies flags.",
          "enumDescriptions": ["This value is ignored.", "Don't allow other admins to change the password again until the user has entered it.", "Don't ask for user credentials on device boot.", "Lock the device after password reset."],
          "type": "array",
          "items": {
            "enum": ["RESET_PASSWORD_FLAG_UNSPECIFIED", "REQUIRE_ENTRY", "DO_NOT_ASK_CREDENTIALS_ON_BOOT", "LOCK_NOW"],
            "type": "string"
          }
        }
      },
      "id": "Command"
    },
    "ComplianceRule": {
      "description": "A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.",
      "type": "object",
      "properties": {
        "nonComplianceDetailCondition": {
          "description": "A condition which is satisfied if there exists any matching NonComplianceDetail for the device.",
          "$ref": "NonComplianceDetailCondition"
        },
        "disableApps": {
          "description": "If set to true, the rule includes a mitigating action to disable applications so that the device is effectively disabled, but application data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.",
          "type": "boolean"
        },
        "apiLevelCondition": {
          "description": "A condition which is satisfied if the Android Framework API level on the device does not meet a minimum requirement.",
          "$ref": "ApiLevelCondition"
        }
      },
      "id": "ComplianceRule"
    },
    "ListPoliciesResponse": {
      "description": "Response to a request to list policies for a given enterprise.",
      "type": "object",
      "properties": {
        "policies": {"description": "The list of policies.", "type": "array", "items": {"$ref": "Policy"}},
        "nextPageToken": {
          "description": "If there are more results, a token to retrieve next page of results.",
          "type": "string"
        }
      },
      "id": "ListPoliciesResponse"
    },
    "StatusReportingSettings": {
      "description": "Settings controlling the behavior of status reports.",
      "type": "object",
      "properties": {
        "displayInfoEnabled": {"description": "Whether displays reporting is enabled.", "type": "boolean"},
        "hardwareStatusEnabled": {"description": "Whether hardware status reporting is enabled.", "type": "boolean"},
        "softwareInfoEnabled": {"description": "Whether software info reporting is enabled.", "type": "boolean"},
        "memoryInfoEnabled": {"description": "Whether memory info reporting is enabled.", "type": "boolean"},
        "powerManagementEventsEnabled": {
          "description": "Whether power management event reporting is enabled.",
          "type": "boolean"
        },
        "networkInfoEnabled": {"description": "Whether network info reporting is enabled.", "type": "boolean"}
      },
      "id": "StatusReportingSettings"
    },
    "Display": {
      "description": "Device display information.",
      "type": "object",
      "properties": {
        "refreshRate": {
          "description": "Refresh rate of the display in frames per second.",
          "type": "integer",
          "format": "int32"
        },
        "state": {
          "description": "State of the display.",
          "enum": ["DISPLAY_STATE_UNSPECIFIED", "OFF", "ON", "DOZE", "SUSPENDED"],
          "enumDescriptions": ["This value is disallowed.", "Display is off.", "Display is on.", "Display is dozing in a low power state", "Display is dozing in a suspended low power state."],
          "type": "string"
        },
        "width": {"description": "Display width in pixels.", "type": "integer", "format": "int32"},
        "displayId": {"description": "Unique display id.", "type": "integer", "format": "int32"},
        "name": {"description": "Name of the display.", "type": "string"},
        "density": {"description": "Display density expressed as dots-per-inch.", "type": "integer", "format": "int32"},
        "height": {"description": "Display height in pixels.", "type": "integer", "format": "int32"}
      },
      "id": "Display"
    },
    "SignupUrl": {
      "description": "An enterprise signup URL.",
      "type": "object",
      "properties": {
        "url": {
          "description": "A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.",
          "type": "string"
        },
        "name": {
          "description": "The name of the resource. This must be included in the create enterprise request at the end of the signup flow.",
          "type": "string"
        }
      },
      "id": "SignupUrl"
    },
    "EnrollmentToken": {
      "description": "An enrollment token.",
      "type": "object",
      "properties": {
        "expirationTimestamp": {
          "description": "The expiration time of the token. This is a read-only field generated by the server.",
          "type": "string",
          "format": "google-datetime"
        },
        "policyName": {
          "description": "The name of the policy that will be initially applied to the enrolled device in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the user that owns the device is applied. If user_name also isn't specified, the policy defaults to enterprises/{enterpriseId}/policies/default. It is permissible to only specify the policyId when updating this field as long as the policyId contains no slashes since the rest of the policy name can be inferred from context.",
          "type": "string"
        },
        "name": {
          "description": "The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}",
          "type": "string"
        },
        "duration": {
          "description": "The duration of the token. If not specified, the duration will be 1 hour. The allowed range is 1 minute to 30 days.",
          "type": "string",
          "format": "google-duration"
        },
        "value": {
          "description": "The token value which is passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.",
          "type": "string"
        },
        "additionalData": {
          "description": "Optional, arbitrary data associated with the enrollment token. This could contain, for example, the id of an org unit to which the device is assigned after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.",
          "type": "string"
        },
        "qrCode": {
          "description": "A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.",
          "type": "string"
        }
      },
      "id": "EnrollmentToken"
    },
    "SoftwareInfo": {
      "description": "Information about device software.",
      "type": "object",
      "properties": {
        "androidVersion": {
          "description": "The user visible Android version string, e.g. 6.0.1.",
          "type": "string"
        },
        "androidBuildNumber": {
          "description": "Android build Id string meant for displaying to the user, e.g. shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.",
          "type": "string"
        },
        "androidBuildTime": {"description": "Build time.", "type": "string", "format": "google-datetime"},
        "bootloaderVersion": {"description": "The system bootloader version number, e.g. 0.6.7.", "type": "string"},
        "securityPatchLevel": {"description": "Security patch level, e.g. 2016-05-01.", "type": "string"},
        "deviceKernelVersion": {"description": "Kernel version, e.g. 2.6.32.9-g103d848.", "type": "string"}
      },
      "id": "SoftwareInfo"
    },
    "ManagedPropertyEntry": {
      "description": "An entry of a managed property.",
      "type": "object",
      "properties": {
        "value": {
          "description": "The machine-readable value of the entry, which should be used in the configuration. Not localized.",
          "type": "string"
        }, "name": {"description": "The human-readable name of the value. Localized.", "type": "string"}
      },
      "id": "ManagedPropertyEntry"
    },
    "WebToken": {
      "description": "A web token used to access an embeddable managed Google Play web UI.",
      "type": "object",
      "properties": {
        "value": {
          "description": "The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.",
          "type": "string"
        },
        "permissions": {
          "description": "Permissions the admin may exercise in the embedded UI. The admin must have all of these permissions in order to view the UI.",
          "enumDescriptions": ["This value is ignored.", "The permission to approve apps for the enterprise."],
          "type": "array",
          "items": {"enum": ["WEB_TOKEN_PERMISSION_UNSPECIFIED", "APPROVE_APPS"], "type": "string"}
        },
        "name": {
          "description": "The name of the web token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.",
          "type": "string"
        },
        "parentFrameUrl": {
          "description": "The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.",
          "type": "string"
        }
      },
      "id": "WebToken"
    },
    "Enterprise": {
      "description": "The configuration applied to an enterprise.",
      "type": "object",
      "properties": {
        "pubsubTopic": {
          "description": "When Cloud Pub/Sub notifications are enabled, this field is required to indicate the topic to which the notifications will be published. The format of this field is projects/{project}/topics/{topic}. You must have granted the publish permission on this topic to android-cloud-policy@system.gserviceaccount.com",
          "type": "string"
        },
        "logo": {
          "description": "An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.",
          "$ref": "ExternalData"
        },
        "enabledNotificationTypes": {
          "description": "The notification types to enable via Google Cloud Pub/Sub.",
          "enumDescriptions": ["This value is ignored.", "A notification sent when a device enrolls.", "A notification sent when a device issues a policy compliance report.", "A notification sent when a device issues a status report.", "A notification sent when a device command has completed."],
          "type": "array",
          "items": {
            "enum": ["NOTIFICATION_TYPE_UNSPECIFIED", "ENROLLMENT", "COMPLIANCE_REPORT", "STATUS_REPORT", "COMMAND"],
            "type": "string"
          }
        },
        "name": {
          "description": "The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}",
          "type": "string"
        },
        "primaryColor": {
          "description": "A color in RGB format indicating the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where each component may take a value between 0 and 255 inclusive.",
          "type": "integer",
          "format": "int32"
        },
        "appAutoApprovalEnabled": {
          "description": "Whether app auto-approval is enabled. When enabled, apps installed via policy for this enterprise have all permissions automatically approved. When enabled, it is the caller's responsibility to display the permissions required by an app to the enterprise admin before setting the app to be installed in a policy.",
          "type": "boolean"
        },
        "enterpriseDisplayName": {
          "description": "The name of the enterprise as it will appear to users.",
          "type": "string"
        }
      },
      "id": "Enterprise"
    },
    "ListOperationsResponse": {
      "description": "The response message for Operations.ListOperations.",
      "type": "object",
      "properties": {
        "nextPageToken": {"description": "The standard List next-page token.", "type": "string"},
        "operations": {
          "description": "A list of operations that matches the specified filter in the request.",
          "type": "array",
          "items": {"$ref": "Operation"}
        }
      },
      "id": "ListOperationsResponse"
    },
    "MemoryEvent": {
      "description": "An event related to memory and storage measurements.",
      "type": "object",
      "properties": {
        "byteCount": {
          "description": "The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.",
          "type": "string",
          "format": "int64"
        },
        "eventType": {
          "description": "Event type.",
          "enum": ["MEMORY_EVENT_TYPE_UNSPECIFIED", "RAM_MEASURED", "INTERNAL_STORAGE_MEASURED", "EXTERNAL_STORAGE_DETECTED", "EXTERNAL_STORAGE_REMOVED", "EXTERNAL_STORAGE_MEASURED"],
          "enumDescriptions": ["Unspecified. No events have this type.", "Free space in RAM was measured.", "Free space in internal storage was measured.", "A new external storage medium was detected. The reported byte count is the total capacity of the storage medium.", "An external storage medium was removed. The reported byte count is zero.", "Free space in an external storage medium was measured."],
          "type": "string"
        },
        "createTime": {"description": "The creation time of the event.", "type": "string", "format": "google-datetime"}
      },
      "id": "MemoryEvent"
    },
    "ExternalData": {
      "description": "Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.",
      "type": "object",
      "properties": {
        "url": {
          "description": "The absolute URL to the data, which must use either the http or https scheme. Android Device Policy does not provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.",
          "type": "string"
        },
        "sha256Hash": {
          "description": "The base-64 encoded SHA-256 hash of the content hosted at url. If the content does not match this hash, Android Device Policy will not use the data.",
          "type": "string"
        }
      },
      "id": "ExternalData"
    },
    "UserFacingMessage": {
      "description": "Provides user facing message with locale info. The maximum message length is 4096 characters.",
      "type": "object",
      "properties": {
        "localizedMessages": {
          "description": "A map which contains <locale, message> pairs. The locale is a BCP 47 language code, e.g. en-US, es-ES, fr.",
          "additionalProperties": {"type": "string"},
          "type": "object"
        },
        "defaultMessage": {
          "description": "The default message that gets displayed if no localized message is specified, or the user's locale does not match with any of the localized messages. A default message must be provided if any localized messages are provided.",
          "type": "string"
        }
      },
      "id": "UserFacingMessage"
    },
    "PowerManagementEvent": {
      "description": "A power management event.",
      "type": "object",
      "properties": {
        "batteryLevel": {
          "description": "For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.",
          "type": "number",
          "format": "float"
        },
        "eventType": {
          "description": "Event type.",
          "enum": ["POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED", "BATTERY_LEVEL_COLLECTED", "POWER_CONNECTED", "POWER_DISCONNECTED", "BATTERY_LOW", "BATTERY_OKAY", "BOOT_COMPLETED", "SHUTDOWN"],
          "enumDescriptions": ["Unspecified. No events have this type.", "Battery level was measured.", "The device started charging.", "The device stopped charging.", "The device entered low-power mode.", "The device exited low-power mode.", "The device booted.", "The device shut down."],
          "type": "string"
        },
        "createTime": {"description": "The creation time of the event.", "type": "string", "format": "google-datetime"}
      },
      "id": "PowerManagementEvent"
    },
    "PasswordRequirements": {
      "description": "Requirements for the password used to unlock a device.",
      "type": "object",
      "properties": {
        "passwordMinimumNumeric": {
          "description": "Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "passwordMinimumNonLetter": {
          "description": "Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "maximumFailedPasswordsForWipe": {
          "description": "A device will be wiped after too many incorrect device-unlock passwords have been entered. A value of 0 means there is no restriction.",
          "type": "integer",
          "format": "int32"
        },
        "passwordMinimumLetters": {
          "description": "Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "passwordMinimumUpperCase": {
          "description": "Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "passwordQuality": {
          "description": "The required password quality.",
          "enum": ["PASSWORD_QUALITY_UNSPECIFIED", "BIOMETRIC_WEAK", "SOMETHING", "NUMERIC", "NUMERIC_COMPLEX", "ALPHABETIC", "ALPHANUMERIC", "COMPLEX"],
          "enumDescriptions": ["There are no requirements for the password.", "There must be at least low-security biometric recognition technology to secure the device. This includes technologies that can recognize the identity of an individual to about a 3 digit PIN (false detection is less than 1 in 1,000).", "There must be a password, but there are no restrictions on its characters.", "The password must contain numeric characters.", "The password must contain numeric characters with no repeating (4444) or ordered (1234, 4321, 2468) sequences.", "The password must contain alphabetic (or symbol) characters.", "The password must contain at both numeric and alphabetic (or symbol) characters.", "The password must contain at least a letter, a numerical digit and a special symbol. Other password constraints, for example, password_minimum_letters are enforced."],
          "type": "string"
        },
        "passwordMinimumLength": {
          "description": "The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "passwordExpirationTimeout": {
          "description": "Password expiration timeout.",
          "type": "string",
          "format": "google-duration"
        },
        "passwordMinimumSymbols": {
          "description": "Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        },
        "passwordHistoryLength": {
          "description": "The length of the password history. After setting this, the user will not be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.",
          "type": "integer",
          "format": "int32"
        },
        "passwordMinimumLowerCase": {
          "description": "Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.",
          "type": "integer",
          "format": "int32"
        }
      },
      "id": "PasswordRequirements"
    },
    "HardwareInfo": {
      "description": "Information about device hardware. The fields related to temperature thresholds are only available when hardwareStatusEnabled is true in the device's policy.",
      "type": "object",
      "properties": {
        "gpuThrottlingTemperatures": {
          "description": "GPU throttling temperature thresholds in Celsius for each GPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "cpuShutdownTemperatures": {
          "description": "CPU shutdown temperature thresholds in Celsius for each CPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "gpuShutdownTemperatures": {
          "description": "GPU shutdown temperature thresholds in Celsius for each GPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "manufacturer": {"description": "Manufacturer, e.g. Motorola.", "type": "string"},
        "model": {"description": "The model of the device, e.g. Asus Nexus 7.", "type": "string"},
        "serialNumber": {"description": "The device serial number.", "type": "string"},
        "brand": {"description": "Brand of the device, e.g. Google.", "type": "string"},
        "cpuThrottlingTemperatures": {
          "description": "CPU throttling temperature thresholds in Celsius for each CPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "skinThrottlingTemperatures": {
          "description": "Device skin throttling temperature thresholds in Celsius.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "deviceBasebandVersion": {"description": "Baseband version, e.g. MDM9625_104662.22.05.34p.", "type": "string"},
        "hardware": {"description": "Name of the hardware, e.g. Angler.", "type": "string"},
        "skinShutdownTemperatures": {
          "description": "Device skin shutdown temperature thresholds in Celsius.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "batteryShutdownTemperatures": {
          "description": "Battery shutdown temperature thresholds in Celsius for each battery on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "batteryThrottlingTemperatures": {
          "description": "Battery throttling temperature thresholds in Celsius for each battery on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        }
      },
      "id": "HardwareInfo"
    },
    "Empty": {
      "description": "A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:\nservice Foo {\n  rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n}\nThe JSON representation for Empty is empty JSON object {}.",
      "type": "object",
      "properties": {},
      "id": "Empty"
    },
    "NetworkInfo": {
      "description": "Device network info.",
      "type": "object",
      "properties": {
        "meid": {"description": "MEID number of the CDMA device, e.g. A00000292788E1.", "type": "string"},
        "wifiMacAddress": {"description": "WiFi MAC address of the device, e.g. 7c:11:11:11:11:11.", "type": "string"},
        "imei": {"description": "IMEI number of the GSM device, e.g. A1000031212.", "type": "string"}
      },
      "id": "NetworkInfo"
    },
    "MemoryInfo": {
      "description": "Information about device memory and storage.",
      "type": "object",
      "properties": {
        "totalRam": {"description": "Total RAM on device in bytes.", "type": "string", "format": "int64"},
        "totalInternalStorage": {
          "description": "Total internal storage on device in bytes.",
          "type": "string",
          "format": "int64"
        }
      },
      "id": "MemoryInfo"
    },
    "ApiLevelCondition": {
      "description": "A compliance rule condition which is satisfied if the Android Framework API level on the device does not meet a minimum requirement. There can only be one rule with this type of condition per policy.",
      "type": "object",
      "properties": {
        "minApiLevel": {
          "description": "The minimum desired Android Framework API level. If the device does not meet the minimum requirement, this condition is satisfied. Must be greater than zero.",
          "type": "integer",
          "format": "int32"
        }
      },
      "id": "ApiLevelCondition"
    },
    "SystemUpdate": {
      "description": "Configuration for managing system updates",
      "type": "object",
      "properties": {
        "startMinutes": {
          "description": "If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in device local time. This value must be between 0 and 1439, inclusive.",
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "description": "The type of system update to configure.",
          "enum": ["SYSTEM_UPDATE_TYPE_UNSPECIFIED", "AUTOMATIC", "WINDOWED", "POSTPONE"],
          "enumDescriptions": ["Follow the default update behavior for the device, which typically requires the user to accept system updates.", "Install automatically as soon as an update is available.", "Install automatically within a daily maintenance window. This also configures Play apps to be updated within the window. This is strongly recommended for kiosk devices because this is the only way apps persistently pinned to the foreground can be updated by Play.", "Postpone automatic install up to a maximum of 30 days."],
          "type": "string"
        },
        "endMinutes": {
          "description": "If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.",
          "type": "integer",
          "format": "int32"
        }
      },
      "id": "SystemUpdate"
    },
    "HardwareStatus": {
      "description": "Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.",
      "type": "object",
      "properties": {
        "fanSpeeds": {
          "description": "Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "skinTemperatures": {
          "description": "Current device skin temperatures in Celsius.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "createTime": {
          "description": "The time the measurements were taken.",
          "type": "string",
          "format": "google-datetime"
        },
        "batteryTemperatures": {
          "description": "Current battery temperatures in Celsius for each battery on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "cpuTemperatures": {
          "description": "Current CPU temperatures in Celsius for each CPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "gpuTemperatures": {
          "description": "Current GPU temperatures in Celsius for each GPU on the device.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        },
        "cpuUsages": {
          "description": "CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.",
          "type": "array",
          "items": {"type": "number", "format": "float"}
        }
      },
      "id": "HardwareStatus"
    }
  },
  "revision": "20171030",
  "basePath": "",
  "icons": {
    "x32": "http://www.google.com/images/icons/product/search-32.gif",
    "x16": "http://www.google.com/images/icons/product/search-16.gif"
  },
  "version_module": true,
  "canonicalName": "Android Management",
  "discoveryVersion": "v1",
  "fullyEncodeReservedExpansion": true,
  "baseUrl": "https://androidmanagement.googleapis.com/",
  "name": "androidmanagement",
  "parameters": {
    "access_token": {"description": "OAuth access token.", "type": "string", "location": "query"},
    "prettyPrint": {
      "description": "Returns response with indentations and line breaks.",
      "default": "true",
      "type": "boolean",
      "location": "query"
    },
    "key": {
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
      "type": "string",
      "location": "query"
    },
    "quotaUser": {
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.",
      "type": "string",
      "location": "query"
    },
    "pp": {"description": "Pretty-print response.", "default": "true", "type": "boolean", "location": "query"},
    "fields": {
      "description": "Selector specifying which fields to include in a partial response.",
      "type": "string",
      "location": "query"
    },
    "alt": {
      "description": "Data format for response.",
      "location": "query",
      "enum": ["json", "media", "proto"],
      "default": "json",
      "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"],
      "type": "string"
    },
    "$.xgafv": {
      "description": "V1 error format.",
      "enum": ["1", "2"],
      "enumDescriptions": ["v1 error format", "v2 error format"],
      "type": "string",
      "location": "query"
    },
    "callback": {"description": "JSONP", "type": "string", "location": "query"},
    "oauth_token": {"description": "OAuth 2.0 token for the current user.", "type": "string", "location": "query"},
    "uploadType": {
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").",
      "type": "string",
      "location": "query"
    },
    "bearer_token": {"description": "OAuth bearer token.", "type": "string", "location": "query"},
    "upload_protocol": {
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").",
      "type": "string",
      "location": "query"
    }
  },
  "documentationLink": "https://developers.google.com/android/management",
  "ownerDomain": "google.com",
  "batchPath": "batch",
  "servicePath": "",
  "ownerName": "Google",
  "version": "v1",
  "rootUrl": "https://androidmanagement.googleapis.com/",
  "kind": "discovery#restDescription"
};