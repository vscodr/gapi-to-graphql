module.exports = {"discoveryVersion":"v1","version_module":true,"schemas":{"CloudWorkspaceId":{"description":"A CloudWorkspaceId is a unique identifier for a cloud workspace.\nA cloud workspace is a place associated with a repo where modified files\ncan be stored before they are committed.","type":"object","properties":{"repoId":{"description":"The ID of the repo containing the workspace.","$ref":"RepoId"},"name":{"description":"The unique name of the workspace within the repo.  This is the name\nchosen by the client in the Source API's CreateWorkspace method.","type":"string"}},"id":"CloudWorkspaceId"},"ListBreakpointsResponse":{"description":"Response for listing breakpoints.","type":"object","properties":{"nextWaitToken":{"description":"A wait token that can be used in the next call to `list` (REST) or\n`ListBreakpoints` (RPC) to block until the list of breakpoints has changes.","type":"string"},"breakpoints":{"description":"List of breakpoints matching the request.\nThe fields `id` and `location` are guaranteed to be set on each breakpoint.\nThe fields: `stack_frames`, `evaluated_expressions` and `variable_table`\nare cleared on each breakpoint regardless of its status.","items":{"$ref":"Breakpoint"},"type":"array"}},"id":"ListBreakpointsResponse"},"Breakpoint":{"type":"object","properties":{"isFinalState":{"description":"When true, indicates that this is a final result and the\nbreakpoint state will not change from here on.","type":"boolean"},"stackFrames":{"description":"The stack at breakpoint time.","items":{"$ref":"StackFrame"},"type":"array"},"condition":{"description":"Condition that triggers the breakpoint.\nThe condition is a compound boolean expression composed using expressions\nin a programming language at the source location.","type":"string"},"status":{"description":"Breakpoint status.\n\nThe status includes an error flag and a human readable message.\nThis field is usually unset. The message can be either\ninformational or an error message. Regardless, clients should always\ndisplay the text message back to the user.\n\nError status indicates complete failure of the breakpoint.\n\nExample (non-final state): `Still loading symbols...`\n\nExamples (final state):\n\n*   `Invalid line number` referring to location\n*   `Field f not found in class C` referring to condition","$ref":"StatusMessage"},"userEmail":{"description":"E-mail address of the user that created this breakpoint","type":"string"},"action":{"enumDescriptions":["Capture stack frame and variables and update the breakpoint.\nThe data is only captured once. After that the breakpoint is set\nin a final state.","Log each breakpoint hit. The breakpoint remains active until\ndeleted or expired."],"enum":["CAPTURE","LOG"],"description":"Action that the agent should perform when the code at the\nbreakpoint location is hit.","type":"string"},"logLevel":{"description":"Indicates the severity of the log. Only relevant when action is `LOG`.","type":"string","enumDescriptions":["Information log message.","Warning log message.","Error log message."],"enum":["INFO","WARNING","ERROR"]},"id":{"description":"Breakpoint identifier, unique in the scope of the debuggee.","type":"string"},"location":{"$ref":"SourceLocation","description":"Breakpoint source location."},"finalTime":{"format":"google-datetime","description":"Time this breakpoint was finalized as seen by the server in seconds\nresolution.","type":"string"},"variableTable":{"description":"The `variable_table` exists to aid with computation, memory and network\ntraffic optimization.  It enables storing a variable once and reference\nit from multiple variables, including variables stored in the\n`variable_table` itself.\nFor example, the same `this` object, which may appear at many levels of\nthe stack, can have all of its data stored once in this table.  The\nstack frame variables then would hold only a reference to it.\n\nThe variable `var_table_index` field is an index into this repeated field.\nThe stored objects are nameless and get their name from the referencing\nvariable. The effective variable is a merge of the referencing variable\nand the referenced variable.","items":{"$ref":"Variable"},"type":"array"},"labels":{"additionalProperties":{"type":"string"},"description":"A set of custom breakpoint properties, populated by the agent, to be\ndisplayed to the user.","type":"object"},"logMessageFormat":{"description":"Only relevant when action is `LOG`. Defines the message to log when\nthe breakpoint hits. The message may include parameter placeholders `$0`,\n`$1`, etc. These placeholders are replaced with the evaluated value\nof the appropriate expression. Expressions not referenced in\n`log_message_format` are not logged.\n\nExample: `Message received, id = $0, count = $1` with\n`expressions` = `[ message.id, message.count ]`.","type":"string"},"createTime":{"format":"google-datetime","description":"Time this breakpoint was created by the server in seconds resolution.","type":"string"},"expressions":{"items":{"type":"string"},"type":"array","description":"List of read-only expressions to evaluate at the breakpoint location.\nThe expressions are composed using expressions in the programming language\nat the source location. If the breakpoint action is `LOG`, the evaluated\nexpressions are included in log statements."},"evaluatedExpressions":{"description":"Values of evaluated expressions at breakpoint time.\nThe evaluated expressions appear in exactly the same order they\nare listed in the `expressions` field.\nThe `name` field holds the original expression text, the `value` or\n`members` field holds the result of the evaluated expression.\nIf the expression cannot be evaluated, the `status` inside the `Variable`\nwill indicate an error and contain the error text.","items":{"$ref":"Variable"},"type":"array"}},"id":"Breakpoint","description":"Represents the breakpoint specification, status and results."},"SetBreakpointResponse":{"description":"Response for setting a breakpoint.","type":"object","properties":{"breakpoint":{"description":"Breakpoint resource.\nThe field `id` is guaranteed to be set (in addition to the echoed fileds).","$ref":"Breakpoint"}},"id":"SetBreakpointResponse"},"UpdateActiveBreakpointRequest":{"id":"UpdateActiveBreakpointRequest","description":"Request to update an active breakpoint.","type":"object","properties":{"breakpoint":{"$ref":"Breakpoint","description":"Updated breakpoint information.\nThe field `id` must be set.\nThe agent must echo all Breakpoint specification fields in the update."}}},"SourceContext":{"id":"SourceContext","description":"A SourceContext is a reference to a tree of files. A SourceContext together\nwith a path point to a unique revision of a single file or directory.","type":"object","properties":{"gerrit":{"description":"A SourceContext referring to a Gerrit project.","$ref":"GerritSourceContext"},"cloudWorkspace":{"$ref":"CloudWorkspaceSourceContext","description":"A SourceContext referring to a snapshot in a cloud workspace."},"cloudRepo":{"$ref":"CloudRepoSourceContext","description":"A SourceContext referring to a revision in a cloud repo."},"git":{"$ref":"GitSourceContext","description":"A SourceContext referring to any third party Git repo (e.g. GitHub)."}}},"CloudRepoSourceContext":{"description":"A CloudRepoSourceContext denotes a particular revision in a cloud\nrepo (a repo hosted by the Google Cloud Platform).","type":"object","properties":{"revisionId":{"description":"A revision ID.","type":"string"},"aliasName":{"description":"The name of an alias (branch, tag, etc.).","type":"string"},"repoId":{"$ref":"RepoId","description":"The ID of the repo."},"aliasContext":{"$ref":"AliasContext","description":"An alias, which may be a branch or tag."}},"id":"CloudRepoSourceContext"},"RegisterDebuggeeResponse":{"description":"Response for registering a debuggee.","type":"object","properties":{"debuggee":{"$ref":"Debuggee","description":"Debuggee resource.\nThe field `id` is guranteed to be set (in addition to the echoed fields).\nIf the field `is_disabled` is set to `true`, the agent should disable\nitself by removing all breakpoints and detaching from the application.\nIt should however continue to poll `RegisterDebuggee` until reenabled."}},"id":"RegisterDebuggeeResponse"},"RegisterDebuggeeRequest":{"description":"Request to register a debuggee.","type":"object","properties":{"debuggee":{"$ref":"Debuggee","description":"Debuggee information to register.\nThe fields `project`, `uniquifier`, `description` and `agent_version`\nof the debuggee must be set."}},"id":"RegisterDebuggeeRequest"},"GetBreakpointResponse":{"id":"GetBreakpointResponse","description":"Response for getting breakpoint information.","type":"object","properties":{"breakpoint":{"$ref":"Breakpoint","description":"Complete breakpoint state.\nThe fields `id` and `location` are guaranteed to be set."}}},"StatusMessage":{"description":"Represents a contextual status message.\nThe message can indicate an error or informational status, and refer to\nspecific parts of the containing object.\nFor example, the `Breakpoint.status` field can indicate an error referring\nto the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.","type":"object","properties":{"description":{"description":"Status message text.","$ref":"FormatMessage"},"isError":{"description":"Distinguishes errors from informational messages.","type":"boolean"},"refersTo":{"enum":["UNSPECIFIED","BREAKPOINT_SOURCE_LOCATION","BREAKPOINT_CONDITION","BREAKPOINT_EXPRESSION","BREAKPOINT_AGE","VARIABLE_NAME","VARIABLE_VALUE"],"description":"Reference to which the message applies.","type":"string","enumDescriptions":["Status doesn't refer to any particular input.","Status applies to the breakpoint and is related to its location.","Status applies to the breakpoint and is related to its condition.","Status applies to the breakpoint and is related to its expressions.","Status applies to the breakpoint and is related to its age.","Status applies to the entire variable.","Status applies to variable value (variable name is valid)."]}},"id":"StatusMessage"},"GitSourceContext":{"description":"A GitSourceContext denotes a particular revision in a third party Git\nrepository (e.g. GitHub).","type":"object","properties":{"revisionId":{"description":"Git commit hash.\nrequired.","type":"string"},"url":{"description":"Git repository URL.","type":"string"}},"id":"GitSourceContext"},"Variable":{"description":"Represents a variable or an argument possibly of a compound object type.\nNote how the following variables are represented:\n\n1) A simple variable:\n\n    int x = 5\n\n    { name: \"x\", value: \"5\", type: \"int\" }  // Captured variable\n\n2) A compound object:\n\n    struct T {\n        int m1;\n        int m2;\n    };\n    T x = { 3, 7 };\n\n    {  // Captured variable\n        name: \"x\",\n        type: \"T\",\n        members { name: \"m1\", value: \"3\", type: \"int\" },\n        members { name: \"m2\", value: \"7\", type: \"int\" }\n    }\n\n3) A pointer where the pointee was captured:\n\n    T x = { 3, 7 };\n    T* p = &x;\n\n    {   // Captured variable\n        name: \"p\",\n        type: \"T*\",\n        value: \"0x00500500\",\n        members { name: \"m1\", value: \"3\", type: \"int\" },\n        members { name: \"m2\", value: \"7\", type: \"int\" }\n    }\n\n4) A pointer where the pointee was not captured:\n\n    T* p = new T;\n\n    {   // Captured variable\n        name: \"p\",\n        type: \"T*\",\n        value: \"0x00400400\"\n        status { is_error: true, description { format: \"unavailable\" } }\n    }\n\nThe status should describe the reason for the missing value,\nsuch as `<optimized out>`, `<inaccessible>`, `<pointers limit reached>`.\n\nNote that a null pointer should not have members.\n\n5) An unnamed value:\n\n    int* p = new int(7);\n\n    {   // Captured variable\n        name: \"p\",\n        value: \"0x00500500\",\n        type: \"int*\",\n        members { value: \"7\", type: \"int\" } }\n\n6) An unnamed pointer where the pointee was not captured:\n\n    int* p = new int(7);\n    int** pp = &p;\n\n    {  // Captured variable\n        name: \"pp\",\n        value: \"0x00500500\",\n        type: \"int**\",\n        members {\n            value: \"0x00400400\",\n            type: \"int*\"\n            status {\n                is_error: true,\n                description: { format: \"unavailable\" } }\n            }\n        }\n    }\n\nTo optimize computation, memory and network traffic, variables that\nrepeat in the output multiple times can be stored once in a shared\nvariable table and be referenced using the `var_table_index` field.  The\nvariables stored in the shared table are nameless and are essentially\na partition of the complete variable. To reconstruct the complete\nvariable, merge the referencing variable with the referenced variable.\n\nWhen using the shared variable table, the following variables:\n\n    T x = { 3, 7 };\n    T* p = &x;\n    T& r = x;\n\n    { name: \"x\", var_table_index: 3, type: \"T\" }  // Captured variables\n    { name: \"p\", value \"0x00500500\", type=\"T*\", var_table_index: 3 }\n    { name: \"r\", type=\"T&\", var_table_index: 3 }\n\n    {  // Shared variable table entry #3:\n        members { name: \"m1\", value: \"3\", type: \"int\" },\n        members { name: \"m2\", value: \"7\", type: \"int\" }\n    }\n\nNote that the pointer address is stored with the referencing variable\nand not with the referenced variable. This allows the referenced variable\nto be shared between pointers and references.\n\nThe type field is optional. The debugger agent may or may not support it.","type":"object","properties":{"value":{"description":"Simple value of the variable.","type":"string"},"varTableIndex":{"format":"int32","description":"Reference to a variable in the shared variable table. More than\none variable can reference the same variable in the table. The\n`var_table_index` field is an index into `variable_table` in Breakpoint.","type":"integer"},"members":{"description":"Members contained or pointed to by the variable.","items":{"$ref":"Variable"},"type":"array"},"status":{"description":"Status associated with the variable. This field will usually stay\nunset. A status of a single variable only applies to that variable or\nexpression. The rest of breakpoint data still remains valid. Variables\nmight be reported in error state even when breakpoint is not in final\nstate.\n\nThe message may refer to variable name with `refers_to` set to\n`VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`.\nIn either case variable value and members will be unset.\n\nExample of error message applied to name: `Invalid expression syntax`.\n\nExample of information message applied to value: `Not captured`.\n\nExamples of error message applied to value:\n\n*   `Malformed string`,\n*   `Field f not found in class C`\n*   `Null pointer dereference`","$ref":"StatusMessage"},"name":{"description":"Name of the variable, if any.","type":"string"},"type":{"description":"Variable type (e.g. `MyClass`). If the variable is split with\n`var_table_index`, `type` goes next to `value`. The interpretation of\na type is agent specific. It is recommended to include the dynamic type\nrather than a static type of an object.","type":"string"}},"id":"Variable"},"StackFrame":{"description":"Represents a stack frame context.","type":"object","properties":{"locals":{"items":{"$ref":"Variable"},"type":"array","description":"Set of local variables at the stack frame location.\nNote that this might not be populated for all stack frames."},"location":{"description":"Source location of the call site.","$ref":"SourceLocation"},"function":{"description":"Demangled function name at the call site.","type":"string"},"arguments":{"description":"Set of arguments passed to this function.\nNote that this might not be populated for all stack frames.","items":{"$ref":"Variable"},"type":"array"}},"id":"StackFrame"},"RepoId":{"description":"A unique identifier for a cloud repo.","type":"object","properties":{"projectRepoId":{"$ref":"ProjectRepoId","description":"A combination of a project ID and a repo name."},"uid":{"description":"A server-assigned, globally unique identifier.","type":"string"}},"id":"RepoId"},"FormatMessage":{"id":"FormatMessage","description":"Represents a message with parameters.","type":"object","properties":{"parameters":{"description":"Optional parameters to be embedded into the message.","items":{"type":"string"},"type":"array"},"format":{"description":"Format template for the message. The `format` uses placeholders `$0`,\n`$1`, etc. to reference parameters. `$$` can be used to denote the `$`\ncharacter.\n\nExamples:\n\n*   `Failed to load '$0' which helps debug $1 the first time it\n    is loaded.  Again, $0 is very important.`\n*   `Please pay $$10 to use $0 instead of $1.`","type":"string"}}},"ExtendedSourceContext":{"description":"An ExtendedSourceContext is a SourceContext combined with additional\ndetails describing the context.","type":"object","properties":{"context":{"description":"Any source context.","$ref":"SourceContext"},"labels":{"type":"object","additionalProperties":{"type":"string"},"description":"Labels with user defined metadata."}},"id":"ExtendedSourceContext"},"ListDebuggeesResponse":{"description":"Response for listing debuggees.","type":"object","properties":{"debuggees":{"description":"List of debuggees accessible to the calling user.\nThe fields `debuggee.id` and `description` are guaranteed to be set.\nThe `description` field is a human readable field provided by agents and\ncan be displayed to users.","items":{"$ref":"Debuggee"},"type":"array"}},"id":"ListDebuggeesResponse"},"AliasContext":{"description":"An alias to a repo revision.","type":"object","properties":{"name":{"description":"The alias name.","type":"string"},"kind":{"type":"string","enumDescriptions":["Do not use.","Git tag","Git branch","OTHER is used to specify non-standard aliases, those not of the kinds\nabove. For example, if a Git repo has a ref named \"refs/foo/bar\", it\nis considered to be of kind OTHER."],"enum":["ANY","FIXED","MOVABLE","OTHER"],"description":"The alias kind."}},"id":"AliasContext"},"Empty":{"type":"object","properties":{},"id":"Empty","description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`."},"SourceLocation":{"description":"Represents a location in the source code.","type":"object","properties":{"line":{"format":"int32","description":"Line inside the file. The first line in the file has the value `1`.","type":"integer"},"path":{"type":"string","description":"Path to the source file within the source context of the target binary."}},"id":"SourceLocation"},"Debuggee":{"description":"Represents the debugged application. The application may include one or more\nreplicated processes executing the same code. Each of these processes is\nattached with a debugger agent, carrying out the debugging commands.\nAgents attached to the same debuggee identify themselves as such by using\nexactly the same Debuggee message value when registering.","type":"object","properties":{"extSourceContexts":{"items":{"$ref":"ExtendedSourceContext"},"type":"array","description":"References to the locations and revisions of the source code used in the\ndeployed application.\n\nNOTE: this field is experimental and can be ignored."},"labels":{"additionalProperties":{"type":"string"},"description":"A set of custom debuggee properties, populated by the agent, to be\ndisplayed to the user.","type":"object"},"isInactive":{"description":"If set to `true`, indicates that Controller service does not detect any\nactivity from the debuggee agents and the application is possibly stopped.","type":"boolean"},"status":{"$ref":"StatusMessage","description":"Human readable message to be displayed to the user about this debuggee.\nAbsence of this field indicates no status. The message can be either\ninformational or an error status."},"project":{"description":"Project the debuggee is associated with.\nUse project number or id when registering a Google Cloud Platform project.","type":"string"},"isDisabled":{"type":"boolean","description":"If set to `true`, indicates that the agent should disable itself and\ndetach from the debuggee."},"id":{"description":"Unique identifier for the debuggee generated by the controller service.","type":"string"},"agentVersion":{"description":"Version ID of the agent.\nSchema: `domain/language-platform/vmajor.minor` (for example\n`google.com/java-gcp/v1.1`).","type":"string"},"description":{"description":"Human readable description of the debuggee.\nIncluding a human-readable project name, environment name and version\ninformation is recommended.","type":"string"},"uniquifier":{"description":"Uniquifier to further distiguish the application.\nIt is possible that different applications might have identical values in\nthe debuggee message, thus, incorrectly identified as a single application\nby the Controller service. This field adds salt to further distiguish the\napplication. Agents should consider seeding this field with value that\nidentifies the code, binary, configuration and environment.","type":"string"},"sourceContexts":{"description":"References to the locations and revisions of the source code used in the\ndeployed application.","items":{"$ref":"SourceContext"},"type":"array"}},"id":"Debuggee"},"ProjectRepoId":{"description":"Selects a repo using a Google Cloud Platform project ID\n(e.g. winged-cargo-31) and a repo name within that project.","type":"object","properties":{"repoName":{"description":"The name of the repo. Leave empty for the default repo.","type":"string"},"projectId":{"description":"The ID of the project.","type":"string"}},"id":"ProjectRepoId"},"ListActiveBreakpointsResponse":{"description":"Response for listing active breakpoints.","type":"object","properties":{"nextWaitToken":{"description":"A token that can be used in the next method call to block until\nthe list of breakpoints changes.","type":"string"},"breakpoints":{"description":"List of all active breakpoints.\nThe fields `id` and `location` are guaranteed to be set on each breakpoint.","items":{"$ref":"Breakpoint"},"type":"array"},"waitExpired":{"description":"If set to `true`, indicates that there is no change to the\nlist of active breakpoints and the server-selected timeout has expired.\nThe `breakpoints` field would be empty and should be ignored.","type":"boolean"}},"id":"ListActiveBreakpointsResponse"},"CloudWorkspaceSourceContext":{"description":"A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.","type":"object","properties":{"snapshotId":{"description":"The ID of the snapshot.\nAn empty snapshot_id refers to the most recent snapshot.","type":"string"},"workspaceId":{"$ref":"CloudWorkspaceId","description":"The ID of the workspace."}},"id":"CloudWorkspaceSourceContext"},"UpdateActiveBreakpointResponse":{"id":"UpdateActiveBreakpointResponse","description":"Response for updating an active breakpoint.\nThe message is defined to allow future extensions.","type":"object","properties":{}},"GerritSourceContext":{"description":"A SourceContext referring to a Gerrit project.","type":"object","properties":{"revisionId":{"type":"string","description":"A revision (commit) ID."},"hostUri":{"description":"The URI of a running Gerrit instance.","type":"string"},"aliasName":{"description":"The name of an alias (branch, tag, etc.).","type":"string"},"aliasContext":{"$ref":"AliasContext","description":"An alias, which may be a branch or tag."},"gerritProject":{"description":"The full project name within the host. Projects may be nested, so\n\"project/subproject\" is a valid project name.\nThe \"repo name\" is hostURI/project.","type":"string"}},"id":"GerritSourceContext"}},"protocol":"rest","icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"canonicalName":"Cloud Debugger","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud_debugger":{"description":"Manage cloud debugger"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://clouddebugger.googleapis.com/","ownerDomain":"google.com","name":"clouddebugger","batchPath":"batch","title":"Stackdriver Debugger API","ownerName":"Google","resources":{"controller":{"resources":{"debuggees":{"methods":{"register":{"flatPath":"v2/controller/debuggees/register","path":"v2/controller/debuggees/register","id":"clouddebugger.controller.debuggees.register","request":{"$ref":"RegisterDebuggeeRequest"},"description":"Registers the debuggee with the controller service.\n\nAll agents attached to the same application must call this method with\nexactly the same request content to get back the same stable `debuggee_id`.\nAgents should call this method again whenever `google.rpc.Code.NOT_FOUND`\nis returned from any controller method.\n\nThis protocol allows the controller service to disable debuggees, recover\nfrom data loss, or change the `debuggee_id` format. Agents must handle\n`debuggee_id` value changing upon re-registration.","httpMethod":"POST","parameterOrder":[],"response":{"$ref":"RegisterDebuggeeResponse"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"parameters":{}}},"resources":{"breakpoints":{"methods":{"list":{"httpMethod":"GET","parameterOrder":["debuggeeId"],"response":{"$ref":"ListActiveBreakpointsResponse"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"parameters":{"waitToken":{"type":"string","location":"query","description":"A token that, if specified, blocks the method call until the list\nof active breakpoints has changed, or a server-selected timeout has\nexpired. The value should be set from the `next_wait_token` field in\nthe last response. The initial value should be set to `\"init\"`."},"successOnTimeout":{"location":"query","description":"If set to `true` (recommended), returns `google.rpc.Code.OK` status and\nsets the `wait_expired` response field to `true` when the server-selected\ntimeout has expired.\n\nIf set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status\nwhen the server-selected timeout has expired.","type":"boolean"},"debuggeeId":{"description":"Identifies the debuggee.","type":"string","required":true,"location":"path"}},"flatPath":"v2/controller/debuggees/{debuggeeId}/breakpoints","path":"v2/controller/debuggees/{debuggeeId}/breakpoints","id":"clouddebugger.controller.debuggees.breakpoints.list","description":"Returns the list of all active breakpoints for the debuggee.\n\nThe breakpoint specification (`location`, `condition`, and `expressions`\nfields) is semantically immutable, although the field values may\nchange. For example, an agent may update the location line number\nto reflect the actual line where the breakpoint was set, but this\ndoesn't change the breakpoint semantics.\n\nThis means that an agent does not need to check if a breakpoint has changed\nwhen it encounters the same breakpoint on a successive call.\nMoreover, an agent should remember the breakpoints that are completed\nuntil the controller removes them from the active list to avoid\nsetting those breakpoints again."},"update":{"description":"Updates the breakpoint state or mutable fields.\nThe entire Breakpoint message must be sent back to the controller service.\n\nUpdates to active breakpoint fields are only allowed if the new value\ndoes not change the breakpoint specification. Updates to the `location`,\n`condition` and `expressions` fields should not alter the breakpoint\nsemantics. These may only make changes such as canonicalizing a value\nor snapping the location to the correct line of code.","request":{"$ref":"UpdateActiveBreakpointRequest"},"response":{"$ref":"UpdateActiveBreakpointResponse"},"parameterOrder":["debuggeeId","id"],"httpMethod":"PUT","parameters":{"debuggeeId":{"location":"path","description":"Identifies the debuggee being debugged.","type":"string","required":true},"id":{"description":"Breakpoint identifier, unique in the scope of the debuggee.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"flatPath":"v2/controller/debuggees/{debuggeeId}/breakpoints/{id}","id":"clouddebugger.controller.debuggees.breakpoints.update","path":"v2/controller/debuggees/{debuggeeId}/breakpoints/{id}"}}}}}}},"debugger":{"resources":{"debuggees":{"methods":{"list":{"response":{"$ref":"ListDebuggeesResponse"},"parameterOrder":[],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"parameters":{"project":{"type":"string","location":"query","description":"Project number of a Google Cloud project whose debuggees to list."},"clientVersion":{"description":"The client version making the call.\nSchema: `domain/type/version` (e.g., `google.com/intellij/v1`).","type":"string","location":"query"},"includeInactive":{"location":"query","description":"When set to `true`, the result includes all debuggees. Otherwise, the\nresult includes only debuggees that are active.","type":"boolean"}},"flatPath":"v2/debugger/debuggees","id":"clouddebugger.debugger.debuggees.list","path":"v2/debugger/debuggees","description":"Lists all the debuggees that the user has access to."}},"resources":{"breakpoints":{"methods":{"delete":{"id":"clouddebugger.debugger.debuggees.breakpoints.delete","path":"v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}","description":"Deletes the breakpoint from the debuggee.","response":{"$ref":"Empty"},"parameterOrder":["debuggeeId","breakpointId"],"httpMethod":"DELETE","parameters":{"clientVersion":{"location":"query","description":"The client version making the call.\nSchema: `domain/type/version` (e.g., `google.com/intellij/v1`).","type":"string"},"breakpointId":{"description":"ID of the breakpoint to delete.","type":"string","required":true,"location":"path"},"debuggeeId":{"description":"ID of the debuggee whose breakpoint to delete.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"flatPath":"v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}"},"set":{"request":{"$ref":"Breakpoint"},"description":"Sets the breakpoint to the debuggee.","response":{"$ref":"SetBreakpointResponse"},"parameterOrder":["debuggeeId"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"parameters":{"clientVersion":{"location":"query","description":"The client version making the call.\nSchema: `domain/type/version` (e.g., `google.com/intellij/v1`).","type":"string"},"debuggeeId":{"location":"path","description":"ID of the debuggee where the breakpoint is to be set.","type":"string","required":true}},"flatPath":"v2/debugger/debuggees/{debuggeeId}/breakpoints/set","id":"clouddebugger.debugger.debuggees.breakpoints.set","path":"v2/debugger/debuggees/{debuggeeId}/breakpoints/set"},"list":{"response":{"$ref":"ListBreakpointsResponse"},"parameterOrder":["debuggeeId"],"httpMethod":"GET","parameters":{"includeAllUsers":{"location":"query","description":"When set to `true`, the response includes the list of breakpoints set by\nany user. Otherwise, it includes only breakpoints set by the caller.","type":"boolean"},"includeInactive":{"location":"query","description":"When set to `true`, the response includes active and inactive\nbreakpoints. Otherwise, it includes only active breakpoints.","type":"boolean"},"stripResults":{"description":"This field is deprecated. The following fields are always stripped out of\nthe result: `stack_frames`, `evaluated_expressions` and `variable_table`.","type":"boolean","location":"query"},"debuggeeId":{"description":"ID of the debuggee whose breakpoints to list.","type":"string","required":true,"location":"path"},"waitToken":{"type":"string","location":"query","description":"A wait token that, if specified, blocks the call until the breakpoints\nlist has changed, or a server selected timeout has expired.  The value\nshould be set from the last response. The error code\n`google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which\nshould be called again with the same `wait_token`."},"action.value":{"location":"query","enum":["CAPTURE","LOG"],"description":"Only breakpoints with the specified action will pass the filter.","type":"string"},"clientVersion":{"description":"The client version making the call.\nSchema: `domain/type/version` (e.g., `google.com/intellij/v1`).","type":"string","location":"query"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"],"flatPath":"v2/debugger/debuggees/{debuggeeId}/breakpoints","id":"clouddebugger.debugger.debuggees.breakpoints.list","path":"v2/debugger/debuggees/{debuggeeId}/breakpoints","description":"Lists all breakpoints for the debuggee."},"get":{"flatPath":"v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}","id":"clouddebugger.debugger.debuggees.breakpoints.get","path":"v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}","description":"Gets breakpoint information.","response":{"$ref":"GetBreakpointResponse"},"parameterOrder":["debuggeeId","breakpointId"],"httpMethod":"GET","parameters":{"clientVersion":{"description":"The client version making the call.\nSchema: `domain/type/version` (e.g., `google.com/intellij/v1`).","type":"string","location":"query"},"breakpointId":{"location":"path","description":"ID of the breakpoint to get.","type":"string","required":true},"debuggeeId":{"location":"path","description":"ID of the debuggee whose breakpoint to get.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/cloud_debugger"]}}}}}}}},"parameters":{"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"},"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"$.xgafv":{"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"]},"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"}},"version":"v2","baseUrl":"https://clouddebugger.googleapis.com/","kind":"discovery#restDescription","description":"Examines the call stack and variables of a running application without stopping or slowing it down.\n","servicePath":"","basePath":"","revision":"20171016","documentationLink":"http://cloud.google.com/debugger","id":"clouddebugger:v2"};