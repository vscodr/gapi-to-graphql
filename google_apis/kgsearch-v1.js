module.exports = {"protocol":"rest","icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"version":"v1","baseUrl":"https://kgsearch.googleapis.com/","kind":"discovery#restDescription","description":"Searches the Google Knowledge Graph for entities.","servicePath":"","rootUrl":"https://kgsearch.googleapis.com/","basePath":"","ownerDomain":"google.com","name":"kgsearch","batchPath":"batch","id":"kgsearch:v1","documentationLink":"https://developers.google.com/knowledge-graph/","revision":"20170925","title":"Knowledge Graph Search API","ownerName":"Google","discoveryVersion":"v1","version_module":true,"resources":{"entities":{"methods":{"search":{"httpMethod":"GET","parameterOrder":[],"response":{"$ref":"SearchResponse"},"parameters":{"ids":{"type":"string","repeated":true,"location":"query","description":"The list of entity id to be used for search instead of query string.\nTo specify multiple ids in the HTTP request, repeat the parameter in the\nURL as in ...?ids=A&ids=B"},"limit":{"location":"query","format":"int32","description":"Limits the number of entities to be returned.","type":"integer"},"prefix":{"type":"boolean","location":"query","description":"Enables prefix match against names and aliases of entities"},"query":{"location":"query","description":"The literal query string for search.","type":"string"},"types":{"type":"string","repeated":true,"location":"query","description":"Restricts returned entities with these types, e.g. Person\n(as defined in http://schema.org/Person). If multiple types are specified,\nreturned entities will contain one or more of these types."},"indent":{"location":"query","description":"Enables indenting of json results.","type":"boolean"},"languages":{"type":"string","repeated":true,"location":"query","description":"The list of language codes (defined in ISO 693) to run the query with,\ne.g. 'en'."}},"flatPath":"v1/entities:search","path":"v1/entities:search","id":"kgsearch.entities.search","description":"Searches Knowledge Graph for entities that match the constraints.\nA list of matched entities will be returned in response, which will be in\nJSON-LD format and compatible with http://schema.org"}}}},"parameters":{"access_token":{"type":"string","location":"query","description":"OAuth access token."},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"type":"string","location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."},"pp":{"default":"true","type":"boolean","location":"query","description":"Pretty-print response."},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"type":"string","location":"query","description":"OAuth 2.0 token for the current user."},"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","default":"true","type":"boolean"},"uploadType":{"type":"string","location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\")."},"fields":{"location":"query","description":"Selector specifying which fields to include in a partial response.","type":"string"},"$.xgafv":{"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"]},"callback":{"location":"query","description":"JSONP","type":"string"},"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]}},"schemas":{"SearchResponse":{"type":"object","properties":{"itemListElement":{"items":{"type":"any"},"type":"array","description":"The item list of search results."},"@context":{"type":"any","description":"The local context applicable for the response. See more details at\nhttp://www.w3.org/TR/json-ld/#context-definitions."},"@type":{"description":"The schema type of top-level JSON-LD object, e.g. ItemList.","type":"any"}},"id":"SearchResponse","description":"Response message includes the context and a list of matching results\nwhich contain the detail of associated entities."}}};