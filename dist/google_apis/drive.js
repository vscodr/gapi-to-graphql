"use strict";

module.exports = {
  "kind": "discovery#restDescription",
  "etag": "\"YWOzh2SDasdU84ArJnpYek-OMdg/hZMEYFHornfaEP0yjVaWLl21gSc\"",
  "discoveryVersion": "v1",
  "id": "drive:v3",
  "name": "drive",
  "version": "v3",
  "revision": "20171013",
  "title": "Drive API",
  "description": "Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
  "ownerDomain": "google.com",
  "ownerName": "Google",
  "icons": {
    "x16": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_16.png",
    "x32": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_32.png"
  },
  "documentationLink": "https://developers.google.com/drive/",
  "protocol": "rest",
  "baseUrl": "https://www.googleapis.com/drive/v3/",
  "basePath": "/drive/v3/",
  "rootUrl": "https://www.googleapis.com/",
  "servicePath": "drive/v3/",
  "batchPath": "batch/drive/v3",
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
        "https://www.googleapis.com/auth/drive": {
          "description": "View and manage the files in your Google Drive"
        },
        "https://www.googleapis.com/auth/drive.appdata": {
          "description": "View and manage its own configuration data in your Google Drive"
        },
        "https://www.googleapis.com/auth/drive.file": {
          "description": "View and manage Google Drive files and folders that you have opened or created with this app"
        },
        "https://www.googleapis.com/auth/drive.metadata": {
          "description": "View and manage metadata of files in your Google Drive"
        },
        "https://www.googleapis.com/auth/drive.metadata.readonly": {
          "description": "View metadata for files in your Google Drive"
        },
        "https://www.googleapis.com/auth/drive.photos.readonly": {
          "description": "View the photos, videos and albums in your Google Photos"
        },
        "https://www.googleapis.com/auth/drive.readonly": {
          "description": "View the files in your Google Drive"
        },
        "https://www.googleapis.com/auth/drive.scripts": {
          "description": "Modify your Google Apps Script scripts' behavior"
        }
      }
    }
  },
  "schemas": {
    "About": {
      "id": "About",
      "type": "object",
      "description": "Information about the user, the user's Drive, and system capabilities.",
      "properties": {
        "appInstalled": {
          "type": "boolean",
          "description": "Whether the user has installed the requesting app."
        },
        "exportFormats": {
          "type": "object",
          "description": "A map of source MIME type to possible targets for all supported exports.",
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "folderColorPalette": {
          "type": "array",
          "description": "The currently supported folder colors as RGB hex strings.",
          "items": {
            "type": "string"
          }
        },
        "importFormats": {
          "type": "object",
          "description": "A map of source MIME type to possible targets for all supported imports.",
          "additionalProperties": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#about\".",
          "default": "drive#about"
        },
        "maxImportSizes": {
          "type": "object",
          "description": "A map of maximum import sizes by MIME type, in bytes.",
          "additionalProperties": {
            "type": "string",
            "format": "int64"
          }
        },
        "maxUploadSize": {
          "type": "string",
          "description": "The maximum upload size in bytes.",
          "format": "int64"
        },
        "storageQuota": {
          "type": "object",
          "description": "The user's storage quota limits and usage. All fields are measured in bytes.",
          "properties": {
            "limit": {
              "type": "string",
              "description": "The usage limit, if applicable. This will not be present if the user has unlimited storage.",
              "format": "int64"
            },
            "usage": {
              "type": "string",
              "description": "The total usage across all services.",
              "format": "int64"
            },
            "usageInDrive": {
              "type": "string",
              "description": "The usage by all files in Google Drive.",
              "format": "int64"
            },
            "usageInDriveTrash": {
              "type": "string",
              "description": "The usage by trashed files in Google Drive.",
              "format": "int64"
            }
          }
        },
        "teamDriveThemes": {
          "type": "array",
          "description": "A list of themes that are supported for Team Drives.",
          "items": {
            "type": "object",
            "properties": {
              "backgroundImageLink": {
                "type": "string",
                "description": "A link to this Team Drive theme's background image."
              },
              "colorRgb": {
                "type": "string",
                "description": "The color of this Team Drive theme as an RGB hex string."
              },
              "id": {
                "type": "string",
                "description": "The ID of the theme."
              }
            }
          }
        },
        "user": {
          "$ref": "User",
          "description": "The authenticated user."
        }
      }
    },
    "Change": {
      "id": "Change",
      "type": "object",
      "description": "A change to a file or Team Drive.",
      "properties": {
        "file": {
          "$ref": "File",
          "description": "The updated state of the file. Present if the type is file and the file has not been removed from this list of changes."
        },
        "fileId": {
          "type": "string",
          "description": "The ID of the file which has changed."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#change\".",
          "default": "drive#change"
        },
        "removed": {
          "type": "boolean",
          "description": "Whether the file or Team Drive has been removed from this list of changes, for example by deletion or loss of access."
        },
        "teamDrive": {
          "$ref": "TeamDrive",
          "description": "The updated state of the Team Drive. Present if the type is teamDrive, the user is still a member of the Team Drive, and the Team Drive has not been removed."
        },
        "teamDriveId": {
          "type": "string",
          "description": "The ID of the Team Drive associated with this change."
        },
        "time": {
          "type": "string",
          "description": "The time of this change (RFC 3339 date-time).",
          "format": "date-time"
        },
        "type": {
          "type": "string",
          "description": "The type of the change. Possible values are file and teamDrive."
        }
      }
    },
    "ChangeList": {
      "id": "ChangeList",
      "type": "object",
      "description": "A list of changes for a user.",
      "properties": {
        "changes": {
          "type": "array",
          "description": "The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "Change"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#changeList\".",
          "default": "drive#changeList"
        },
        "newStartPageToken": {
          "type": "string",
          "description": "The starting page token for future changes. This will be present only if the end of the current changes list has been reached."
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        }
      }
    },
    "Channel": {
      "id": "Channel",
      "type": "object",
      "description": "An notification channel used to watch for resource changes.",
      "properties": {
        "address": {
          "type": "string",
          "description": "The address where notifications are delivered for this channel."
        },
        "expiration": {
          "type": "string",
          "description": "Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.",
          "format": "int64"
        },
        "id": {
          "type": "string",
          "description": "A UUID or similar unique string that identifies this channel."
        },
        "kind": {
          "type": "string",
          "description": "Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string \"api#channel\".",
          "default": "api#channel"
        },
        "params": {
          "type": "object",
          "description": "Additional parameters controlling delivery channel behavior. Optional.",
          "additionalProperties": {
            "type": "string",
            "description": "Declares a new parameter by name."
          }
        },
        "payload": {
          "type": "boolean",
          "description": "A Boolean value to indicate whether payload is wanted. Optional."
        },
        "resourceId": {
          "type": "string",
          "description": "An opaque ID that identifies the resource being watched on this channel. Stable across different API versions."
        },
        "resourceUri": {
          "type": "string",
          "description": "A version-specific identifier for the watched resource."
        },
        "token": {
          "type": "string",
          "description": "An arbitrary string delivered to the target address with each notification delivered over this channel. Optional."
        },
        "type": {
          "type": "string",
          "description": "The type of delivery mechanism used for this channel."
        }
      }
    },
    "Comment": {
      "id": "Comment",
      "type": "object",
      "description": "A comment on a file.",
      "properties": {
        "anchor": {
          "type": "string",
          "description": "A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties."
        },
        "author": {
          "$ref": "User",
          "description": "The user who created the comment."
        },
        "content": {
          "type": "string",
          "description": "The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.",
          "annotations": {
            "required": ["drive.comments.create", "drive.comments.update"]
          }
        },
        "createdTime": {
          "type": "string",
          "description": "The time at which the comment was created (RFC 3339 date-time).",
          "format": "date-time"
        },
        "deleted": {
          "type": "boolean",
          "description": "Whether the comment has been deleted. A deleted comment has no content."
        },
        "htmlContent": {
          "type": "string",
          "description": "The content of the comment with HTML formatting."
        },
        "id": {
          "type": "string",
          "description": "The ID of the comment."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#comment\".",
          "default": "drive#comment"
        },
        "modifiedTime": {
          "type": "string",
          "description": "The last time the comment or any of its replies was modified (RFC 3339 date-time).",
          "format": "date-time"
        },
        "quotedFileContent": {
          "type": "object",
          "description": "The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.",
          "properties": {
            "mimeType": {
              "type": "string",
              "description": "The MIME type of the quoted content."
            },
            "value": {
              "type": "string",
              "description": "The quoted content itself. This is interpreted as plain text if set through the API."
            }
          }
        },
        "replies": {
          "type": "array",
          "description": "The full list of replies to the comment in chronological order.",
          "items": {
            "$ref": "Reply"
          }
        },
        "resolved": {
          "type": "boolean",
          "description": "Whether the comment has been resolved by one of its replies."
        }
      }
    },
    "CommentList": {
      "id": "CommentList",
      "type": "object",
      "description": "A list of comments on a file.",
      "properties": {
        "comments": {
          "type": "array",
          "description": "The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "Comment"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#commentList\".",
          "default": "drive#commentList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        }
      }
    },
    "File": {
      "id": "File",
      "type": "object",
      "description": "The metadata for a file.",
      "properties": {
        "appProperties": {
          "type": "object",
          "description": "A collection of arbitrary key-value pairs which are private to the requesting app.\nEntries with null values are cleared in update and copy requests.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "capabilities": {
          "type": "object",
          "description": "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.",
          "properties": {
            "canAddChildren": {
              "type": "boolean",
              "description": "Whether the current user can add children to this folder. This is always false when the item is not a folder."
            },
            "canChangeViewersCanCopyContent": {
              "type": "boolean",
              "description": "Whether the current user can change whether viewers can copy the contents of this file."
            },
            "canComment": {
              "type": "boolean",
              "description": "Whether the current user can comment on this file."
            },
            "canCopy": {
              "type": "boolean",
              "description": "Whether the current user can copy this file. For a Team Drive item, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder."
            },
            "canDelete": {
              "type": "boolean",
              "description": "Whether the current user can delete this file."
            },
            "canDownload": {
              "type": "boolean",
              "description": "Whether the current user can download this file."
            },
            "canEdit": {
              "type": "boolean",
              "description": "Whether the current user can edit this file."
            },
            "canListChildren": {
              "type": "boolean",
              "description": "Whether the current user can list the children of this folder. This is always false when the item is not a folder."
            },
            "canMoveItemIntoTeamDrive": {
              "type": "boolean",
              "description": "Whether the current user can move this item into a Team Drive. If the item is in a Team Drive, this field is equivalent to canMoveTeamDriveItem."
            },
            "canMoveTeamDriveItem": {
              "type": "boolean",
              "description": "Whether the current user can move this Team Drive item by changing its parent. Note that a request to change the parent for this item may still fail depending on the new parent that is being added. Only populated for Team Drive files."
            },
            "canReadRevisions": {
              "type": "boolean",
              "description": "Whether the current user can read the revisions resource of this file. For a Team Drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read."
            },
            "canReadTeamDrive": {
              "type": "boolean",
              "description": "Whether the current user can read the Team Drive to which this file belongs. Only populated for Team Drive files."
            },
            "canRemoveChildren": {
              "type": "boolean",
              "description": "Whether the current user can remove children from this folder. This is always false when the item is not a folder."
            },
            "canRename": {
              "type": "boolean",
              "description": "Whether the current user can rename this file."
            },
            "canShare": {
              "type": "boolean",
              "description": "Whether the current user can modify the sharing settings for this file."
            },
            "canTrash": {
              "type": "boolean",
              "description": "Whether the current user can move this file to trash."
            },
            "canUntrash": {
              "type": "boolean",
              "description": "Whether the current user can restore this file from trash."
            }
          }
        },
        "contentHints": {
          "type": "object",
          "description": "Additional information about the content of the file. These fields are never populated in responses.",
          "properties": {
            "indexableText": {
              "type": "string",
              "description": "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements."
            },
            "thumbnail": {
              "type": "object",
              "description": "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.",
              "properties": {
                "image": {
                  "type": "string",
                  "description": "The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).",
                  "format": "byte"
                },
                "mimeType": {
                  "type": "string",
                  "description": "The MIME type of the thumbnail."
                }
              }
            }
          }
        },
        "createdTime": {
          "type": "string",
          "description": "The time at which the file was created (RFC 3339 date-time).",
          "format": "date-time"
        },
        "description": {
          "type": "string",
          "description": "A short description of the file."
        },
        "explicitlyTrashed": {
          "type": "boolean",
          "description": "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder."
        },
        "fileExtension": {
          "type": "string",
          "description": "The final component of fullFileExtension. This is only available for files with binary content in Drive."
        },
        "folderColorRgb": {
          "type": "string",
          "description": "The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.\nIf an unsupported color is specified, the closest color in the palette will be used instead."
        },
        "fullFileExtension": {
          "type": "string",
          "description": "The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\". This is only available for files with binary content in Drive.\nThis is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension."
        },
        "hasAugmentedPermissions": {
          "type": "boolean",
          "description": "Whether any users are granted file access directly on this file. This field is only populated for Team Drive files."
        },
        "hasThumbnail": {
          "type": "boolean",
          "description": "Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field."
        },
        "headRevisionId": {
          "type": "string",
          "description": "The ID of the file's head revision. This is currently only available for files with binary content in Drive."
        },
        "iconLink": {
          "type": "string",
          "description": "A static, unauthenticated link to the file's icon."
        },
        "id": {
          "type": "string",
          "description": "The ID of the file."
        },
        "imageMediaMetadata": {
          "type": "object",
          "description": "Additional metadata about image media, if available.",
          "properties": {
            "aperture": {
              "type": "number",
              "description": "The aperture used to create the photo (f-number).",
              "format": "float"
            },
            "cameraMake": {
              "type": "string",
              "description": "The make of the camera used to create the photo."
            },
            "cameraModel": {
              "type": "string",
              "description": "The model of the camera used to create the photo."
            },
            "colorSpace": {
              "type": "string",
              "description": "The color space of the photo."
            },
            "exposureBias": {
              "type": "number",
              "description": "The exposure bias of the photo (APEX value).",
              "format": "float"
            },
            "exposureMode": {
              "type": "string",
              "description": "The exposure mode used to create the photo."
            },
            "exposureTime": {
              "type": "number",
              "description": "The length of the exposure, in seconds.",
              "format": "float"
            },
            "flashUsed": {
              "type": "boolean",
              "description": "Whether a flash was used to create the photo."
            },
            "focalLength": {
              "type": "number",
              "description": "The focal length used to create the photo, in millimeters.",
              "format": "float"
            },
            "height": {
              "type": "integer",
              "description": "The height of the image in pixels.",
              "format": "int32"
            },
            "isoSpeed": {
              "type": "integer",
              "description": "The ISO speed used to create the photo.",
              "format": "int32"
            },
            "lens": {
              "type": "string",
              "description": "The lens used to create the photo."
            },
            "location": {
              "type": "object",
              "description": "Geographic location information stored in the image.",
              "properties": {
                "altitude": {
                  "type": "number",
                  "description": "The altitude stored in the image.",
                  "format": "double"
                },
                "latitude": {
                  "type": "number",
                  "description": "The latitude stored in the image.",
                  "format": "double"
                },
                "longitude": {
                  "type": "number",
                  "description": "The longitude stored in the image.",
                  "format": "double"
                }
              }
            },
            "maxApertureValue": {
              "type": "number",
              "description": "The smallest f-number of the lens at the focal length used to create the photo (APEX value).",
              "format": "float"
            },
            "meteringMode": {
              "type": "string",
              "description": "The metering mode used to create the photo."
            },
            "rotation": {
              "type": "integer",
              "description": "The rotation in clockwise degrees from the image's original orientation.",
              "format": "int32"
            },
            "sensor": {
              "type": "string",
              "description": "The type of sensor used to create the photo."
            },
            "subjectDistance": {
              "type": "integer",
              "description": "The distance to the subject of the photo, in meters.",
              "format": "int32"
            },
            "time": {
              "type": "string",
              "description": "The date and time the photo was taken (EXIF DateTime)."
            },
            "whiteBalance": {
              "type": "string",
              "description": "The white balance mode used to create the photo."
            },
            "width": {
              "type": "integer",
              "description": "The width of the image in pixels.",
              "format": "int32"
            }
          }
        },
        "isAppAuthorized": {
          "type": "boolean",
          "description": "Whether the file was created or opened by the requesting app."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#file\".",
          "default": "drive#file"
        },
        "lastModifyingUser": {
          "$ref": "User",
          "description": "The last user to modify the file."
        },
        "md5Checksum": {
          "type": "string",
          "description": "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Drive."
        },
        "mimeType": {
          "type": "string",
          "description": "The MIME type of the file.\nDrive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.\nIf a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource."
        },
        "modifiedByMe": {
          "type": "boolean",
          "description": "Whether the file has been modified by this user."
        },
        "modifiedByMeTime": {
          "type": "string",
          "description": "The last time the file was modified by the user (RFC 3339 date-time).",
          "format": "date-time"
        },
        "modifiedTime": {
          "type": "string",
          "description": "The last time the file was modified by anyone (RFC 3339 date-time).\nNote that setting modifiedTime will also update modifiedByMeTime for the user.",
          "format": "date-time"
        },
        "name": {
          "type": "string",
          "description": "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of Team Drives, My Drive root folder, and Application Data folder the name is constant."
        },
        "originalFilename": {
          "type": "string",
          "description": "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Drive."
        },
        "ownedByMe": {
          "type": "boolean",
          "description": "Whether the user owns the file. Not populated for Team Drive files."
        },
        "owners": {
          "type": "array",
          "description": "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files.",
          "items": {
            "$ref": "User"
          }
        },
        "parents": {
          "type": "array",
          "description": "The IDs of the parent folders which contain the file.\nIf not specified as part of a create request, the file will be placed directly in the My Drive folder. Update requests must use the addParents and removeParents parameters to modify the values.",
          "items": {
            "type": "string"
          }
        },
        "permissionIds": {
          "type": "array",
          "description": "List of permission IDs for users with access to this file.",
          "items": {
            "type": "string"
          }
        },
        "permissions": {
          "type": "array",
          "description": "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for Team Drive files.",
          "items": {
            "$ref": "Permission"
          }
        },
        "properties": {
          "type": "object",
          "description": "A collection of arbitrary key-value pairs which are visible to all apps.\nEntries with null values are cleared in update and copy requests.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "quotaBytesUsed": {
          "type": "string",
          "description": "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.",
          "format": "int64"
        },
        "shared": {
          "type": "boolean",
          "description": "Whether the file has been shared. Not populated for Team Drive files."
        },
        "sharedWithMeTime": {
          "type": "string",
          "description": "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).",
          "format": "date-time"
        },
        "sharingUser": {
          "$ref": "User",
          "description": "The user who shared the file with the requesting user, if applicable."
        },
        "size": {
          "type": "string",
          "description": "The size of the file's content in bytes. This is only applicable to files with binary content in Drive.",
          "format": "int64"
        },
        "spaces": {
          "type": "array",
          "description": "The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
          "items": {
            "type": "string"
          }
        },
        "starred": {
          "type": "boolean",
          "description": "Whether the user has starred the file."
        },
        "teamDriveId": {
          "type": "string",
          "description": "ID of the Team Drive the file resides in."
        },
        "thumbnailLink": {
          "type": "string",
          "description": "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content."
        },
        "thumbnailVersion": {
          "type": "string",
          "description": "The thumbnail version for use in thumbnail cache invalidation.",
          "format": "int64"
        },
        "trashed": {
          "type": "boolean",
          "description": "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash."
        },
        "trashedTime": {
          "type": "string",
          "description": "The time that the item was trashed (RFC 3339 date-time). Only populated for Team Drive files.",
          "format": "date-time"
        },
        "trashingUser": {
          "$ref": "User",
          "description": "If the file has been explicitly trashed, the user who trashed it. Only populated for Team Drive files."
        },
        "version": {
          "type": "string",
          "description": "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.",
          "format": "int64"
        },
        "videoMediaMetadata": {
          "type": "object",
          "description": "Additional metadata about video media. This may not be available immediately upon upload.",
          "properties": {
            "durationMillis": {
              "type": "string",
              "description": "The duration of the video in milliseconds.",
              "format": "int64"
            },
            "height": {
              "type": "integer",
              "description": "The height of the video in pixels.",
              "format": "int32"
            },
            "width": {
              "type": "integer",
              "description": "The width of the video in pixels.",
              "format": "int32"
            }
          }
        },
        "viewedByMe": {
          "type": "boolean",
          "description": "Whether the file has been viewed by this user."
        },
        "viewedByMeTime": {
          "type": "string",
          "description": "The last time the file was viewed by the user (RFC 3339 date-time).",
          "format": "date-time"
        },
        "viewersCanCopyContent": {
          "type": "boolean",
          "description": "Whether users with only reader or commenter permission can copy the file's content. This affects copy, download, and print operations."
        },
        "webContentLink": {
          "type": "string",
          "description": "A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive."
        },
        "webViewLink": {
          "type": "string",
          "description": "A link for opening the file in a relevant Google editor or viewer in a browser."
        },
        "writersCanShare": {
          "type": "boolean",
          "description": "Whether users with only writer permission can modify the file's permissions. Not populated for Team Drive files."
        }
      }
    },
    "FileList": {
      "id": "FileList",
      "type": "object",
      "description": "A list of files.",
      "properties": {
        "files": {
          "type": "array",
          "description": "The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "File"
          }
        },
        "incompleteSearch": {
          "type": "boolean",
          "description": "Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple Team Drives with the \"user,allTeamDrives\" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as \"user\" or \"teamDrive\"."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#fileList\".",
          "default": "drive#fileList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        }
      }
    },
    "GeneratedIds": {
      "id": "GeneratedIds",
      "type": "object",
      "description": "A list of generated file IDs which can be provided in create requests.",
      "properties": {
        "ids": {
          "type": "array",
          "description": "The IDs generated for the requesting user in the specified space.",
          "items": {
            "type": "string"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#generatedIds\".",
          "default": "drive#generatedIds"
        },
        "space": {
          "type": "string",
          "description": "The type of file that can be created with these IDs."
        }
      }
    },
    "Permission": {
      "id": "Permission",
      "type": "object",
      "description": "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.",
      "properties": {
        "allowFileDiscovery": {
          "type": "boolean",
          "description": "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone."
        },
        "deleted": {
          "type": "boolean",
          "description": "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions."
        },
        "displayName": {
          "type": "string",
          "description": "A displayable name for users, groups or domains."
        },
        "domain": {
          "type": "string",
          "description": "The domain to which this permission refers."
        },
        "emailAddress": {
          "type": "string",
          "description": "The email address of the user or group to which this permission refers."
        },
        "expirationTime": {
          "type": "string",
          "description": "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:  \n- They can only be set on user and group permissions \n- The time must be in the future \n- The time cannot be more than a year in the future",
          "format": "date-time"
        },
        "id": {
          "type": "string",
          "description": "The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#permission\".",
          "default": "drive#permission"
        },
        "photoLink": {
          "type": "string",
          "description": "A link to the user's profile photo, if available."
        },
        "role": {
          "type": "string",
          "description": "The role granted by this permission. While new values may be supported in the future, the following are currently allowed:  \n- organizer \n- owner \n- writer \n- commenter \n- reader",
          "annotations": {
            "required": ["drive.permissions.create"]
          }
        },
        "teamDrivePermissionDetails": {
          "type": "array",
          "description": "Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.",
          "items": {
            "type": "object",
            "properties": {
              "inherited": {
                "type": "boolean",
                "description": "Whether this permission is inherited. This field is always populated. This is an output-only field."
              },
              "inheritedFrom": {
                "type": "string",
                "description": "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the Team Drive."
              },
              "role": {
                "type": "string",
                "description": "The primary role for this user. While new values may be added in the future, the following are currently possible:  \n- organizer \n- writer \n- commenter \n- reader"
              },
              "teamDrivePermissionType": {
                "type": "string",
                "description": "The Team Drive permission type for this user. While new values may be added in future, the following are currently possible:  \n- file \n- member"
              }
            }
          }
        },
        "type": {
          "type": "string",
          "description": "The type of the grantee. Valid values are:  \n- user \n- group \n- domain \n- anyone",
          "annotations": {
            "required": ["drive.permissions.create"]
          }
        }
      }
    },
    "PermissionList": {
      "id": "PermissionList",
      "type": "object",
      "description": "A list of permissions for a file.",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#permissionList\".",
          "default": "drive#permissionList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        },
        "permissions": {
          "type": "array",
          "description": "The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "Permission"
          }
        }
      }
    },
    "Reply": {
      "id": "Reply",
      "type": "object",
      "description": "A reply to a comment on a file.",
      "properties": {
        "action": {
          "type": "string",
          "description": "The action the reply performed to the parent comment. Valid values are:  \n- resolve \n- reopen"
        },
        "author": {
          "$ref": "User",
          "description": "The user who created the reply."
        },
        "content": {
          "type": "string",
          "description": "The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified.",
          "annotations": {
            "required": ["drive.replies.update"]
          }
        },
        "createdTime": {
          "type": "string",
          "description": "The time at which the reply was created (RFC 3339 date-time).",
          "format": "date-time"
        },
        "deleted": {
          "type": "boolean",
          "description": "Whether the reply has been deleted. A deleted reply has no content."
        },
        "htmlContent": {
          "type": "string",
          "description": "The content of the reply with HTML formatting."
        },
        "id": {
          "type": "string",
          "description": "The ID of the reply."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#reply\".",
          "default": "drive#reply"
        },
        "modifiedTime": {
          "type": "string",
          "description": "The last time the reply was modified (RFC 3339 date-time).",
          "format": "date-time"
        }
      }
    },
    "ReplyList": {
      "id": "ReplyList",
      "type": "object",
      "description": "A list of replies to a comment on a file.",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#replyList\".",
          "default": "drive#replyList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        },
        "replies": {
          "type": "array",
          "description": "The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "Reply"
          }
        }
      }
    },
    "Revision": {
      "id": "Revision",
      "type": "object",
      "description": "The metadata for a revision to a file.",
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of the revision."
        },
        "keepForever": {
          "type": "boolean",
          "description": "Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.\nThis field is only applicable to files with binary content in Drive."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#revision\".",
          "default": "drive#revision"
        },
        "lastModifyingUser": {
          "$ref": "User",
          "description": "The last user to modify this revision."
        },
        "md5Checksum": {
          "type": "string",
          "description": "The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive."
        },
        "mimeType": {
          "type": "string",
          "description": "The MIME type of the revision."
        },
        "modifiedTime": {
          "type": "string",
          "description": "The last time the revision was modified (RFC 3339 date-time).",
          "format": "date-time"
        },
        "originalFilename": {
          "type": "string",
          "description": "The original filename used to create this revision. This is only applicable to files with binary content in Drive."
        },
        "publishAuto": {
          "type": "boolean",
          "description": "Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs."
        },
        "published": {
          "type": "boolean",
          "description": "Whether this revision is published. This is only applicable to Google Docs."
        },
        "publishedOutsideDomain": {
          "type": "boolean",
          "description": "Whether this revision is published outside the domain. This is only applicable to Google Docs."
        },
        "size": {
          "type": "string",
          "description": "The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.",
          "format": "int64"
        }
      }
    },
    "RevisionList": {
      "id": "RevisionList",
      "type": "object",
      "description": "A list of revisions of a file.",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#revisionList\".",
          "default": "drive#revisionList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        },
        "revisions": {
          "type": "array",
          "description": "The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "Revision"
          }
        }
      }
    },
    "StartPageToken": {
      "id": "StartPageToken",
      "type": "object",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#startPageToken\".",
          "default": "drive#startPageToken"
        },
        "startPageToken": {
          "type": "string",
          "description": "The starting page token for listing changes."
        }
      }
    },
    "TeamDrive": {
      "id": "TeamDrive",
      "type": "object",
      "description": "Representation of a Team Drive.",
      "properties": {
        "backgroundImageFile": {
          "type": "object",
          "description": "An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.",
          "properties": {
            "id": {
              "type": "string",
              "description": "The ID of an image file in Drive to use for the background image."
            },
            "width": {
              "type": "number",
              "description": "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.",
              "format": "float"
            },
            "xCoordinate": {
              "type": "number",
              "description": "The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.",
              "format": "float"
            },
            "yCoordinate": {
              "type": "number",
              "description": "The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.",
              "format": "float"
            }
          }
        },
        "backgroundImageLink": {
          "type": "string",
          "description": "A short-lived link to this Team Drive's background image."
        },
        "capabilities": {
          "type": "object",
          "description": "Capabilities the current user has on this Team Drive.",
          "properties": {
            "canAddChildren": {
              "type": "boolean",
              "description": "Whether the current user can add children to folders in this Team Drive."
            },
            "canChangeTeamDriveBackground": {
              "type": "boolean",
              "description": "Whether the current user can change the background of this Team Drive."
            },
            "canComment": {
              "type": "boolean",
              "description": "Whether the current user can comment on files in this Team Drive."
            },
            "canCopy": {
              "type": "boolean",
              "description": "Whether the current user can copy files in this Team Drive."
            },
            "canDeleteTeamDrive": {
              "type": "boolean",
              "description": "Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive."
            },
            "canDownload": {
              "type": "boolean",
              "description": "Whether the current user can download files in this Team Drive."
            },
            "canEdit": {
              "type": "boolean",
              "description": "Whether the current user can edit files in this Team Drive"
            },
            "canListChildren": {
              "type": "boolean",
              "description": "Whether the current user can list the children of folders in this Team Drive."
            },
            "canManageMembers": {
              "type": "boolean",
              "description": "Whether the current user can add members to this Team Drive or remove them or change their role."
            },
            "canReadRevisions": {
              "type": "boolean",
              "description": "Whether the current user can read the revisions resource of files in this Team Drive."
            },
            "canRemoveChildren": {
              "type": "boolean",
              "description": "Whether the current user can remove children from folders in this Team Drive."
            },
            "canRename": {
              "type": "boolean",
              "description": "Whether the current user can rename files or folders in this Team Drive."
            },
            "canRenameTeamDrive": {
              "type": "boolean",
              "description": "Whether the current user can rename this Team Drive."
            },
            "canShare": {
              "type": "boolean",
              "description": "Whether the current user can share files or folders in this Team Drive."
            }
          }
        },
        "colorRgb": {
          "type": "string",
          "description": "The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId."
        },
        "id": {
          "type": "string",
          "description": "The ID of this Team Drive which is also the ID of the top level folder for this Team Drive."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#teamDrive\".",
          "default": "drive#teamDrive"
        },
        "name": {
          "type": "string",
          "description": "The name of this Team Drive."
        },
        "themeId": {
          "type": "string",
          "description": "The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile."
        }
      }
    },
    "TeamDriveList": {
      "id": "TeamDriveList",
      "type": "object",
      "description": "A list of Team Drives.",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#teamDriveList\".",
          "default": "drive#teamDriveList"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results."
        },
        "teamDrives": {
          "type": "array",
          "description": "The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
          "items": {
            "$ref": "TeamDrive"
          }
        }
      }
    },
    "User": {
      "id": "User",
      "type": "object",
      "description": "Information about a Drive user.",
      "properties": {
        "displayName": {
          "type": "string",
          "description": "A plain text displayable name for this user."
        },
        "emailAddress": {
          "type": "string",
          "description": "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#user\".",
          "default": "drive#user"
        },
        "me": {
          "type": "boolean",
          "description": "Whether this user is the requesting user."
        },
        "permissionId": {
          "type": "string",
          "description": "The user's ID as visible in Permission resources."
        },
        "photoLink": {
          "type": "string",
          "description": "A link to the user's profile photo, if available."
        }
      }
    }
  },
  "resources": {
    "about": {
      "methods": {
        "get": {
          "id": "drive.about.get",
          "path": "about",
          "httpMethod": "GET",
          "description": "Gets information about the user, the user's Drive, and system capabilities.",
          "response": {
            "$ref": "About"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        }
      }
    },
    "changes": {
      "methods": {
        "getStartPageToken": {
          "id": "drive.changes.getStartPageToken",
          "path": "changes/startPageToken",
          "httpMethod": "GET",
          "description": "Gets the starting pageToken for listing future changes.",
          "parameters": {
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "teamDriveId": {
              "type": "string",
              "description": "The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.",
              "location": "query"
            }
          },
          "response": {
            "$ref": "StartPageToken"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "list": {
          "id": "drive.changes.list",
          "path": "changes",
          "httpMethod": "GET",
          "description": "Lists the changes for a user or Team Drive.",
          "parameters": {
            "includeCorpusRemovals": {
              "type": "boolean",
              "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.",
              "default": "false",
              "location": "query"
            },
            "includeRemoved": {
              "type": "boolean",
              "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.",
              "default": "true",
              "location": "query"
            },
            "includeTeamDriveItems": {
              "type": "boolean",
              "description": "Whether Team Drive files or changes should be included in results.",
              "default": "false",
              "location": "query"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of changes to return per page.",
              "default": "100",
              "format": "int32",
              "minimum": "1",
              "maximum": "1000",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
              "required": true,
              "location": "query"
            },
            "restrictToMyDrive": {
              "type": "boolean",
              "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.",
              "default": "false",
              "location": "query"
            },
            "spaces": {
              "type": "string",
              "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.",
              "default": "drive",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "teamDriveId": {
              "type": "string",
              "description": "The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.",
              "location": "query"
            }
          },
          "parameterOrder": ["pageToken"],
          "response": {
            "$ref": "ChangeList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsSubscription": true
        },
        "watch": {
          "id": "drive.changes.watch",
          "path": "changes/watch",
          "httpMethod": "POST",
          "description": "Subscribes to changes for a user.",
          "parameters": {
            "includeCorpusRemovals": {
              "type": "boolean",
              "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.",
              "default": "false",
              "location": "query"
            },
            "includeRemoved": {
              "type": "boolean",
              "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.",
              "default": "true",
              "location": "query"
            },
            "includeTeamDriveItems": {
              "type": "boolean",
              "description": "Whether Team Drive files or changes should be included in results.",
              "default": "false",
              "location": "query"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of changes to return per page.",
              "default": "100",
              "format": "int32",
              "minimum": "1",
              "maximum": "1000",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
              "required": true,
              "location": "query"
            },
            "restrictToMyDrive": {
              "type": "boolean",
              "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.",
              "default": "false",
              "location": "query"
            },
            "spaces": {
              "type": "string",
              "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.",
              "default": "drive",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "teamDriveId": {
              "type": "string",
              "description": "The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.",
              "location": "query"
            }
          },
          "parameterOrder": ["pageToken"],
          "request": {
            "$ref": "Channel",
            "parameterName": "resource"
          },
          "response": {
            "$ref": "Channel"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsSubscription": true
        }
      }
    },
    "channels": {
      "methods": {
        "stop": {
          "id": "drive.channels.stop",
          "path": "channels/stop",
          "httpMethod": "POST",
          "description": "Stop watching resources through this channel",
          "request": {
            "$ref": "Channel",
            "parameterName": "resource"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        }
      }
    },
    "comments": {
      "methods": {
        "create": {
          "id": "drive.comments.create",
          "path": "files/{fileId}/comments",
          "httpMethod": "POST",
          "description": "Creates a new comment on a file.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId"],
          "request": {
            "$ref": "Comment"
          },
          "response": {
            "$ref": "Comment"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "delete": {
          "id": "drive.comments.delete",
          "path": "files/{fileId}/comments/{commentId}",
          "httpMethod": "DELETE",
          "description": "Deletes a comment.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "get": {
          "id": "drive.comments.get",
          "path": "files/{fileId}/comments/{commentId}",
          "httpMethod": "GET",
          "description": "Gets a comment by ID.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "includeDeleted": {
              "type": "boolean",
              "description": "Whether to return deleted comments. Deleted comments will not include their original content.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "commentId"],
          "response": {
            "$ref": "Comment"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "list": {
          "id": "drive.comments.list",
          "path": "files/{fileId}/comments",
          "httpMethod": "GET",
          "description": "Lists a file's comments.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "includeDeleted": {
              "type": "boolean",
              "description": "Whether to include deleted comments. Deleted comments will not include their original content.",
              "default": "false",
              "location": "query"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of comments to return per page.",
              "default": "20",
              "format": "int32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
              "location": "query"
            },
            "startModifiedTime": {
              "type": "string",
              "description": "The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "response": {
            "$ref": "CommentList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.comments.update",
          "path": "files/{fileId}/comments/{commentId}",
          "httpMethod": "PATCH",
          "description": "Updates a comment with patch semantics.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId"],
          "request": {
            "$ref": "Comment"
          },
          "response": {
            "$ref": "Comment"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        }
      }
    },
    "files": {
      "methods": {
        "copy": {
          "id": "drive.files.copy",
          "path": "files/{fileId}/copy",
          "httpMethod": "POST",
          "description": "Creates a copy of a file and applies any requested updates with patch semantics.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "ignoreDefaultVisibility": {
              "type": "boolean",
              "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
              "default": "false",
              "location": "query"
            },
            "keepRevisionForever": {
              "type": "boolean",
              "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.",
              "default": "false",
              "location": "query"
            },
            "ocrLanguage": {
              "type": "string",
              "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "request": {
            "$ref": "File"
          },
          "response": {
            "$ref": "File"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.photos.readonly"]
        },
        "create": {
          "id": "drive.files.create",
          "path": "files",
          "httpMethod": "POST",
          "description": "Creates a new file.",
          "parameters": {
            "ignoreDefaultVisibility": {
              "type": "boolean",
              "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
              "default": "false",
              "location": "query"
            },
            "keepRevisionForever": {
              "type": "boolean",
              "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.",
              "default": "false",
              "location": "query"
            },
            "ocrLanguage": {
              "type": "string",
              "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "useContentAsIndexableText": {
              "type": "boolean",
              "description": "Whether to use the uploaded content as indexable text.",
              "default": "false",
              "location": "query"
            }
          },
          "request": {
            "$ref": "File"
          },
          "response": {
            "$ref": "File"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["*/*"],
            "maxSize": "5120GB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/drive/v3/files"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/drive/v3/files"
              }
            }
          },
          "supportsSubscription": true
        },
        "delete": {
          "id": "drive.files.delete",
          "path": "files/{fileId}",
          "httpMethod": "DELETE",
          "description": "Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file"]
        },
        "emptyTrash": {
          "id": "drive.files.emptyTrash",
          "path": "files/trash",
          "httpMethod": "DELETE",
          "description": "Permanently deletes all of the user's trashed files.",
          "scopes": ["https://www.googleapis.com/auth/drive"]
        },
        "export": {
          "id": "drive.files.export",
          "path": "files/{fileId}/export",
          "httpMethod": "GET",
          "description": "Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "mimeType": {
              "type": "string",
              "description": "The MIME type of the format requested for this export.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "mimeType"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsMediaDownload": true
        },
        "generateIds": {
          "id": "drive.files.generateIds",
          "path": "files/generateIds",
          "httpMethod": "GET",
          "description": "Generates a set of file IDs which can be provided in create requests.",
          "parameters": {
            "count": {
              "type": "integer",
              "description": "The number of IDs to return.",
              "default": "10",
              "format": "int32",
              "minimum": "1",
              "maximum": "1000",
              "location": "query"
            },
            "space": {
              "type": "string",
              "description": "The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.",
              "default": "drive",
              "location": "query"
            }
          },
          "response": {
            "$ref": "GeneratedIds"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file"]
        },
        "get": {
          "id": "drive.files.get",
          "path": "files/{fileId}",
          "httpMethod": "GET",
          "description": "Gets a file's metadata or content by ID.",
          "parameters": {
            "acknowledgeAbuse": {
              "type": "boolean",
              "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
              "default": "false",
              "location": "query"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "response": {
            "$ref": "File"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsMediaDownload": true,
          "useMediaDownloadService": true,
          "supportsSubscription": true
        },
        "list": {
          "id": "drive.files.list",
          "path": "files",
          "httpMethod": "GET",
          "description": "Lists or searches files.",
          "parameters": {
            "corpora": {
              "type": "string",
              "description": "Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.",
              "location": "query"
            },
            "corpus": {
              "type": "string",
              "description": "The source of files to list. Deprecated: use 'corpora' instead.",
              "enum": ["domain", "user"],
              "enumDescriptions": ["Files shared to the user's domain.", "Files owned by or shared to the user."],
              "location": "query"
            },
            "includeTeamDriveItems": {
              "type": "boolean",
              "description": "Whether Team Drive items should be included in results.",
              "default": "false",
              "location": "query"
            },
            "orderBy": {
              "type": "string",
              "description": "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.",
              "location": "query"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.",
              "default": "100",
              "format": "int32",
              "minimum": "1",
              "maximum": "1000",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
              "location": "query"
            },
            "q": {
              "type": "string",
              "description": "A query for filtering the file results. See the \"Search for Files\" guide for supported syntax.",
              "location": "query"
            },
            "spaces": {
              "type": "string",
              "description": "A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.",
              "default": "drive",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "teamDriveId": {
              "type": "string",
              "description": "ID of Team Drive to search.",
              "location": "query"
            }
          },
          "response": {
            "$ref": "FileList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.files.update",
          "path": "files/{fileId}",
          "httpMethod": "PATCH",
          "description": "Updates a file's metadata and/or content with patch semantics.",
          "parameters": {
            "addParents": {
              "type": "string",
              "description": "A comma-separated list of parent IDs to add.",
              "location": "query"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "keepRevisionForever": {
              "type": "boolean",
              "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.",
              "default": "false",
              "location": "query"
            },
            "ocrLanguage": {
              "type": "string",
              "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
              "location": "query"
            },
            "removeParents": {
              "type": "string",
              "description": "A comma-separated list of parent IDs to remove.",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "useContentAsIndexableText": {
              "type": "boolean",
              "description": "Whether to use the uploaded content as indexable text.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "request": {
            "$ref": "File"
          },
          "response": {
            "$ref": "File"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.scripts"],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": ["*/*"],
            "maxSize": "5120GB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/drive/v3/files/{fileId}"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/drive/v3/files/{fileId}"
              }
            }
          }
        },
        "watch": {
          "id": "drive.files.watch",
          "path": "files/{fileId}/watch",
          "httpMethod": "POST",
          "description": "Subscribes to changes to a file",
          "parameters": {
            "acknowledgeAbuse": {
              "type": "boolean",
              "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
              "default": "false",
              "location": "query"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "request": {
            "$ref": "Channel",
            "parameterName": "resource"
          },
          "response": {
            "$ref": "Channel"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsMediaDownload": true,
          "useMediaDownloadService": true,
          "supportsSubscription": true
        }
      }
    },
    "permissions": {
      "methods": {
        "create": {
          "id": "drive.permissions.create",
          "path": "files/{fileId}/permissions",
          "httpMethod": "POST",
          "description": "Creates a permission for a file or Team Drive.",
          "parameters": {
            "emailMessage": {
              "type": "string",
              "description": "A custom message to include in the notification email.",
              "location": "query"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file or Team Drive.",
              "required": true,
              "location": "path"
            },
            "sendNotificationEmail": {
              "type": "boolean",
              "description": "Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "transferOwnership": {
              "type": "boolean",
              "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "request": {
            "$ref": "Permission"
          },
          "response": {
            "$ref": "Permission"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "delete": {
          "id": "drive.permissions.delete",
          "path": "files/{fileId}/permissions/{permissionId}",
          "httpMethod": "DELETE",
          "description": "Deletes a permission.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file or Team Drive.",
              "required": true,
              "location": "path"
            },
            "permissionId": {
              "type": "string",
              "description": "The ID of the permission.",
              "required": true,
              "location": "path"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "permissionId"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "get": {
          "id": "drive.permissions.get",
          "path": "files/{fileId}/permissions/{permissionId}",
          "httpMethod": "GET",
          "description": "Gets a permission by ID.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "permissionId": {
              "type": "string",
              "description": "The ID of the permission.",
              "required": true,
              "location": "path"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "permissionId"],
          "response": {
            "$ref": "Permission"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "list": {
          "id": "drive.permissions.list",
          "path": "files/{fileId}/permissions",
          "httpMethod": "GET",
          "description": "Lists a file's or Team Drive's permissions.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file or Team Drive.",
              "required": true,
              "location": "path"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.",
              "format": "int32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "response": {
            "$ref": "PermissionList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.permissions.update",
          "path": "files/{fileId}/permissions/{permissionId}",
          "httpMethod": "PATCH",
          "description": "Updates a permission with patch semantics.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file or Team Drive.",
              "required": true,
              "location": "path"
            },
            "permissionId": {
              "type": "string",
              "description": "The ID of the permission.",
              "required": true,
              "location": "path"
            },
            "removeExpiration": {
              "type": "boolean",
              "description": "Whether to remove the expiration date.",
              "default": "false",
              "location": "query"
            },
            "supportsTeamDrives": {
              "type": "boolean",
              "description": "Whether the requesting application supports Team Drives.",
              "default": "false",
              "location": "query"
            },
            "transferOwnership": {
              "type": "boolean",
              "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.",
              "default": "false",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "permissionId"],
          "request": {
            "$ref": "Permission"
          },
          "response": {
            "$ref": "Permission"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        }
      }
    },
    "replies": {
      "methods": {
        "create": {
          "id": "drive.replies.create",
          "path": "files/{fileId}/comments/{commentId}/replies",
          "httpMethod": "POST",
          "description": "Creates a new reply to a comment.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId"],
          "request": {
            "$ref": "Reply"
          },
          "response": {
            "$ref": "Reply"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "delete": {
          "id": "drive.replies.delete",
          "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
          "httpMethod": "DELETE",
          "description": "Deletes a reply.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "replyId": {
              "type": "string",
              "description": "The ID of the reply.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId", "replyId"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        },
        "get": {
          "id": "drive.replies.get",
          "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
          "httpMethod": "GET",
          "description": "Gets a reply by ID.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "includeDeleted": {
              "type": "boolean",
              "description": "Whether to return deleted replies. Deleted replies will not include their original content.",
              "default": "false",
              "location": "query"
            },
            "replyId": {
              "type": "string",
              "description": "The ID of the reply.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId", "replyId"],
          "response": {
            "$ref": "Reply"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "list": {
          "id": "drive.replies.list",
          "path": "files/{fileId}/comments/{commentId}/replies",
          "httpMethod": "GET",
          "description": "Lists a comment's replies.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "includeDeleted": {
              "type": "boolean",
              "description": "Whether to include deleted replies. Deleted replies will not include their original content.",
              "default": "false",
              "location": "query"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of replies to return per page.",
              "default": "20",
              "format": "int32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId", "commentId"],
          "response": {
            "$ref": "ReplyList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.replies.update",
          "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
          "httpMethod": "PATCH",
          "description": "Updates a reply with patch semantics.",
          "parameters": {
            "commentId": {
              "type": "string",
              "description": "The ID of the comment.",
              "required": true,
              "location": "path"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "replyId": {
              "type": "string",
              "description": "The ID of the reply.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "commentId", "replyId"],
          "request": {
            "$ref": "Reply"
          },
          "response": {
            "$ref": "Reply"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file"]
        }
      }
    },
    "revisions": {
      "methods": {
        "delete": {
          "id": "drive.revisions.delete",
          "path": "files/{fileId}/revisions/{revisionId}",
          "httpMethod": "DELETE",
          "description": "Permanently deletes a revision. This method is only applicable to files with binary content in Drive.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "revisionId": {
              "type": "string",
              "description": "The ID of the revision.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "revisionId"],
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file"]
        },
        "get": {
          "id": "drive.revisions.get",
          "path": "files/{fileId}/revisions/{revisionId}",
          "httpMethod": "GET",
          "description": "Gets a revision's metadata or content by ID.",
          "parameters": {
            "acknowledgeAbuse": {
              "type": "boolean",
              "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
              "default": "false",
              "location": "query"
            },
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "revisionId": {
              "type": "string",
              "description": "The ID of the revision.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "revisionId"],
          "response": {
            "$ref": "Revision"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"],
          "supportsMediaDownload": true,
          "useMediaDownloadService": true
        },
        "list": {
          "id": "drive.revisions.list",
          "path": "files/{fileId}/revisions",
          "httpMethod": "GET",
          "description": "Lists a file's revisions.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "pageSize": {
              "type": "integer",
              "description": "The maximum number of revisions to return per page.",
              "default": "200",
              "format": "int32",
              "minimum": "1",
              "maximum": "1000",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
              "location": "query"
            }
          },
          "parameterOrder": ["fileId"],
          "response": {
            "$ref": "RevisionList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.metadata", "https://www.googleapis.com/auth/drive.metadata.readonly", "https://www.googleapis.com/auth/drive.photos.readonly", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.revisions.update",
          "path": "files/{fileId}/revisions/{revisionId}",
          "httpMethod": "PATCH",
          "description": "Updates a revision with patch semantics.",
          "parameters": {
            "fileId": {
              "type": "string",
              "description": "The ID of the file.",
              "required": true,
              "location": "path"
            },
            "revisionId": {
              "type": "string",
              "description": "The ID of the revision.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["fileId", "revisionId"],
          "request": {
            "$ref": "Revision"
          },
          "response": {
            "$ref": "Revision"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.appdata", "https://www.googleapis.com/auth/drive.file"]
        }
      }
    },
    "teamdrives": {
      "methods": {
        "create": {
          "id": "drive.teamdrives.create",
          "path": "teamdrives",
          "httpMethod": "POST",
          "description": "Creates a new Team Drive.",
          "parameters": {
            "requestId": {
              "type": "string",
              "description": "An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": ["requestId"],
          "request": {
            "$ref": "TeamDrive"
          },
          "response": {
            "$ref": "TeamDrive"
          },
          "scopes": ["https://www.googleapis.com/auth/drive"]
        },
        "delete": {
          "id": "drive.teamdrives.delete",
          "path": "teamdrives/{teamDriveId}",
          "httpMethod": "DELETE",
          "description": "Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.",
          "parameters": {
            "teamDriveId": {
              "type": "string",
              "description": "The ID of the Team Drive",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["teamDriveId"],
          "scopes": ["https://www.googleapis.com/auth/drive"]
        },
        "get": {
          "id": "drive.teamdrives.get",
          "path": "teamdrives/{teamDriveId}",
          "httpMethod": "GET",
          "description": "Gets a Team Drive's metadata by ID.",
          "parameters": {
            "teamDriveId": {
              "type": "string",
              "description": "The ID of the Team Drive",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["teamDriveId"],
          "response": {
            "$ref": "TeamDrive"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "list": {
          "id": "drive.teamdrives.list",
          "path": "teamdrives",
          "httpMethod": "GET",
          "description": "Lists the user's Team Drives.",
          "parameters": {
            "pageSize": {
              "type": "integer",
              "description": "Maximum number of Team Drives to return.",
              "default": "10",
              "format": "int32",
              "minimum": "1",
              "maximum": "100",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "Page token for Team Drives.",
              "location": "query"
            }
          },
          "response": {
            "$ref": "TeamDriveList"
          },
          "scopes": ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.readonly"]
        },
        "update": {
          "id": "drive.teamdrives.update",
          "path": "teamdrives/{teamDriveId}",
          "httpMethod": "PATCH",
          "description": "Updates a Team Drive's metadata",
          "parameters": {
            "teamDriveId": {
              "type": "string",
              "description": "The ID of the Team Drive",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": ["teamDriveId"],
          "request": {
            "$ref": "TeamDrive"
          },
          "response": {
            "$ref": "TeamDrive"
          },
          "scopes": ["https://www.googleapis.com/auth/drive"]
        }
      }
    }
  }
};