const axios = require("axios");

const amoClient = axios.create({
  baseURL: "https://addons.mozilla.org/api/v4/"
});

module.exports = {
  fetchAddons
};

async function fetchAddons(addons) {
  const data = [];
  for (const item of addons) {
    const categoryAddons = [];
    for (const name of item.addons) {
      categoryAddons.push(getAddon(name));
    }
    data.push({
      category: item.category,
      addons: await Promise.all(categoryAddons)
    });
  }
  return data;
}

async function getAddon(slug) {
  const {data: addon} = await amoClient.get(`/addons/addon/${slug}`);
  return {
    name: addon.name["en-US"],
    version: addon.current_version.version,
    guid: addon.guid,
    author: addon.authors[0].name,
    summary: addon.summary["en-US"],
    type: addon.type,
    size: addon.current_version.files[0].size,
    createdDate: new Date(addon.created),
    lastUpdated: new Date(addon.last_updated),
    license: addon.current_version.license.name["en-US"],
    isFeatured: addon.is_featured,
    isSourcePublic: addon.is_source_public,
    ratings: addon.ratings.average,
    reviewCount: addon.ratings.count,
    users: addon.average_daily_users,
    weeklyDownloads: addon.weekly_downloads,
    homepage: addon.homepage["en-US"],
    url: addon.url.replace("/en-US/", "/"),
    slug
  };
}
