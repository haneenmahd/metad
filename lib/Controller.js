const { default: axios } = require("axios");

class Controller {
  constructor(packageName) {
    this.packageName = packageName;
    this.registryData = {};
  }

  async fetchRegistry(packageName) {
    let response = await (
      await axios.get(`https://registry.npmjs.org/${packageName}`)
    ).data;

    this.registryData = response;
  }

  async getExtraInfo() {
    const response = await (
      await axios.get(`https://api.npms.io/v2/package/${this.packageName}`)
    ).data;

    return {
      latestVersion: response.collected.metadata.version,
      description: this.registryData.description,
      homepage: response.collected.metadata.links.homepage,
      repository: response.collected.metadata.repository.url,
      evaluation: response.evaluation,
      score: response.score,
    };
  }

  async getWeeklyDownloads(packageName) {
    return await await (
      await axios.get(
        `https://api.npmjs.org/downloads/range/last-week/${packageName}`
      )
    ).data;
  }
}

module.exports = Controller;
