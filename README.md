# curated-addons

Scrape some Firefox Add-on info from AMO.

This package will scrape the add-ons listed in [addons.json](./addons.json) and convert from add-on names to the following fields:

| KEY | TYPE | DESCRIPTION |
|:----|:-----|:------------|
| `author` | string | The name for an author.
| `createdDate` | string | Add-on creation date (Ex: "2008-11-15T11:19:34.000Z").
| `createdDate2` | string | User friendly, relative add-on creation date (Ex: "3799d").
| [`guid`](https://developer.mozilla.org/docs/Archive/Add-ons/Install_Manifests#id) | string | The add-on extension identifier.
| `homepage` | string | The add-on homepage.
| `isFeatured` | Boolean | The add-on appears in a featured collection.
| `isSourcePublic` | Boolean | Whether the add-on source is publicly viewable or not.
| `lastUpdated` | string | The date of the last time the add-on was updated by its developer(s). Ex: "2019-01-31T21:25:09.000Z"
| `lastUpdated2` | string | User friendly, relative add-on last updated date (Ex: "70d").
| `license` | string | Add-on license type (Ex: "Mozilla Public License, version 2.0").
| `name` | string | The add-on name.
| `ratings` | float | The average user rating for the add-on.
| `reviewCount` | int | The total number of user ratings for the add-on.
| `size` | int | Add-on size (in bytes).
| `size2` | string | User friendly add-on size (Ex: "7.18MB").
| `slug` | string | The add-on slug.
| `summary` | string | Text summary. Note: Contents may include HTML tags.
| [`type`](https://addons-server.readthedocs.io/en/latest/topics/api/addons.html#addon-detail-type) | string | The add-on type. Ex: "extension".
| `url` | string | The (absolute) add-on detail URL.
| `users` | int | The average number of users for the add-on (updated daily).
| `version` | string | Add-on version.
| `weeklyDownloads` | int | The number of downloads for the add-on in the last week. Not present for lightweight themes.

## USAGE:

Assuming the following [addons.json](./addons.json) input file:

```json
[
  {
    "category": "Privacy/Security - Tier 1",
    "addons": [
      "ghostery",
      "multi-account-containers",
      "adblocker-ultimate"
    ]
  },
  {
    "category": "Privacy/Security - Tier 2",
    "addons": [
      "adblock-for-youtube",
      "forget_me_not",
      "webmail-ad-blocker"
    ]
  }
]
```

```sh
$ npx pdehaan/curated-addons

[
  {
    "category": "Privacy/Security - A",
    "addons": [
      {
        "name": "Ghostery – Privacy Ad Blocker",
        "version": "8.3.1",
        "guid": "firefox@ghostery.com",
        "author": "Ghostery",
        "summary": "Ghostery is a powerful privacy extension. Block ads, stop trackers and speed up websites.",
        "type": "extension",
        "size": 7528085,
        "size2": "7.18MB",
        "createdDate": "2008-11-15T11:19:34.000Z",
        "createdDate2": "3799d",
        "lastUpdated": "2019-01-31T21:25:09.000Z",
        "lastUpdated2": "70d",
        "license": "Mozilla Public License, version 2.0",
        "isFeatured": true,
        "isSourcePublic": true,
        "ratings": 4.444,
        "reviewCount": 2892,
        "users": 1151950,
        "weeklyDownloads": 72030,
        "homepage": "http://www.ghostery.com/",
        "url": "https://addons.mozilla.org/firefox/addon/ghostery/",
        "slug": "ghostery"
      },
      {
        "name": "Firefox Multi-Account Containers",
        "version": "6.1.0",
        // ...
      },
      {
        "name": "AdBlocker Ultimate",
        "version": "2.37",
        // ...
      }
    ]
  },
  {
    "category": "Privacy/Security - B",
    "addons": [
      {
        "name": "AdBlocker for YouTube™",
        "version": "0.2.9",
        "guid": "jid1-q4sG8pYhq8KGHs@jetpack",
        "author": "AdblockLite",
        "summary": "Removes all annoying Ads from YouTube",
        "type": "extension",
        "size": 38990,
        "size2": "38.08KB",
        "createdDate": "2015-03-29T02:01:10.000Z",
        "createdDate2": "1475d",
        "lastUpdated": "2018-08-31T15:52:30.000Z",
        "lastUpdated2": "223d",
        "license": "Mozilla Public License, version 2.0",
        "isFeatured": true,
        "isSourcePublic": true,
        "ratings": 4.0864,
        "reviewCount": 220,
        "users": 229016,
        "weeklyDownloads": 7693,
        "homepage": "http://mybrowseraddon.com/clean-youtube.html",
        "url": "https://addons.mozilla.org/firefox/addon/adblock-for-youtube/",
        "slug": "adblock-for-youtube"
      },
      {
        "name": "Forget Me Not - Forget cookies & other data",
        "version": "2.2.1",
        // ...
      },
      {
        "name": "Webmail Ad Blocker",
        "version": "5.1.4",
        // ...
      }
    ]
  }
]
```
