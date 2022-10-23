const { name, author, repository, version } = require("../package.json");

module.exports = {
  name: {
    "": name,
    en: "Twitch Drops Manager",
  }, // 'license': 'MIT',
  author,
  description: "Twitch Drops Manager",
  match: ["https://*.twitch.tv/drops/*"],
  source: repository.url,
  version,
  require: [],
};
