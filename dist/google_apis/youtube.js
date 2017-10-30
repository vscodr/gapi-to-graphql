"use strict";

module.exports = {
  "kind": "discovery#restDescription",
  "etag": "\"YWOzh2SDasdU84ArJnpYek-OMdg/BJDboFk3u5Gn0XCcgzl-Emxo56M\"",
  "discoveryVersion": "v1",
  "id": "youtube:v3",
  "name": "youtube",
  "canonicalName": "YouTube",
  "version": "v3",
  "revision": "20171003",
  "title": "YouTube Data API",
  "description": "Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.",
  "ownerDomain": "google.com",
  "ownerName": "Google",
  "icons": {
    "x16": "https://www.google.com/images/icons/product/youtube-16.png",
    "x32": "https://www.google.com/images/icons/product/youtube-32.png"
  },
  "documentationLink": "https://developers.google.com/youtube/v3",
  "protocol": "rest",
  "baseUrl": "https://www.googleapis.com/youtube/v3/",
  "basePath": "/youtube/v3/",
  "rootUrl": "https://www.googleapis.com/",
  "servicePath": "youtube/v3/",
  "batchPath": "batch/youtube/v3",
  "parameters": {
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "default": "json",
      "enum": ["json"],
      "enumDescriptions": ["Responses with Content-Type of application/json"],
      "location": "query"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response.",
      "location": "query"
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
      "location": "query"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user.",
      "location": "query"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks.",
      "default": "true",
      "location": "query"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.",
      "location": "query"
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits.",
      "location": "query"
    }
  },
  "auth": {
    "oauth2": {
      "scopes": {
        "https://www.googleapis.com/auth/youtube": {
          "description": "Manage your YouTube account"
        },
        "https://www.googleapis.com/auth/youtube.force-ssl": {
          "description": "Manage your YouTube account"
        },
        "https://www.googleapis.com/auth/youtube.readonly": {
          "description": "View your YouTube account"
        },
        "https://www.googleapis.com/auth/youtube.upload": {
          "description": "Manage your YouTube videos"
        },
        "https://www.googleapis.com/auth/youtubepartner": {
          "description": "View and manage your assets and associated content on YouTube"
        },
        "https://www.googleapis.com/auth/youtubepartner-channel-audit": {
          "description": "View private information of your YouTube channel relevant during the audit process with a YouTube partner"
        }
      }
    }
  },
  "schemas": {
    "AccessPolicy": {
      "id": "AccessPolicy",
      "type": "object",
      "description": "Rights management policy for YouTube resources.",
      "properties": {
        "allowed": {
          "type": "boolean",
          "description": "The value of allowed indicates whether the access to the policy is allowed or denied by default."
        },
        "exception": {
          "type": "array",
          "description": "A list of region codes that identify countries where the default policy do not apply.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Activity": {
      "id": "Activity",
      "type": "object",
      "description": "An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.",
      "properties": {
        "contentDetails": {
          "$ref": "ActivityContentDetails",
          "description": "The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the activity."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#activity\".",
          "default": "youtube#activity"
        },
        "snippet": {
          "$ref": "ActivitySnippet",
          "description": "The snippet object contains basic details about the activity, including the activity's type and group ID."
        }
      }
    },
    "ActivityContentDetails": {
      "id": "ActivityContentDetails",
      "type": "object",
      "description": "Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.",
      "properties": {
        "bulletin": {
          "$ref": "ActivityContentDetailsBulletin",
          "description": "The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin."
        },
        "channelItem": {
          "$ref": "ActivityContentDetailsChannelItem",
          "description": "The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem."
        },
        "comment": {
          "$ref": "ActivityContentDetailsComment",
          "description": "The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment."
        },
        "favorite": {
          "$ref": "ActivityContentDetailsFavorite",
          "description": "The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite."
        },
        "like": {
          "$ref": "ActivityContentDetailsLike",
          "description": "The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like."
        },
        "playlistItem": {
          "$ref": "ActivityContentDetailsPlaylistItem",
          "description": "The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem."
        },
        "promotedItem": {
          "$ref": "ActivityContentDetailsPromotedItem",
          "description": "The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem."
        },
        "recommendation": {
          "$ref": "ActivityContentDetailsRecommendation",
          "description": "The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation."
        },
        "social": {
          "$ref": "ActivityContentDetailsSocial",
          "description": "The social object contains details about a social network post. This property is only present if the snippet.type is social."
        },
        "subscription": {
          "$ref": "ActivityContentDetailsSubscription",
          "description": "The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription."
        },
        "upload": {
          "$ref": "ActivityContentDetailsUpload",
          "description": "The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload."
        }
      }
    },
    "ActivityContentDetailsBulletin": {
      "id": "ActivityContentDetailsBulletin",
      "type": "object",
      "description": "Details about a channel bulletin post.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the resource associated with a bulletin post."
        }
      }
    },
    "ActivityContentDetailsChannelItem": {
      "id": "ActivityContentDetailsChannelItem",
      "type": "object",
      "description": "Details about a resource which was added to a channel.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the resource that was added to the channel."
        }
      }
    },
    "ActivityContentDetailsComment": {
      "id": "ActivityContentDetailsComment",
      "type": "object",
      "description": "Information about a resource that received a comment.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the resource associated with the comment."
        }
      }
    },
    "ActivityContentDetailsFavorite": {
      "id": "ActivityContentDetailsFavorite",
      "type": "object",
      "description": "Information about a video that was marked as a favorite video.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the resource that was marked as a favorite."
        }
      }
    },
    "ActivityContentDetailsLike": {
      "id": "ActivityContentDetailsLike",
      "type": "object",
      "description": "Information about a resource that received a positive (like) rating.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the rated resource."
        }
      }
    },
    "ActivityContentDetailsPlaylistItem": {
      "id": "ActivityContentDetailsPlaylistItem",
      "type": "object",
      "description": "Information about a new playlist item.",
      "properties": {
        "playlistId": {
          "type": "string",
          "description": "The value that YouTube uses to uniquely identify the playlist."
        },
        "playlistItemId": {
          "type": "string",
          "description": "ID of the item within the playlist."
        },
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information about the resource that was added to the playlist."
        }
      }
    },
    "ActivityContentDetailsPromotedItem": {
      "id": "ActivityContentDetailsPromotedItem",
      "type": "object",
      "description": "Details about a resource which is being promoted.",
      "properties": {
        "adTag": {
          "type": "string",
          "description": "The URL the client should fetch to request a promoted item."
        },
        "clickTrackingUrl": {
          "type": "string",
          "description": "The URL the client should ping to indicate that the user clicked through on this promoted item."
        },
        "creativeViewUrl": {
          "type": "string",
          "description": "The URL the client should ping to indicate that the user was shown this promoted item."
        },
        "ctaType": {
          "type": "string",
          "description": "The type of call-to-action, a message to the user indicating action that can be taken.",
          "enum": ["unspecified", "visitAdvertiserSite"],
          "enumDescriptions": ["", ""]
        },
        "customCtaButtonText": {
          "type": "string",
          "description": "The custom call-to-action button text. If specified, it will override the default button text for the cta_type."
        },
        "descriptionText": {
          "type": "string",
          "description": "The text description to accompany the promoted item."
        },
        "destinationUrl": {
          "type": "string",
          "description": "The URL the client should direct the user to, if the user chooses to visit the advertiser's website."
        },
        "forecastingUrl": {
          "type": "array",
          "description": "The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.",
          "items": {
            "type": "string"
          }
        },
        "impressionUrl": {
          "type": "array",
          "description": "The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.",
          "items": {
            "type": "string"
          }
        },
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the promoted video."
        }
      }
    },
    "ActivityContentDetailsRecommendation": {
      "id": "ActivityContentDetailsRecommendation",
      "type": "object",
      "description": "Information that identifies the recommended resource.",
      "properties": {
        "reason": {
          "type": "string",
          "description": "The reason that the resource is recommended to the user.",
          "enum": ["unspecified", "videoFavorited", "videoLiked", "videoWatched"],
          "enumDescriptions": ["", "", "", ""]
        },
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the recommended resource."
        },
        "seedResourceId": {
          "$ref": "ResourceId",
          "description": "The seedResourceId object contains information about the resource that caused the recommendation."
        }
      }
    },
    "ActivityContentDetailsSocial": {
      "id": "ActivityContentDetailsSocial",
      "type": "object",
      "description": "Details about a social network post.",
      "properties": {
        "author": {
          "type": "string",
          "description": "The author of the social network post."
        },
        "imageUrl": {
          "type": "string",
          "description": "An image of the post's author."
        },
        "referenceUrl": {
          "type": "string",
          "description": "The URL of the social network post."
        },
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object encapsulates information that identifies the resource associated with a social network post."
        },
        "type": {
          "type": "string",
          "description": "The name of the social network.",
          "enum": ["facebook", "googlePlus", "twitter", "unspecified"],
          "enumDescriptions": ["", "", "", ""]
        }
      }
    },
    "ActivityContentDetailsSubscription": {
      "id": "ActivityContentDetailsSubscription",
      "type": "object",
      "description": "Information about a channel that a user subscribed to.",
      "properties": {
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The resourceId object contains information that identifies the resource that the user subscribed to."
        }
      }
    },
    "ActivityContentDetailsUpload": {
      "id": "ActivityContentDetailsUpload",
      "type": "object",
      "description": "Information about the uploaded video.",
      "properties": {
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the uploaded video."
        }
      }
    },
    "ActivityListResponse": {
      "id": "ActivityListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of activities, or events, that match the request criteria.",
          "items": {
            "$ref": "Activity"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#activityListResponse\".",
          "default": "youtube#activityListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "ActivitySnippet": {
      "id": "ActivitySnippet",
      "type": "object",
      "description": "Basic details about an activity, including title, description, thumbnails, activity type and group.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel associated with the activity."
        },
        "channelTitle": {
          "type": "string",
          "description": "Channel title for the channel responsible for this activity"
        },
        "description": {
          "type": "string",
          "description": "The description of the resource primarily associated with the activity.",
          "annotations": {
            "required": ["youtube.activities.insert"]
          }
        },
        "groupId": {
          "type": "string",
          "description": "The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The title of the resource primarily associated with the activity."
        },
        "type": {
          "type": "string",
          "description": "The type of activity that the resource describes.",
          "enum": ["bulletin", "channelItem", "comment", "favorite", "like", "playlistItem", "promotedItem", "recommendation", "social", "subscription", "upload"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", ""]
        }
      }
    },
    "Caption": {
      "id": "Caption",
      "type": "object",
      "description": "A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the caption track.",
          "annotations": {
            "required": ["youtube.captions.update"]
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#caption\".",
          "default": "youtube#caption"
        },
        "snippet": {
          "$ref": "CaptionSnippet",
          "description": "The snippet object contains basic details about the caption."
        }
      }
    },
    "CaptionListResponse": {
      "id": "CaptionListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of captions that match the request criteria.",
          "items": {
            "$ref": "Caption"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#captionListResponse\".",
          "default": "youtube#captionListResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "CaptionSnippet": {
      "id": "CaptionSnippet",
      "type": "object",
      "description": "Basic details about a caption track, such as its language and name.",
      "properties": {
        "audioTrackType": {
          "type": "string",
          "description": "The type of audio track associated with the caption track.",
          "enum": ["commentary", "descriptive", "primary", "unknown"],
          "enumDescriptions": ["", "", "", ""]
        },
        "failureReason": {
          "type": "string",
          "description": "The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.",
          "enum": ["processingFailed", "unknownFormat", "unsupportedFormat"],
          "enumDescriptions": ["", "", ""]
        },
        "isAutoSynced": {
          "type": "boolean",
          "description": "Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions."
        },
        "isCC": {
          "type": "boolean",
          "description": "Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false."
        },
        "isDraft": {
          "type": "boolean",
          "description": "Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false."
        },
        "isEasyReader": {
          "type": "boolean",
          "description": "Indicates whether caption track is formatted for \"easy reader,\" meaning it is at a third-grade level for language learners. The default value is false."
        },
        "isLarge": {
          "type": "boolean",
          "description": "Indicates whether the caption track uses large text for the vision-impaired. The default value is false."
        },
        "language": {
          "type": "string",
          "description": "The language of the caption track. The property value is a BCP-47 language tag.",
          "annotations": {
            "required": ["youtube.captions.insert"]
          }
        },
        "lastUpdated": {
          "type": "string",
          "description": "The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "name": {
          "type": "string",
          "description": "The name of the caption track. The name is intended to be visible to the user as an option during playback.",
          "annotations": {
            "required": ["youtube.captions.insert"]
          }
        },
        "status": {
          "type": "string",
          "description": "The caption track's status.",
          "enum": ["failed", "serving", "syncing"],
          "enumDescriptions": ["", "", ""]
        },
        "trackKind": {
          "type": "string",
          "description": "The caption track's type.",
          "enum": ["ASR", "forced", "standard"],
          "enumDescriptions": ["", "", ""]
        },
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the video associated with the caption track.",
          "annotations": {
            "required": ["youtube.captions.insert"]
          }
        }
      }
    },
    "CdnSettings": {
      "id": "CdnSettings",
      "type": "object",
      "description": "Brief description of the live stream cdn settings.",
      "properties": {
        "format": {
          "type": "string",
          "description": "The format of the video stream that you are sending to Youtube.",
          "annotations": {
            "required": ["youtube.liveStreams.insert", "youtube.liveStreams.update"]
          }
        },
        "frameRate": {
          "type": "string",
          "description": "The frame rate of the inbound video data.",
          "enum": ["30fps", "60fps"],
          "enumDescriptions": ["", ""]
        },
        "ingestionInfo": {
          "$ref": "IngestionInfo",
          "description": "The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube."
        },
        "ingestionType": {
          "type": "string",
          "description": "The method or protocol used to transmit the video stream.",
          "enum": ["dash", "rtmp"],
          "enumDescriptions": ["", ""],
          "annotations": {
            "required": ["youtube.liveStreams.insert", "youtube.liveStreams.update"]
          }
        },
        "resolution": {
          "type": "string",
          "description": "The resolution of the inbound video data.",
          "enum": ["1080p", "1440p", "2160p", "240p", "360p", "480p", "720p"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        }
      }
    },
    "Channel": {
      "id": "Channel",
      "type": "object",
      "description": "A channel resource contains information about a YouTube channel.",
      "properties": {
        "auditDetails": {
          "$ref": "ChannelAuditDetails",
          "description": "The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process."
        },
        "brandingSettings": {
          "$ref": "ChannelBrandingSettings",
          "description": "The brandingSettings object encapsulates information about the branding of the channel."
        },
        "contentDetails": {
          "$ref": "ChannelContentDetails",
          "description": "The contentDetails object encapsulates information about the channel's content."
        },
        "contentOwnerDetails": {
          "$ref": "ChannelContentOwnerDetails",
          "description": "The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel."
        },
        "conversionPings": {
          "$ref": "ChannelConversionPings",
          "description": "The conversionPings object encapsulates information about conversion pings that need to be respected by the channel."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel."
        },
        "invideoPromotion": {
          "$ref": "InvideoPromotion",
          "description": "The invideoPromotion object encapsulates information about promotion campaign associated with the channel."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#channel\".",
          "default": "youtube#channel"
        },
        "localizations": {
          "type": "object",
          "description": "Localizations for different languages",
          "additionalProperties": {
            "$ref": "ChannelLocalization",
            "description": "The language tag, using string since map_key require simple types."
          }
        },
        "snippet": {
          "$ref": "ChannelSnippet",
          "description": "The snippet object contains basic details about the channel, such as its title, description, and thumbnail images."
        },
        "statistics": {
          "$ref": "ChannelStatistics",
          "description": "The statistics object encapsulates statistics for the channel."
        },
        "status": {
          "$ref": "ChannelStatus",
          "description": "The status object encapsulates information about the privacy status of the channel."
        },
        "topicDetails": {
          "$ref": "ChannelTopicDetails",
          "description": "The topicDetails object encapsulates information about Freebase topics associated with the channel."
        }
      }
    },
    "ChannelAuditDetails": {
      "id": "ChannelAuditDetails",
      "type": "object",
      "description": "The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.",
      "properties": {
        "communityGuidelinesGoodStanding": {
          "type": "boolean",
          "description": "Whether or not the channel respects the community guidelines."
        },
        "contentIdClaimsGoodStanding": {
          "type": "boolean",
          "description": "Whether or not the channel has any unresolved claims."
        },
        "copyrightStrikesGoodStanding": {
          "type": "boolean",
          "description": "Whether or not the channel has any copyright strikes."
        },
        "overallGoodStanding": {
          "type": "boolean",
          "description": "Describes the general state of the channel. This field will always show if there are any issues whatsoever with the channel. Currently this field represents the result of the logical and operation over the community guidelines good standing, the copyright strikes good standing and the content ID claims good standing, but this may change in the future."
        }
      }
    },
    "ChannelBannerResource": {
      "id": "ChannelBannerResource",
      "type": "object",
      "description": "A channel banner returned as the response to a channel_banner.insert call.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#channelBannerResource\".",
          "default": "youtube#channelBannerResource"
        },
        "url": {
          "type": "string",
          "description": "The URL of this banner image."
        }
      }
    },
    "ChannelBrandingSettings": {
      "id": "ChannelBrandingSettings",
      "type": "object",
      "description": "Branding properties of a YouTube channel.",
      "properties": {
        "channel": {
          "$ref": "ChannelSettings",
          "description": "Branding properties for the channel view."
        },
        "hints": {
          "type": "array",
          "description": "Additional experimental branding properties.",
          "items": {
            "$ref": "PropertyValue"
          }
        },
        "image": {
          "$ref": "ImageSettings",
          "description": "Branding properties for branding images."
        },
        "watch": {
          "$ref": "WatchSettings",
          "description": "Branding properties for the watch page."
        }
      }
    },
    "ChannelContentDetails": {
      "id": "ChannelContentDetails",
      "type": "object",
      "description": "Details about the content of a channel.",
      "properties": {
        "relatedPlaylists": {
          "type": "object",
          "properties": {
            "favorites": {
              "type": "string",
              "description": "The ID of the playlist that contains the channel\"s favorite videos. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list."
            },
            "likes": {
              "type": "string",
              "description": "The ID of the playlist that contains the channel\"s liked videos. Use the   playlistItems.insert and  playlistItems.delete to add or remove items from that list."
            },
            "uploads": {
              "type": "string",
              "description": "The ID of the playlist that contains the channel\"s uploaded videos. Use the  videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos."
            },
            "watchHistory": {
              "type": "string",
              "description": "The ID of the playlist that contains the channel\"s watch history. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list."
            },
            "watchLater": {
              "type": "string",
              "description": "The ID of the playlist that contains the channel\"s watch later playlist. Use the playlistItems.insert and  playlistItems.delete to add or remove items from that list."
            }
          }
        }
      }
    },
    "ChannelContentOwnerDetails": {
      "id": "ChannelContentOwnerDetails",
      "type": "object",
      "description": "The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.",
      "properties": {
        "contentOwner": {
          "type": "string",
          "description": "The ID of the content owner linked to the channel."
        },
        "timeLinked": {
          "type": "string",
          "description": "The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        }
      }
    },
    "ChannelConversionPing": {
      "id": "ChannelConversionPing",
      "type": "object",
      "description": "Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.",
      "properties": {
        "context": {
          "type": "string",
          "description": "Defines the context of the ping.",
          "enum": ["cview", "subscribe", "unsubscribe"],
          "enumDescriptions": ["", "", ""]
        },
        "conversionUrl": {
          "type": "string",
          "description": "The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping."
        }
      }
    },
    "ChannelConversionPings": {
      "id": "ChannelConversionPings",
      "type": "object",
      "description": "The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.",
      "properties": {
        "pings": {
          "type": "array",
          "description": "Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.",
          "items": {
            "$ref": "ChannelConversionPing"
          }
        }
      }
    },
    "ChannelListResponse": {
      "id": "ChannelListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of channels that match the request criteria.",
          "items": {
            "$ref": "Channel"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#channelListResponse\".",
          "default": "youtube#channelListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "ChannelLocalization": {
      "id": "ChannelLocalization",
      "type": "object",
      "description": "Channel localization setting",
      "properties": {
        "description": {
          "type": "string",
          "description": "The localized strings for channel's description."
        },
        "title": {
          "type": "string",
          "description": "The localized strings for channel's title."
        }
      }
    },
    "ChannelProfileDetails": {
      "id": "ChannelProfileDetails",
      "type": "object",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The YouTube channel ID."
        },
        "channelUrl": {
          "type": "string",
          "description": "The channel's URL."
        },
        "displayName": {
          "type": "string",
          "description": "The channel's display name."
        },
        "profileImageUrl": {
          "type": "string",
          "description": "The channels's avatar URL."
        }
      }
    },
    "ChannelSection": {
      "id": "ChannelSection",
      "type": "object",
      "properties": {
        "contentDetails": {
          "$ref": "ChannelSectionContentDetails",
          "description": "The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel section."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#channelSection\".",
          "default": "youtube#channelSection"
        },
        "localizations": {
          "type": "object",
          "description": "Localizations for different languages",
          "additionalProperties": {
            "$ref": "ChannelSectionLocalization",
            "description": "The language tag, using string since map_key require simple types."
          }
        },
        "snippet": {
          "$ref": "ChannelSectionSnippet",
          "description": "The snippet object contains basic details about the channel section, such as its type, style and title."
        },
        "targeting": {
          "$ref": "ChannelSectionTargeting",
          "description": "The targeting object contains basic targeting settings about the channel section."
        }
      }
    },
    "ChannelSectionContentDetails": {
      "id": "ChannelSectionContentDetails",
      "type": "object",
      "description": "Details about a channelsection, including playlists and channels.",
      "properties": {
        "channels": {
          "type": "array",
          "description": "The channel ids for type multiple_channels.",
          "items": {
            "type": "string"
          }
        },
        "playlists": {
          "type": "array",
          "description": "The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "ChannelSectionListResponse": {
      "id": "ChannelSectionListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of ChannelSections that match the request criteria.",
          "items": {
            "$ref": "ChannelSection"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#channelSectionListResponse\".",
          "default": "youtube#channelSectionListResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "ChannelSectionLocalization": {
      "id": "ChannelSectionLocalization",
      "type": "object",
      "description": "ChannelSection localization setting",
      "properties": {
        "title": {
          "type": "string",
          "description": "The localized strings for channel section's title."
        }
      }
    },
    "ChannelSectionSnippet": {
      "id": "ChannelSectionSnippet",
      "type": "object",
      "description": "Basic details about a channel section, including title, style and position.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel that published the channel section."
        },
        "defaultLanguage": {
          "type": "string",
          "description": "The language of the channel section's default title and description."
        },
        "localized": {
          "$ref": "ChannelSectionLocalization",
          "description": "Localized title, read-only."
        },
        "position": {
          "type": "integer",
          "description": "The position of the channel section in the channel.",
          "format": "uint32"
        },
        "style": {
          "type": "string",
          "description": "The style of the channel section.",
          "enum": ["channelsectionStyleUndefined", "horizontalRow", "verticalList"],
          "enumDescriptions": ["", "", ""]
        },
        "title": {
          "type": "string",
          "description": "The channel section's title for multiple_playlists and multiple_channels."
        },
        "type": {
          "type": "string",
          "description": "The type of the channel section.",
          "enum": ["allPlaylists", "channelsectionTypeUndefined", "completedEvents", "likedPlaylists", "likes", "liveEvents", "multipleChannels", "multiplePlaylists", "popularUploads", "postedPlaylists", "postedVideos", "recentActivity", "recentPosts", "recentUploads", "singlePlaylist", "subscriptions", "upcomingEvents"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        }
      }
    },
    "ChannelSectionTargeting": {
      "id": "ChannelSectionTargeting",
      "type": "object",
      "description": "ChannelSection targeting setting.",
      "properties": {
        "countries": {
          "type": "array",
          "description": "The country the channel section is targeting.",
          "items": {
            "type": "string"
          }
        },
        "languages": {
          "type": "array",
          "description": "The language the channel section is targeting.",
          "items": {
            "type": "string"
          }
        },
        "regions": {
          "type": "array",
          "description": "The region the channel section is targeting.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "ChannelSettings": {
      "id": "ChannelSettings",
      "type": "object",
      "description": "Branding properties for the channel view.",
      "properties": {
        "country": {
          "type": "string",
          "description": "The country of the channel."
        },
        "defaultLanguage": {
          "type": "string"
        },
        "defaultTab": {
          "type": "string",
          "description": "Which content tab users should see when viewing the channel."
        },
        "description": {
          "type": "string",
          "description": "Specifies the channel description."
        },
        "featuredChannelsTitle": {
          "type": "string",
          "description": "Title for the featured channels tab."
        },
        "featuredChannelsUrls": {
          "type": "array",
          "description": "The list of featured channels.",
          "items": {
            "type": "string"
          }
        },
        "keywords": {
          "type": "string",
          "description": "Lists keywords associated with the channel, comma-separated."
        },
        "moderateComments": {
          "type": "boolean",
          "description": "Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible."
        },
        "profileColor": {
          "type": "string",
          "description": "A prominent color that can be rendered on this channel page."
        },
        "showBrowseView": {
          "type": "boolean",
          "description": "Whether the tab to browse the videos should be displayed."
        },
        "showRelatedChannels": {
          "type": "boolean",
          "description": "Whether related channels should be proposed."
        },
        "title": {
          "type": "string",
          "description": "Specifies the channel title."
        },
        "trackingAnalyticsAccountId": {
          "type": "string",
          "description": "The ID for a Google Analytics account to track and measure traffic to the channels."
        },
        "unsubscribedTrailer": {
          "type": "string",
          "description": "The trailer of the channel, for users that are not subscribers."
        }
      }
    },
    "ChannelSnippet": {
      "id": "ChannelSnippet",
      "type": "object",
      "description": "Basic details about a channel, including title, description and thumbnails. Next available id: 15.",
      "properties": {
        "country": {
          "type": "string",
          "description": "The country of the channel."
        },
        "customUrl": {
          "type": "string",
          "description": "The custom url of the channel."
        },
        "defaultLanguage": {
          "type": "string",
          "description": "The language of the channel's default title and description."
        },
        "description": {
          "type": "string",
          "description": "The description of the channel."
        },
        "localized": {
          "$ref": "ChannelLocalization",
          "description": "Localized title and description, read-only."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The channel's title."
        }
      }
    },
    "ChannelStatistics": {
      "id": "ChannelStatistics",
      "type": "object",
      "description": "Statistics about a channel: number of subscribers, number of videos in the channel, etc.",
      "properties": {
        "commentCount": {
          "type": "string",
          "description": "The number of comments for the channel.",
          "format": "uint64"
        },
        "hiddenSubscriberCount": {
          "type": "boolean",
          "description": "Whether or not the number of subscribers is shown for this user."
        },
        "subscriberCount": {
          "type": "string",
          "description": "The number of subscribers that the channel has.",
          "format": "uint64"
        },
        "videoCount": {
          "type": "string",
          "description": "The number of videos uploaded to the channel.",
          "format": "uint64"
        },
        "viewCount": {
          "type": "string",
          "description": "The number of times the channel has been viewed.",
          "format": "uint64"
        }
      }
    },
    "ChannelStatus": {
      "id": "ChannelStatus",
      "type": "object",
      "description": "JSON template for the status part of a channel.",
      "properties": {
        "isLinked": {
          "type": "boolean",
          "description": "If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity."
        },
        "longUploadsStatus": {
          "type": "string",
          "description": "The long uploads status of this channel. See",
          "enum": ["allowed", "disallowed", "eligible", "longUploadsUnspecified"],
          "enumDescriptions": ["", "", "", ""]
        },
        "privacyStatus": {
          "type": "string",
          "description": "Privacy status of the channel.",
          "enum": ["private", "public", "unlisted"],
          "enumDescriptions": ["", "", ""]
        }
      }
    },
    "ChannelTopicDetails": {
      "id": "ChannelTopicDetails",
      "type": "object",
      "description": "Freebase topic information related to the channel.",
      "properties": {
        "topicCategories": {
          "type": "array",
          "description": "A list of Wikipedia URLs that describe the channel's content.",
          "items": {
            "type": "string"
          }
        },
        "topicIds": {
          "type": "array",
          "description": "A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Comment": {
      "id": "Comment",
      "type": "object",
      "description": "A comment represents a single YouTube comment.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the comment."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#comment\".",
          "default": "youtube#comment"
        },
        "snippet": {
          "$ref": "CommentSnippet",
          "description": "The snippet object contains basic details about the comment."
        }
      }
    },
    "CommentListResponse": {
      "id": "CommentListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of comments that match the request criteria.",
          "items": {
            "$ref": "Comment"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#commentListResponse\".",
          "default": "youtube#commentListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "CommentSnippet": {
      "id": "CommentSnippet",
      "type": "object",
      "description": "Basic details about a comment, such as its author and text.",
      "properties": {
        "authorChannelId": {
          "type": "any",
          "description": "The id of the author's YouTube channel, if any."
        },
        "authorChannelUrl": {
          "type": "string",
          "description": "Link to the author's YouTube channel, if any."
        },
        "authorDisplayName": {
          "type": "string",
          "description": "The name of the user who posted the comment."
        },
        "authorProfileImageUrl": {
          "type": "string",
          "description": "The URL for the avatar of the user who posted the comment."
        },
        "canRate": {
          "type": "boolean",
          "description": "Whether the current viewer can rate this comment."
        },
        "channelId": {
          "type": "string",
          "description": "The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel."
        },
        "likeCount": {
          "type": "integer",
          "description": "The total number of likes this comment has received.",
          "format": "uint32"
        },
        "moderationStatus": {
          "type": "string",
          "description": "The comment's moderation status. Will not be set if the comments were requested through the id filter.",
          "enum": ["heldForReview", "likelySpam", "published", "rejected"],
          "enumDescriptions": ["", "", "", ""]
        },
        "parentId": {
          "type": "string",
          "description": "The unique id of the parent comment, only set for replies."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "textDisplay": {
          "type": "string",
          "description": "The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc."
        },
        "textOriginal": {
          "type": "string",
          "description": "The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author."
        },
        "updatedAt": {
          "type": "string",
          "description": "The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "videoId": {
          "type": "string",
          "description": "The ID of the video the comment refers to, if any."
        },
        "viewerRating": {
          "type": "string",
          "description": "The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.",
          "enum": ["dislike", "like", "none", "unspecified"],
          "enumDescriptions": ["", "", "", ""]
        }
      }
    },
    "CommentThread": {
      "id": "CommentThread",
      "type": "object",
      "description": "A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the comment thread."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#commentThread\".",
          "default": "youtube#commentThread"
        },
        "replies": {
          "$ref": "CommentThreadReplies",
          "description": "The replies object contains a limited number of replies (if any) to the top level comment found in the snippet."
        },
        "snippet": {
          "$ref": "CommentThreadSnippet",
          "description": "The snippet object contains basic details about the comment thread and also the top level comment."
        }
      }
    },
    "CommentThreadListResponse": {
      "id": "CommentThreadListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of comment threads that match the request criteria.",
          "items": {
            "$ref": "CommentThread"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#commentThreadListResponse\".",
          "default": "youtube#commentThreadListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "CommentThreadReplies": {
      "id": "CommentThreadReplies",
      "type": "object",
      "description": "Comments written in (direct or indirect) reply to the top level comment.",
      "properties": {
        "comments": {
          "type": "array",
          "description": "A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.",
          "items": {
            "$ref": "Comment"
          }
        }
      }
    },
    "CommentThreadSnippet": {
      "id": "CommentThreadSnippet",
      "type": "object",
      "description": "Basic details about a comment thread.",
      "properties": {
        "canReply": {
          "type": "boolean",
          "description": "Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field."
        },
        "channelId": {
          "type": "string",
          "description": "The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself."
        },
        "isPublic": {
          "type": "boolean",
          "description": "Whether the thread (and therefore all its comments) is visible to all YouTube users."
        },
        "topLevelComment": {
          "$ref": "Comment",
          "description": "The top level comment of this thread."
        },
        "totalReplyCount": {
          "type": "integer",
          "description": "The total number of replies (not including the top level comment).",
          "format": "uint32"
        },
        "videoId": {
          "type": "string",
          "description": "The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment."
        }
      }
    },
    "ContentRating": {
      "id": "ContentRating",
      "type": "object",
      "description": "Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 71",
      "properties": {
        "acbRating": {
          "type": "string",
          "description": "The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.",
          "enum": ["acbC", "acbE", "acbG", "acbM", "acbMa15plus", "acbP", "acbPg", "acbR18plus", "acbUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "agcomRating": {
          "type": "string",
          "description": "The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).",
          "enum": ["agcomT", "agcomUnrated", "agcomVm14", "agcomVm18"],
          "enumDescriptions": ["", "", "", ""]
        },
        "anatelRating": {
          "type": "string",
          "description": "The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.",
          "enum": ["anatelA", "anatelF", "anatelI", "anatelI10", "anatelI12", "anatelI7", "anatelR", "anatelUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "bbfcRating": {
          "type": "string",
          "description": "The video's British Board of Film Classification (BBFC) rating.",
          "enum": ["bbfc12", "bbfc12a", "bbfc15", "bbfc18", "bbfcPg", "bbfcR18", "bbfcU", "bbfcUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "bfvcRating": {
          "type": "string",
          "description": "The video's rating from Thailand's Board of Film and Video Censors.",
          "enum": ["bfvc13", "bfvc15", "bfvc18", "bfvc20", "bfvcB", "bfvcE", "bfvcG", "bfvcUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "bmukkRating": {
          "type": "string",
          "description": "The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).",
          "enum": ["bmukk10", "bmukk12", "bmukk14", "bmukk16", "bmukk6", "bmukk8", "bmukkAa", "bmukkUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "catvRating": {
          "type": "string",
          "description": "Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.",
          "enum": ["catv14plus", "catv18plus", "catvC", "catvC8", "catvG", "catvPg", "catvUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "catvfrRating": {
          "type": "string",
          "description": "The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.",
          "enum": ["catvfr13plus", "catvfr16plus", "catvfr18plus", "catvfr8plus", "catvfrG", "catvfrUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "cbfcRating": {
          "type": "string",
          "description": "The video's Central Board of Film Certification (CBFC - India) rating.",
          "enum": ["cbfcA", "cbfcS", "cbfcU", "cbfcUA", "cbfcUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "cccRating": {
          "type": "string",
          "description": "The video's Consejo de Calificación Cinematográfica (Chile) rating.",
          "enum": ["ccc14", "ccc18", "ccc18s", "ccc18v", "ccc6", "cccTe", "cccUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "cceRating": {
          "type": "string",
          "description": "The video's rating from Portugal's Comissão de Classificação de Espect´culos.",
          "enum": ["cceM12", "cceM14", "cceM16", "cceM18", "cceM4", "cceM6", "cceUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "chfilmRating": {
          "type": "string",
          "description": "The video's rating in Switzerland.",
          "enum": ["chfilm0", "chfilm12", "chfilm16", "chfilm18", "chfilm6", "chfilmUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "chvrsRating": {
          "type": "string",
          "description": "The video's Canadian Home Video Rating System (CHVRS) rating.",
          "enum": ["chvrs14a", "chvrs18a", "chvrsE", "chvrsG", "chvrsPg", "chvrsR", "chvrsUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "cicfRating": {
          "type": "string",
          "description": "The video's rating from the Commission de Contrôle des Films (Belgium).",
          "enum": ["cicfE", "cicfKntEna", "cicfKtEa", "cicfUnrated"],
          "enumDescriptions": ["", "", "", ""]
        },
        "cnaRating": {
          "type": "string",
          "description": "The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).",
          "enum": ["cna12", "cna15", "cna18", "cna18plus", "cnaAp", "cnaUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "cncRating": {
          "type": "string",
          "description": "Rating system in France - Commission de classification cinematographique",
          "enum": ["cnc10", "cnc12", "cnc16", "cnc18", "cncE", "cncT", "cncUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "csaRating": {
          "type": "string",
          "description": "The video's rating from France's Conseil supérieur de l?audiovisuel, which rates broadcast content.",
          "enum": ["csa10", "csa12", "csa16", "csa18", "csaInterdiction", "csaT", "csaUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "cscfRating": {
          "type": "string",
          "description": "The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).",
          "enum": ["cscf12", "cscf16", "cscf18", "cscf6", "cscf9", "cscfA", "cscfAl", "cscfUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "czfilmRating": {
          "type": "string",
          "description": "The video's rating in the Czech Republic.",
          "enum": ["czfilm12", "czfilm14", "czfilm18", "czfilmU", "czfilmUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "djctqRating": {
          "type": "string",
          "description": "The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.",
          "enum": ["djctq10", "djctq12", "djctq14", "djctq16", "djctq18", "djctqL", "djctqUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "djctqRatingReasons": {
          "type": "array",
          "description": "Reasons that explain why the video received its DJCQT (Brazil) rating.",
          "items": {
            "type": "string",
            "enum": ["djctqCriminalActs", "djctqDrugs", "djctqExplicitSex", "djctqExtremeViolence", "djctqIllegalDrugs", "djctqImpactingContent", "djctqInappropriateLanguage", "djctqLegalDrugs", "djctqNudity", "djctqSex", "djctqSexualContent", "djctqViolence"],
            "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", ""]
          }
        },
        "ecbmctRating": {
          "type": "string",
          "description": "Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism",
          "enum": ["ecbmct13a", "ecbmct13plus", "ecbmct15a", "ecbmct15plus", "ecbmct18plus", "ecbmct7a", "ecbmct7plus", "ecbmctG", "ecbmctUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "eefilmRating": {
          "type": "string",
          "description": "The video's rating in Estonia.",
          "enum": ["eefilmK12", "eefilmK14", "eefilmK16", "eefilmK6", "eefilmL", "eefilmMs12", "eefilmMs6", "eefilmPere", "eefilmUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "egfilmRating": {
          "type": "string",
          "description": "The video's rating in Egypt.",
          "enum": ["egfilm18", "egfilmBn", "egfilmGn", "egfilmUnrated"],
          "enumDescriptions": ["", "", "", ""]
        },
        "eirinRating": {
          "type": "string",
          "description": "The video's Eirin (映倫) rating. Eirin is the Japanese rating system.",
          "enum": ["eirinG", "eirinPg12", "eirinR15plus", "eirinR18plus", "eirinUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "fcbmRating": {
          "type": "string",
          "description": "The video's rating from Malaysia's Film Censorship Board.",
          "enum": ["fcbm18", "fcbm18pa", "fcbm18pl", "fcbm18sg", "fcbm18sx", "fcbmP13", "fcbmPg13", "fcbmU", "fcbmUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "fcoRating": {
          "type": "string",
          "description": "The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.",
          "enum": ["fcoI", "fcoIi", "fcoIia", "fcoIib", "fcoIii", "fcoUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "fmocRating": {
          "type": "string",
          "description": "This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.",
          "enum": ["fmoc10", "fmoc12", "fmoc16", "fmoc18", "fmocE", "fmocU", "fmocUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "fpbRating": {
          "type": "string",
          "description": "The video's rating from South Africa's Film and Publication Board.",
          "enum": ["fpb10", "fpb1012Pg", "fpb13", "fpb16", "fpb18", "fpb79Pg", "fpbA", "fpbPg", "fpbUnrated", "fpbX18", "fpbXx"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", ""]
        },
        "fpbRatingReasons": {
          "type": "array",
          "description": "Reasons that explain why the video received its FPB (South Africa) rating.",
          "items": {
            "type": "string",
            "enum": ["fpbBlasphemy", "fpbCriminalTechniques", "fpbDrugs", "fpbHorror", "fpbImitativeActsTechniques", "fpbLanguage", "fpbNudity", "fpbPrejudice", "fpbSex", "fpbSexualViolence", "fpbViolence"],
            "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", ""]
          }
        },
        "fskRating": {
          "type": "string",
          "description": "The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.",
          "enum": ["fsk0", "fsk12", "fsk16", "fsk18", "fsk6", "fskUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "grfilmRating": {
          "type": "string",
          "description": "The video's rating in Greece.",
          "enum": ["grfilmE", "grfilmK", "grfilmK12", "grfilmK13", "grfilmK15", "grfilmK17", "grfilmK18", "grfilmUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "icaaRating": {
          "type": "string",
          "description": "The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.",
          "enum": ["icaa12", "icaa13", "icaa16", "icaa18", "icaa7", "icaaApta", "icaaUnrated", "icaaX"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "ifcoRating": {
          "type": "string",
          "description": "The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.",
          "enum": ["ifco12", "ifco12a", "ifco15", "ifco15a", "ifco16", "ifco18", "ifcoG", "ifcoPg", "ifcoUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "ilfilmRating": {
          "type": "string",
          "description": "The video's rating in Israel.",
          "enum": ["ilfilm12", "ilfilm16", "ilfilm18", "ilfilmAa", "ilfilmUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "incaaRating": {
          "type": "string",
          "description": "The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.",
          "enum": ["incaaAtp", "incaaC", "incaaSam13", "incaaSam16", "incaaSam18", "incaaUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "kfcbRating": {
          "type": "string",
          "description": "The video's rating from the Kenya Film Classification Board.",
          "enum": ["kfcb16plus", "kfcbG", "kfcbPg", "kfcbR", "kfcbUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "kijkwijzerRating": {
          "type": "string",
          "description": "voor de Classificatie van Audiovisuele Media (Netherlands).",
          "enum": ["kijkwijzer12", "kijkwijzer16", "kijkwijzer18", "kijkwijzer6", "kijkwijzer9", "kijkwijzerAl", "kijkwijzerUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "kmrbRating": {
          "type": "string",
          "description": "The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.",
          "enum": ["kmrb12plus", "kmrb15plus", "kmrbAll", "kmrbR", "kmrbTeenr", "kmrbUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "lsfRating": {
          "type": "string",
          "description": "The video's rating from Indonesia's Lembaga Sensor Film.",
          "enum": ["lsf13", "lsf17", "lsf21", "lsfA", "lsfBo", "lsfD", "lsfR", "lsfSu", "lsfUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "mccaaRating": {
          "type": "string",
          "description": "The video's rating from Malta's Film Age-Classification Board.",
          "enum": ["mccaa12", "mccaa12a", "mccaa14", "mccaa15", "mccaa16", "mccaa18", "mccaaPg", "mccaaU", "mccaaUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "mccypRating": {
          "type": "string",
          "description": "The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.",
          "enum": ["mccyp11", "mccyp15", "mccyp7", "mccypA", "mccypUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "mcstRating": {
          "type": "string",
          "description": "The video's rating system for Vietnam - MCST",
          "enum": ["mcst0", "mcst16plus", "mcstC13", "mcstC16", "mcstC18", "mcstGPg", "mcstP", "mcstUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "mdaRating": {
          "type": "string",
          "description": "The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).",
          "enum": ["mdaG", "mdaM18", "mdaNc16", "mdaPg", "mdaPg13", "mdaR21", "mdaUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "medietilsynetRating": {
          "type": "string",
          "description": "The video's rating from Medietilsynet, the Norwegian Media Authority.",
          "enum": ["medietilsynet11", "medietilsynet12", "medietilsynet15", "medietilsynet18", "medietilsynet6", "medietilsynet7", "medietilsynet9", "medietilsynetA", "medietilsynetUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "mekuRating": {
          "type": "string",
          "description": "The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).",
          "enum": ["meku12", "meku16", "meku18", "meku7", "mekuS", "mekuUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "menaMpaaRating": {
          "type": "string",
          "description": "The rating system for MENA countries, a clone of MPAA. It is needed to",
          "enum": ["menaMpaaG", "menaMpaaPg", "menaMpaaPg13", "menaMpaaR", "menaMpaaUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "mibacRating": {
          "type": "string",
          "description": "The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).",
          "enum": ["mibacT", "mibacUnrated", "mibacVap", "mibacVm12", "mibacVm14", "mibacVm18"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "mocRating": {
          "type": "string",
          "description": "The video's Ministerio de Cultura (Colombia) rating.",
          "enum": ["moc12", "moc15", "moc18", "moc7", "mocBanned", "mocE", "mocT", "mocUnrated", "mocX"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", ""]
        },
        "moctwRating": {
          "type": "string",
          "description": "The video's rating from Taiwan's Ministry of Culture (文化部).",
          "enum": ["moctwG", "moctwP", "moctwPg", "moctwR", "moctwR12", "moctwR15", "moctwUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "mpaaRating": {
          "type": "string",
          "description": "The video's Motion Picture Association of America (MPAA) rating.",
          "enum": ["mpaaG", "mpaaNc17", "mpaaPg", "mpaaPg13", "mpaaR", "mpaaUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "mpaatRating": {
          "type": "string",
          "description": "The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.",
          "enum": ["mpaatGb", "mpaatRb"],
          "enumDescriptions": ["", ""]
        },
        "mtrcbRating": {
          "type": "string",
          "description": "The video's rating from the Movie and Television Review and Classification Board (Philippines).",
          "enum": ["mtrcbG", "mtrcbPg", "mtrcbR13", "mtrcbR16", "mtrcbR18", "mtrcbUnrated", "mtrcbX"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "nbcRating": {
          "type": "string",
          "description": "The video's rating from the Maldives National Bureau of Classification.",
          "enum": ["nbc12plus", "nbc15plus", "nbc18plus", "nbc18plusr", "nbcG", "nbcPg", "nbcPu", "nbcUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "nbcplRating": {
          "type": "string",
          "description": "The video's rating in Poland.",
          "enum": ["nbcpl18plus", "nbcplI", "nbcplIi", "nbcplIii", "nbcplIv", "nbcplUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "nfrcRating": {
          "type": "string",
          "description": "The video's rating from the Bulgarian National Film Center.",
          "enum": ["nfrcA", "nfrcB", "nfrcC", "nfrcD", "nfrcUnrated", "nfrcX"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "nfvcbRating": {
          "type": "string",
          "description": "The video's rating from Nigeria's National Film and Video Censors Board.",
          "enum": ["nfvcb12", "nfvcb12a", "nfvcb15", "nfvcb18", "nfvcbG", "nfvcbPg", "nfvcbRe", "nfvcbUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "nkclvRating": {
          "type": "string",
          "description": "The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).",
          "enum": ["nkclv12plus", "nkclv18plus", "nkclv7plus", "nkclvU", "nkclvUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "oflcRating": {
          "type": "string",
          "description": "The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.",
          "enum": ["oflcG", "oflcM", "oflcPg", "oflcR13", "oflcR15", "oflcR16", "oflcR18", "oflcRp13", "oflcRp16", "oflcUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", ""]
        },
        "pefilmRating": {
          "type": "string",
          "description": "The video's rating in Peru.",
          "enum": ["pefilm14", "pefilm18", "pefilmPg", "pefilmPt", "pefilmUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "rcnofRating": {
          "type": "string",
          "description": "The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.",
          "enum": ["rcnofI", "rcnofIi", "rcnofIii", "rcnofIv", "rcnofUnrated", "rcnofV", "rcnofVi"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "resorteviolenciaRating": {
          "type": "string",
          "description": "The video's rating in Venezuela.",
          "enum": ["resorteviolenciaA", "resorteviolenciaB", "resorteviolenciaC", "resorteviolenciaD", "resorteviolenciaE", "resorteviolenciaUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "rtcRating": {
          "type": "string",
          "description": "The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.",
          "enum": ["rtcA", "rtcAa", "rtcB", "rtcB15", "rtcC", "rtcD", "rtcUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "rteRating": {
          "type": "string",
          "description": "The video's rating from Ireland's Raidió Teilifís Éireann.",
          "enum": ["rteCh", "rteGa", "rteMa", "rtePs", "rteUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "russiaRating": {
          "type": "string",
          "description": "The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.",
          "enum": ["russia0", "russia12", "russia16", "russia18", "russia6", "russiaUnrated"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "skfilmRating": {
          "type": "string",
          "description": "The video's rating in Slovakia.",
          "enum": ["skfilmG", "skfilmP2", "skfilmP5", "skfilmP8", "skfilmUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "smaisRating": {
          "type": "string",
          "description": "The video's rating in Iceland.",
          "enum": ["smais12", "smais14", "smais16", "smais18", "smais7", "smaisL", "smaisUnrated"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "smsaRating": {
          "type": "string",
          "description": "The video's rating from Statens medieråd (Sweden's National Media Council).",
          "enum": ["smsa11", "smsa15", "smsa7", "smsaA", "smsaUnrated"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "tvpgRating": {
          "type": "string",
          "description": "The video's TV Parental Guidelines (TVPG) rating.",
          "enum": ["pg14", "tvpgG", "tvpgMa", "tvpgPg", "tvpgUnrated", "tvpgY", "tvpgY7", "tvpgY7Fv"],
          "enumDescriptions": ["", "", "", "", "", "", "", ""]
        },
        "ytRating": {
          "type": "string",
          "description": "A rating that YouTube uses to identify age-restricted content.",
          "enum": ["ytAgeRestricted"],
          "enumDescriptions": [""]
        }
      }
    },
    "FanFundingEvent": {
      "id": "FanFundingEvent",
      "type": "object",
      "description": "A fanFundingEvent resource represents a fan funding event on a YouTube channel. Fan funding events occur when a user gives one-time monetary support to the channel owner.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the fan funding event."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#fanFundingEvent\".",
          "default": "youtube#fanFundingEvent"
        },
        "snippet": {
          "$ref": "FanFundingEventSnippet",
          "description": "The snippet object contains basic details about the fan funding event."
        }
      }
    },
    "FanFundingEventListResponse": {
      "id": "FanFundingEventListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of fan funding events that match the request criteria.",
          "items": {
            "$ref": "FanFundingEvent"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#fanFundingEventListResponse\".",
          "default": "youtube#fanFundingEventListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "FanFundingEventSnippet": {
      "id": "FanFundingEventSnippet",
      "type": "object",
      "properties": {
        "amountMicros": {
          "type": "string",
          "description": "The amount of funding in micros of fund_currency. e.g., 1 is represented",
          "format": "uint64"
        },
        "channelId": {
          "type": "string",
          "description": "Channel id where the funding event occurred."
        },
        "commentText": {
          "type": "string",
          "description": "The text contents of the comment left by the user."
        },
        "createdAt": {
          "type": "string",
          "description": "The date and time when the funding occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "currency": {
          "type": "string",
          "description": "The currency in which the fund was made. ISO 4217."
        },
        "displayString": {
          "type": "string",
          "description": "A rendered string that displays the fund amount and currency (e.g., \"$1.00\"). The string is rendered for the given language."
        },
        "supporterDetails": {
          "$ref": "ChannelProfileDetails",
          "description": "Details about the supporter. Only filled if the event was made public by the user."
        }
      }
    },
    "GeoPoint": {
      "id": "GeoPoint",
      "type": "object",
      "description": "Geographical coordinates of a point, in WGS84.",
      "properties": {
        "altitude": {
          "type": "number",
          "description": "Altitude above the reference ellipsoid, in meters.",
          "format": "double"
        },
        "latitude": {
          "type": "number",
          "description": "Latitude in degrees.",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "description": "Longitude in degrees.",
          "format": "double"
        }
      }
    },
    "GuideCategory": {
      "id": "GuideCategory",
      "type": "object",
      "description": "A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel's content or other indicators, such as the channel's popularity. The list is similar to video categories, with the difference being that a video's uploader can assign a video category but only YouTube can assign a channel category.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the guide category."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#guideCategory\".",
          "default": "youtube#guideCategory"
        },
        "snippet": {
          "$ref": "GuideCategorySnippet",
          "description": "The snippet object contains basic details about the category, such as its title."
        }
      }
    },
    "GuideCategoryListResponse": {
      "id": "GuideCategoryListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding guideCategory resource.",
          "items": {
            "$ref": "GuideCategory"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#guideCategoryListResponse\".",
          "default": "youtube#guideCategoryListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "GuideCategorySnippet": {
      "id": "GuideCategorySnippet",
      "type": "object",
      "description": "Basic details about a guide category.",
      "properties": {
        "channelId": {
          "type": "string",
          "default": "UCBR8-60-B28hp2BmDPdntcQ"
        },
        "title": {
          "type": "string",
          "description": "Description of the guide category."
        }
      }
    },
    "I18nLanguage": {
      "id": "I18nLanguage",
      "type": "object",
      "description": "An i18nLanguage resource identifies a UI language currently supported by YouTube.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the i18n language."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#i18nLanguage\".",
          "default": "youtube#i18nLanguage"
        },
        "snippet": {
          "$ref": "I18nLanguageSnippet",
          "description": "The snippet object contains basic details about the i18n language, such as language code and human-readable name."
        }
      }
    },
    "I18nLanguageListResponse": {
      "id": "I18nLanguageListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.",
          "items": {
            "$ref": "I18nLanguage"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#i18nLanguageListResponse\".",
          "default": "youtube#i18nLanguageListResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "I18nLanguageSnippet": {
      "id": "I18nLanguageSnippet",
      "type": "object",
      "description": "Basic details about an i18n language, such as language code and human-readable name.",
      "properties": {
        "hl": {
          "type": "string",
          "description": "A short BCP-47 code that uniquely identifies a language."
        },
        "name": {
          "type": "string",
          "description": "The human-readable name of the language in the language itself."
        }
      }
    },
    "I18nRegion": {
      "id": "I18nRegion",
      "type": "object",
      "description": "A i18nRegion resource identifies a region where YouTube is available.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the i18n region."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#i18nRegion\".",
          "default": "youtube#i18nRegion"
        },
        "snippet": {
          "$ref": "I18nRegionSnippet",
          "description": "The snippet object contains basic details about the i18n region, such as region code and human-readable name."
        }
      }
    },
    "I18nRegionListResponse": {
      "id": "I18nRegionListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.",
          "items": {
            "$ref": "I18nRegion"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#i18nRegionListResponse\".",
          "default": "youtube#i18nRegionListResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "I18nRegionSnippet": {
      "id": "I18nRegionSnippet",
      "type": "object",
      "description": "Basic details about an i18n region, such as region code and human-readable name.",
      "properties": {
        "gl": {
          "type": "string",
          "description": "The region code as a 2-letter ISO country code."
        },
        "name": {
          "type": "string",
          "description": "The human-readable name of the region."
        }
      }
    },
    "ImageSettings": {
      "id": "ImageSettings",
      "type": "object",
      "description": "Branding properties for images associated with the channel.",
      "properties": {
        "backgroundImageUrl": {
          "$ref": "LocalizedProperty",
          "description": "The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k."
        },
        "bannerExternalUrl": {
          "type": "string",
          "description": "This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs."
        },
        "bannerImageUrl": {
          "type": "string",
          "description": "Banner image. Desktop size (1060x175)."
        },
        "bannerMobileExtraHdImageUrl": {
          "type": "string",
          "description": "Banner image. Mobile size high resolution (1440x395)."
        },
        "bannerMobileHdImageUrl": {
          "type": "string",
          "description": "Banner image. Mobile size high resolution (1280x360)."
        },
        "bannerMobileImageUrl": {
          "type": "string",
          "description": "Banner image. Mobile size (640x175)."
        },
        "bannerMobileLowImageUrl": {
          "type": "string",
          "description": "Banner image. Mobile size low resolution (320x88)."
        },
        "bannerMobileMediumHdImageUrl": {
          "type": "string",
          "description": "Banner image. Mobile size medium/high resolution (960x263)."
        },
        "bannerTabletExtraHdImageUrl": {
          "type": "string",
          "description": "Banner image. Tablet size extra high resolution (2560x424)."
        },
        "bannerTabletHdImageUrl": {
          "type": "string",
          "description": "Banner image. Tablet size high resolution (2276x377)."
        },
        "bannerTabletImageUrl": {
          "type": "string",
          "description": "Banner image. Tablet size (1707x283)."
        },
        "bannerTabletLowImageUrl": {
          "type": "string",
          "description": "Banner image. Tablet size low resolution (1138x188)."
        },
        "bannerTvHighImageUrl": {
          "type": "string",
          "description": "Banner image. TV size high resolution (1920x1080)."
        },
        "bannerTvImageUrl": {
          "type": "string",
          "description": "Banner image. TV size extra high resolution (2120x1192)."
        },
        "bannerTvLowImageUrl": {
          "type": "string",
          "description": "Banner image. TV size low resolution (854x480)."
        },
        "bannerTvMediumImageUrl": {
          "type": "string",
          "description": "Banner image. TV size medium resolution (1280x720)."
        },
        "largeBrandedBannerImageImapScript": {
          "$ref": "LocalizedProperty",
          "description": "The image map script for the large banner image."
        },
        "largeBrandedBannerImageUrl": {
          "$ref": "LocalizedProperty",
          "description": "The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page."
        },
        "smallBrandedBannerImageImapScript": {
          "$ref": "LocalizedProperty",
          "description": "The image map script for the small banner image."
        },
        "smallBrandedBannerImageUrl": {
          "$ref": "LocalizedProperty",
          "description": "The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page."
        },
        "trackingImageUrl": {
          "type": "string",
          "description": "The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages."
        },
        "watchIconImageUrl": {
          "type": "string",
          "description": "The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels."
        }
      }
    },
    "IngestionInfo": {
      "id": "IngestionInfo",
      "type": "object",
      "description": "Describes information necessary for ingesting an RTMP or an HTTP stream.",
      "properties": {
        "backupIngestionAddress": {
          "type": "string",
          "description": "The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL."
        },
        "ingestionAddress": {
          "type": "string",
          "description": "The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.\n\nDepending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:\n\nSTREAM_URL/STREAM_NAME"
        },
        "streamName": {
          "type": "string",
          "description": "The HTTP or RTMP stream name that YouTube assigns to the video stream."
        }
      }
    },
    "InvideoBranding": {
      "id": "InvideoBranding",
      "type": "object",
      "properties": {
        "imageBytes": {
          "type": "string",
          "format": "byte"
        },
        "imageUrl": {
          "type": "string"
        },
        "position": {
          "$ref": "InvideoPosition"
        },
        "targetChannelId": {
          "type": "string"
        },
        "timing": {
          "$ref": "InvideoTiming"
        }
      }
    },
    "InvideoPosition": {
      "id": "InvideoPosition",
      "type": "object",
      "description": "Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.",
      "properties": {
        "cornerPosition": {
          "type": "string",
          "description": "Describes in which corner of the video the visual widget will appear.",
          "enum": ["bottomLeft", "bottomRight", "topLeft", "topRight"],
          "enumDescriptions": ["", "", "", ""]
        },
        "type": {
          "type": "string",
          "description": "Defines the position type.",
          "enum": ["corner"],
          "enumDescriptions": [""]
        }
      }
    },
    "InvideoPromotion": {
      "id": "InvideoPromotion",
      "type": "object",
      "description": "Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id.",
      "properties": {
        "defaultTiming": {
          "$ref": "InvideoTiming",
          "description": "The default temporal position within the video where the promoted item will be displayed. Can be overriden by more specific timing in the item."
        },
        "items": {
          "type": "array",
          "description": "List of promoted items in decreasing priority.",
          "items": {
            "$ref": "PromotedItem"
          }
        },
        "position": {
          "$ref": "InvideoPosition",
          "description": "The spatial position within the video where the promoted item will be displayed."
        },
        "useSmartTiming": {
          "type": "boolean",
          "description": "Indicates whether the channel's promotional campaign uses \"smart timing.\" This feature attempts to show promotions at a point in the video when they are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video."
        }
      }
    },
    "InvideoTiming": {
      "id": "InvideoTiming",
      "type": "object",
      "description": "Describes a temporal position of a visual widget inside a video.",
      "properties": {
        "durationMs": {
          "type": "string",
          "description": "Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.",
          "format": "uint64"
        },
        "offsetMs": {
          "type": "string",
          "description": "Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.",
          "format": "uint64"
        },
        "type": {
          "type": "string",
          "description": "Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.",
          "enum": ["offsetFromEnd", "offsetFromStart"],
          "enumDescriptions": ["", ""]
        }
      }
    },
    "LanguageTag": {
      "id": "LanguageTag",
      "type": "object",
      "properties": {
        "value": {
          "type": "string"
        }
      }
    },
    "LiveBroadcast": {
      "id": "LiveBroadcast",
      "type": "object",
      "description": "A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.",
      "properties": {
        "contentDetails": {
          "$ref": "LiveBroadcastContentDetails",
          "description": "The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the broadcast.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveBroadcast\".",
          "default": "youtube#liveBroadcast"
        },
        "snippet": {
          "$ref": "LiveBroadcastSnippet",
          "description": "The snippet object contains basic details about the event, including its title, description, start time, and end time."
        },
        "statistics": {
          "$ref": "LiveBroadcastStatistics",
          "description": "The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live."
        },
        "status": {
          "$ref": "LiveBroadcastStatus",
          "description": "The status object contains information about the event's status."
        }
      }
    },
    "LiveBroadcastContentDetails": {
      "id": "LiveBroadcastContentDetails",
      "type": "object",
      "description": "Detailed settings of a broadcast.",
      "properties": {
        "boundStreamId": {
          "type": "string",
          "description": "This value uniquely identifies the live stream bound to the broadcast."
        },
        "boundStreamLastUpdateTimeMs": {
          "type": "string",
          "description": "The date and time that the live stream referenced by boundStreamId was last updated.",
          "format": "date-time"
        },
        "closedCaptionsType": {
          "type": "string",
          "enum": ["closedCaptionsDisabled", "closedCaptionsEmbedded", "closedCaptionsHttpPost"],
          "enumDescriptions": ["", "", ""]
        },
        "enableClosedCaptions": {
          "type": "boolean",
          "description": "This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST."
        },
        "enableContentEncryption": {
          "type": "boolean",
          "description": "This setting indicates whether YouTube should enable content encryption for the broadcast.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "enableDvr": {
          "type": "boolean",
          "description": "This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.\n\n\n\nImportant: You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "enableEmbed": {
          "type": "boolean",
          "description": "This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "enableLowLatency": {
          "type": "boolean",
          "description": "Indicates whether this broadcast has low latency enabled."
        },
        "latencyPreference": {
          "type": "string",
          "description": "If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.",
          "enum": ["low", "normal", "ultraLow"],
          "enumDescriptions": ["", "", ""]
        },
        "mesh": {
          "type": "string",
          "format": "byte"
        },
        "monitorStream": {
          "$ref": "MonitorStreamInfo",
          "description": "The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly."
        },
        "projection": {
          "type": "string",
          "description": "The projection format of this broadcast. This defaults to rectangular.",
          "enum": ["360", "mesh", "rectangular"],
          "enumDescriptions": ["", "", ""]
        },
        "recordFromStart": {
          "type": "boolean",
          "description": "Automatically start recording after the event goes live. The default value for this property is true.\n\n\n\nImportant: You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "startWithSlate": {
          "type": "boolean",
          "description": "This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        }
      }
    },
    "LiveBroadcastListResponse": {
      "id": "LiveBroadcastListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of broadcasts that match the request criteria.",
          "items": {
            "$ref": "LiveBroadcast"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveBroadcastListResponse\".",
          "default": "youtube#liveBroadcastListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "LiveBroadcastSnippet": {
      "id": "LiveBroadcastSnippet",
      "type": "object",
      "properties": {
        "actualEndTime": {
          "type": "string",
          "description": "The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "actualStartTime": {
          "type": "string",
          "description": "The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast."
        },
        "description": {
          "type": "string",
          "description": "The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource."
        },
        "isDefaultBroadcast": {
          "type": "boolean"
        },
        "liveChatId": {
          "type": "string",
          "description": "The id of the live chat for this broadcast."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "scheduledEndTime": {
          "type": "string",
          "description": "The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "scheduledStartTime": {
          "type": "string",
          "description": "The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time",
          "annotations": {
            "required": ["youtube.liveBroadcasts.insert", "youtube.liveBroadcasts.update"]
          }
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.insert", "youtube.liveBroadcasts.update"]
          }
        }
      }
    },
    "LiveBroadcastStatistics": {
      "id": "LiveBroadcastStatistics",
      "type": "object",
      "description": "Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.",
      "properties": {
        "concurrentViewers": {
          "type": "string",
          "description": "The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.",
          "format": "uint64"
        },
        "totalChatCount": {
          "type": "string",
          "description": "The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast.",
          "format": "uint64"
        }
      }
    },
    "LiveBroadcastStatus": {
      "id": "LiveBroadcastStatus",
      "type": "object",
      "properties": {
        "lifeCycleStatus": {
          "type": "string",
          "description": "The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.",
          "enum": ["abandoned", "complete", "completeStarting", "created", "live", "liveStarting", "ready", "reclaimed", "revoked", "testStarting", "testing"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", ""]
        },
        "liveBroadcastPriority": {
          "type": "string",
          "description": "Priority of the live broadcast event (internal state).",
          "enum": ["high", "low", "normal"],
          "enumDescriptions": ["", "", ""]
        },
        "privacyStatus": {
          "type": "string",
          "description": "The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.",
          "enum": ["private", "public", "unlisted"],
          "enumDescriptions": ["", "", ""],
          "annotations": {
            "required": ["youtube.liveBroadcasts.insert", "youtube.liveBroadcasts.update"]
          }
        },
        "recordingStatus": {
          "type": "string",
          "description": "The broadcast's recording status.",
          "enum": ["notRecording", "recorded", "recording"],
          "enumDescriptions": ["", "", ""]
        }
      }
    },
    "LiveChatBan": {
      "id": "LiveChatBan",
      "type": "object",
      "description": "A liveChatBan resource represents a ban for a YouTube live chat.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the ban."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatBan\".",
          "default": "youtube#liveChatBan"
        },
        "snippet": {
          "$ref": "LiveChatBanSnippet",
          "description": "The snippet object contains basic details about the ban."
        }
      }
    },
    "LiveChatBanSnippet": {
      "id": "LiveChatBanSnippet",
      "type": "object",
      "properties": {
        "banDurationSeconds": {
          "type": "string",
          "description": "The duration of a ban, only filled if the ban has type TEMPORARY.",
          "format": "uint64"
        },
        "bannedUserDetails": {
          "$ref": "ChannelProfileDetails"
        },
        "liveChatId": {
          "type": "string",
          "description": "The chat this ban is pertinent to."
        },
        "type": {
          "type": "string",
          "description": "The type of ban.",
          "enum": ["permanent", "temporary"],
          "enumDescriptions": ["", ""]
        }
      }
    },
    "LiveChatFanFundingEventDetails": {
      "id": "LiveChatFanFundingEventDetails",
      "type": "object",
      "properties": {
        "amountDisplayString": {
          "type": "string",
          "description": "A rendered string that displays the fund amount and currency to the user."
        },
        "amountMicros": {
          "type": "string",
          "description": "The amount of the fund.",
          "format": "uint64"
        },
        "currency": {
          "type": "string",
          "description": "The currency in which the fund was made."
        },
        "userComment": {
          "type": "string",
          "description": "The comment added by the user to this fan funding event."
        }
      }
    },
    "LiveChatMessage": {
      "id": "LiveChatMessage",
      "type": "object",
      "description": "A liveChatMessage resource represents a chat message in a YouTube Live Chat.",
      "properties": {
        "authorDetails": {
          "$ref": "LiveChatMessageAuthorDetails",
          "description": "The authorDetails object contains basic details about the user that posted this message."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the message."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatMessage\".",
          "default": "youtube#liveChatMessage"
        },
        "snippet": {
          "$ref": "LiveChatMessageSnippet",
          "description": "The snippet object contains basic details about the message."
        }
      }
    },
    "LiveChatMessageAuthorDetails": {
      "id": "LiveChatMessageAuthorDetails",
      "type": "object",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The YouTube channel ID."
        },
        "channelUrl": {
          "type": "string",
          "description": "The channel's URL."
        },
        "displayName": {
          "type": "string",
          "description": "The channel's display name."
        },
        "isChatModerator": {
          "type": "boolean",
          "description": "Whether the author is a moderator of the live chat."
        },
        "isChatOwner": {
          "type": "boolean",
          "description": "Whether the author is the owner of the live chat."
        },
        "isChatSponsor": {
          "type": "boolean",
          "description": "Whether the author is a sponsor of the live chat."
        },
        "isVerified": {
          "type": "boolean",
          "description": "Whether the author's identity has been verified by YouTube."
        },
        "profileImageUrl": {
          "type": "string",
          "description": "The channels's avatar URL."
        }
      }
    },
    "LiveChatMessageDeletedDetails": {
      "id": "LiveChatMessageDeletedDetails",
      "type": "object",
      "properties": {
        "deletedMessageId": {
          "type": "string"
        }
      }
    },
    "LiveChatMessageListResponse": {
      "id": "LiveChatMessageListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of live chat messages.",
          "items": {
            "$ref": "LiveChatMessage"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatMessageListResponse\".",
          "default": "youtube#liveChatMessageListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "offlineAt": {
          "type": "string",
          "description": "The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "pollingIntervalMillis": {
          "type": "integer",
          "description": "The amount of time the client should wait before polling again.",
          "format": "uint32"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "LiveChatMessageRetractedDetails": {
      "id": "LiveChatMessageRetractedDetails",
      "type": "object",
      "properties": {
        "retractedMessageId": {
          "type": "string"
        }
      }
    },
    "LiveChatMessageSnippet": {
      "id": "LiveChatMessageSnippet",
      "type": "object",
      "properties": {
        "authorChannelId": {
          "type": "string",
          "description": "The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase"
        },
        "displayMessage": {
          "type": "string",
          "description": "Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent."
        },
        "fanFundingEventDetails": {
          "$ref": "LiveChatFanFundingEventDetails",
          "description": "Details about the funding event, this is only set if the type is 'fanFundingEvent'."
        },
        "hasDisplayContent": {
          "type": "boolean",
          "description": "Whether the message has display content that should be displayed to users."
        },
        "liveChatId": {
          "type": "string"
        },
        "messageDeletedDetails": {
          "$ref": "LiveChatMessageDeletedDetails"
        },
        "messageRetractedDetails": {
          "$ref": "LiveChatMessageRetractedDetails"
        },
        "pollClosedDetails": {
          "$ref": "LiveChatPollClosedDetails"
        },
        "pollEditedDetails": {
          "$ref": "LiveChatPollEditedDetails"
        },
        "pollOpenedDetails": {
          "$ref": "LiveChatPollOpenedDetails"
        },
        "pollVotedDetails": {
          "$ref": "LiveChatPollVotedDetails"
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "superChatDetails": {
          "$ref": "LiveChatSuperChatDetails",
          "description": "Details about the Super Chat event, this is only set if the type is 'superChatEvent'."
        },
        "textMessageDetails": {
          "$ref": "LiveChatTextMessageDetails",
          "description": "Details about the text message, this is only set if the type is 'textMessageEvent'."
        },
        "type": {
          "type": "string",
          "description": "The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.",
          "enum": ["chatEndedEvent", "fanFundingEvent", "messageDeletedEvent", "messageRetractedEvent", "newSponsorEvent", "pollClosedEvent", "pollEditedEvent", "pollOpenedEvent", "pollVotedEvent", "sponsorOnlyModeEndedEvent", "sponsorOnlyModeStartedEvent", "superChatEvent", "textMessageEvent", "tombstone", "userBannedEvent"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        },
        "userBannedDetails": {
          "$ref": "LiveChatUserBannedMessageDetails"
        }
      }
    },
    "LiveChatModerator": {
      "id": "LiveChatModerator",
      "type": "object",
      "description": "A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the moderator."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatModerator\".",
          "default": "youtube#liveChatModerator"
        },
        "snippet": {
          "$ref": "LiveChatModeratorSnippet",
          "description": "The snippet object contains basic details about the moderator."
        }
      }
    },
    "LiveChatModeratorListResponse": {
      "id": "LiveChatModeratorListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of moderators that match the request criteria.",
          "items": {
            "$ref": "LiveChatModerator"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatModeratorListResponse\".",
          "default": "youtube#liveChatModeratorListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "LiveChatModeratorSnippet": {
      "id": "LiveChatModeratorSnippet",
      "type": "object",
      "properties": {
        "liveChatId": {
          "type": "string",
          "description": "The ID of the live chat this moderator can act on."
        },
        "moderatorDetails": {
          "$ref": "ChannelProfileDetails",
          "description": "Details about the moderator."
        }
      }
    },
    "LiveChatPollClosedDetails": {
      "id": "LiveChatPollClosedDetails",
      "type": "object",
      "properties": {
        "pollId": {
          "type": "string",
          "description": "The id of the poll that was closed."
        }
      }
    },
    "LiveChatPollEditedDetails": {
      "id": "LiveChatPollEditedDetails",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "$ref": "LiveChatPollItem"
          }
        },
        "prompt": {
          "type": "string"
        }
      }
    },
    "LiveChatPollItem": {
      "id": "LiveChatPollItem",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "description": "Plain text description of the item."
        },
        "itemId": {
          "type": "string"
        }
      }
    },
    "LiveChatPollOpenedDetails": {
      "id": "LiveChatPollOpenedDetails",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "$ref": "LiveChatPollItem"
          }
        },
        "prompt": {
          "type": "string"
        }
      }
    },
    "LiveChatPollVotedDetails": {
      "id": "LiveChatPollVotedDetails",
      "type": "object",
      "properties": {
        "itemId": {
          "type": "string",
          "description": "The poll item the user chose."
        },
        "pollId": {
          "type": "string",
          "description": "The poll the user voted on."
        }
      }
    },
    "LiveChatSuperChatDetails": {
      "id": "LiveChatSuperChatDetails",
      "type": "object",
      "properties": {
        "amountDisplayString": {
          "type": "string",
          "description": "A rendered string that displays the fund amount and currency to the user."
        },
        "amountMicros": {
          "type": "string",
          "description": "The amount purchased by the user, in micros (1,750,000 micros = 1.75).",
          "format": "uint64"
        },
        "currency": {
          "type": "string",
          "description": "The currency in which the purchase was made."
        },
        "tier": {
          "type": "integer",
          "description": "The tier in which the amount belongs to. Lower amounts belong to lower tiers. Starts at 1.",
          "format": "uint32"
        },
        "userComment": {
          "type": "string",
          "description": "The comment added by the user to this Super Chat event."
        }
      }
    },
    "LiveChatTextMessageDetails": {
      "id": "LiveChatTextMessageDetails",
      "type": "object",
      "properties": {
        "messageText": {
          "type": "string",
          "description": "The user's message."
        }
      }
    },
    "LiveChatUserBannedMessageDetails": {
      "id": "LiveChatUserBannedMessageDetails",
      "type": "object",
      "properties": {
        "banDurationSeconds": {
          "type": "string",
          "description": "The duration of the ban. This property is only present if the banType is temporary.",
          "format": "uint64"
        },
        "banType": {
          "type": "string",
          "description": "The type of ban.",
          "enum": ["permanent", "temporary"],
          "enumDescriptions": ["", ""]
        },
        "bannedUserDetails": {
          "$ref": "ChannelProfileDetails",
          "description": "The details of the user that was banned."
        }
      }
    },
    "LiveStream": {
      "id": "LiveStream",
      "type": "object",
      "description": "A live stream describes a live ingestion point.",
      "properties": {
        "cdn": {
          "$ref": "CdnSettings",
          "description": "The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube."
        },
        "contentDetails": {
          "$ref": "LiveStreamContentDetails",
          "description": "The content_details object contains information about the stream, including the closed captions ingestion URL."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the stream.",
          "annotations": {
            "required": ["youtube.liveStreams.update"]
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveStream\".",
          "default": "youtube#liveStream"
        },
        "snippet": {
          "$ref": "LiveStreamSnippet",
          "description": "The snippet object contains basic details about the stream, including its channel, title, and description."
        },
        "status": {
          "$ref": "LiveStreamStatus",
          "description": "The status object contains information about live stream's status."
        }
      }
    },
    "LiveStreamConfigurationIssue": {
      "id": "LiveStreamConfigurationIssue",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "description": "The long-form description of the issue and how to resolve it."
        },
        "reason": {
          "type": "string",
          "description": "The short-form reason for this issue."
        },
        "severity": {
          "type": "string",
          "description": "How severe this issue is to the stream.",
          "enum": ["error", "info", "warning"],
          "enumDescriptions": ["", "", ""]
        },
        "type": {
          "type": "string",
          "description": "The kind of error happening.",
          "enum": ["audioBitrateHigh", "audioBitrateLow", "audioBitrateMismatch", "audioCodec", "audioCodecMismatch", "audioSampleRate", "audioSampleRateMismatch", "audioStereoMismatch", "audioTooManyChannels", "badContainer", "bitrateHigh", "bitrateLow", "frameRateHigh", "framerateMismatch", "gopMismatch", "gopSizeLong", "gopSizeOver", "gopSizeShort", "interlacedVideo", "multipleAudioStreams", "multipleVideoStreams", "noAudioStream", "noVideoStream", "openGop", "resolutionMismatch", "videoBitrateMismatch", "videoCodec", "videoCodecMismatch", "videoIngestionStarved", "videoInterlaceMismatch", "videoProfileMismatch", "videoResolutionSuboptimal", "videoResolutionUnsupported"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        }
      }
    },
    "LiveStreamContentDetails": {
      "id": "LiveStreamContentDetails",
      "type": "object",
      "description": "Detailed settings of a stream.",
      "properties": {
        "closedCaptionsIngestionUrl": {
          "type": "string",
          "description": "The ingestion URL where the closed captions of this stream are sent."
        },
        "isReusable": {
          "type": "boolean",
          "description": "Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.\n\nIf you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways:  \n- A non-reusable stream can only be bound to one broadcast. \n- A non-reusable stream might be deleted by an automated process after the broadcast ends. \n- The  liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream."
        }
      }
    },
    "LiveStreamHealthStatus": {
      "id": "LiveStreamHealthStatus",
      "type": "object",
      "properties": {
        "configurationIssues": {
          "type": "array",
          "description": "The configurations issues on this stream",
          "items": {
            "$ref": "LiveStreamConfigurationIssue"
          }
        },
        "lastUpdateTimeSeconds": {
          "type": "string",
          "description": "The last time this status was updated (in seconds)",
          "format": "uint64"
        },
        "status": {
          "type": "string",
          "description": "The status code of this stream",
          "enum": ["bad", "good", "noData", "ok", "revoked"],
          "enumDescriptions": ["", "", "", "", ""]
        }
      }
    },
    "LiveStreamListResponse": {
      "id": "LiveStreamListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of live streams that match the request criteria.",
          "items": {
            "$ref": "LiveStream"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#liveStreamListResponse\".",
          "default": "youtube#liveStreamListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "LiveStreamSnippet": {
      "id": "LiveStreamSnippet",
      "type": "object",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel that is transmitting the stream."
        },
        "description": {
          "type": "string",
          "description": "The stream's description. The value cannot be longer than 10000 characters."
        },
        "isDefaultStream": {
          "type": "boolean"
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "title": {
          "type": "string",
          "description": "The stream's title. The value must be between 1 and 128 characters long.",
          "annotations": {
            "required": ["youtube.liveStreams.insert", "youtube.liveStreams.update"]
          }
        }
      }
    },
    "LiveStreamStatus": {
      "id": "LiveStreamStatus",
      "type": "object",
      "description": "Brief description of the live stream status.",
      "properties": {
        "healthStatus": {
          "$ref": "LiveStreamHealthStatus",
          "description": "The health status of the stream."
        },
        "streamStatus": {
          "type": "string",
          "enum": ["active", "created", "error", "inactive", "ready"],
          "enumDescriptions": ["", "", "", "", ""]
        }
      }
    },
    "LocalizedProperty": {
      "id": "LocalizedProperty",
      "type": "object",
      "properties": {
        "default": {
          "type": "string"
        },
        "defaultLanguage": {
          "$ref": "LanguageTag",
          "description": "The language of the default property."
        },
        "localized": {
          "type": "array",
          "items": {
            "$ref": "LocalizedString"
          }
        }
      }
    },
    "LocalizedString": {
      "id": "LocalizedString",
      "type": "object",
      "properties": {
        "language": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "MonitorStreamInfo": {
      "id": "MonitorStreamInfo",
      "type": "object",
      "description": "Settings and Info of the monitor stream",
      "properties": {
        "broadcastStreamDelayMs": {
          "type": "integer",
          "description": "If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.",
          "format": "uint32",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        },
        "embedHtml": {
          "type": "string",
          "description": "HTML code that embeds a player that plays the monitor stream."
        },
        "enableMonitorStream": {
          "type": "boolean",
          "description": "This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.\n\nYou need to set this value to true if you intend to have a broadcast delay for your event.\n\nNote: This property cannot be updated once the broadcast is in the testing or live state.",
          "annotations": {
            "required": ["youtube.liveBroadcasts.update"]
          }
        }
      }
    },
    "PageInfo": {
      "id": "PageInfo",
      "type": "object",
      "description": "Paging details for lists of resources, including total number of items available and number of resources returned in a single page.",
      "properties": {
        "resultsPerPage": {
          "type": "integer",
          "description": "The number of results included in the API response.",
          "format": "int32"
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of results in the result set.",
          "format": "int32"
        }
      }
    },
    "Playlist": {
      "id": "Playlist",
      "type": "object",
      "description": "A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.\n\nYouTube also uses playlists to identify special collections of videos for a channel, such as:  \n- uploaded videos \n- favorite videos \n- positively rated (liked) videos \n- watch history \n- watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the  channel resource for a given channel.\n\nYou can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods.",
      "properties": {
        "contentDetails": {
          "$ref": "PlaylistContentDetails",
          "description": "The contentDetails object contains information like video count."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the playlist."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#playlist\".",
          "default": "youtube#playlist"
        },
        "localizations": {
          "type": "object",
          "description": "Localizations for different languages",
          "additionalProperties": {
            "$ref": "PlaylistLocalization",
            "description": "The language tag, using string since map_key require simple types."
          }
        },
        "player": {
          "$ref": "PlaylistPlayer",
          "description": "The player object contains information that you would use to play the playlist in an embedded player."
        },
        "snippet": {
          "$ref": "PlaylistSnippet",
          "description": "The snippet object contains basic details about the playlist, such as its title and description."
        },
        "status": {
          "$ref": "PlaylistStatus",
          "description": "The status object contains status information for the playlist."
        }
      }
    },
    "PlaylistContentDetails": {
      "id": "PlaylistContentDetails",
      "type": "object",
      "properties": {
        "itemCount": {
          "type": "integer",
          "description": "The number of videos in the playlist.",
          "format": "uint32"
        }
      }
    },
    "PlaylistItem": {
      "id": "PlaylistItem",
      "type": "object",
      "description": "A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.\n\nYouTube uses playlists to identify special collections of videos for a channel, such as:  \n- uploaded videos \n- favorite videos \n- positively rated (liked) videos \n- watch history \n- watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information.\n\nYou can retrieve the playlist IDs for each of these lists from the  channel resource  for a given channel. You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.",
      "properties": {
        "contentDetails": {
          "$ref": "PlaylistItemContentDetails",
          "description": "The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the playlist item."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#playlistItem\".",
          "default": "youtube#playlistItem"
        },
        "snippet": {
          "$ref": "PlaylistItemSnippet",
          "description": "The snippet object contains basic details about the playlist item, such as its title and position in the playlist."
        },
        "status": {
          "$ref": "PlaylistItemStatus",
          "description": "The status object contains information about the playlist item's privacy status."
        }
      }
    },
    "PlaylistItemContentDetails": {
      "id": "PlaylistItemContentDetails",
      "type": "object",
      "properties": {
        "endAt": {
          "type": "string",
          "description": "The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video."
        },
        "note": {
          "type": "string",
          "description": "A user-generated note for this item."
        },
        "startAt": {
          "type": "string",
          "description": "The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0."
        },
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request."
        },
        "videoPublishedAt": {
          "type": "string",
          "description": "The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        }
      }
    },
    "PlaylistItemListResponse": {
      "id": "PlaylistItemListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of playlist items that match the request criteria.",
          "items": {
            "$ref": "PlaylistItem"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#playlistItemListResponse\".",
          "default": "youtube#playlistItemListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "PlaylistItemSnippet": {
      "id": "PlaylistItemSnippet",
      "type": "object",
      "description": "Basic details about a playlist, including title, description and thumbnails.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the user that added the item to the playlist."
        },
        "channelTitle": {
          "type": "string",
          "description": "Channel title for the channel that the playlist item belongs to."
        },
        "description": {
          "type": "string",
          "description": "The item's description."
        },
        "playlistId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.",
          "annotations": {
            "required": ["youtube.playlistItems.insert", "youtube.playlistItems.update"]
          }
        },
        "position": {
          "type": "integer",
          "description": "The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.",
          "format": "uint32"
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.",
          "annotations": {
            "required": ["youtube.playlistItems.insert", "youtube.playlistItems.update"]
          }
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The item's title."
        }
      }
    },
    "PlaylistItemStatus": {
      "id": "PlaylistItemStatus",
      "type": "object",
      "description": "Information about the playlist item's privacy status.",
      "properties": {
        "privacyStatus": {
          "type": "string",
          "description": "This resource's privacy status.",
          "enum": ["private", "public", "unlisted"],
          "enumDescriptions": ["", "", ""]
        }
      }
    },
    "PlaylistListResponse": {
      "id": "PlaylistListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of playlists that match the request criteria.",
          "items": {
            "$ref": "Playlist"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#playlistListResponse\".",
          "default": "youtube#playlistListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "PlaylistLocalization": {
      "id": "PlaylistLocalization",
      "type": "object",
      "description": "Playlist localization setting",
      "properties": {
        "description": {
          "type": "string",
          "description": "The localized strings for playlist's description."
        },
        "title": {
          "type": "string",
          "description": "The localized strings for playlist's title."
        }
      }
    },
    "PlaylistPlayer": {
      "id": "PlaylistPlayer",
      "type": "object",
      "properties": {
        "embedHtml": {
          "type": "string",
          "description": "An <iframe> tag that embeds a player that will play the playlist."
        }
      }
    },
    "PlaylistSnippet": {
      "id": "PlaylistSnippet",
      "type": "object",
      "description": "Basic details about a playlist, including title, description and thumbnails.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel that published the playlist."
        },
        "channelTitle": {
          "type": "string",
          "description": "The channel title of the channel that the video belongs to."
        },
        "defaultLanguage": {
          "type": "string",
          "description": "The language of the playlist's default title and description."
        },
        "description": {
          "type": "string",
          "description": "The playlist's description."
        },
        "localized": {
          "$ref": "PlaylistLocalization",
          "description": "Localized title and description, read-only."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "tags": {
          "type": "array",
          "description": "Keyword tags associated with the playlist.",
          "items": {
            "type": "string"
          }
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The playlist's title.",
          "annotations": {
            "required": ["youtube.playlists.insert", "youtube.playlists.update"]
          }
        }
      }
    },
    "PlaylistStatus": {
      "id": "PlaylistStatus",
      "type": "object",
      "properties": {
        "privacyStatus": {
          "type": "string",
          "description": "The playlist's privacy status.",
          "enum": ["private", "public", "unlisted"],
          "enumDescriptions": ["", "", ""]
        }
      }
    },
    "PromotedItem": {
      "id": "PromotedItem",
      "type": "object",
      "description": "Describes a single promoted item.",
      "properties": {
        "customMessage": {
          "type": "string",
          "description": "A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website."
        },
        "id": {
          "$ref": "PromotedItemId",
          "description": "Identifies the promoted item."
        },
        "promotedByContentOwner": {
          "type": "boolean",
          "description": "If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner."
        },
        "timing": {
          "$ref": "InvideoTiming",
          "description": "The temporal position within the video where the promoted item will be displayed. If present, it overrides the default timing."
        }
      }
    },
    "PromotedItemId": {
      "id": "PromotedItemId",
      "type": "object",
      "description": "Describes a single promoted item id. It is a union of various possible types.",
      "properties": {
        "recentlyUploadedBy": {
          "type": "string",
          "description": "If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set."
        },
        "type": {
          "type": "string",
          "description": "Describes the type of the promoted item.",
          "enum": ["recentUpload", "video", "website"],
          "enumDescriptions": ["", "", ""]
        },
        "videoId": {
          "type": "string",
          "description": "If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video."
        },
        "websiteUrl": {
          "type": "string",
          "description": "If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website."
        }
      }
    },
    "PropertyValue": {
      "id": "PropertyValue",
      "type": "object",
      "description": "A pair Property / Value.",
      "properties": {
        "property": {
          "type": "string",
          "description": "A property."
        },
        "value": {
          "type": "string",
          "description": "The property's value."
        }
      }
    },
    "ResourceId": {
      "id": "ResourceId",
      "type": "object",
      "description": "A resource id is a generic reference that points to another YouTube resource.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel."
        },
        "kind": {
          "type": "string",
          "description": "The type of the API resource."
        },
        "playlistId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist."
        },
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video."
        }
      }
    },
    "SearchListResponse": {
      "id": "SearchListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of results that match the search criteria.",
          "items": {
            "$ref": "SearchResult"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#searchListResponse\".",
          "default": "youtube#searchListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "regionCode": {
          "type": "string"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "SearchResult": {
      "id": "SearchResult",
      "type": "object",
      "description": "A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "$ref": "ResourceId",
          "description": "The id object contains information that can be used to uniquely identify the resource that matches the search request."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#searchResult\".",
          "default": "youtube#searchResult"
        },
        "snippet": {
          "$ref": "SearchResultSnippet",
          "description": "The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description."
        }
      }
    },
    "SearchResultSnippet": {
      "id": "SearchResultSnippet",
      "type": "object",
      "description": "Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies."
        },
        "channelTitle": {
          "type": "string",
          "description": "The title of the channel that published the resource that the search result identifies."
        },
        "description": {
          "type": "string",
          "description": "A description of the search result."
        },
        "liveBroadcastContent": {
          "type": "string",
          "description": "It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's \"none\" if there is not any upcoming/active live broadcasts.",
          "enum": ["live", "none", "upcoming"],
          "enumDescriptions": ["", "", ""]
        },
        "publishedAt": {
          "type": "string",
          "description": "The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The title of the search result."
        }
      }
    },
    "Sponsor": {
      "id": "Sponsor",
      "type": "object",
      "description": "A sponsor resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the sponsor."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#sponsor\".",
          "default": "youtube#sponsor"
        },
        "snippet": {
          "$ref": "SponsorSnippet",
          "description": "The snippet object contains basic details about the sponsor."
        }
      }
    },
    "SponsorListResponse": {
      "id": "SponsorListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of sponsors that match the request criteria.",
          "items": {
            "$ref": "Sponsor"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#sponsorListResponse\".",
          "default": "youtube#sponsorListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "SponsorSnippet": {
      "id": "SponsorSnippet",
      "type": "object",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The id of the channel being sponsored."
        },
        "sponsorDetails": {
          "$ref": "ChannelProfileDetails",
          "description": "Details about the sponsor."
        },
        "sponsorSince": {
          "type": "string",
          "description": "The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        }
      }
    },
    "Subscription": {
      "id": "Subscription",
      "type": "object",
      "description": "A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.",
      "properties": {
        "contentDetails": {
          "$ref": "SubscriptionContentDetails",
          "description": "The contentDetails object contains basic statistics about the subscription."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the subscription."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#subscription\".",
          "default": "youtube#subscription"
        },
        "snippet": {
          "$ref": "SubscriptionSnippet",
          "description": "The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to."
        },
        "subscriberSnippet": {
          "$ref": "SubscriptionSubscriberSnippet",
          "description": "The subscriberSnippet object contains basic details about the sbuscriber."
        }
      }
    },
    "SubscriptionContentDetails": {
      "id": "SubscriptionContentDetails",
      "type": "object",
      "description": "Details about the content to witch a subscription refers.",
      "properties": {
        "activityType": {
          "type": "string",
          "description": "The type of activity this subscription is for (only uploads, everything).",
          "enum": ["all", "uploads"],
          "enumDescriptions": ["", ""]
        },
        "newItemCount": {
          "type": "integer",
          "description": "The number of new items in the subscription since its content was last read.",
          "format": "uint32"
        },
        "totalItemCount": {
          "type": "integer",
          "description": "The approximate number of items that the subscription points to.",
          "format": "uint32"
        }
      }
    },
    "SubscriptionListResponse": {
      "id": "SubscriptionListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of subscriptions that match the request criteria.",
          "items": {
            "$ref": "Subscription"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#subscriptionListResponse\".",
          "default": "youtube#subscriptionListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "SubscriptionSnippet": {
      "id": "SubscriptionSnippet",
      "type": "object",
      "description": "Basic details about a subscription, including title, description and thumbnails of the subscribed item.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the subscriber's channel."
        },
        "channelTitle": {
          "type": "string",
          "description": "Channel title for the channel that the subscription belongs to."
        },
        "description": {
          "type": "string",
          "description": "The subscription's details."
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "resourceId": {
          "$ref": "ResourceId",
          "description": "The id object contains information about the channel that the user subscribed to.",
          "annotations": {
            "required": ["youtube.subscriptions.insert"]
          }
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The subscription's title."
        }
      }
    },
    "SubscriptionSubscriberSnippet": {
      "id": "SubscriptionSubscriberSnippet",
      "type": "object",
      "description": "Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.",
      "properties": {
        "channelId": {
          "type": "string",
          "description": "The channel ID of the subscriber."
        },
        "description": {
          "type": "string",
          "description": "The description of the subscriber."
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "Thumbnails for this subscriber."
        },
        "title": {
          "type": "string",
          "description": "The title of the subscriber."
        }
      }
    },
    "SuperChatEvent": {
      "id": "SuperChatEvent",
      "type": "object",
      "description": "A superChatEvent resource represents a Super Chat purchase on a YouTube channel.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube assigns to uniquely identify the Super Chat event."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#superChatEvent\".",
          "default": "youtube#superChatEvent"
        },
        "snippet": {
          "$ref": "SuperChatEventSnippet",
          "description": "The snippet object contains basic details about the Super Chat event."
        }
      }
    },
    "SuperChatEventListResponse": {
      "id": "SuperChatEventListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of Super Chat purchases that match the request criteria.",
          "items": {
            "$ref": "SuperChatEvent"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#superChatEventListResponse\".",
          "default": "youtube#superChatEventListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "SuperChatEventSnippet": {
      "id": "SuperChatEventSnippet",
      "type": "object",
      "properties": {
        "amountMicros": {
          "type": "string",
          "description": "The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.",
          "format": "uint64"
        },
        "channelId": {
          "type": "string",
          "description": "Channel id where the event occurred."
        },
        "commentText": {
          "type": "string",
          "description": "The text contents of the comment left by the user."
        },
        "createdAt": {
          "type": "string",
          "description": "The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "currency": {
          "type": "string",
          "description": "The currency in which the purchase was made. ISO 4217."
        },
        "displayString": {
          "type": "string",
          "description": "A rendered string that displays the purchase amount and currency (e.g., \"$1.00\"). The string is rendered for the given language."
        },
        "messageType": {
          "type": "integer",
          "description": "The tier for the paid message, which is based on the amount of money spent to purchase the message.",
          "format": "uint32"
        },
        "supporterDetails": {
          "$ref": "ChannelProfileDetails",
          "description": "Details about the supporter."
        }
      }
    },
    "Thumbnail": {
      "id": "Thumbnail",
      "type": "object",
      "description": "A thumbnail is an image representing a YouTube resource.",
      "properties": {
        "height": {
          "type": "integer",
          "description": "(Optional) Height of the thumbnail image.",
          "format": "uint32"
        },
        "url": {
          "type": "string",
          "description": "The thumbnail image's URL."
        },
        "width": {
          "type": "integer",
          "description": "(Optional) Width of the thumbnail image.",
          "format": "uint32"
        }
      }
    },
    "ThumbnailDetails": {
      "id": "ThumbnailDetails",
      "type": "object",
      "description": "Internal representation of thumbnails for a YouTube resource.",
      "properties": {
        "default": {
          "$ref": "Thumbnail",
          "description": "The default image for this resource."
        },
        "high": {
          "$ref": "Thumbnail",
          "description": "The high quality image for this resource."
        },
        "maxres": {
          "$ref": "Thumbnail",
          "description": "The maximum resolution quality image for this resource."
        },
        "medium": {
          "$ref": "Thumbnail",
          "description": "The medium quality image for this resource."
        },
        "standard": {
          "$ref": "Thumbnail",
          "description": "The standard quality image for this resource."
        }
      }
    },
    "ThumbnailSetResponse": {
      "id": "ThumbnailSetResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of thumbnails.",
          "items": {
            "$ref": "ThumbnailDetails"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#thumbnailSetResponse\".",
          "default": "youtube#thumbnailSetResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "TokenPagination": {
      "id": "TokenPagination",
      "type": "object",
      "description": "Stub token pagination template to suppress results."
    },
    "Video": {
      "id": "Video",
      "type": "object",
      "description": "A video resource represents a YouTube video.",
      "properties": {
        "ageGating": {
          "$ref": "VideoAgeGating",
          "description": "Age restriction details related to a video. This data can only be retrieved by the video owner."
        },
        "contentDetails": {
          "$ref": "VideoContentDetails",
          "description": "The contentDetails object contains information about the video content, including the length of the video and its aspect ratio."
        },
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "fileDetails": {
          "$ref": "VideoFileDetails",
          "description": "The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the video.",
          "annotations": {
            "required": ["youtube.videos.update"]
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#video\".",
          "default": "youtube#video"
        },
        "liveStreamingDetails": {
          "$ref": "VideoLiveStreamingDetails",
          "description": "The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast."
        },
        "localizations": {
          "type": "object",
          "description": "List with all localizations.",
          "additionalProperties": {
            "$ref": "VideoLocalization",
            "description": "The language tag, using string since map_key require simple types."
          }
        },
        "monetizationDetails": {
          "$ref": "VideoMonetizationDetails",
          "description": "The monetizationDetails object encapsulates information about the monetization status of the video."
        },
        "player": {
          "$ref": "VideoPlayer",
          "description": "The player object contains information that you would use to play the video in an embedded player."
        },
        "processingDetails": {
          "$ref": "VideoProcessingDetails",
          "description": "The processingProgress object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.\n\nThe processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner."
        },
        "projectDetails": {
          "$ref": "VideoProjectDetails",
          "description": "The projectDetails object contains information about the project specific video metadata."
        },
        "recordingDetails": {
          "$ref": "VideoRecordingDetails",
          "description": "The recordingDetails object encapsulates information about the location, date and address where the video was recorded."
        },
        "snippet": {
          "$ref": "VideoSnippet",
          "description": "The snippet object contains basic details about the video, such as its title, description, and category."
        },
        "statistics": {
          "$ref": "VideoStatistics",
          "description": "The statistics object contains statistics about the video."
        },
        "status": {
          "$ref": "VideoStatus",
          "description": "The status object contains information about the video's uploading, processing, and privacy statuses."
        },
        "suggestions": {
          "$ref": "VideoSuggestions",
          "description": "The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner."
        },
        "topicDetails": {
          "$ref": "VideoTopicDetails",
          "description": "The topicDetails object encapsulates information about Freebase topics associated with the video."
        }
      }
    },
    "VideoAbuseReport": {
      "id": "VideoAbuseReport",
      "type": "object",
      "properties": {
        "comments": {
          "type": "string",
          "description": "Additional comments regarding the abuse report."
        },
        "language": {
          "type": "string",
          "description": "The language that the content was viewed in."
        },
        "reasonId": {
          "type": "string",
          "description": "The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID."
        },
        "secondaryReasonId": {
          "type": "string",
          "description": "The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason."
        },
        "videoId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the video."
        }
      }
    },
    "VideoAbuseReportReason": {
      "id": "VideoAbuseReportReason",
      "type": "object",
      "description": "A videoAbuseReportReason resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with video.ReportAbuse.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID of this abuse report reason."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoAbuseReportReason\".",
          "default": "youtube#videoAbuseReportReason"
        },
        "snippet": {
          "$ref": "VideoAbuseReportReasonSnippet",
          "description": "The snippet object contains basic details about the abuse report reason."
        }
      }
    },
    "VideoAbuseReportReasonListResponse": {
      "id": "VideoAbuseReportReasonListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of valid abuse reasons that are used with video.ReportAbuse.",
          "items": {
            "$ref": "VideoAbuseReportReason"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoAbuseReportReasonListResponse\".",
          "default": "youtube#videoAbuseReportReasonListResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "VideoAbuseReportReasonSnippet": {
      "id": "VideoAbuseReportReasonSnippet",
      "type": "object",
      "description": "Basic details about a video category, such as its localized title.",
      "properties": {
        "label": {
          "type": "string",
          "description": "The localized label belonging to this abuse report reason."
        },
        "secondaryReasons": {
          "type": "array",
          "description": "The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)",
          "items": {
            "$ref": "VideoAbuseReportSecondaryReason"
          }
        }
      }
    },
    "VideoAbuseReportSecondaryReason": {
      "id": "VideoAbuseReportSecondaryReason",
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of this abuse report secondary reason."
        },
        "label": {
          "type": "string",
          "description": "The localized label for this abuse report secondary reason."
        }
      }
    },
    "VideoAgeGating": {
      "id": "VideoAgeGating",
      "type": "object",
      "properties": {
        "alcoholContent": {
          "type": "boolean",
          "description": "Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content."
        },
        "restricted": {
          "type": "boolean",
          "description": "Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present."
        },
        "videoGameRating": {
          "type": "string",
          "description": "Video game rating, if any.",
          "enum": ["anyone", "m15Plus", "m16Plus", "m17Plus"],
          "enumDescriptions": ["", "", "", ""]
        }
      }
    },
    "VideoCategory": {
      "id": "VideoCategory",
      "type": "object",
      "description": "A videoCategory resource identifies a category that has been or could be associated with uploaded videos.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "id": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the video category."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoCategory\".",
          "default": "youtube#videoCategory"
        },
        "snippet": {
          "$ref": "VideoCategorySnippet",
          "description": "The snippet object contains basic details about the video category, including its title."
        }
      }
    },
    "VideoCategoryListResponse": {
      "id": "VideoCategoryListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.",
          "items": {
            "$ref": "VideoCategory"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoCategoryListResponse\".",
          "default": "youtube#videoCategoryListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "VideoCategorySnippet": {
      "id": "VideoCategorySnippet",
      "type": "object",
      "description": "Basic details about a video category, such as its localized title.",
      "properties": {
        "assignable": {
          "type": "boolean"
        },
        "channelId": {
          "type": "string",
          "description": "The YouTube channel that created the video category.",
          "default": "UCBR8-60-B28hp2BmDPdntcQ"
        },
        "title": {
          "type": "string",
          "description": "The video category's title."
        }
      }
    },
    "VideoContentDetails": {
      "id": "VideoContentDetails",
      "type": "object",
      "description": "Details about the content of a YouTube Video.",
      "properties": {
        "caption": {
          "type": "string",
          "description": "The value of captions indicates whether the video has captions or not.",
          "enum": ["false", "true"],
          "enumDescriptions": ["", ""]
        },
        "contentRating": {
          "$ref": "ContentRating",
          "description": "Specifies the ratings that the video received under various rating schemes."
        },
        "countryRestriction": {
          "$ref": "AccessPolicy",
          "description": "The countryRestriction object contains information about the countries where a video is (or is not) viewable."
        },
        "definition": {
          "type": "string",
          "description": "The value of definition indicates whether the video is available in high definition or only in standard definition.",
          "enum": ["hd", "sd"],
          "enumDescriptions": ["", ""]
        },
        "dimension": {
          "type": "string",
          "description": "The value of dimension indicates whether the video is available in 3D or in 2D."
        },
        "duration": {
          "type": "string",
          "description": "The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long."
        },
        "hasCustomThumbnail": {
          "type": "boolean",
          "description": "Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader."
        },
        "licensedContent": {
          "type": "boolean",
          "description": "The value of is_license_content indicates whether the video is licensed content."
        },
        "projection": {
          "type": "string",
          "description": "Specifies the projection format of the video.",
          "enum": ["360", "rectangular"],
          "enumDescriptions": ["", ""]
        },
        "regionRestriction": {
          "$ref": "VideoContentDetailsRegionRestriction",
          "description": "The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property."
        }
      }
    },
    "VideoContentDetailsRegionRestriction": {
      "id": "VideoContentDetailsRegionRestriction",
      "type": "object",
      "description": "DEPRECATED Region restriction of the video.",
      "properties": {
        "allowed": {
          "type": "array",
          "description": "A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "array",
          "description": "A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "VideoFileDetails": {
      "id": "VideoFileDetails",
      "type": "object",
      "description": "Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.",
      "properties": {
        "audioStreams": {
          "type": "array",
          "description": "A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.",
          "items": {
            "$ref": "VideoFileDetailsAudioStream"
          }
        },
        "bitrateBps": {
          "type": "string",
          "description": "The uploaded video file's combined (video and audio) bitrate in bits per second.",
          "format": "uint64"
        },
        "container": {
          "type": "string",
          "description": "The uploaded video file's container format."
        },
        "creationTime": {
          "type": "string",
          "description": "The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:  \n- Date only: YYYY-MM-DD \n- Naive time: YYYY-MM-DDTHH:MM:SS \n- Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM"
        },
        "durationMs": {
          "type": "string",
          "description": "The length of the uploaded video in milliseconds.",
          "format": "uint64"
        },
        "fileName": {
          "type": "string",
          "description": "The uploaded file's name. This field is present whether a video file or another type of file was uploaded."
        },
        "fileSize": {
          "type": "string",
          "description": "The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.",
          "format": "uint64"
        },
        "fileType": {
          "type": "string",
          "description": "The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.",
          "enum": ["archive", "audio", "document", "image", "other", "project", "video"],
          "enumDescriptions": ["", "", "", "", "", "", ""]
        },
        "videoStreams": {
          "type": "array",
          "description": "A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.",
          "items": {
            "$ref": "VideoFileDetailsVideoStream"
          }
        }
      }
    },
    "VideoFileDetailsAudioStream": {
      "id": "VideoFileDetailsAudioStream",
      "type": "object",
      "description": "Information about an audio stream.",
      "properties": {
        "bitrateBps": {
          "type": "string",
          "description": "The audio stream's bitrate, in bits per second.",
          "format": "uint64"
        },
        "channelCount": {
          "type": "integer",
          "description": "The number of audio channels that the stream contains.",
          "format": "uint32"
        },
        "codec": {
          "type": "string",
          "description": "The audio codec that the stream uses."
        },
        "vendor": {
          "type": "string",
          "description": "A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code."
        }
      }
    },
    "VideoFileDetailsVideoStream": {
      "id": "VideoFileDetailsVideoStream",
      "type": "object",
      "description": "Information about a video stream.",
      "properties": {
        "aspectRatio": {
          "type": "number",
          "description": "The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.",
          "format": "double"
        },
        "bitrateBps": {
          "type": "string",
          "description": "The video stream's bitrate, in bits per second.",
          "format": "uint64"
        },
        "codec": {
          "type": "string",
          "description": "The video codec that the stream uses."
        },
        "frameRateFps": {
          "type": "number",
          "description": "The video stream's frame rate, in frames per second.",
          "format": "double"
        },
        "heightPixels": {
          "type": "integer",
          "description": "The encoded video content's height in pixels.",
          "format": "uint32"
        },
        "rotation": {
          "type": "string",
          "description": "The amount that YouTube needs to rotate the original source content to properly display the video.",
          "enum": ["clockwise", "counterClockwise", "none", "other", "upsideDown"],
          "enumDescriptions": ["", "", "", "", ""]
        },
        "vendor": {
          "type": "string",
          "description": "A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code."
        },
        "widthPixels": {
          "type": "integer",
          "description": "The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.",
          "format": "uint32"
        }
      }
    },
    "VideoGetRatingResponse": {
      "id": "VideoGetRatingResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of ratings that match the request criteria.",
          "items": {
            "$ref": "VideoRating"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoGetRatingResponse\".",
          "default": "youtube#videoGetRatingResponse"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "VideoListResponse": {
      "id": "VideoListResponse",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "Etag of this resource."
        },
        "eventId": {
          "type": "string",
          "description": "Serialized EventId of the request which produced this response."
        },
        "items": {
          "type": "array",
          "description": "A list of videos that match the request criteria.",
          "items": {
            "$ref": "Video"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"youtube#videoListResponse\".",
          "default": "youtube#videoListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set."
        },
        "pageInfo": {
          "$ref": "PageInfo"
        },
        "prevPageToken": {
          "type": "string",
          "description": "The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set."
        },
        "tokenPagination": {
          "$ref": "TokenPagination"
        },
        "visitorId": {
          "type": "string",
          "description": "The visitorId identifies the visitor."
        }
      }
    },
    "VideoLiveStreamingDetails": {
      "id": "VideoLiveStreamingDetails",
      "type": "object",
      "description": "Details about the live streaming metadata.",
      "properties": {
        "activeLiveChatId": {
          "type": "string",
          "description": "The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page."
        },
        "actualEndTime": {
          "type": "string",
          "description": "The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over.",
          "format": "date-time"
        },
        "actualStartTime": {
          "type": "string",
          "description": "The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins.",
          "format": "date-time"
        },
        "concurrentViewers": {
          "type": "string",
          "description": "The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.",
          "format": "uint64"
        },
        "scheduledEndTime": {
          "type": "string",
          "description": "The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.",
          "format": "date-time"
        },
        "scheduledStartTime": {
          "type": "string",
          "description": "The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        }
      }
    },
    "VideoLocalization": {
      "id": "VideoLocalization",
      "type": "object",
      "description": "Localized versions of certain video properties (e.g. title).",
      "properties": {
        "description": {
          "type": "string",
          "description": "Localized version of the video's description."
        },
        "title": {
          "type": "string",
          "description": "Localized version of the video's title."
        }
      }
    },
    "VideoMonetizationDetails": {
      "id": "VideoMonetizationDetails",
      "type": "object",
      "description": "Details about monetization of a YouTube Video.",
      "properties": {
        "access": {
          "$ref": "AccessPolicy",
          "description": "The value of access indicates whether the video can be monetized or not."
        }
      }
    },
    "VideoPlayer": {
      "id": "VideoPlayer",
      "type": "object",
      "description": "Player to be used for a video playback.",
      "properties": {
        "embedHeight": {
          "type": "string",
          "format": "int64"
        },
        "embedHtml": {
          "type": "string",
          "description": "An <iframe> tag that embeds a player that will play the video."
        },
        "embedWidth": {
          "type": "string",
          "description": "The embed width",
          "format": "int64"
        }
      }
    },
    "VideoProcessingDetails": {
      "id": "VideoProcessingDetails",
      "type": "object",
      "description": "Describes processing status and progress and availability of some other Video resource parts.",
      "properties": {
        "editorSuggestionsAvailability": {
          "type": "string",
          "description": "This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request."
        },
        "fileDetailsAvailability": {
          "type": "string",
          "description": "This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request."
        },
        "processingFailureReason": {
          "type": "string",
          "description": "The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.",
          "enum": ["other", "streamingFailed", "transcodeFailed", "uploadFailed"],
          "enumDescriptions": ["", "", "", ""]
        },
        "processingIssuesAvailability": {
          "type": "string",
          "description": "This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request."
        },
        "processingProgress": {
          "$ref": "VideoProcessingDetailsProcessingProgress",
          "description": "The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing."
        },
        "processingStatus": {
          "type": "string",
          "description": "The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.",
          "enum": ["failed", "processing", "succeeded", "terminated"],
          "enumDescriptions": ["", "", "", ""]
        },
        "tagSuggestionsAvailability": {
          "type": "string",
          "description": "This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request."
        },
        "thumbnailsAvailability": {
          "type": "string",
          "description": "This value indicates whether thumbnail images have been generated for the video."
        }
      }
    },
    "VideoProcessingDetailsProcessingProgress": {
      "id": "VideoProcessingDetailsProcessingProgress",
      "type": "object",
      "description": "Video processing progress and completion time estimate.",
      "properties": {
        "partsProcessed": {
          "type": "string",
          "description": "The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:\n100 * parts_processed / parts_total\n\nNote that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.",
          "format": "uint64"
        },
        "partsTotal": {
          "type": "string",
          "description": "An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.",
          "format": "uint64"
        },
        "timeLeftMs": {
          "type": "string",
          "description": "An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.",
          "format": "uint64"
        }
      }
    },
    "VideoProjectDetails": {
      "id": "VideoProjectDetails",
      "type": "object",
      "description": "Project specific details about the content of a YouTube Video.",
      "properties": {
        "tags": {
          "type": "array",
          "description": "A list of project tags associated with the video during the upload.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "VideoRating": {
      "id": "VideoRating",
      "type": "object",
      "properties": {
        "rating": {
          "type": "string",
          "enum": ["dislike", "like", "none", "unspecified"],
          "enumDescriptions": ["", "", "", ""]
        },
        "videoId": {
          "type": "string"
        }
      }
    },
    "VideoRecordingDetails": {
      "id": "VideoRecordingDetails",
      "type": "object",
      "description": "Recording information associated with the video.",
      "properties": {
        "location": {
          "$ref": "GeoPoint",
          "description": "The geolocation information associated with the video."
        },
        "locationDescription": {
          "type": "string",
          "description": "The text description of the location where the video was recorded."
        },
        "recordingDate": {
          "type": "string",
          "description": "The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.",
          "format": "date-time"
        }
      }
    },
    "VideoSnippet": {
      "id": "VideoSnippet",
      "type": "object",
      "description": "Basic details about a video, including title, description, uploader, thumbnails and category.",
      "properties": {
        "categoryId": {
          "type": "string",
          "description": "The YouTube video category associated with the video."
        },
        "channelId": {
          "type": "string",
          "description": "The ID that YouTube uses to uniquely identify the channel that the video was uploaded to."
        },
        "channelTitle": {
          "type": "string",
          "description": "Channel title for the channel that the video belongs to."
        },
        "defaultAudioLanguage": {
          "type": "string",
          "description": "The default_audio_language property specifies the language spoken in the video's default audio track."
        },
        "defaultLanguage": {
          "type": "string",
          "description": "The language of the videos's default snippet."
        },
        "description": {
          "type": "string",
          "description": "The video's description."
        },
        "liveBroadcastContent": {
          "type": "string",
          "description": "Indicates if the video is an upcoming/active live broadcast. Or it's \"none\" if the video is not an upcoming/active live broadcast.",
          "enum": ["live", "none", "upcoming"],
          "enumDescriptions": ["", "", ""]
        },
        "localized": {
          "$ref": "VideoLocalization",
          "description": "Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)"
        },
        "publishedAt": {
          "type": "string",
          "description": "The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "tags": {
          "type": "array",
          "description": "A list of keyword tags associated with the video. Tags may contain spaces.",
          "items": {
            "type": "string"
          }
        },
        "thumbnails": {
          "$ref": "ThumbnailDetails",
          "description": "A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail."
        },
        "title": {
          "type": "string",
          "description": "The video's title."
        }
      }
    },
    "VideoStatistics": {
      "id": "VideoStatistics",
      "type": "object",
      "description": "Statistics about the video, such as the number of times the video was viewed or liked.",
      "properties": {
        "commentCount": {
          "type": "string",
          "description": "The number of comments for the video.",
          "format": "uint64"
        },
        "dislikeCount": {
          "type": "string",
          "description": "The number of users who have indicated that they disliked the video by giving it a negative rating.",
          "format": "uint64"
        },
        "favoriteCount": {
          "type": "string",
          "description": "The number of users who currently have the video marked as a favorite video.",
          "format": "uint64"
        },
        "likeCount": {
          "type": "string",
          "description": "The number of users who have indicated that they liked the video by giving it a positive rating.",
          "format": "uint64"
        },
        "viewCount": {
          "type": "string",
          "description": "The number of times the video has been viewed.",
          "format": "uint64"
        }
      }
    },
    "VideoStatus": {
      "id": "VideoStatus",
      "type": "object",
      "description": "Basic details about a video category, such as its localized title.",
      "properties": {
        "embeddable": {
          "type": "boolean",
          "description": "This value indicates if the video can be embedded on another website."
        },
        "failureReason": {
          "type": "string",
          "description": "This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.",
          "enum": ["codec", "conversion", "emptyFile", "invalidFile", "tooSmall", "uploadAborted"],
          "enumDescriptions": ["", "", "", "", "", ""]
        },
        "license": {
          "type": "string",
          "description": "The video's license.",
          "enum": ["creativeCommon", "youtube"],
          "enumDescriptions": ["", ""]
        },
        "privacyStatus": {
          "type": "string",
          "description": "The video's privacy status.",
          "enum": ["private", "public", "unlisted"],
          "enumDescriptions": ["", "", ""]
        },
        "publicStatsViewable": {
          "type": "boolean",
          "description": "This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled."
        },
        "publishAt": {
          "type": "string",
          "description": "The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
          "format": "date-time"
        },
        "rejectionReason": {
          "type": "string",
          "description": "This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.",
          "enum": ["claim", "copyright", "duplicate", "inappropriate", "legal", "length", "termsOfUse", "trademark", "uploaderAccountClosed", "uploaderAccountSuspended"],
          "enumDescriptions": ["", "", "", "", "", "", "", "", "", ""]
        },
        "uploadStatus": {
          "type": "string",
          "description": "The status of the uploaded video.",
          "enum": ["deleted", "failed", "processed", "rejected", "uploaded"],
          "enumDescriptions": ["", "", "", "", ""]
        }
      }
    },
    "VideoSuggestions": {
      "id": "VideoSuggestions",
      "type": "object",
      "description": "Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.",
      "properties": {
        "editorSuggestions": {
          "type": "array",
          "description": "A list of video editing operations that might improve the video quality or playback experience of the uploaded video.",
          "items": {
            "type": "string",
            "enum": ["audioQuietAudioSwap", "videoAutoLevels", "videoCrop", "videoStabilize"],
            "enumDescriptions": ["", "", "", ""]
          }
        },
        "processingErrors": {
          "type": "array",
          "description": "A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.",
          "items": {
            "type": "string",
            "enum": ["archiveFile", "audioFile", "docFile", "imageFile", "notAVideoFile", "projectFile", "unsupportedSpatialAudioLayout"],
            "enumDescriptions": ["", "", "", "", "", "", ""]
          }
        },
        "processingHints": {
          "type": "array",
          "description": "A list of suggestions that may improve YouTube's ability to process the video.",
          "items": {
            "type": "string",
            "enum": ["hdrVideo", "nonStreamableMov", "sendBestQualityVideo", "spatialAudio", "sphericalVideo", "vrVideo"],
            "enumDescriptions": ["", "", "", "", "", ""]
          }
        },
        "processingWarnings": {
          "type": "array",
          "description": "A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.",
          "items": {
            "type": "string",
            "enum": ["hasEditlist", "inconsistentResolution", "problematicAudioCodec", "problematicHdrLookupTable", "problematicVideoCodec", "unknownAudioCodec", "unknownContainer", "unknownVideoCodec", "unsupportedHdrColorMetadata", "unsupportedHdrPixelFormat", "unsupportedSphericalProjectionType", "unsupportedVrStereoMode"],
            "enumDescriptions": ["", "", "", "", "", "", "", "", "", "", "", ""]
          }
        },
        "tagSuggestions": {
          "type": "array",
          "description": "A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.",
          "items": {
            "$ref": "VideoSuggestionsTagSuggestion"
          }
        }
      }
    },
    "VideoSuggestionsTagSuggestion": {
      "id": "VideoSuggestionsTagSuggestion",
      "type": "object",
      "description": "A single tag suggestion with it's relevance information.",
      "properties": {
        "categoryRestricts": {
          "type": "array",
          "description": "A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.",
          "items": {
            "type": "string"
          }
        },
        "tag": {
          "type": "string",
          "description": "The keyword tag suggested for the video."
        }
      }
    },
    "VideoTopicDetails": {
      "id": "VideoTopicDetails",
      "type": "object",
      "description": "Freebase topic information related to the video.",
      "properties": {
        "relevantTopicIds": {
          "type": "array",
          "description": "Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.",
          "items": {
            "type": "string"
          }
        },
        "topicCategories": {
          "type": "array",
          "description": "A list of Wikipedia URLs that provide a high-level description of the video's content.",
          "items": {
            "type": "string"
          }
        },
        "topicIds": {
          "type": "array",
          "description": "A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "WatchSettings": {
      "id": "WatchSettings",
      "type": "object",
      "description": "Branding properties for the watch. All deprecated.",
      "properties": {
        "backgroundColor": {
          "type": "string",
          "description": "The text color for the video watch page's branded area."
        },
        "featuredPlaylistId": {
          "type": "string",
          "description": "An ID that uniquely identifies a playlist that displays next to the video player."
        },
        "textColor": {
          "type": "string",
          "description": "The background color for the video watch page's branded area."
        }
      }
    }
  },
  "resources": {
    "activities": {
      "methods": {
        "insert": {
          "id": "youtube.activities.insert",
          "path": "activities",
          "httpMethod": "POST",
          "description": "Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)\n\nNote: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Activity"
          },
          "response": {
            "$ref": "Activity"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.activities.list",
          "path": "activities",
          "httpMethod": "GET",
          "description": "Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.",
              "location": "query"
            },
            "home": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve a feed of the authenticated user's activities.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.",
              "required": true,
              "location": "query"
            },
            "publishedAfter": {
              "type": "string",
              "description": "The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
              "format": "date-time",
              "location": "query"
            },
            "publishedBefore": {
              "type": "string",
              "description": "The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.",
              "format": "date-time",
              "location": "query"
            },
            "regionCode": {
              "type": "string",
              "description": "The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "ActivityListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "captions": {
      "methods": {
        "delete": {
          "id": "youtube.captions.delete",
          "path": "captions",
          "httpMethod": "DELETE",
          "description": "Deletes a specified caption track.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.",
              "required": true,
              "location": "query"
            },
            "onBehalfOf": {
              "type": "string",
              "description": "ID of the Google+ Page for the channel that the request is be on behalf of",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "download": {
          "id": "youtube.captions.download",
          "path": "captions/{id}",
          "httpMethod": "GET",
          "description": "Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.",
              "required": true,
              "location": "path"
            },
            "onBehalfOf": {
              "type": "string",
              "description": "ID of the Google+ Page for the channel that the request is be on behalf of",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "tfmt": {
              "type": "string",
              "description": "The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.",
              "enum": ["sbv", "scc", "srt", "ttml", "vtt"],
              "enumDescriptions": ["SubViewer subtitle.", "Scenarist Closed Caption format.", "SubRip subtitle.", "Timed Text Markup Language caption.", "Web Video Text Tracks caption."],
              "location": "query"
            },
            "tlang": {
              "type": "string",
              "description": "The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaDownload": true
        },
        "insert": {
          "id": "youtube.captions.insert",
          "path": "captions",
          "httpMethod": "POST",
          "description": "Uploads a caption track.",
          "parameters": {
            "onBehalfOf": {
              "type": "string",
              "description": "ID of the Google+ Page for the channel that the request is be on behalf of",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            },
            "sync": {
              "type": "boolean",
              "description": "The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.\n\nYou should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Caption"
          },
          "response": {
            "$ref": "Caption"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["*/*", "application/octet-stream", "text/xml"],
            "maxSize": "100MB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/captions"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/captions"
              }
            }
          }
        },
        "list": {
          "id": "youtube.captions.list",
          "path": "captions",
          "httpMethod": "GET",
          "description": "Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.",
              "location": "query"
            },
            "onBehalfOf": {
              "type": "string",
              "description": "ID of the Google+ Page for the channel that the request is on behalf of.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.",
              "required": true,
              "location": "query"
            },
            "videoId": {
              "type": "string",
              "description": "The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part", "videoId"],
          "response": {
            "$ref": "CaptionListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "update": {
          "id": "youtube.captions.update",
          "path": "captions",
          "httpMethod": "PUT",
          "description": "Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.",
          "parameters": {
            "onBehalfOf": {
              "type": "string",
              "description": "ID of the Google+ Page for the channel that the request is be on behalf of",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.",
              "required": true,
              "location": "query"
            },
            "sync": {
              "type": "boolean",
              "description": "Note: The API server only processes the parameter value if the request contains an updated caption file.\n\nThe sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will automatically synchronize the caption track with the audio track.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Caption"
          },
          "response": {
            "$ref": "Caption"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["*/*", "application/octet-stream", "text/xml"],
            "maxSize": "100MB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/captions"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/captions"
              }
            }
          }
        }
      }
    },
    "channelBanners": {
      "methods": {
        "insert": {
          "id": "youtube.channelBanners.insert",
          "path": "channelBanners/insert",
          "httpMethod": "POST",
          "description": "Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:\n\n- Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.\n- Extract the url property's value from the response that the API returns for step 1.\n- Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding backward incompatible changes and the API revision history for the exact date that the parameter was introduced.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "ChannelBannerResource"
          },
          "response": {
            "$ref": "ChannelBannerResource"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.upload"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["application/octet-stream", "image/jpeg", "image/png"],
            "maxSize": "6MB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/channelBanners/insert"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/channelBanners/insert"
              }
            }
          }
        }
      }
    },
    "channelSections": {
      "methods": {
        "delete": {
          "id": "youtube.channelSections.delete",
          "path": "channelSections",
          "httpMethod": "DELETE",
          "description": "Deletes a channelSection.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "insert": {
          "id": "youtube.channelSections.insert",
          "path": "channelSections",
          "httpMethod": "POST",
          "description": "Adds a channelSection for the authenticated user's channel.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part names that you can include in the parameter value are snippet and contentDetails.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "ChannelSection"
          },
          "response": {
            "$ref": "ChannelSection"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "list": {
          "id": "youtube.channelSections.list",
          "path": "channelSections",
          "httpMethod": "GET",
          "description": "Returns channelSection resources that match the API request criteria.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "ChannelSectionListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "update": {
          "id": "youtube.channelSections.update",
          "path": "channelSections",
          "httpMethod": "PUT",
          "description": "Update a channelSection.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part names that you can include in the parameter value are snippet and contentDetails.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "ChannelSection"
          },
          "response": {
            "$ref": "ChannelSection"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "channels": {
      "methods": {
        "list": {
          "id": "youtube.channels.list",
          "path": "channels",
          "httpMethod": "GET",
          "description": "Returns a collection of zero or more channel resources that match the request criteria.",
          "parameters": {
            "categoryId": {
              "type": "string",
              "description": "The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.",
              "location": "query"
            },
            "forUsername": {
              "type": "string",
              "description": "The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.",
              "location": "query"
            },
            "managedByMe": {
              "type": "boolean",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nSet this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.",
              "location": "query"
            },
            "mySubscribers": {
              "type": "boolean",
              "description": "Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "ChannelListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner", "https://www.googleapis.com/auth/youtubepartner-channel-audit"]
        },
        "update": {
          "id": "youtube.channels.update",
          "path": "channels",
          "httpMethod": "PUT",
          "description": "Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.)\n\nNote that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Channel"
          },
          "response": {
            "$ref": "Channel"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "commentThreads": {
      "methods": {
        "insert": {
          "id": "youtube.commentThreads.insert",
          "path": "commentThreads",
          "httpMethod": "POST",
          "description": "Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "CommentThread"
          },
          "response": {
            "$ref": "CommentThread"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.commentThreads.list",
          "path": "commentThreads",
          "httpMethod": "GET",
          "description": "Returns a list of comment threads that match the API request parameters.",
          "parameters": {
            "allThreadsRelatedToChannelId": {
              "type": "string",
              "description": "The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.",
              "location": "query"
            },
            "channelId": {
              "type": "string",
              "description": "The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "default": "20",
              "format": "uint32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "moderationStatus": {
              "type": "string",
              "description": "Set this parameter to limit the returned comment threads to a particular moderation state.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "default": "MODERATION_STATUS_PUBLISHED",
              "enum": ["heldForReview", "likelySpam", "published"],
              "enumDescriptions": ["Retrieve comment threads that are awaiting review by a moderator. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment are awaiting review.", "Retrieve comment threads classified as likely to be spam. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment is considered likely to be spam.", "Retrieve threads of published comments. This is the default value. A comment thread can be included in the response if its top-level comment has been published."],
              "location": "query"
            },
            "order": {
              "type": "string",
              "description": "The order parameter specifies the order in which the API response should list comment threads. Valid values are: \n- time - Comment threads are ordered by time. This is the default behavior.\n- relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.",
              "default": "true",
              "enum": ["relevance", "time"],
              "enumDescriptions": ["Order by relevance.", "Order by time."],
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.",
              "required": true,
              "location": "query"
            },
            "searchTerms": {
              "type": "string",
              "description": "The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "location": "query"
            },
            "textFormat": {
              "type": "string",
              "description": "Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.",
              "default": "FORMAT_HTML",
              "enum": ["html", "plainText"],
              "enumDescriptions": ["Returns the comments in HTML format. This is the default value.", "Returns the comments in plain text format."],
              "location": "query"
            },
            "videoId": {
              "type": "string",
              "description": "The videoId parameter instructs the API to return comment threads associated with the specified video ID.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "CommentThreadListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "update": {
          "id": "youtube.commentThreads.update",
          "path": "commentThreads",
          "httpMethod": "PUT",
          "description": "Modifies the top-level comment in a comment thread.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "CommentThread"
          },
          "response": {
            "$ref": "CommentThread"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        }
      }
    },
    "comments": {
      "methods": {
        "delete": {
          "id": "youtube.comments.delete",
          "path": "comments",
          "httpMethod": "DELETE",
          "description": "Deletes a comment.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the comment ID for the resource that is being deleted.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.comments.insert",
          "path": "comments",
          "httpMethod": "POST",
          "description": "Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Comment"
          },
          "response": {
            "$ref": "Comment"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.comments.list",
          "path": "comments",
          "httpMethod": "GET",
          "description": "Returns a list of comments that match the API request parameters.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "default": "20",
              "format": "uint32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.\n\nNote: This parameter is not supported for use in conjunction with the id parameter.",
              "location": "query"
            },
            "parentId": {
              "type": "string",
              "description": "The parentId parameter specifies the ID of the comment for which replies should be retrieved.\n\nNote: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.",
              "required": true,
              "location": "query"
            },
            "textFormat": {
              "type": "string",
              "description": "This parameter indicates whether the API should return comments formatted as HTML or as plain text.",
              "default": "FORMAT_HTML",
              "enum": ["html", "plainText"],
              "enumDescriptions": ["Returns the comments in HTML format. This is the default value.", "Returns the comments in plain text format."],
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "CommentListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "markAsSpam": {
          "id": "youtube.comments.markAsSpam",
          "path": "comments/markAsSpam",
          "httpMethod": "POST",
          "description": "Expresses the caller's opinion that one or more comments should be flagged as spam.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "setModerationStatus": {
          "id": "youtube.comments.setModerationStatus",
          "path": "comments/setModerationStatus",
          "httpMethod": "POST",
          "description": "Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.",
          "parameters": {
            "banAuthor": {
              "type": "boolean",
              "description": "The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.\n\nNote: This parameter is only valid if the moderationStatus parameter is also set to rejected.",
              "default": "false",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.",
              "required": true,
              "location": "query"
            },
            "moderationStatus": {
              "type": "string",
              "description": "Identifies the new moderation status of the specified comments.",
              "required": true,
              "enum": ["heldForReview", "published", "rejected"],
              "enumDescriptions": ["Marks a comment as awaiting review by a moderator.", "Clears a comment for public display.", "Rejects a comment as being unfit for display. This action also effectively hides all replies to the rejected comment.\n\nNote: The API does not currently provide a way to list or otherwise discover rejected comments. However, you can change the moderation status of a rejected comment if you still know its ID. If you were to change the moderation status of a rejected comment, the comment replies would subsequently be discoverable again as well."],
              "location": "query"
            }
          },
          "parameterOrder": ["id", "moderationStatus"],
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "update": {
          "id": "youtube.comments.update",
          "path": "comments",
          "httpMethod": "PUT",
          "description": "Modifies a comment.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Comment"
          },
          "response": {
            "$ref": "Comment"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube.force-ssl"]
        }
      }
    },
    "fanFundingEvents": {
      "methods": {
        "list": {
          "id": "youtube.fanFundingEvents.list",
          "path": "fanFundingEvents",
          "httpMethod": "GET",
          "description": "Lists fan funding events for a channel.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.\n\nIf localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the fanFundingEvent resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "FanFundingEventListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "guideCategories": {
      "methods": {
        "list": {
          "id": "youtube.guideCategories.list",
          "path": "guideCategories",
          "httpMethod": "GET",
          "description": "Returns a list of categories that can be associated with YouTube channels.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter specifies the language that will be used for text values in the API response.",
              "default": "en-US",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            },
            "regionCode": {
              "type": "string",
              "description": "The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "GuideCategoryListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "i18nLanguages": {
      "methods": {
        "list": {
          "id": "youtube.i18nLanguages.list",
          "path": "i18nLanguages",
          "httpMethod": "GET",
          "description": "Returns a list of application languages that the YouTube website supports.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter specifies the language that should be used for text values in the API response.",
              "default": "en_US",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "I18nLanguageListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "i18nRegions": {
      "methods": {
        "list": {
          "id": "youtube.i18nRegions.list",
          "path": "i18nRegions",
          "httpMethod": "GET",
          "description": "Returns a list of content regions that the YouTube website supports.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter specifies the language that should be used for text values in the API response.",
              "default": "en_US",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "I18nRegionListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "liveBroadcasts": {
      "methods": {
        "bind": {
          "id": "youtube.liveBroadcasts.bind",
          "path": "liveBroadcasts/bind",
          "httpMethod": "POST",
          "description": "Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.",
              "required": true,
              "location": "query"
            },
            "streamId": {
              "type": "string",
              "description": "The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.",
              "location": "query"
            }
          },
          "parameterOrder": ["id", "part"],
          "response": {
            "$ref": "LiveBroadcast"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "control": {
          "id": "youtube.liveBroadcasts.control",
          "path": "liveBroadcasts/control",
          "httpMethod": "POST",
          "description": "Controls the settings for a slate that can be displayed in the broadcast stream.",
          "parameters": {
            "displaySlate": {
              "type": "boolean",
              "description": "The displaySlate parameter specifies whether the slate is being enabled or disabled.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.",
              "required": true,
              "location": "query"
            },
            "offsetTimeMs": {
              "type": "string",
              "description": "The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.\n\nIf you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.\n\nImportant: You should only specify a value for this parameter if your broadcast stream is delayed.",
              "format": "uint64",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.",
              "required": true,
              "location": "query"
            },
            "walltime": {
              "type": "string",
              "description": "The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.",
              "format": "date-time",
              "location": "query"
            }
          },
          "parameterOrder": ["id", "part"],
          "response": {
            "$ref": "LiveBroadcast"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "delete": {
          "id": "youtube.liveBroadcasts.delete",
          "path": "liveBroadcasts",
          "httpMethod": "DELETE",
          "description": "Deletes a broadcast.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.liveBroadcasts.insert",
          "path": "liveBroadcasts",
          "httpMethod": "POST",
          "description": "Creates a broadcast.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part properties that you can include in the parameter value are id, snippet, contentDetails, and status.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveBroadcast"
          },
          "response": {
            "$ref": "LiveBroadcast"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.liveBroadcasts.list",
          "path": "liveBroadcasts",
          "httpMethod": "GET",
          "description": "Returns a list of YouTube broadcasts that match the API request parameters.",
          "parameters": {
            "broadcastStatus": {
              "type": "string",
              "description": "The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.",
              "enum": ["active", "all", "completed", "upcoming"],
              "enumDescriptions": ["Return current live broadcasts.", "Return all broadcasts.", "Return broadcasts that have already ended.", "Return broadcasts that have not yet started."],
              "location": "query"
            },
            "broadcastType": {
              "type": "string",
              "description": "The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.",
              "default": "BROADCAST_TYPE_FILTER_EVENT",
              "enum": ["all", "event", "persistent"],
              "enumDescriptions": ["Return all broadcasts.", "Return only scheduled event broadcasts.", "Return only persistent broadcasts."],
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "LiveBroadcastListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        },
        "transition": {
          "id": "youtube.liveBroadcasts.transition",
          "path": "liveBroadcasts/transition",
          "httpMethod": "POST",
          "description": "Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.",
          "parameters": {
            "broadcastStatus": {
              "type": "string",
              "description": "The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.",
              "required": true,
              "enum": ["complete", "live", "testing"],
              "enumDescriptions": ["The broadcast is over. YouTube stops transmitting video.", "The broadcast is visible to its audience. YouTube transmits video to the broadcast's monitor stream and its broadcast stream.", "Start testing the broadcast. YouTube transmits video to the broadcast's monitor stream. Note that you can only transition a broadcast to the testing state if its contentDetails.monitorStream.enableMonitorStream property is set to true."],
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies the unique ID of the broadcast that is transitioning to another status.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["broadcastStatus", "id", "part"],
          "response": {
            "$ref": "LiveBroadcast"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "update": {
          "id": "youtube.liveBroadcasts.update",
          "path": "liveBroadcasts",
          "httpMethod": "PUT",
          "description": "Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part properties that you can include in the parameter value are id, snippet, contentDetails, and status.\n\nNote that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveBroadcast"
          },
          "response": {
            "$ref": "LiveBroadcast"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        }
      }
    },
    "liveChatBans": {
      "methods": {
        "delete": {
          "id": "youtube.liveChatBans.delete",
          "path": "liveChat/bans",
          "httpMethod": "DELETE",
          "description": "Removes a chat ban.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.liveChatBans.insert",
          "path": "liveChat/bans",
          "httpMethod": "POST",
          "description": "Adds a new ban to the chat.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveChatBan"
          },
          "response": {
            "$ref": "LiveChatBan"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        }
      }
    },
    "liveChatMessages": {
      "methods": {
        "delete": {
          "id": "youtube.liveChatMessages.delete",
          "path": "liveChat/messages",
          "httpMethod": "DELETE",
          "description": "Deletes a chat message.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube chat message ID of the resource that is being deleted.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.liveChatMessages.insert",
          "path": "liveChat/messages",
          "httpMethod": "POST",
          "description": "Adds a message to a live chat.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveChatMessage"
          },
          "response": {
            "$ref": "LiveChatMessage"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.liveChatMessages.list",
          "path": "liveChat/messages",
          "httpMethod": "GET",
          "description": "Lists live chat messages for a specific chat.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.\n\nIf localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.",
              "location": "query"
            },
            "liveChatId": {
              "type": "string",
              "description": "The liveChatId parameter specifies the ID of the chat whose messages will be returned.",
              "required": true,
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of messages that should be returned in the result set.",
              "default": "500",
              "format": "uint32",
              "minimum": "200",
              "maximum": "2000",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            },
            "profileImageSize": {
              "type": "integer",
              "description": "The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.",
              "format": "uint32",
              "minimum": "16",
              "maximum": "720",
              "location": "query"
            }
          },
          "parameterOrder": ["liveChatId", "part"],
          "response": {
            "$ref": "LiveChatMessageListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "liveChatModerators": {
      "methods": {
        "delete": {
          "id": "youtube.liveChatModerators.delete",
          "path": "liveChat/moderators",
          "httpMethod": "DELETE",
          "description": "Removes a chat moderator.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.liveChatModerators.insert",
          "path": "liveChat/moderators",
          "httpMethod": "POST",
          "description": "Adds a new moderator for the chat.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveChatModerator"
          },
          "response": {
            "$ref": "LiveChatModerator"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.liveChatModerators.list",
          "path": "liveChat/moderators",
          "httpMethod": "GET",
          "description": "Lists moderators for a live chat.",
          "parameters": {
            "liveChatId": {
              "type": "string",
              "description": "The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.",
              "required": true,
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["liveChatId", "part"],
          "response": {
            "$ref": "LiveChatModeratorListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "liveStreams": {
      "methods": {
        "delete": {
          "id": "youtube.liveStreams.delete",
          "path": "liveStreams",
          "httpMethod": "DELETE",
          "description": "Deletes a video stream.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube live stream ID for the resource that is being deleted.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "insert": {
          "id": "youtube.liveStreams.insert",
          "path": "liveStreams",
          "httpMethod": "POST",
          "description": "Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part properties that you can include in the parameter value are id, snippet, cdn, and status.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveStream"
          },
          "response": {
            "$ref": "LiveStream"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        },
        "list": {
          "id": "youtube.liveStreams.list",
          "path": "liveStreams",
          "httpMethod": "GET",
          "description": "Returns a list of video streams that match the API request parameters.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "LiveStreamListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        },
        "update": {
          "id": "youtube.liveStreams.update",
          "path": "liveStreams",
          "httpMethod": "PUT",
          "description": "Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nThe part properties that you can include in the parameter value are id, snippet, cdn, and status.\n\nNote that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "LiveStream"
          },
          "response": {
            "$ref": "LiveStream"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl"]
        }
      }
    },
    "playlistItems": {
      "methods": {
        "delete": {
          "id": "youtube.playlistItems.delete",
          "path": "playlistItems",
          "httpMethod": "DELETE",
          "description": "Deletes a playlist item.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "insert": {
          "id": "youtube.playlistItems.insert",
          "path": "playlistItems",
          "httpMethod": "POST",
          "description": "Adds a resource to a playlist.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "PlaylistItem"
          },
          "response": {
            "$ref": "PlaylistItem"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "list": {
          "id": "youtube.playlistItems.list",
          "path": "playlistItems",
          "httpMethod": "GET",
          "description": "Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of one or more unique playlist item IDs.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.",
              "required": true,
              "location": "query"
            },
            "playlistId": {
              "type": "string",
              "description": "The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.",
              "location": "query"
            },
            "videoId": {
              "type": "string",
              "description": "The videoId parameter specifies that the request should return only the playlist items that contain the specified video.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "PlaylistItemListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsSubscription": true
        },
        "update": {
          "id": "youtube.playlistItems.update",
          "path": "playlistItems",
          "httpMethod": "PUT",
          "description": "Modifies a playlist item. For example, you could update the item's position in the playlist.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nNote that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "PlaylistItem"
          },
          "response": {
            "$ref": "PlaylistItem"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "playlists": {
      "methods": {
        "delete": {
          "id": "youtube.playlists.delete",
          "path": "playlists",
          "httpMethod": "DELETE",
          "description": "Deletes a playlist.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "insert": {
          "id": "youtube.playlists.insert",
          "path": "playlists",
          "httpMethod": "POST",
          "description": "Creates a playlist.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Playlist"
          },
          "response": {
            "$ref": "Playlist"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "list": {
          "id": "youtube.playlists.list",
          "path": "playlists",
          "httpMethod": "GET",
          "description": "Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "This value indicates that the API should only return the specified channel's playlists.",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "PlaylistListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "update": {
          "id": "youtube.playlists.update",
          "path": "playlists",
          "httpMethod": "PUT",
          "description": "Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nNote that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Playlist"
          },
          "response": {
            "$ref": "Playlist"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "search": {
      "methods": {
        "list": {
          "id": "youtube.search.list",
          "path": "search",
          "httpMethod": "GET",
          "description": "Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter indicates that the API response should only contain resources created by the channel",
              "location": "query"
            },
            "channelType": {
              "type": "string",
              "description": "The channelType parameter lets you restrict a search to a particular type of channel.",
              "enum": ["any", "show"],
              "enumDescriptions": ["Return all channels.", "Only retrieve shows."],
              "location": "query"
            },
            "eventType": {
              "type": "string",
              "description": "The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["completed", "live", "upcoming"],
              "enumDescriptions": ["Only include completed broadcasts.", "Only include active broadcasts.", "Only include upcoming broadcasts."],
              "location": "query"
            },
            "forContentOwner": {
              "type": "boolean",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.",
              "location": "query"
            },
            "forDeveloper": {
              "type": "boolean",
              "description": "The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.",
              "location": "query"
            },
            "forMine": {
              "type": "boolean",
              "description": "The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.",
              "location": "query"
            },
            "location": {
              "type": "string",
              "description": "The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).\n\n\n- The location parameter value identifies the point at the center of the area.\n- The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.",
              "location": "query"
            },
            "locationRadius": {
              "type": "string",
              "description": "The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.\n\nThe parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.\n\nNote: See the definition of the location parameter for more information.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "order": {
              "type": "string",
              "description": "The order parameter specifies the method that will be used to order resources in the API response.",
              "default": "SEARCH_SORT_RELEVANCE",
              "enum": ["date", "rating", "relevance", "title", "videoCount", "viewCount"],
              "enumDescriptions": ["Resources are sorted in reverse chronological order based on the date they were created.", "Resources are sorted from highest to lowest rating.", "Resources are sorted based on their relevance to the search query. This is the default value for this parameter.", "Resources are sorted alphabetically by title.", "Channels are sorted in descending order of their number of uploaded videos.", "Resources are sorted from highest to lowest number of views."],
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            },
            "publishedAfter": {
              "type": "string",
              "description": "The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).",
              "format": "date-time",
              "location": "query"
            },
            "publishedBefore": {
              "type": "string",
              "description": "The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).",
              "format": "date-time",
              "location": "query"
            },
            "q": {
              "type": "string",
              "description": "The q parameter specifies the query term to search for.\n\nYour request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either \"boating\" or \"sailing\", set the q parameter value to boating|sailing. Similarly, to search for videos matching either \"boating\" or \"sailing\" but not \"fishing\", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.",
              "location": "query"
            },
            "regionCode": {
              "type": "string",
              "description": "The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.",
              "location": "query"
            },
            "relatedToVideoId": {
              "type": "string",
              "description": "The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.",
              "location": "query"
            },
            "relevanceLanguage": {
              "type": "string",
              "description": "The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.",
              "location": "query"
            },
            "safeSearch": {
              "type": "string",
              "description": "The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.",
              "enum": ["moderate", "none", "strict"],
              "enumDescriptions": ["YouTube will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.", "YouTube will not filter the search result set.", "YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results."],
              "location": "query"
            },
            "topicId": {
              "type": "string",
              "description": "The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.",
              "location": "query"
            },
            "type": {
              "type": "string",
              "description": "The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.",
              "default": "video,channel,playlist",
              "location": "query"
            },
            "videoCaption": {
              "type": "string",
              "description": "The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "closedCaption", "none"],
              "enumDescriptions": ["Do not filter results based on caption availability.", "Only include videos that have captions.", "Only include videos that do not have captions."],
              "location": "query"
            },
            "videoCategoryId": {
              "type": "string",
              "description": "The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "location": "query"
            },
            "videoDefinition": {
              "type": "string",
              "description": "The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "high", "standard"],
              "enumDescriptions": ["Return all videos, regardless of their resolution.", "Only retrieve HD videos.", "Only retrieve videos in standard definition."],
              "location": "query"
            },
            "videoDimension": {
              "type": "string",
              "description": "The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["2d", "3d", "any"],
              "enumDescriptions": ["Restrict search results to exclude 3D videos.", "Restrict search results to only include 3D videos.", "Include both 3D and non-3D videos in returned results. This is the default value."],
              "location": "query"
            },
            "videoDuration": {
              "type": "string",
              "description": "The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "long", "medium", "short"],
              "enumDescriptions": ["Do not filter video search results based on their duration. This is the default value.", "Only include videos longer than 20 minutes.", "Only include videos that are between four and 20 minutes long (inclusive).", "Only include videos that are less than four minutes long."],
              "location": "query"
            },
            "videoEmbeddable": {
              "type": "string",
              "description": "The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "true"],
              "enumDescriptions": ["Return all videos, embeddable or not.", "Only retrieve embeddable videos."],
              "location": "query"
            },
            "videoLicense": {
              "type": "string",
              "description": "The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "creativeCommon", "youtube"],
              "enumDescriptions": ["Return all videos, regardless of which license they have, that match the query parameters.", "Only return videos that have a Creative Commons license. Users can reuse videos with this license in other videos that they create. Learn more.", "Only return videos that have the standard YouTube license."],
              "location": "query"
            },
            "videoSyndicated": {
              "type": "string",
              "description": "The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "true"],
              "enumDescriptions": ["Return all videos, syndicated or not.", "Only retrieve syndicated videos."],
              "location": "query"
            },
            "videoType": {
              "type": "string",
              "description": "The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
              "enum": ["any", "episode", "movie"],
              "enumDescriptions": ["Return all videos.", "Only retrieve episodes of shows.", "Only retrieve movies."],
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "SearchListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "sponsors": {
      "methods": {
        "list": {
          "id": "youtube.sponsors.list",
          "path": "sponsors",
          "httpMethod": "GET",
          "description": "Lists sponsors for a channel.",
          "parameters": {
            "filter": {
              "type": "string",
              "description": "The filter parameter specifies which channel sponsors to return.",
              "default": "POLL_NEWEST",
              "enum": ["all", "newest"],
              "enumDescriptions": ["Return all sponsors, from newest to oldest.", "Return the most recent sponsors, from newest to oldest."],
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "SponsorListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "subscriptions": {
      "methods": {
        "delete": {
          "id": "youtube.subscriptions.delete",
          "path": "subscriptions",
          "httpMethod": "DELETE",
          "description": "Deletes a subscription.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "insert": {
          "id": "youtube.subscriptions.insert",
          "path": "subscriptions",
          "httpMethod": "POST",
          "description": "Adds a subscription for the authenticated user's channel.",
          "parameters": {
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Subscription"
          },
          "response": {
            "$ref": "Subscription"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "list": {
          "id": "youtube.subscriptions.list",
          "path": "subscriptions",
          "httpMethod": "GET",
          "description": "Returns subscription resources that match the API request criteria.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.",
              "location": "query"
            },
            "forChannelId": {
              "type": "string",
              "description": "The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "0",
              "maximum": "50",
              "location": "query"
            },
            "mine": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.",
              "location": "query"
            },
            "myRecentSubscribers": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).",
              "location": "query"
            },
            "mySubscribers": {
              "type": "boolean",
              "description": "Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "order": {
              "type": "string",
              "description": "The order parameter specifies the method that will be used to sort resources in the API response.",
              "default": "SUBSCRIPTION_ORDER_RELEVANCE",
              "enum": ["alphabetical", "relevance", "unread"],
              "enumDescriptions": ["Sort alphabetically.", "Sort by relevance.", "Sort by order of activity."],
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "SubscriptionListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "superChatEvents": {
      "methods": {
        "list": {
          "id": "youtube.superChatEvents.list",
          "path": "superChatEvents",
          "httpMethod": "GET",
          "description": "Lists Super Chat events for a channel.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.\n\nIf localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.",
              "default": "5",
              "format": "uint32",
              "minimum": "1",
              "maximum": "50",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "SuperChatEventListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "thumbnails": {
      "methods": {
        "set": {
          "id": "youtube.thumbnails.set",
          "path": "thumbnails/set",
          "httpMethod": "POST",
          "description": "Uploads a custom video thumbnail to YouTube and sets it for a video.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "videoId": {
              "type": "string",
              "description": "The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["videoId"],
          "response": {
            "$ref": "ThumbnailSetResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["application/octet-stream", "image/jpeg", "image/png"],
            "maxSize": "2MB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/thumbnails/set"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/thumbnails/set"
              }
            }
          }
        }
      }
    },
    "videoAbuseReportReasons": {
      "methods": {
        "list": {
          "id": "youtube.videoAbuseReportReasons.list",
          "path": "videoAbuseReportReasons",
          "httpMethod": "GET",
          "description": "Returns a list of abuse reasons that can be used for reporting abusive videos.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter specifies the language that should be used for text values in the API response.",
              "default": "en_US",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "VideoAbuseReportReasonListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly"]
        }
      }
    },
    "videoCategories": {
      "methods": {
        "list": {
          "id": "youtube.videoCategories.list",
          "path": "videoCategories",
          "httpMethod": "GET",
          "description": "Returns a list of categories that can be associated with YouTube videos.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "The hl parameter specifies the language that should be used for text values in the API response.",
              "default": "en_US",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.",
              "required": true,
              "location": "query"
            },
            "regionCode": {
              "type": "string",
              "description": "The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "VideoCategoryListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "videos": {
      "methods": {
        "delete": {
          "id": "youtube.videos.delete",
          "path": "videos",
          "httpMethod": "DELETE",
          "description": "Deletes a YouTube video.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "getRating": {
          "id": "youtube.videos.getRating",
          "path": "videos/getRating",
          "httpMethod": "GET",
          "description": "Retrieves the ratings that the authorized user gave to a list of specified videos.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["id"],
          "response": {
            "$ref": "VideoGetRatingResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "insert": {
          "id": "youtube.videos.insert",
          "path": "videos",
          "httpMethod": "POST",
          "description": "Uploads a video to YouTube and optionally sets the video's metadata.",
          "parameters": {
            "autoLevels": {
              "type": "boolean",
              "description": "The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.",
              "location": "query"
            },
            "notifySubscribers": {
              "type": "boolean",
              "description": "The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.",
              "default": "true",
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "onBehalfOfContentOwnerChannel": {
              "type": "string",
              "description": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.\n\nThis parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nNote that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.",
              "required": true,
              "location": "query"
            },
            "stabilize": {
              "type": "boolean",
              "description": "The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Video"
          },
          "response": {
            "$ref": "Video"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["application/octet-stream", "video/*"],
            "maxSize": "64GB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/videos"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/videos"
              }
            }
          }
        },
        "list": {
          "id": "youtube.videos.list",
          "path": "videos",
          "httpMethod": "GET",
          "description": "Returns a list of videos that match the API request parameters.",
          "parameters": {
            "chart": {
              "type": "string",
              "description": "The chart parameter identifies the chart that you want to retrieve.",
              "enum": ["mostPopular"],
              "enumDescriptions": ["Return the most popular videos for the specified content region and video category."],
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.\n\nIf localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.",
              "location": "query"
            },
            "id": {
              "type": "string",
              "description": "The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.",
              "location": "query"
            },
            "locale": {
              "type": "string",
              "description": "DEPRECATED",
              "location": "query"
            },
            "maxHeight": {
              "type": "integer",
              "description": "The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.",
              "format": "uint32",
              "minimum": "72",
              "maximum": "8192",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "description": "The maxResults parameter specifies the maximum number of items that should be returned in the result set.\n\nNote: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.",
              "default": "5",
              "format": "uint32",
              "minimum": "1",
              "maximum": "50",
              "location": "query"
            },
            "maxWidth": {
              "type": "integer",
              "description": "The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.",
              "format": "uint32",
              "minimum": "72",
              "maximum": "8192",
              "location": "query"
            },
            "myRating": {
              "type": "string",
              "description": "Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.",
              "enum": ["dislike", "like"],
              "enumDescriptions": ["Returns only videos disliked by the authenticated user.", "Returns only video liked by the authenticated user."],
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.\n\nNote: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.\n\nIf the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.",
              "required": true,
              "location": "query"
            },
            "regionCode": {
              "type": "string",
              "description": "The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.",
              "location": "query"
            },
            "videoCategoryId": {
              "type": "string",
              "description": "The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.",
              "default": "0",
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "response": {
            "$ref": "VideoListResponse"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "rate": {
          "id": "youtube.videos.rate",
          "path": "videos/rate",
          "httpMethod": "POST",
          "description": "Add a like or dislike rating to a video or remove a rating from a video.",
          "parameters": {
            "id": {
              "type": "string",
              "description": "The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.",
              "required": true,
              "location": "query"
            },
            "rating": {
              "type": "string",
              "description": "Specifies the rating to record.",
              "required": true,
              "enum": ["dislike", "like", "none"],
              "enumDescriptions": ["Records that the authenticated user disliked the video.", "Records that the authenticated user liked the video.", "Removes any rating that the authenticated user had previously set for the video."],
              "location": "query"
            }
          },
          "parameterOrder": ["id", "rating"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "reportAbuse": {
          "id": "youtube.videos.reportAbuse",
          "path": "videos/reportAbuse",
          "httpMethod": "POST",
          "description": "Report abuse for a video.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "VideoAbuseReport"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        },
        "update": {
          "id": "youtube.videos.update",
          "path": "videos",
          "httpMethod": "PUT",
          "description": "Updates a video's metadata.",
          "parameters": {
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            },
            "part": {
              "type": "string",
              "description": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.\n\nNote that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.\n\nIn addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["part"],
          "request": {
            "$ref": "Video"
          },
          "response": {
            "$ref": "Video"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    },
    "watermarks": {
      "methods": {
        "set": {
          "id": "youtube.watermarks.set",
          "path": "watermarks/set",
          "httpMethod": "POST",
          "description": "Uploads a watermark image to YouTube and sets it for a channel.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["channelId"],
          "request": {
            "$ref": "InvideoBranding"
          },
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/youtubepartner"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["application/octet-stream", "image/jpeg", "image/png"],
            "maxSize": "10MB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/youtube/v3/watermarks/set"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/youtube/v3/watermarks/set"
              }
            }
          }
        },
        "unset": {
          "id": "youtube.watermarks.unset",
          "path": "watermarks/unset",
          "httpMethod": "POST",
          "description": "Deletes a channel's watermark image.",
          "parameters": {
            "channelId": {
              "type": "string",
              "description": "The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.",
              "required": true,
              "location": "query"
            },
            "onBehalfOfContentOwner": {
              "type": "string",
              "description": "Note: This parameter is intended exclusively for YouTube content partners.\n\nThe onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
              "location": "query"
            }
          },
          "parameterOrder": ["channelId"],
          "scopes": ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
        }
      }
    }
  }
};