module.exports = {"resources":{"projects":{"resources":{"snapshots":{"methods":{"getIamPolicy":{"flatPath":"v1/projects/{projectsId}/snapshots/{snapshotsId}:getIamPolicy","id":"pubsub.projects.snapshots.getIamPolicy","path":"v1/{+resource}:getIamPolicy","description":"Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset.","response":{"$ref":"Policy"},"parameterOrder":["resource"],"httpMethod":"GET","parameters":{"resource":{"location":"path","description":"REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/snapshots/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"]},"setIamPolicy":{"request":{"$ref":"SetIamPolicyRequest"},"description":"Sets the access control policy on the specified resource. Replaces any\nexisting policy.","httpMethod":"POST","parameterOrder":["resource"],"response":{"$ref":"Policy"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"resource":{"description":"REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/snapshots/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/snapshots/{snapshotsId}:setIamPolicy","path":"v1/{+resource}:setIamPolicy","id":"pubsub.projects.snapshots.setIamPolicy"},"testIamPermissions":{"flatPath":"v1/projects/{projectsId}/snapshots/{snapshotsId}:testIamPermissions","id":"pubsub.projects.snapshots.testIamPermissions","path":"v1/{+resource}:testIamPermissions","request":{"$ref":"TestIamPermissionsRequest"},"description":"Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay \"fail open\" without warning.","response":{"$ref":"TestIamPermissionsResponse"},"parameterOrder":["resource"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"resource":{"description":"REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/snapshots/[^/]+$","location":"path"}}}}},"subscriptions":{"methods":{"list":{"description":"Lists matching subscriptions.","response":{"$ref":"ListSubscriptionsResponse"},"parameterOrder":["project"],"httpMethod":"GET","parameters":{"project":{"description":"The name of the cloud project that subscriptions belong to.\nFormat is `projects/{project}`.","type":"string","required":true,"pattern":"^projects/[^/]+$","location":"path"},"pageToken":{"location":"query","description":"The value returned by the last `ListSubscriptionsResponse`; indicates that\nthis is a continuation of a prior `ListSubscriptions` call, and that the\nsystem should return the next page of data.","type":"string"},"pageSize":{"location":"query","format":"int32","description":"Maximum number of subscriptions to return.","type":"integer"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions","id":"pubsub.projects.subscriptions.list","path":"v1/{+project}/subscriptions"},"create":{"description":"Creates a subscription to a given topic.\nIf the subscription already exists, returns `ALREADY_EXISTS`.\nIf the corresponding topic doesn't exist, returns `NOT_FOUND`.\n\nIf the name is not provided in the request, the server will assign a random\nname for this subscription on the same project as the topic, conforming\nto the\n[resource name format](https://cloud.google.com/pubsub/docs/overview#names).\nThe generated name is populated in the returned Subscription object.\nNote that for REST API requests, you must specify a name in the request.","request":{"$ref":"Subscription"},"response":{"$ref":"Subscription"},"parameterOrder":["name"],"httpMethod":"PUT","parameters":{"name":{"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path","description":"The name of the subscription. It must have the format\n`\"projects/{project}/subscriptions/{subscription}\"`. `{subscription}` must\nstart with a letter, and contain only letters (`[A-Za-z]`), numbers\n(`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),\nplus (`+`) or percent signs (`%`). It must be between 3 and 255 characters\nin length, and it must not start with `\"goog\"`.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}","id":"pubsub.projects.subscriptions.create","path":"v1/{+name}"},"setIamPolicy":{"httpMethod":"POST","parameterOrder":["resource"],"response":{"$ref":"Policy"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"resource":{"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path","description":"REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true}},"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:setIamPolicy","path":"v1/{+resource}:setIamPolicy","id":"pubsub.projects.subscriptions.setIamPolicy","request":{"$ref":"SetIamPolicyRequest"},"description":"Sets the access control policy on the specified resource. Replaces any\nexisting policy."},"modifyAckDeadline":{"httpMethod":"POST","parameterOrder":["subscription"],"response":{"$ref":"Empty"},"parameters":{"subscription":{"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path","description":"The name of the subscription.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:modifyAckDeadline","path":"v1/{+subscription}:modifyAckDeadline","id":"pubsub.projects.subscriptions.modifyAckDeadline","description":"Modifies the ack deadline for a specific message. This method is useful\nto indicate that more time is needed to process a message by the\nsubscriber, or to make the message available for redelivery if the\nprocessing was interrupted. Note that this does not modify the\nsubscription-level `ackDeadlineSeconds` used for subsequent messages.","request":{"$ref":"ModifyAckDeadlineRequest"}},"acknowledge":{"response":{"$ref":"Empty"},"parameterOrder":["subscription"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"subscription":{"location":"path","description":"The subscription whose message is being acknowledged.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$"}},"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:acknowledge","id":"pubsub.projects.subscriptions.acknowledge","path":"v1/{+subscription}:acknowledge","request":{"$ref":"AcknowledgeRequest"},"description":"Acknowledges the messages associated with the `ack_ids` in the\n`AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages\nfrom the subscription.\n\nAcknowledging a message whose ack deadline has expired may succeed,\nbut such a message may be redelivered later. Acknowledging a message more\nthan once will not result in an error."},"getIamPolicy":{"path":"v1/{+resource}:getIamPolicy","id":"pubsub.projects.subscriptions.getIamPolicy","description":"Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset.","httpMethod":"GET","parameterOrder":["resource"],"response":{"$ref":"Policy"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"resource":{"description":"REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:getIamPolicy"},"get":{"description":"Gets the configuration details of a subscription.","response":{"$ref":"Subscription"},"parameterOrder":["subscription"],"httpMethod":"GET","parameters":{"subscription":{"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path","description":"The name of the subscription to get.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}","id":"pubsub.projects.subscriptions.get","path":"v1/{+subscription}"},"testIamPermissions":{"httpMethod":"POST","parameterOrder":["resource"],"response":{"$ref":"TestIamPermissionsResponse"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"resource":{"description":"REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:testIamPermissions","path":"v1/{+resource}:testIamPermissions","id":"pubsub.projects.subscriptions.testIamPermissions","request":{"$ref":"TestIamPermissionsRequest"},"description":"Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay \"fail open\" without warning."},"modifyPushConfig":{"request":{"$ref":"ModifyPushConfigRequest"},"description":"Modifies the `PushConfig` for a specified subscription.\n\nThis may be used to change a push subscription to a pull one (signified by\nan empty `PushConfig`) or vice versa, or change the endpoint URL and other\nattributes of a push subscription. Messages will accumulate for delivery\ncontinuously through the call regardless of changes to the `PushConfig`.","response":{"$ref":"Empty"},"parameterOrder":["subscription"],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"subscription":{"description":"The name of the subscription.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:modifyPushConfig","id":"pubsub.projects.subscriptions.modifyPushConfig","path":"v1/{+subscription}:modifyPushConfig"},"delete":{"path":"v1/{+subscription}","id":"pubsub.projects.subscriptions.delete","description":"Deletes an existing subscription. All messages retained in the subscription\nare immediately dropped. Calls to `Pull` after deletion will return\n`NOT_FOUND`. After a subscription is deleted, a new one may be created with\nthe same name, but the new one has no association with the old\nsubscription or its topic unless the same topic is specified.","httpMethod":"DELETE","response":{"$ref":"Empty"},"parameterOrder":["subscription"],"parameters":{"subscription":{"location":"path","description":"The subscription to delete.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}"},"pull":{"description":"Pulls messages from the server. Returns an empty list if there are no\nmessages available in the backlog. The server may return `UNAVAILABLE` if\nthere are too many concurrent pull requests pending for the given\nsubscription.","request":{"$ref":"PullRequest"},"httpMethod":"POST","parameterOrder":["subscription"],"response":{"$ref":"PullResponse"},"parameters":{"subscription":{"description":"The subscription from which messages should be pulled.\nFormat is `projects/{project}/subscriptions/{sub}`.","type":"string","required":true,"pattern":"^projects/[^/]+/subscriptions/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/subscriptions/{subscriptionsId}:pull","path":"v1/{+subscription}:pull","id":"pubsub.projects.subscriptions.pull"}}},"topics":{"methods":{"get":{"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"topic":{"location":"path","description":"The name of the topic to get.\nFormat is `projects/{project}/topics/{topic}`.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$"}},"flatPath":"v1/projects/{projectsId}/topics/{topicsId}","id":"pubsub.projects.topics.get","path":"v1/{+topic}","description":"Gets the configuration of a topic.","response":{"$ref":"Topic"},"parameterOrder":["topic"],"httpMethod":"GET"},"publish":{"httpMethod":"POST","parameterOrder":["topic"],"response":{"$ref":"PublishResponse"},"parameters":{"topic":{"location":"path","description":"The messages in the request will be published on this topic.\nFormat is `projects/{project}/topics/{topic}`.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/topics/{topicsId}:publish","path":"v1/{+topic}:publish","id":"pubsub.projects.topics.publish","description":"Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic\ndoes not exist. The message payload must not be empty; it must contain\n either a non-empty data field, or at least one attribute.","request":{"$ref":"PublishRequest"}},"testIamPermissions":{"parameters":{"resource":{"location":"path","description":"REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/topics/{topicsId}:testIamPermissions","id":"pubsub.projects.topics.testIamPermissions","path":"v1/{+resource}:testIamPermissions","description":"Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay \"fail open\" without warning.","request":{"$ref":"TestIamPermissionsRequest"},"response":{"$ref":"TestIamPermissionsResponse"},"parameterOrder":["resource"],"httpMethod":"POST"},"delete":{"description":"Deletes the topic with the given name. Returns `NOT_FOUND` if the topic\ndoes not exist. After a topic is deleted, a new topic may be created with\nthe same name; this is an entirely new topic with none of the old\nconfiguration or subscriptions. Existing subscriptions to this topic are\nnot deleted, but their `topic` field is set to `_deleted-topic_`.","httpMethod":"DELETE","response":{"$ref":"Empty"},"parameterOrder":["topic"],"parameters":{"topic":{"description":"Name of the topic to delete.\nFormat is `projects/{project}/topics/{topic}`.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/topics/{topicsId}","path":"v1/{+topic}","id":"pubsub.projects.topics.delete"},"list":{"id":"pubsub.projects.topics.list","path":"v1/{+project}/topics","description":"Lists matching topics.","response":{"$ref":"ListTopicsResponse"},"parameterOrder":["project"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"pageToken":{"description":"The value returned by the last `ListTopicsResponse`; indicates that this is\na continuation of a prior `ListTopics` call, and that the system should\nreturn the next page of data.","type":"string","location":"query"},"pageSize":{"format":"int32","description":"Maximum number of topics to return.","type":"integer","location":"query"},"project":{"pattern":"^projects/[^/]+$","location":"path","description":"The name of the cloud project that topics belong to.\nFormat is `projects/{project}`.","type":"string","required":true}},"flatPath":"v1/projects/{projectsId}/topics"},"setIamPolicy":{"httpMethod":"POST","parameterOrder":["resource"],"response":{"$ref":"Policy"},"parameters":{"resource":{"pattern":"^projects/[^/]+/topics/[^/]+$","location":"path","description":"REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.","type":"string","required":true}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/topics/{topicsId}:setIamPolicy","path":"v1/{+resource}:setIamPolicy","id":"pubsub.projects.topics.setIamPolicy","description":"Sets the access control policy on the specified resource. Replaces any\nexisting policy.","request":{"$ref":"SetIamPolicyRequest"}},"create":{"response":{"$ref":"Topic"},"parameterOrder":["name"],"httpMethod":"PUT","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"name":{"location":"path","description":"The name of the topic. It must have the format\n`\"projects/{project}/topics/{topic}\"`. `{topic}` must start with a letter,\nand contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),\nunderscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent\nsigns (`%`). It must be between 3 and 255 characters in length, and it\nmust not start with `\"goog\"`.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$"}},"flatPath":"v1/projects/{projectsId}/topics/{topicsId}","id":"pubsub.projects.topics.create","path":"v1/{+name}","request":{"$ref":"Topic"},"description":"Creates the given topic with the given name."},"getIamPolicy":{"response":{"$ref":"Policy"},"parameterOrder":["resource"],"httpMethod":"GET","parameters":{"resource":{"type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$","location":"path","description":"REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field."}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"flatPath":"v1/projects/{projectsId}/topics/{topicsId}:getIamPolicy","id":"pubsub.projects.topics.getIamPolicy","path":"v1/{+resource}:getIamPolicy","description":"Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset."}},"resources":{"subscriptions":{"methods":{"list":{"parameterOrder":["topic"],"httpMethod":"GET","response":{"$ref":"ListTopicSubscriptionsResponse"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/pubsub"],"parameters":{"pageToken":{"description":"The value returned by the last `ListTopicSubscriptionsResponse`; indicates\nthat this is a continuation of a prior `ListTopicSubscriptions` call, and\nthat the system should return the next page of data.","type":"string","location":"query"},"pageSize":{"location":"query","format":"int32","description":"Maximum number of subscription names to return.","type":"integer"},"topic":{"description":"The name of the topic that subscriptions are attached to.\nFormat is `projects/{project}/topics/{topic}`.","type":"string","required":true,"pattern":"^projects/[^/]+/topics/[^/]+$","location":"path"}},"flatPath":"v1/projects/{projectsId}/topics/{topicsId}/subscriptions","id":"pubsub.projects.topics.subscriptions.list","path":"v1/{+topic}/subscriptions","description":"Lists the name of the subscriptions for this topic."}}}}}}}},"parameters":{"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"default":"true","type":"boolean","location":"query","description":"Returns response with indentations and line breaks."},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"type":"string","location":"query","description":"JSONP"},"alt":{"enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"description":"Pretty-print response.","default":"true","type":"boolean","location":"query"},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"}},"schemas":{"PullResponse":{"properties":{"receivedMessages":{"description":"Received Pub/Sub messages. The Pub/Sub system will return zero messages if\nthere are no more available in the backlog. The Pub/Sub system may return\nfewer than the `maxMessages` requested even if there are more messages\navailable in the backlog.","items":{"$ref":"ReceivedMessage"},"type":"array"}},"id":"PullResponse","description":"Response for the `Pull` method.","type":"object"},"ReceivedMessage":{"type":"object","properties":{"message":{"$ref":"PubsubMessage","description":"The message."},"ackId":{"description":"This ID can be used to acknowledge the received message.","type":"string"}},"id":"ReceivedMessage","description":"A message and its corresponding acknowledgment ID."},"PushConfig":{"description":"Configuration for a push delivery endpoint.","type":"object","properties":{"attributes":{"additionalProperties":{"type":"string"},"description":"Endpoint configuration attributes.\n\nEvery endpoint has a set of API supported attributes that can be used to\ncontrol different aspects of the message delivery.\n\nThe currently supported attribute is `x-goog-version`, which you can\nuse to change the format of the pushed message. This attribute\nindicates the version of the data expected by the endpoint. This\ncontrols the shape of the pushed message (i.e., its fields and metadata).\nThe endpoint version is based on the version of the Pub/Sub API.\n\nIf not present during the `CreateSubscription` call, it will default to\nthe version of the API used to make such call. If not present during a\n`ModifyPushConfig` call, its value will not be changed. `GetSubscription`\ncalls will always return a valid version, even if the subscription was\ncreated without this attribute.\n\nThe possible values for this attribute are:\n\n* `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API.\n* `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.","type":"object"},"pushEndpoint":{"description":"A URL locating the endpoint to which messages should be pushed.\nFor example, a Webhook endpoint might use \"https://example.com/push\".","type":"string"}},"id":"PushConfig"},"TestIamPermissionsResponse":{"description":"Response message for `TestIamPermissions` method.","type":"object","properties":{"permissions":{"description":"A subset of `TestPermissionsRequest.permissions` that the caller is\nallowed.","items":{"type":"string"},"type":"array"}},"id":"TestIamPermissionsResponse"},"PullRequest":{"id":"PullRequest","description":"Request for the `Pull` method.","type":"object","properties":{"returnImmediately":{"type":"boolean","description":"If this field set to true, the system will respond immediately even if\nit there are no messages available to return in the `Pull` response.\nOtherwise, the system may wait (for a bounded amount of time) until at\nleast one message is available, rather than returning no messages. The\nclient may cancel the request if it does not wish to wait any longer for\nthe response."},"maxMessages":{"format":"int32","description":"The maximum number of messages returned for this request. The Pub/Sub\nsystem may return fewer than the number specified.","type":"integer"}}},"ListSubscriptionsResponse":{"description":"Response for the `ListSubscriptions` method.","type":"object","properties":{"nextPageToken":{"type":"string","description":"If not empty, indicates that there may be more subscriptions that match\nthe request; this value should be passed in a new\n`ListSubscriptionsRequest` to get more subscriptions."},"subscriptions":{"description":"The subscriptions that match the request.","items":{"$ref":"Subscription"},"type":"array"}},"id":"ListSubscriptionsResponse"},"PublishRequest":{"properties":{"messages":{"description":"The messages to publish.","items":{"$ref":"PubsubMessage"},"type":"array"}},"id":"PublishRequest","description":"Request for the Publish method.","type":"object"},"PublishResponse":{"description":"Response for the `Publish` method.","type":"object","properties":{"messageIds":{"description":"The server-assigned ID of each published message, in the same order as\nthe messages in the request. IDs are guaranteed to be unique within\nthe topic.","items":{"type":"string"},"type":"array"}},"id":"PublishResponse"},"Subscription":{"description":"A subscription resource.","type":"object","properties":{"topic":{"description":"The name of the topic from which this subscription is receiving messages.\nFormat is `projects/{project}/topics/{topic}`.\nThe value of this field will be `_deleted-topic_` if the topic has been\ndeleted.","type":"string"},"pushConfig":{"$ref":"PushConfig","description":"If push delivery is used with this subscription, this field is\nused to configure it. An empty `pushConfig` signifies that the subscriber\nwill pull and ack messages using API methods."},"ackDeadlineSeconds":{"format":"int32","description":"This value is the maximum time after a subscriber receives a message\nbefore the subscriber should acknowledge the message. After message\ndelivery but before the ack deadline expires and before the message is\nacknowledged, it is an outstanding message and will not be delivered\nagain during that time (on a best-effort basis).\n\nFor pull subscriptions, this value is used as the initial value for the ack\ndeadline. To override this value for a given message, call\n`ModifyAckDeadline` with the corresponding `ack_id` if using\nnon-streaming pull or send the `ack_id` in a\n`StreamingModifyAckDeadlineRequest` if using streaming pull.\nThe minimum custom deadline you can specify is 10 seconds.\nThe maximum custom deadline you can specify is 600 seconds (10 minutes).\nIf this parameter is 0, a default value of 10 seconds is used.\n\nFor push delivery, this value is also used to set the request timeout for\nthe call to the push endpoint.\n\nIf the subscriber never acknowledges the message, the Pub/Sub\nsystem will eventually redeliver the message.","type":"integer"},"name":{"description":"The name of the subscription. It must have the format\n`\"projects/{project}/subscriptions/{subscription}\"`. `{subscription}` must\nstart with a letter, and contain only letters (`[A-Za-z]`), numbers\n(`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),\nplus (`+`) or percent signs (`%`). It must be between 3 and 255 characters\nin length, and it must not start with `\"goog\"`.","type":"string"}},"id":"Subscription"},"TestIamPermissionsRequest":{"type":"object","properties":{"permissions":{"description":"The set of permissions to check for the `resource`. Permissions with\nwildcards (such as '*' or 'storage.*') are not allowed. For more\ninformation see\n[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).","items":{"type":"string"},"type":"array"}},"id":"TestIamPermissionsRequest","description":"Request message for `TestIamPermissions` method."},"Policy":{"description":"Defines an Identity and Access Management (IAM) policy. It is used to\nspecify access control policies for Cloud Platform resources.\n\n\nA `Policy` consists of a list of `bindings`. A `Binding` binds a list of\n`members` to a `role`, where the members can be user accounts, Google groups,\nGoogle domains, and service accounts. A `role` is a named list of permissions\ndefined by IAM.\n\n**Example**\n\n    {\n      \"bindings\": [\n        {\n          \"role\": \"roles/owner\",\n          \"members\": [\n            \"user:mike@example.com\",\n            \"group:admins@example.com\",\n            \"domain:google.com\",\n            \"serviceAccount:my-other-app@appspot.gserviceaccount.com\",\n          ]\n        },\n        {\n          \"role\": \"roles/viewer\",\n          \"members\": [\"user:sean@example.com\"]\n        }\n      ]\n    }\n\nFor a description of IAM and its features, see the\n[IAM developer's guide](https://cloud.google.com/iam).","type":"object","properties":{"etag":{"format":"byte","description":"`etag` is used for optimistic concurrency control as a way to help\nprevent simultaneous updates of a policy from overwriting each other.\nIt is strongly suggested that systems make use of the `etag` in the\nread-modify-write cycle to perform policy updates in order to avoid race\nconditions: An `etag` is returned in the response to `getIamPolicy`, and\nsystems are expected to put that etag in the request to `setIamPolicy` to\nensure that their change will be applied to the same version of the policy.\n\nIf no `etag` is provided in the call to `setIamPolicy`, then the existing\npolicy is overwritten blindly.","type":"string"},"version":{"format":"int32","description":"Version of the `Policy`. The default version is 0.","type":"integer"},"bindings":{"description":"Associates a list of `members` to a `role`.\n`bindings` with no members will result in an error.","items":{"$ref":"Binding"},"type":"array"}},"id":"Policy"},"Topic":{"description":"A topic resource.","type":"object","properties":{"name":{"description":"The name of the topic. It must have the format\n`\"projects/{project}/topics/{topic}\"`. `{topic}` must start with a letter,\nand contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),\nunderscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent\nsigns (`%`). It must be between 3 and 255 characters in length, and it\nmust not start with `\"goog\"`.","type":"string"}},"id":"Topic"},"ModifyAckDeadlineRequest":{"description":"Request for the ModifyAckDeadline method.","type":"object","properties":{"ackDeadlineSeconds":{"format":"int32","description":"The new ack deadline with respect to the time this request was sent to\nthe Pub/Sub system. For example, if the value is 10, the new\nack deadline will expire 10 seconds after the `ModifyAckDeadline` call\nwas made. Specifying zero may immediately make the message available for\nanother pull request.\nThe minimum deadline you can specify is 0 seconds.\nThe maximum deadline you can specify is 600 seconds (10 minutes).","type":"integer"},"ackIds":{"description":"List of acknowledgment IDs.","items":{"type":"string"},"type":"array"}},"id":"ModifyAckDeadlineRequest"},"SetIamPolicyRequest":{"description":"Request message for `SetIamPolicy` method.","type":"object","properties":{"policy":{"$ref":"Policy","description":"REQUIRED: The complete policy to be applied to the `resource`. The size of\nthe policy is limited to a few 10s of KB. An empty policy is a\nvalid policy but certain Cloud Platform services (such as Projects)\nmight reject them."}},"id":"SetIamPolicyRequest"},"ModifyPushConfigRequest":{"description":"Request for the ModifyPushConfig method.","type":"object","properties":{"pushConfig":{"description":"The push configuration for future deliveries.\n\nAn empty `pushConfig` indicates that the Pub/Sub system should\nstop pushing messages from the given subscription and allow\nmessages to be pulled and acknowledged - effectively pausing\nthe subscription if `Pull` or `StreamingPull` is not called.","$ref":"PushConfig"}},"id":"ModifyPushConfigRequest"},"PubsubMessage":{"description":"A message data and its attributes. The message payload must not be empty;\nit must contain either a non-empty data field, or at least one attribute.","type":"object","properties":{"data":{"format":"byte","description":"The message payload.","type":"string"},"messageId":{"description":"ID of this message, assigned by the server when the message is published.\nGuaranteed to be unique within the topic. This value may be read by a\nsubscriber that receives a `PubsubMessage` via a `Pull` call or a push\ndelivery. It must not be populated by the publisher in a `Publish` call.","type":"string"},"attributes":{"description":"Optional attributes for this message.","type":"object","additionalProperties":{"type":"string"}},"publishTime":{"format":"google-datetime","description":"The time at which the message was published, populated by the server when\nit receives the `Publish` call. It must not be populated by the\npublisher in a `Publish` call.","type":"string"}},"id":"PubsubMessage"},"Binding":{"properties":{"members":{"description":"Specifies the identities requesting access for a Cloud Platform resource.\n`members` can have the following values:\n\n* `allUsers`: A special identifier that represents anyone who is\n   on the internet; with or without a Google account.\n\n* `allAuthenticatedUsers`: A special identifier that represents anyone\n   who is authenticated with a Google account or a service account.\n\n* `user:{emailid}`: An email address that represents a specific Google\n   account. For example, `alice@gmail.com` or `joe@example.com`.\n\n\n* `serviceAccount:{emailid}`: An email address that represents a service\n   account. For example, `my-other-app@appspot.gserviceaccount.com`.\n\n* `group:{emailid}`: An email address that represents a Google group.\n   For example, `admins@example.com`.\n\n\n* `domain:{domain}`: A Google Apps domain name that represents all the\n   users of that domain. For example, `google.com` or `example.com`.\n\n","items":{"type":"string"},"type":"array"},"role":{"type":"string","description":"Role that is assigned to `members`.\nFor example, `roles/viewer`, `roles/editor`, or `roles/owner`.\nRequired"}},"id":"Binding","description":"Associates `members` with a `role`.","type":"object"},"AcknowledgeRequest":{"description":"Request for the Acknowledge method.","type":"object","properties":{"ackIds":{"description":"The acknowledgment ID for the messages being acknowledged that was returned\nby the Pub/Sub system in the `Pull` response. Must not be empty.","items":{"type":"string"},"type":"array"}},"id":"AcknowledgeRequest"},"Empty":{"properties":{},"id":"Empty","description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.","type":"object"},"ListTopicsResponse":{"description":"Response for the `ListTopics` method.","type":"object","properties":{"nextPageToken":{"description":"If not empty, indicates that there may be more topics that match the\nrequest; this value should be passed in a new `ListTopicsRequest`.","type":"string"},"topics":{"description":"The resulting topics.","items":{"$ref":"Topic"},"type":"array"}},"id":"ListTopicsResponse"},"ListTopicSubscriptionsResponse":{"description":"Response for the `ListTopicSubscriptions` method.","type":"object","properties":{"nextPageToken":{"description":"If not empty, indicates that there may be more subscriptions that match\nthe request; this value should be passed in a new\n`ListTopicSubscriptionsRequest` to get more subscriptions.","type":"string"},"subscriptions":{"description":"The names of the subscriptions that match the request.","items":{"type":"string"},"type":"array"}},"id":"ListTopicSubscriptionsResponse"}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","version":"v1","baseUrl":"https://pubsub.googleapis.com/","canonicalName":"Pubsub","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/pubsub":{"description":"View and manage Pub/Sub topics and subscriptions"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"description":"Provides reliable, many-to-many, asynchronous messaging between applications.\n","servicePath":"","kind":"discovery#restDescription","rootUrl":"https://pubsub.googleapis.com/","basePath":"","ownerDomain":"google.com","name":"pubsub","batchPath":"batch","id":"pubsub:v1","documentationLink":"https://cloud.google.com/pubsub/docs","revision":"20171028","title":"Google Cloud Pub/Sub API","ownerName":"Google","discoveryVersion":"v1"};