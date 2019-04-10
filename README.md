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

{
  "category": "Privacy/Security - Tier 1",
  "addons": [
    {
      "slug": "ghostery",
      "title": "Ghostery – Privacy Ad Blocker",
      "author": "Ghostery",
      "version": "8.3.1",
      "summary": "Ghostery is a powerful privacy extension. Block ads, stop trackers and speed up websites.",
      "isFeatured": true,
      "homepage": "http://www.ghostery.com/",
      "metadata": {
        "users": 1146072,
        "reviews": 2888,
        "rating": 4.4
      }
    },
    {
      "slug": "multi-account-containers",
      "title": "Firefox Multi-Account Containers",
      "author": "Mozilla",
      "version": "6.1.0",
      "summary": "Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs that preserve your privacy. Cookies are separated by container, allowing you to use the web with multiple identities or accounts simultaneously.",
      "isFeatured": true,
      "homepage": "https://github.com/mozilla/multi-account-containers/#readme",
      "metadata": {
        "users": 186461,
        "reviews": 2638,
        "rating": 4.5
      }
    },
    {
      "slug": "adblocker-ultimate",
      "title": "AdBlocker Ultimate",
      "author": "AdBlocker Ultimate",
      "version": "2.37",
      "summary": "Free and improved ad blocker. Completely remove ALL ads. No \"acceptable\" ads or whitelisted advertisers, block tracking, block malware!",
      "isFeatured": true,
      "homepage": "https://adblockultimate.net",
      "metadata": {
        "users": 415361,
        "reviews": 5309,
        "rating": 4.7
      }
    }
  ]
}
```
