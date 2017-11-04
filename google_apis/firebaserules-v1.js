module.exports = {"title":"Firebase Rules API","ownerName":"Google","resources":{"projects":{"methods":{"test":{"request":{"$ref":"TestRulesetRequest"},"description":"Test `Source` for syntactic and semantic correctness. Issues present, if\nany, will be returned to the caller with a description, severity, and\nsource location.\n\nThe test method may be executed with `Source` or a `Ruleset` name.\nPassing `Source` is useful for unit testing new rules. Passing a `Ruleset`\nname is useful for regression testing an existing rule.\n\nThe following is an example of `Source` that permits users to upload images\nto a bucket bearing their user id and matching the correct metadata:\n\n_*Example*_\n\n    // Users are allowed to subscribe and unsubscribe to the blog.\n    service firebase.storage {\n      match /users/{userId}/images/{imageName} {\n          allow write: if userId == request.auth.uid\n              && (imageName.matches('*.png$')\n              || imageName.matches('*.jpg$'))\n              && resource.mimeType.matches('^image/')\n      }\n    }","response":{"$ref":"TestRulesetResponse"},"parameterOrder":["name"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"parameters":{"name":{"description":"Tests may either provide `source` or a `Ruleset` resource name.\n\nFor tests against `source`, the resource name must refer to the project:\nFormat: `projects/{project_id}`\n\nFor tests against a `Ruleset`, this must be the `Ruleset` resource name:\nFormat: `projects/{project_id}/rulesets/{ruleset_id}`","type":"string","required":true,"pattern":"^projects/.+$","location":"path"}},"flatPath":"v1/projects/{projectsId}:test","id":"firebaserules.projects.test","path":"v1/{+name}:test"}},"resources":{"rulesets":{"methods":{"create":{"parameters":{"name":{"location":"path","description":"Resource name for Project which owns this `Ruleset`.\n\nFormat: `projects/{project_id}`","type":"string","required":true,"pattern":"^projects/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"flatPath":"v1/projects/{projectsId}/rulesets","id":"firebaserules.projects.rulesets.create","path":"v1/{+name}/rulesets","description":"Create a `Ruleset` from `Source`.\n\nThe `Ruleset` is given a unique generated name which is returned to the\ncaller. `Source` containing syntactic or semantics errors will result in an\nerror response indicating the first error encountered. For a detailed view\nof `Source` issues, use TestRuleset.","request":{"$ref":"Ruleset"},"response":{"$ref":"Ruleset"},"parameterOrder":["name"],"httpMethod":"POST"},"delete":{"response":{"$ref":"Empty"},"parameterOrder":["name"],"httpMethod":"DELETE","parameters":{"name":{"location":"path","description":"Resource name for the ruleset to delete.\n\nFormat: `projects/{project_id}/rulesets/{ruleset_id}`","type":"string","required":true,"pattern":"^projects/[^/]+/rulesets/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"flatPath":"v1/projects/{projectsId}/rulesets/{rulesetsId}","id":"firebaserules.projects.rulesets.delete","path":"v1/{+name}","description":"Delete a `Ruleset` by resource name.\n\nIf the `Ruleset` is referenced by a `Release` the operation will fail."},"list":{"id":"firebaserules.projects.rulesets.list","path":"v1/{+name}/rulesets","description":"List `Ruleset` metadata only and optionally filter the results by `Ruleset`\nname.\n\nThe full `Source` contents of a `Ruleset` may be retrieved with\nGetRuleset.","response":{"$ref":"ListRulesetsResponse"},"parameterOrder":["name"],"httpMethod":"GET","parameters":{"filter":{"location":"query","description":"`Ruleset` filter. The list method supports filters with restrictions on\n`Ruleset.name`.\n\nFilters on `Ruleset.create_time` should use the `date` function which\nparses strings that conform to the RFC 3339 date/time specifications.\n\nExample: `create_time > date(\"2017-01-01\") AND name=UUID-*`","type":"string"},"pageToken":{"description":"Next page token for loading the next batch of `Ruleset` instances.","type":"string","location":"query"},"name":{"pattern":"^projects/[^/]+$","location":"path","description":"Resource name for the project.\n\nFormat: `projects/{project_id}`","type":"string","required":true},"pageSize":{"format":"int32","description":"Page size to load. Maximum of 100. Defaults to 10.\nNote: `page_size` is just a hint and the service may choose to load less\nthan `page_size` due to the size of the output. To traverse all of the\nreleases, caller should iterate until the `page_token` is empty.","type":"integer","location":"query"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"flatPath":"v1/projects/{projectsId}/rulesets"},"get":{"parameters":{"name":{"pattern":"^projects/[^/]+/rulesets/[^/]+$","location":"path","description":"Resource name for the ruleset to get.\n\nFormat: `projects/{project_id}/rulesets/{ruleset_id}`","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"flatPath":"v1/projects/{projectsId}/rulesets/{rulesetsId}","path":"v1/{+name}","id":"firebaserules.projects.rulesets.get","description":"Get a `Ruleset` by name including the full `Source` contents.","httpMethod":"GET","parameterOrder":["name"],"response":{"$ref":"Ruleset"}}}},"releases":{"methods":{"getExecutable":{"response":{"$ref":"GetReleaseExecutableResponse"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"parameters":{"name":{"location":"path","description":"Resource name of the `Release`.\n\nFormat: `projects/{project_id}/releases/{release_id}`","type":"string","required":true,"pattern":"^projects/[^/]+/releases/.+$"},"executableVersion":{"description":"The requested runtime executable version.\nDefaults to FIREBASE_RULES_EXECUTABLE_V1","type":"string","location":"query","enum":["RELEASE_EXECUTABLE_VERSION_UNSPECIFIED","FIREBASE_RULES_EXECUTABLE_V1","FIREBASE_RULES_EXECUTABLE_V2"]}},"flatPath":"v1/projects/{projectsId}/releases/{releasesId}:getExecutable","id":"firebaserules.projects.releases.getExecutable","path":"v1/{+name}:getExecutable","description":"Get the `Release` executable to use when enforcing rules."},"delete":{"response":{"$ref":"Empty"},"parameterOrder":["name"],"httpMethod":"DELETE","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"parameters":{"name":{"location":"path","description":"Resource name for the `Release` to delete.\n\nFormat: `projects/{project_id}/releases/{release_id}`","type":"string","required":true,"pattern":"^projects/[^/]+/releases/.+$"}},"flatPath":"v1/projects/{projectsId}/releases/{releasesId}","id":"firebaserules.projects.releases.delete","path":"v1/{+name}","description":"Delete a `Release` by resource name."},"list":{"httpMethod":"GET","response":{"$ref":"ListReleasesResponse"},"parameterOrder":["name"],"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"parameters":{"pageToken":{"description":"Next page token for the next batch of `Release` instances.","type":"string","location":"query"},"name":{"location":"path","description":"Resource name for the project.\n\nFormat: `projects/{project_id}`","type":"string","required":true,"pattern":"^projects/[^/]+$"},"pageSize":{"format":"int32","description":"Page size to load. Maximum of 100. Defaults to 10.\nNote: `page_size` is just a hint and the service may choose to load fewer\nthan `page_size` results due to the size of the output. To traverse all of\nthe releases, the caller should iterate until the `page_token` on the\nresponse is empty.","type":"integer","location":"query"},"filter":{"type":"string","location":"query","description":"`Release` filter. The list method supports filters with restrictions on the\n`Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.\n\nExample 1: A filter of 'name=prod*' might return `Release`s with names\nwithin 'projects/foo' prefixed with 'prod':\n\nName                          | Ruleset Name\n------------------------------|-------------\nprojects/foo/releases/prod    | projects/foo/rulesets/uuid1234\nprojects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234\nprojects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888\n\nExample 2: A filter of `name=prod* ruleset_name=uuid1234` would return only\n`Release` instances for 'projects/foo' with names prefixed with 'prod'\nreferring to the same `Ruleset` name of 'uuid1234':\n\nName                          | Ruleset Name\n------------------------------|-------------\nprojects/foo/releases/prod    | projects/foo/rulesets/1234\nprojects/foo/releases/prod/v1 | projects/foo/rulesets/1234\n\nIn the examples, the filter parameters refer to the search filters are\nrelative to the project. Fully qualified prefixed may also be used. e.g.\n`test_suite_name=projects/foo/testsuites/uuid1`"}},"flatPath":"v1/projects/{projectsId}/releases","path":"v1/{+name}/releases","id":"firebaserules.projects.releases.list","description":"List the `Release` values for a project. This list may optionally be\nfiltered by `Release` name, `Ruleset` name, `TestSuite` name, or any\ncombination thereof."},"create":{"description":"Create a `Release`.\n\nRelease names should reflect the developer's deployment practices. For\nexample, the release name may include the environment name, application\nname, application version, or any other name meaningful to the developer.\nOnce a `Release` refers to a `Ruleset`, the rules can be enforced by\nFirebase Rules-enabled services.\n\nMore than one `Release` may be 'live' concurrently. Consider the following\nthree `Release` names for `projects/foo` and the `Ruleset` to which they\nrefer.\n\nRelease Name                    | Ruleset Name\n--------------------------------|-------------\nprojects/foo/releases/prod      | projects/foo/rulesets/uuid123\nprojects/foo/releases/prod/beta | projects/foo/rulesets/uuid123\nprojects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456\n\nThe table reflects the `Ruleset` rollout in progress. The `prod` and\n`prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`\nrefers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be\nupdated using the UpdateRelease method.","request":{"$ref":"Release"},"response":{"$ref":"Release"},"parameterOrder":["name"],"httpMethod":"POST","parameters":{"name":{"description":"Resource name for the project which owns this `Release`.\n\nFormat: `projects/{project_id}`","type":"string","required":true,"pattern":"^projects/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"flatPath":"v1/projects/{projectsId}/releases","id":"firebaserules.projects.releases.create","path":"v1/{+name}/releases"},"patch":{"response":{"$ref":"Release"},"parameterOrder":["name"],"httpMethod":"PATCH","parameters":{"name":{"location":"path","description":"Resource name for the project which owns this `Release`.\n\nFormat: `projects/{project_id}`","type":"string","required":true,"pattern":"^projects/[^/]+/releases/.+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"flatPath":"v1/projects/{projectsId}/releases/{releasesId}","id":"firebaserules.projects.releases.patch","path":"v1/{+name}","description":"Update a `Release` via PATCH.\n\nOnly updates to the `ruleset_name` and `test_suite_name` fields will be\nhonored. `Release` rename is not supported. To create a `Release` use the\nCreateRelease method.","request":{"$ref":"UpdateReleaseRequest"}},"get":{"httpMethod":"GET","response":{"$ref":"Release"},"parameterOrder":["name"],"parameters":{"name":{"description":"Resource name of the `Release`.\n\nFormat: `projects/{project_id}/releases/{release_id}`","type":"string","required":true,"pattern":"^projects/[^/]+/releases/.+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/firebase.readonly"],"flatPath":"v1/projects/{projectsId}/releases/{releasesId}","path":"v1/{+name}","id":"firebaserules.projects.releases.get","description":"Get a `Release` by name."},"update":{"httpMethod":"PUT","parameterOrder":["name"],"response":{"$ref":"Release"},"parameters":{"name":{"pattern":"^projects/[^/]+/releases/.+$","location":"path","description":"Resource name for the `Release`.\n\n`Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`\nwhich affords developers a great deal of flexibility in mapping the name\nto the style that best fits their existing development practices. For\nexample, a name could refer to an environment, an app, a version, or some\ncombination of three.\n\nIn the table below, for the project name `projects/foo`, the following\nrelative release paths show how flat and structured names might be chosen\nto match a desired development / deployment strategy.\n\nUse Case     | Flat Name           | Structured Name\n-------------|---------------------|----------------\nEnvironments | releases/qa         | releases/qa\nApps         | releases/app1_qa    | releases/app1/qa\nVersions     | releases/app1_v2_qa | releases/app1/v2/qa\n\nThe delimiter between the release name path elements can be almost anything\nand it should work equally well with the release name list filter, but in\nmany ways the structured paths provide a clearer picture of the\nrelationship between `Release` instances.\n\nFormat: `projects/{project_id}/releases/{release_id}`","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/firebase"],"flatPath":"v1/projects/{projectsId}/releases/{releasesId}","path":"v1/{+name}","id":"firebaserules.projects.releases.update","description":"Update a `Release`.\n\nOnly updates to the `ruleset_name` and `test_suite_name` fields will be\nhonored. `Release` rename is not supported. To create a `Release` use the\nCreateRelease method.","request":{"$ref":"Release"}}}}}}},"parameters":{"callback":{"location":"query","description":"JSONP","type":"string"},"$.xgafv":{"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"]},"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","default":"true","type":"boolean"},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"}},"version":"v1","baseUrl":"https://firebaserules.googleapis.com/","servicePath":"","description":"Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.\n","kind":"discovery#restDescription","basePath":"","id":"firebaserules:v1","documentationLink":"https://firebase.google.com/docs/storage/security","revision":"20171021","discoveryVersion":"v1","version_module":true,"schemas":{"Empty":{"description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.","type":"object","properties":{},"id":"Empty"},"FunctionMock":{"type":"object","properties":{"function":{"description":"The name of the function.\n\nThe function name must match one provided by a service declaration.","type":"string"},"result":{"$ref":"Result","description":"The mock result of the function call."},"args":{"description":"The list of `Arg` values to match. The order in which the arguments are\nprovided is the order in which they must appear in the function\ninvocation.","items":{"$ref":"Arg"},"type":"array"}},"id":"FunctionMock","description":"Mock function definition.\n\nMocks must refer to a function declared by the target service. The type of\nthe function args and result will be inferred at test time. If either the\narg or result values are not compatible with function type declaration, the\nrequest will be considered invalid.\n\nMore than one `FunctionMock` may be provided for a given function name so\nlong as the `Arg` matchers are distinct. There may be only one function\nfor a given overload where all `Arg` values are `Arg.any_value`."},"GetReleaseExecutableResponse":{"description":"The response for FirebaseRulesService.GetReleaseExecutable","type":"object","properties":{"executableVersion":{"description":"The Rules runtime version of the executable.","type":"string","enumDescriptions":["Executable format unspecified.\nDefaults to FIREBASE_RULES_EXECUTABLE_V1","Firebase Rules syntax 'rules2' executable versions:\nCustom AST for use with Java clients.","CEL-based executable for use with C++ clients."],"enum":["RELEASE_EXECUTABLE_VERSION_UNSPECIFIED","FIREBASE_RULES_EXECUTABLE_V1","FIREBASE_RULES_EXECUTABLE_V2"]},"executable":{"format":"byte","description":"Executable view of the `Ruleset` referenced by the `Release`.","type":"string"},"updateTime":{"format":"google-datetime","description":"Timestamp for the most recent `Release.update_time`.","type":"string"},"rulesetName":{"description":"`Ruleset` name associated with the `Release` executable.","type":"string"},"language":{"enumDescriptions":["Language unspecified. Defaults to FIREBASE_RULES.","Firebase Rules language.","Event Flow triggers."],"enum":["LANGUAGE_UNSPECIFIED","FIREBASE_RULES","EVENT_FLOW_TRIGGERS"],"description":"`Language` used to generate the executable bytes.","type":"string"}},"id":"GetReleaseExecutableResponse"},"Source":{"description":"`Source` is one or more `File` messages comprising a logical set of rules.","type":"object","properties":{"files":{"description":"`File` set constituting the `Source` bundle.","items":{"$ref":"File"},"type":"array"}},"id":"Source"},"Result":{"id":"Result","description":"Possible result values from the function mock invocation.","type":"object","properties":{"undefined":{"$ref":"Empty","description":"The result is undefined, meaning the result could not be computed."},"value":{"description":"The result is an actual value. The type of the value must match that\nof the type declared by the service.","type":"any"}}},"SourcePosition":{"properties":{"column":{"format":"int32","description":"First column on the source line associated with the source fragment.","type":"integer"},"fileName":{"description":"Name of the `File`.","type":"string"},"line":{"format":"int32","description":"Line number of the source fragment. 1-based.","type":"integer"}},"id":"SourcePosition","description":"Position in the `Source` content including its line, column number, and an\nindex of the `File` in the `Source` message. Used for debug purposes.","type":"object"},"TestCase":{"description":"`TestCase` messages provide the request context and an expectation as to\nwhether the given context will be allowed or denied. Test cases may specify\nthe `request`, `resource`, and `function_mocks` to mock a function call to\na service-provided function.\n\nThe `request` object represents context present at request-time.\n\nThe `resource` is the value of the target resource as it appears in\npersistent storage before the request is executed.","type":"object","properties":{"functionMocks":{"description":"Optional function mocks for service-defined functions. If not set, any\nservice defined function is expected to return an error, which may or may\nnot influence the test outcome.","items":{"$ref":"FunctionMock"},"type":"array"},"resource":{"description":"Optional resource value as it appears in persistent storage before the\nrequest is fulfilled.\n\nThe resource type depends on the `request.path` value.","type":"any"},"expectation":{"enumDescriptions":["Unspecified expectation.","Expect an allowed result.","Expect a denied result."],"enum":["EXPECTATION_UNSPECIFIED","ALLOW","DENY"],"description":"Test expectation.","type":"string"},"request":{"description":"Request context.\n\nThe exact format of the request context is service-dependent. See the\nappropriate service documentation for information about the supported\nfields and types on the request. Minimally, all services support the\nfollowing fields and types:\n\nRequest field  | Type\n---------------|-----------------\nauth.uid       | `string`\nauth.token     | `map<string, string>`\nheaders        | `map<string, string>`\nmethod         | `string`\nparams         | `map<string, string>`\npath           | `string`\ntime           | `google.protobuf.Timestamp`\n\nIf the request value is not well-formed for the service, the request will\nbe rejected as an invalid argument.","type":"any"}},"id":"TestCase"},"Ruleset":{"description":"`Ruleset` is an immutable copy of `Source` with a globally unique identifier\nand a creation time.","type":"object","properties":{"name":{"description":"Name of the `Ruleset`. The ruleset_id is auto generated by the service.\nFormat: `projects/{project_id}/rulesets/{ruleset_id}`\nOutput only.","type":"string"},"source":{"description":"`Source` for the `Ruleset`.","$ref":"Source"},"createTime":{"format":"google-datetime","description":"Time the `Ruleset` was created.\nOutput only.","type":"string"}},"id":"Ruleset"},"TestRulesetRequest":{"type":"object","properties":{"testSuite":{"description":"Inline `TestSuite` to run.","$ref":"TestSuite"},"source":{"$ref":"Source","description":"Optional `Source` to be checked for correctness.\n\nThis field must not be set when the resource name refers to a `Ruleset`."}},"id":"TestRulesetRequest","description":"The request for FirebaseRulesService.TestRuleset."},"Issue":{"description":"Issues include warnings, errors, and deprecation notices.","type":"object","properties":{"sourcePosition":{"$ref":"SourcePosition","description":"Position of the issue in the `Source`."},"severity":{"enumDescriptions":["An unspecified severity.","Deprecation issue for statements and method that may no longer be\nsupported or maintained.","Warnings such as: unused variables.","Errors such as: unmatched curly braces or variable redefinition."],"enum":["SEVERITY_UNSPECIFIED","DEPRECATION","WARNING","ERROR"],"description":"The severity of the issue.","type":"string"},"description":{"description":"Short error description.","type":"string"}},"id":"Issue"},"ListReleasesResponse":{"description":"The response for FirebaseRulesService.ListReleases.","type":"object","properties":{"nextPageToken":{"description":"The pagination token to retrieve the next page of results. If the value is\nempty, no further results remain.","type":"string"},"releases":{"description":"List of `Release` instances.","items":{"$ref":"Release"},"type":"array"}},"id":"ListReleasesResponse"},"FunctionCall":{"description":"Represents a service-defined function call that was invoked during test\nexecution.","type":"object","properties":{"args":{"description":"The arguments that were provided to the function.","items":{"type":"any"},"type":"array"},"function":{"description":"Name of the function invoked.","type":"string"}},"id":"FunctionCall"},"File":{"description":"`File` containing source content.","type":"object","properties":{"fingerprint":{"format":"byte","description":"Fingerprint (e.g. github sha) associated with the `File`.","type":"string"},"name":{"description":"File name.","type":"string"},"content":{"description":"Textual Content.","type":"string"}},"id":"File"},"Release":{"description":"`Release` is a named reference to a `Ruleset`. Once a `Release` refers to a\n`Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.","type":"object","properties":{"createTime":{"format":"google-datetime","description":"Time the release was created.\nOutput only.","type":"string"},"updateTime":{"format":"google-datetime","description":"Time the release was updated.\nOutput only.","type":"string"},"rulesetName":{"description":"Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must\nexist the `Release` to be created.","type":"string"},"name":{"type":"string","description":"Resource name for the `Release`.\n\n`Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`\nwhich affords developers a great deal of flexibility in mapping the name\nto the style that best fits their existing development practices. For\nexample, a name could refer to an environment, an app, a version, or some\ncombination of three.\n\nIn the table below, for the project name `projects/foo`, the following\nrelative release paths show how flat and structured names might be chosen\nto match a desired development / deployment strategy.\n\nUse Case     | Flat Name           | Structured Name\n-------------|---------------------|----------------\nEnvironments | releases/qa         | releases/qa\nApps         | releases/app1_qa    | releases/app1/qa\nVersions     | releases/app1_v2_qa | releases/app1/v2/qa\n\nThe delimiter between the release name path elements can be almost anything\nand it should work equally well with the release name list filter, but in\nmany ways the structured paths provide a clearer picture of the\nrelationship between `Release` instances.\n\nFormat: `projects/{project_id}/releases/{release_id}`"}},"id":"Release"},"TestRulesetResponse":{"description":"The response for FirebaseRulesService.TestRuleset.","type":"object","properties":{"testResults":{"description":"The set of test results given the test cases in the `TestSuite`.\nThe results will appear in the same order as the test cases appear in the\n`TestSuite`.","items":{"$ref":"TestResult"},"type":"array"},"issues":{"description":"Syntactic and semantic `Source` issues of varying severity. Issues of\n`ERROR` severity will prevent tests from executing.","items":{"$ref":"Issue"},"type":"array"}},"id":"TestRulesetResponse"},"ListRulesetsResponse":{"description":"The response for FirebaseRulesService.ListRulesets.","type":"object","properties":{"nextPageToken":{"description":"The pagination token to retrieve the next page of results. If the value is\nempty, no further results remain.","type":"string"},"rulesets":{"description":"List of `Ruleset` instances.","items":{"$ref":"Ruleset"},"type":"array"}},"id":"ListRulesetsResponse"},"TestResult":{"properties":{"functionCalls":{"description":"The set of function calls made to service-defined methods.\n\nFunction calls are included in the order in which they are encountered\nduring evaluation, are provided for both mocked and unmocked functions,\nand included on the response regardless of the test `state`.","items":{"$ref":"FunctionCall"},"type":"array"},"debugMessages":{"description":"Debug messages related to test execution issues encountered during\nevaluation.\n\nDebug messages may be related to too many or too few invocations of\nfunction mocks or to runtime errors that occur during evaluation.\n\nFor example: ```Unable to read variable [name: \"resource\"]```","items":{"type":"string"},"type":"array"},"state":{"type":"string","enumDescriptions":["Test state is not set.","Test is a success.","Test is a failure."],"enum":["STATE_UNSPECIFIED","SUCCESS","FAILURE"],"description":"State of the test."},"errorPosition":{"$ref":"SourcePosition","description":"Position in the `Source` or `Ruleset` where the principle runtime error\noccurs.\n\nEvaluation of an expression may result in an error. Rules are deny by\ndefault, so a `DENY` expectation when an error is generated is valid.\nWhen there is a `DENY` with an error, the `SourcePosition` is returned.\n\nE.g. `error_position { line: 19 column: 37 }`"}},"id":"TestResult","description":"Test result message containing the state of the test as well as a\ndescription and source position for test failures.","type":"object"},"Arg":{"type":"object","properties":{"anyValue":{"description":"Argument matches any value provided.","$ref":"Empty"},"exactValue":{"type":"any","description":"Argument exactly matches value provided."}},"id":"Arg","description":"Arg matchers for the mock function."},"TestSuite":{"description":"`TestSuite` is a collection of `TestCase` instances that validate the logical\ncorrectness of a `Ruleset`. The `TestSuite` may be referenced in-line within\na `TestRuleset` invocation or as part of a `Release` object as a pre-release\ncheck.","type":"object","properties":{"testCases":{"description":"Collection of test cases associated with the `TestSuite`.","items":{"$ref":"TestCase"},"type":"array"}},"id":"TestSuite"},"UpdateReleaseRequest":{"description":"The request for FirebaseRulesService.UpdateReleasePatch.","type":"object","properties":{"release":{"$ref":"Release","description":"`Release` to update."},"updateMask":{"format":"google-fieldmask","description":"Specifies which fields to update.","type":"string"}},"id":"UpdateReleaseRequest"}},"protocol":"rest","icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"canonicalName":"Firebase Rules","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"},"https://www.googleapis.com/auth/firebase.readonly":{"description":"View all your Firebase data and settings"},"https://www.googleapis.com/auth/firebase":{"description":"View and administer all your Firebase data and settings"}}}},"rootUrl":"https://firebaserules.googleapis.com/","ownerDomain":"google.com","name":"firebaserules","batchPath":"batch"};