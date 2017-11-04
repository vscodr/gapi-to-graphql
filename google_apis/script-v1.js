module.exports = {"discoveryVersion":"v1","ownerName":"Google","resources":{"scripts":{"methods":{"run":{"description":"Runs a function in an Apps Script project. The project must be deployed\nfor use with the Apps Script API.\n\nThis method requires authorization with an OAuth 2.0 token that includes at\nleast one of the scopes listed in the [Authorization](#authorization)\nsection; script projects that do not require authorization cannot be\nexecuted through this API. To find the correct scopes to include in the\nauthentication token, open the project in the script editor, then select\n**File > Project properties** and click the **Scopes** tab.","request":{"$ref":"ExecutionRequest"},"response":{"$ref":"Operation"},"parameterOrder":["scriptId"],"httpMethod":"POST","scopes":["https://mail.google.com/","https://www.google.com/calendar/feeds","https://www.google.com/m8/feeds","https://www.googleapis.com/auth/admin.directory.group","https://www.googleapis.com/auth/admin.directory.user","https://www.googleapis.com/auth/drive","https://www.googleapis.com/auth/forms","https://www.googleapis.com/auth/forms.currentonly","https://www.googleapis.com/auth/groups","https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/userinfo.email"],"parameters":{"scriptId":{"location":"path","description":"The script ID of the script to be executed. To find the script ID, open\nthe project in the script editor and select **File > Project properties**.","required":true,"type":"string"}},"flatPath":"v1/scripts/{scriptId}:run","path":"v1/scripts/{scriptId}:run","id":"script.scripts.run"}}}},"parameters":{"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"alt":{"enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"location":"query","description":"Pretty-print response.","type":"boolean","default":"true"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","type":"boolean","default":"true"}},"schemas":{"ExecutionResponse":{"type":"object","properties":{"result":{"description":"The return value of the script function. The type matches the object type\nreturned in Apps Script. Functions called using the Apps Script API cannot\nreturn Apps Script-specific objects (such as a `Document` or a `Calendar`);\nthey can only return primitive types such as a `string`, `number`, `array`,\n`object`, or `boolean`.","type":"any"}},"id":"ExecutionResponse","description":"An object that provides the return value of a function executed using the\nApps Script API. If the script function returns successfully, the response\nbody's response field contains this\n`ExecutionResponse` object."},"Operation":{"id":"Operation","description":"A representation of a execution of an Apps Script function that is started using run or runAsync. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations).\n<p>After the execution is started, it can have one of four outcomes:</p>\n<ul> <li> If the script function returns successfully, the\n  response field contains an\n  ExecutionResponse object\n  with the function's return value in the object's `result` field.</li>\n<li> If the script function (or Apps Script itself) throws an exception, the\n  error field contains a\n  Status object. The `Status` object's `details`\n  field contains an array with a single\n  ExecutionError object that\n  provides information about the nature of the error.</li>\n<li> If the execution was asynchronous and has not yet completed,\n  the done field is `false` and\n  the neither the `response` nor `error` fields are present.</li>\n<li> If the `run` or `runAsync` call itself fails (for example, because of a\n  malformed request or an authorization error), the method returns an HTTP\n  response code in the 4XX range with a different format for the response\n  body. Client libraries automatically convert a 4XX response into an\n  exception class.</li>\n</ul>","type":"object","properties":{"done":{"description":"This field is only used with asynchronous executions. It indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.","type":"boolean"},"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.","type":"object"},"error":{"$ref":"Status","description":"If a `run` or `runAsync` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error."}}},"ScriptStackTraceElement":{"description":"A stack trace through the script that shows where the execution failed.","type":"object","properties":{"lineNumber":{"description":"The line number where the script failed.","format":"int32","type":"integer"},"function":{"description":"The name of the function that failed.","type":"string"}},"id":"ScriptStackTraceElement"},"ExecutionError":{"description":"An object that provides information about the nature of an error resulting\nfrom an attempted execution of a script function using the Apps Script API.\nIf a run or\nrunAsync call\nsucceeds but the script function (or Apps Script itself) throws an exception,\nthe response body's error field\ncontains a\nStatus object. The `Status` object's `details` field\ncontains an array with a single one of these `ExecutionError` objects.","type":"object","properties":{"errorType":{"description":"The error type, for example `TypeError` or `ReferenceError`. If the error\ntype is unavailable, this field is not included.","type":"string"},"errorMessage":{"type":"string","description":"The error message thrown by Apps Script, usually localized into the user's\nlanguage."},"scriptStackTraceElements":{"description":"An array of objects that provide a stack trace through the script to show\nwhere the execution failed, with the deepest call first.","type":"array","items":{"$ref":"ScriptStackTraceElement"}}},"id":"ExecutionError"},"Status":{"type":"object","properties":{"code":{"description":"The status code. For this API, this value either:\n<ul> <li> 3, indicating an `INVALID_ARGUMENT` error, or</li> <li> 1, indicating a `CANCELLED` asynchronous execution.</li> </ul>","format":"int32","type":"integer"},"message":{"type":"string","description":"A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [google.rpc.Status.details](google.rpc.Status.details) field, or localized by the client."},"details":{"description":"An array that contains a single ExecutionError object that provides information about the nature of the error.","type":"array","items":{"type":"object","additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"}}}},"id":"Status","description":"If a `run` or `runAsync` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object."},"ExecutionRequest":{"description":"A request to run the function in a script. The script is identified by the\nspecified `script_id`. Executing a function on a script returns results\nbased on the implementation of the script.","type":"object","properties":{"sessionState":{"description":"For Android add-ons only. An ID that represents the user's current session\nin the Android app for Google Docs or Sheets, included as extra data in the\n[Intent](https://developer.android.com/guide/components/intents-filters.html)\nthat launches the add-on. When an Android add-on is run with a session\nstate, it gains the privileges of a\n[bound](https://developers.google.com/apps-script/guides/bound)\nscript&mdash;that is, it can access information like the user's current\ncursor position (in Docs) or selected cell (in Sheets). To retrieve the\nstate, call\n`Intent.getStringExtra(\"com.google.android.apps.docs.addons.SessionState\")`.\nOptional.","type":"string"},"function":{"description":"The name of the function to execute in the given script. The name does not\ninclude parentheses or parameters.","type":"string"},"devMode":{"description":"If `true` and the user is an owner of the script, the script runs at the\nmost recently saved version rather than the version deployed for use with\nthe Apps Script API. Optional; default is `false`.","type":"boolean"},"parameters":{"type":"array","items":{"type":"any"},"description":"The parameters to be passed to the function being executed. The object type\nfor each parameter should match the expected type in Apps Script.\nParameters cannot be Apps Script-specific object types (such as a\n`Document` or a `Calendar`); they can only be primitive types such as\n`string`, `number`, `array`, `object`, or `boolean`. Optional."}},"id":"ExecutionRequest"}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","version":"v1","baseUrl":"https://script.googleapis.com/","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/userinfo.email":{"description":"View your email address"},"https://www.google.com/calendar/feeds":{"description":"Manage your calendars"},"https://www.googleapis.com/auth/groups":{"description":"View and manage your Google Groups"},"https://www.googleapis.com/auth/forms.currentonly":{"description":"View and manage forms that this application has been installed in"},"https://www.googleapis.com/auth/drive":{"description":"View and manage the files in your Google Drive"},"https://www.googleapis.com/auth/admin.directory.user":{"description":"View and manage the provisioning of users on your domain"},"https://www.googleapis.com/auth/admin.directory.group":{"description":"View and manage the provisioning of groups on your domain"},"https://mail.google.com/":{"description":"Read, send, delete, and manage your email"},"https://www.googleapis.com/auth/spreadsheets":{"description":"View and manage your spreadsheets in Google Drive"},"https://www.googleapis.com/auth/forms":{"description":"View and manage your forms in Google Drive"},"https://www.google.com/m8/feeds":{"description":"Manage your contacts"}}}},"kind":"discovery#restDescription","description":"An API for managing and executing Google Apps Script projects.","servicePath":"","rootUrl":"https://script.googleapis.com/","basePath":"","ownerDomain":"google.com","name":"script","batchPath":"batch","id":"script:v1","documentationLink":"https://developers.google.com/apps-script/execution/rest/v1/scripts/run","revision":"20171024","fullyEncodeReservedExpansion":true,"title":"Google Apps Script API"};