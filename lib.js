const puppeteer = require("puppeteer");

module.exports = {
  fetchAddons
};

async function fetchAddons(addons) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const item of addons) {
    const res = [];
    for (const name of item.addons) {
      res.push(await getAddon(page, name));
    }

    return {
      category: item.category,
      addons: res
    };
  }

  await browser.close();
}

async function getAddon(page, slug) {
  await page.goto(`https://addons.mozilla.org/firefox/addon/${slug}/`);
  const title = await page.$eval(".AddonTitle", el => el.textContent);
  const author = await page.$eval(".AddonTitle-author", el => el.textContent);
  const summary = await page.$eval(".Addon-summary", el => el.textContent);
  const isFeatured = await page.$(".Badge-featured");
  const [users, reviews, rating] = await page.$$eval(".MetadataCard-list", nodes => nodes.map(n => n.innerText));
  const version = await page.$eval(".AddonMoreInfo-version", el => el.textContent);

  const homepage = await page.$eval(".AddonMoreInfo-homepage-link", el => decodeURIComponent(el.getAttribute("href").replace(/^.*(https?)%3A/, "$1:")));

  return {
    slug,
    title: title.replace(author, "").trim(),
    author: author.replace(/^by /, "").trim(),
    version,
    summary,
    isFeatured: !!isFeatured,
    homepage,
    metadata: {
      users: numberParser(users),
      reviews: numberParser(reviews),
      rating: parseFloat(rating.split("\n").pop())
    }
  };
}

function numberParser(value) {
  const _value = value.replace("\n", " ").replace(/,/g, "");
  return parseInt(_value, 10);
}
