# curated-addons

Scrape some Firefox Add-on info from AMO.

This package will scrape the add-ons listed in [addons.json](./addons.json) and convert from add-on names to the following fields:

- `slug`
- `title`
- `author`
- `version`
- `summary`
- `isFeatured` &mdash; [Boolean] A Boolean specifying whether the add-on is featured on AMO.
- `homepage`
- `metadata` &mdash; [Object] An Object containing the following properties:
  - `users` &mdash; [int]
  - `reviews` &mdash; [int]
  - `rating` &mdash; [float]

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
    "category": "Privacy/Security - Tier 1",
    "addons": [
      {
        "name": "Ghostery – Privacy Ad Blocker",
        "version": "8.3.1",
        "guid": "firefox@ghostery.com",
        "author": "Ghostery",
        "summary": "Ghostery is a powerful privacy extension. \n\nBlock ads, stop trackers and speed up websites.",
        "type": "extension",
        "size": 7528085,
        "createdDate": "2008-11-15T11:19:34.000Z",
        "lastUpdated": "2019-01-31T21:25:09.000Z",
        "license": "Mozilla Public License, version 2.0",
        "isFeatured": true,
        "isSourcePublic": true,
        "ratings": 4.4436,
        "reviewCount": 2888,
        "users": 1146072,
        "weeklyDownloads": 71438,
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
    "category": "Privacy/Security - Tier 2",
    "addons": [
      {
        "name": "AdBlocker for YouTube™",
        "version": "0.2.9",
        "guid": "jid1-q4sG8pYhq8KGHs@jetpack",
        "author": "AdblockLite",
        "summary": "Removes all annoying Ads from YouTube",
        "type": "extension",
        "size": 38990,
        "createdDate": "2015-03-29T02:01:10.000Z",
        "lastUpdated": "2018-08-31T15:52:30.000Z",
        "license": "Mozilla Public License, version 2.0",
        "isFeatured": true,
        "isSourcePublic": true,
        "ratings": 4.0864,
        "reviewCount": 220,
        "users": 228258,
        "weeklyDownloads": 7661,
        "homepage": "http://mybrowseraddon.com/clean-youtube.html",
        "url": "https://addons.mozilla.org/firefox/addon/adblock-for-youtube/",
        "slug": "adblock-for-youtube"
      },
      {
        "name": "Forget Me Not - Forget cookies & other data",
        "version": "2.2.1",
        // ...
    ]
  }
]
```
