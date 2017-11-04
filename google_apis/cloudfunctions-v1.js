module.exports = {"version":"v1","baseUrl":"https://cloudfunctions.googleapis.com/","servicePath":"","description":"API for managing lightweight user-provided functions executed in response to events.","kind":"discovery#restDescription","basePath":"","id":"cloudfunctions:v1","documentationLink":"https://cloud.google.com/functions","revision":"20171101","discoveryVersion":"v1","version_module":true,"schemas":{"OperationMetadataV1Beta2":{"description":"Metadata describing an Operation","type":"object","properties":{"updateTime":{"description":"The last update timestamp of the operation.","format":"google-datetime","type":"string"},"target":{"description":"Target of the operation - for example\nprojects/project-1/locations/region-1/functions/function-1","type":"string"},"request":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The original request that started the operation.","type":"object"},"versionId":{"description":"Version id of the function created or updated by an API call.\nThis field is only pupulated for Create and Update operations.","format":"int64","type":"string"},"type":{"enumDescriptions":["Unknown operation type.","Triggered by CreateFunction call","Triggered by UpdateFunction call","Triggered by DeleteFunction call."],"enum":["OPERATION_UNSPECIFIED","CREATE_FUNCTION","UPDATE_FUNCTION","DELETE_FUNCTION"],"description":"Type of operation.","type":"string"}},"id":"OperationMetadataV1Beta2"},"Status":{"properties":{"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"},"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","type":"array","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"}},"code":{"description":"The status code, which should be an enum value of google.rpc.Code.","format":"int32","type":"integer"}},"id":"Status","description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object"},"CallFunctionRequest":{"description":"Request for the `CallFunction` method.","type":"object","properties":{"data":{"description":"Input to be passed to the function.","type":"string"}},"id":"CallFunctionRequest"},"SourceRepository":{"description":"Describes SourceRepository, used to represent parameters related to\nsource repository where a function is hosted.","type":"object","properties":{"url":{"description":"The URL pointing to the hosted repository where the function is defined.\nThere are supported Cloud Source Repository URLs in the following\nformats:\n\nTo refer to a specific commit:\n`https://source.developers.google.com/projects/*/repos/*/revisions/*/paths/*`\nTo refer to a moveable alias (branch):\n`https://source.developers.google.com/projects/*/repos/*/moveable-aliases/*/paths/*`\nIn particular, to refer to HEAD use `master` moveable alias.\nTo refer to a specific fixed alias (tag):\n`https://source.developers.google.com/projects/*/repos/*/fixed-aliases/*/paths/*`\n\nYou may omit `paths/*` if you want to use the main directory.","type":"string"},"deployedUrl":{"description":"Output only. The URL pointing to the hosted repository where the function\nwere defined at the time of deployment. It always points to a specific\ncommit in the format described above.","type":"string"}},"id":"SourceRepository"},"CloudFunction":{"description":"Describes a Cloud Function that contains user computation executed in\nresponse to an event. It encapsulate function and triggers configurations.","type":"object","properties":{"httpsTrigger":{"$ref":"HttpsTrigger","description":"An HTTPS endpoint type of source that can be triggered via URL."},"serviceAccountEmail":{"description":"Output only. The email of the function's service account.","type":"string"},"description":{"description":"User-provided description of a function.","type":"string"},"timeout":{"description":"The function execution timeout. Execution is considered failed and\ncan be terminated if the function is not completed at the end of the\ntimeout period. Defaults to 60 seconds.","format":"google-duration","type":"string"},"status":{"enum":["CLOUD_FUNCTION_STATUS_UNSPECIFIED","ACTIVE","OFFLINE","DEPLOY_IN_PROGRESS","DELETE_IN_PROGRESS","UNKNOWN"],"description":"Output only. Status of the function deployment.","type":"string","enumDescriptions":["Not specified. Invalid state.","Function has been succesfully deployed and is serving.","Function deployment failed and the function isn’t serving.","Function is being created or updated.","Function is being deleted.","Function deployment failed and the function serving state is undefined.\nThe function should be updated or deleted to move it out of this state."]},"eventTrigger":{"description":"A source that fires events in response to a condition in another service.","$ref":"EventTrigger"},"sourceUploadUrl":{"description":"The Google Cloud Storage signed URL used for source uploading, generated\nby google.cloud.functions.v1.GenerateUploadUrl","type":"string"},"availableMemoryMb":{"description":"The amount of memory in MB available for a function.\nDefaults to 256MB.","format":"int32","type":"integer"},"name":{"description":"A user-defined name of the function. Function names must be unique\nglobally and match pattern `projects/*/locations/*/functions/*`","type":"string"},"versionId":{"description":"Output only.\nThe version identifier of the Cloud Function. Each deployment attempt\nresults in a new version of a function being created.","format":"int64","type":"string"},"sourceArchiveUrl":{"description":"The Google Cloud Storage URL, starting with gs://, pointing to the zip\narchive which contains the function.","type":"string"},"sourceRepository":{"description":"**Beta Feature**\n\nThe source repository where a function is hosted.","$ref":"SourceRepository"},"labels":{"additionalProperties":{"type":"string"},"description":"Labels associated with this Cloud Function.","type":"object"},"entryPoint":{"description":"The name of the function (as defined in source code) that will be\nexecuted. Defaults to the resource name suffix, if not specified. For\nbackward compatibility, if function with given name is not found, then the\nsystem will try to use function named \"function\".\nFor Node.js this is name of a function exported by the module specified\nin `source_location`.","type":"string"},"updateTime":{"description":"Output only. The last update timestamp of a Cloud Function.","format":"google-datetime","type":"string"}},"id":"CloudFunction"},"HttpsTrigger":{"properties":{"url":{"description":"Output only. The deployed url for the function.","type":"string"}},"id":"HttpsTrigger","description":"Describes HttpsTrigger, could be used to connect web hooks to function.","type":"object"},"Location":{"properties":{"labels":{"additionalProperties":{"type":"string"},"description":"Cross-service attributes for the location. For example\n\n    {\"cloud.googleapis.com/region\": \"us-east1\"}","type":"object"},"name":{"description":"Resource name for the location, which may vary between implementations.\nFor example: `\"projects/example-project/locations/us-east1\"`","type":"string"},"locationId":{"description":"The canonical id for this location. For example: `\"us-east1\"`.","type":"string"},"metadata":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"Service-specific metadata. For example the available capacity at the given\nlocation.","type":"object"}},"id":"Location","description":"A resource that represents Google Cloud Platform location.","type":"object"},"GenerateDownloadUrlResponse":{"description":"Response of `GenerateDownloadUrl` method.","type":"object","properties":{"downloadUrl":{"description":"The generated Google Cloud Storage signed URL that should be used for\nfunction source code download.","type":"string"}},"id":"GenerateDownloadUrlResponse"},"Retry":{"properties":{},"id":"Retry","description":"Describes the retry policy in case of function's execution failure.\nA function execution will be retried on any failure.\nA failed execution will be retried up to 7 days with an exponential backoff\n(capped at 10 seconds).\nRetried execution is charged as any other execution.","type":"object"},"GenerateUploadUrlRequest":{"description":"Request of `GenerateSourceUploadUrl` method.","type":"object","properties":{},"id":"GenerateUploadUrlRequest"},"ListOperationsResponse":{"description":"The response message for Operations.ListOperations.","type":"object","properties":{"nextPageToken":{"description":"The standard List next-page token.","type":"string"},"operations":{"description":"A list of operations that matches the specified filter in the request.","type":"array","items":{"$ref":"Operation"}}},"id":"ListOperationsResponse"},"GenerateUploadUrlResponse":{"properties":{"uploadUrl":{"description":"The generated Google Cloud Storage signed URL that should be used for a\nfunction source code upload. The uploaded file should be a zip archive\nwhich contains a function.","type":"string"}},"id":"GenerateUploadUrlResponse","description":"Response of `GenerateSourceUploadUrl` method.","type":"object"},"ListFunctionsResponse":{"properties":{"functions":{"description":"The functions that match the request.","type":"array","items":{"$ref":"CloudFunction"}},"nextPageToken":{"description":"If not empty, indicates that there may be more functions that match\nthe request; this value should be passed in a new\ngoogle.cloud.functions.v1.ListFunctionsRequest\nto get more functions.","type":"string"}},"id":"ListFunctionsResponse","description":"Response for the `ListFunctions` method.","type":"object"},"CallFunctionResponse":{"description":"Response of `CallFunction` method.","type":"object","properties":{"executionId":{"description":"Execution id of function invocation.","type":"string"},"result":{"description":"Result populated for successful execution of synchronous function. Will\nnot be populated if function does not return a result through context.","type":"string"},"error":{"description":"Either system or user-function generated error. Set if execution\nwas not successful.","type":"string"}},"id":"CallFunctionResponse"},"ListLocationsResponse":{"properties":{"locations":{"description":"A list of locations that matches the specified filter in the request.","type":"array","items":{"$ref":"Location"}},"nextPageToken":{"description":"The standard List next-page token.","type":"string"}},"id":"ListLocationsResponse","description":"The response message for Locations.ListLocations.","type":"object"},"EventTrigger":{"properties":{"eventType":{"description":"Required. The type of event to observe. For example:\n`google.storage.object.finalized` and\n`google.firebase.analytics.event.log`.\n\nEvent type consists of three parts:\n 1. namespace: The domain name of the organization in reverse-domain\n    notation (e.g. `acme.net` appears as `net.acme`) and any orginization\n    specific subdivisions. If the organization's top-level domain is `com`,\n    the top-level domain is ommited (e.g. `google.com` appears as\n    `google`). For example, `google.storage` and\n    `google.firebase.analytics`.\n 2. resource type: The type of resource on which event ocurs. For\n    example, the Google Cloud Storage API includes the type `object`.\n 3. action: The action that generates the event. For example, actions for\n    a Google Cloud Storage Object include 'finalize' and 'delete'.\nThese parts are lower case and joined by '.'.","type":"string"},"resource":{"description":"Required. The resource(s) from which to observe events, for example,\n`projects/_/buckets/myBucket`.\n\nNot all syntactically correct values are accepted by all services. For\nexample:\n\n1. The authorization model must support it. Google Cloud Functions\n   only allows EventTriggers to be deployed that observe resources in the\n   same project as the `CloudFunction`.\n2. The resource type must match the pattern expected for an\n   `event_type`. For example, an `EventTrigger` that has an\n   `event_type` of \"google.pubsub.topic.publish\" should have a resource\n   that matches Google Cloud Pub/Sub topics.\n\nAdditionally, some services may support short names when creating an\n`EventTrigger`. These will always be returned in the normalized \"long\"\nformat.\n\nSee each *service's* documentation for supported formats.","type":"string"},"service":{"description":"The hostname of the service that should be observed.\n\nIf no string is provided, the default service implementing the API will\nbe used. For example, `storage.googleapis.com` is the default for all\nevent types in the `google.storage` namespace.","type":"string"},"failurePolicy":{"$ref":"FailurePolicy","description":"Specifies policy for failed executions."}},"id":"EventTrigger","description":"Describes EventTrigger, used to request events be sent from another\nservice.","type":"object"},"FailurePolicy":{"description":"Describes the policy in case of function's execution failure.\nIf empty, then defaults to ignoring failures (i.e. not retrying them).","type":"object","properties":{"retry":{"description":"If specified, then the function will be retried in case of a failure.","$ref":"Retry"}},"id":"FailurePolicy"},"GenerateDownloadUrlRequest":{"properties":{"versionId":{"description":"The optional version of function. If not set, default, current version\nis used.","format":"uint64","type":"string"}},"id":"GenerateDownloadUrlRequest","description":"Request of `GenerateDownloadUrl` method.","type":"object"},"OperationMetadataV1":{"properties":{"updateTime":{"description":"The last update timestamp of the operation.","format":"google-datetime","type":"string"},"target":{"description":"Target of the operation - for example\nprojects/project-1/locations/region-1/functions/function-1","type":"string"},"request":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The original request that started the operation.","type":"object"},"versionId":{"description":"Version id of the function created or updated by an API call.\nThis field is only pupulated for Create and Update operations.","format":"int64","type":"string"},"type":{"enum":["OPERATION_UNSPECIFIED","CREATE_FUNCTION","UPDATE_FUNCTION","DELETE_FUNCTION"],"description":"Type of operation.","type":"string","enumDescriptions":["Unknown operation type.","Triggered by CreateFunction call","Triggered by UpdateFunction call","Triggered by DeleteFunction call."]}},"id":"OperationMetadataV1","description":"Metadata describing an Operation","type":"object"},"Operation":{"properties":{"done":{"description":"If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.","type":"boolean"},"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.","type":"object"},"name":{"description":"The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.","type":"string"},"error":{"description":"The error result of the operation in case of failure or cancellation.","$ref":"Status"},"metadata":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.","type":"object"}},"id":"Operation","description":"This resource represents a long-running operation that is the result of a\nnetwork API call.","type":"object"}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","canonicalName":"Cloud Functions","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://cloudfunctions.googleapis.com/","ownerDomain":"google.com","name":"cloudfunctions","batchPath":"batch","fullyEncodeReservedExpansion":true,"title":"Google Cloud Functions API","ownerName":"Google","resources":{"operations":{"methods":{"list":{"httpMethod":"GET","response":{"$ref":"ListOperationsResponse"},"parameterOrder":[],"parameters":{"filter":{"description":"The standard list filter.","type":"string","location":"query"},"name":{"location":"query","description":"The name of the operation's parent resource.","type":"string"},"pageToken":{"description":"The standard list page token.","type":"string","location":"query"},"pageSize":{"description":"The standard list page size.","format":"int32","type":"integer","location":"query"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/operations","id":"cloudfunctions.operations.list","path":"v1/operations","description":"Lists operations that match the specified filter in the request. If the\nserver doesn't support this method, it returns `UNIMPLEMENTED`.\n\nNOTE: the `name` binding allows API services to override the binding\nto use different resource name schemes, such as `users/*/operations`. To\noverride the binding, API services can add a binding such as\n`\"/v1/{name=users/*}/operations\"` to their service configuration.\nFor backwards compatibility, the default name includes the operations\ncollection id, however overriding users must ensure the name binding\nis the parent resource, without the operations collection id."},"get":{"path":"v1/{+name}","id":"cloudfunctions.operations.get","description":"Gets the latest state of a long-running operation.  Clients can use this\nmethod to poll the operation result at intervals as recommended by the API\nservice.","response":{"$ref":"Operation"},"parameterOrder":["name"],"httpMethod":"GET","parameters":{"name":{"pattern":"^operations/[^/]+$","location":"path","description":"The name of the operation resource.","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/operations/{operationsId}"}}},"projects":{"resources":{"locations":{"resources":{"functions":{"methods":{"create":{"id":"cloudfunctions.projects.locations.functions.create","path":"v1/{+location}/functions","request":{"$ref":"CloudFunction"},"description":"Creates a new function. If a function with the given name already exists in\nthe specified project, the long running operation will return\n`ALREADY_EXISTS` error.","httpMethod":"POST","parameterOrder":["location"],"response":{"$ref":"Operation"},"parameters":{"location":{"pattern":"^projects/[^/]+/locations/[^/]+$","location":"path","description":"The project and location in which the function should be created, specified\nin the format `projects/*/locations/*`","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions"},"call":{"id":"cloudfunctions.projects.locations.functions.call","path":"v1/{+name}:call","request":{"$ref":"CallFunctionRequest"},"description":"Invokes synchronously deployed function. To be used for testing, very\nlimited traffic allowed.","httpMethod":"POST","parameterOrder":["name"],"response":{"$ref":"CallFunctionResponse"},"parameters":{"name":{"description":"The name of the function to be called.","required":true,"type":"string","pattern":"^projects/[^/]+/locations/[^/]+/functions/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:call"},"generateUploadUrl":{"httpMethod":"POST","parameterOrder":["parent"],"response":{"$ref":"GenerateUploadUrlResponse"},"parameters":{"parent":{"pattern":"^projects/[^/]+/locations/[^/]+$","location":"path","description":"The project and location in which the Google Cloud Storage signed URL\nshould be generated, specified in the format `projects/*/locations/*","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions:generateUploadUrl","id":"cloudfunctions.projects.locations.functions.generateUploadUrl","path":"v1/{+parent}/functions:generateUploadUrl","request":{"$ref":"GenerateUploadUrlRequest"},"description":"Returns a signed URL for uploading a function source code.\nFor more information about the signed URL usage see:\nhttps://cloud.google.com/storage/docs/access-control/signed-urls\nOnce the function source code upload is complete, the used signed\nURL should be provided in CreateFunction or UpdateFunction request\nas a reference to the function source code."},"generateDownloadUrl":{"response":{"$ref":"GenerateDownloadUrlResponse"},"parameterOrder":["name"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"name":{"pattern":"^projects/[^/]+/locations/[^/]+/functions/[^/]+$","location":"path","description":"The name of function for which source code Google Cloud Storage signed\nURL should be generated.","required":true,"type":"string"}},"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}:generateDownloadUrl","path":"v1/{+name}:generateDownloadUrl","id":"cloudfunctions.projects.locations.functions.generateDownloadUrl","description":"Returns a signed URL for downloading deployed function source code.\nThe URL is only valid for a limited period and should be used within\nminutes after generation.\nFor more information about the signed URL usage see:\nhttps://cloud.google.com/storage/docs/access-control/signed-urls","request":{"$ref":"GenerateDownloadUrlRequest"}},"get":{"description":"Returns a function with the given name from the requested project.","response":{"$ref":"CloudFunction"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"name":{"description":"The name of the function which details should be obtained.","required":true,"type":"string","pattern":"^projects/[^/]+/locations/[^/]+/functions/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}","path":"v1/{+name}","id":"cloudfunctions.projects.locations.functions.get"},"patch":{"response":{"$ref":"Operation"},"parameterOrder":["name"],"httpMethod":"PATCH","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"updateMask":{"location":"query","description":"Required list of fields to be updated in this request.","format":"google-fieldmask","type":"string"},"name":{"description":"A user-defined name of the function. Function names must be unique\nglobally and match pattern `projects/*/locations/*/functions/*`","required":true,"type":"string","pattern":"^projects/[^/]+/locations/[^/]+/functions/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}","path":"v1/{+name}","id":"cloudfunctions.projects.locations.functions.patch","description":"Updates existing function.","request":{"$ref":"CloudFunction"}},"delete":{"response":{"$ref":"Operation"},"parameterOrder":["name"],"httpMethod":"DELETE","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"name":{"pattern":"^projects/[^/]+/locations/[^/]+/functions/[^/]+$","location":"path","description":"The name of the function which should be deleted.","required":true,"type":"string"}},"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions/{functionsId}","path":"v1/{+name}","id":"cloudfunctions.projects.locations.functions.delete","description":"Deletes a function with the given name from the specified project. If the\ngiven function is used by some trigger, the trigger will be updated to\nremove this function."},"list":{"description":"Returns a list of functions that belong to the requested project.","httpMethod":"GET","response":{"$ref":"ListFunctionsResponse"},"parameterOrder":["parent"],"parameters":{"parent":{"pattern":"^projects/[^/]+/locations/[^/]+$","location":"path","description":"The project and location from which the function should be listed,\nspecified in the format `projects/*/locations/*`\nIf you want to list functions in all locations, use \"-\" in place of a\nlocation.","required":true,"type":"string"},"pageToken":{"description":"The value returned by the last\n`ListFunctionsResponse`; indicates that\nthis is a continuation of a prior `ListFunctions` call, and that the\nsystem should return the next page of data.","type":"string","location":"query"},"pageSize":{"description":"Maximum number of functions to return per call.","format":"int32","type":"integer","location":"query"}},"scopes":["https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1/projects/{projectsId}/locations/{locationsId}/functions","id":"cloudfunctions.projects.locations.functions.list","path":"v1/{+parent}/functions"}}}},"methods":{"list":{"response":{"$ref":"ListLocationsResponse"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform"],"parameters":{"name":{"description":"The resource that owns the locations collection, if applicable.","required":true,"type":"string","pattern":"^projects/[^/]+$","location":"path"},"pageToken":{"description":"The standard list page token.","type":"string","location":"query"},"pageSize":{"location":"query","description":"The standard list page size.","format":"int32","type":"integer"},"filter":{"description":"The standard list filter.","type":"string","location":"query"}},"flatPath":"v1/projects/{projectsId}/locations","path":"v1/{+name}/locations","id":"cloudfunctions.projects.locations.list","description":"Lists information about the supported locations for this service."}}}}}},"parameters":{"oauth_token":{"description":"OAuth 2.0 token for the current user.","type":"string","location":"query"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","type":"boolean","default":"true"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"location":"query","description":"JSONP","type":"string"},"alt":{"enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"location":"query","description":"Pretty-print response.","type":"boolean","default":"true"}}};