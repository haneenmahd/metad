const { default: axios } = require("axios");

class Controller {
  constructor(packageName) {
    this.packageName = packageName;
  }

  async getDescription() {
    let response = await (
      await axios.get(`https://registry.npmjs.org/${this.packageName}`)
    ).data;

    return response.description;
  }

  async getExtraInfo() {
    const response = await (
      await axios.get(`https://api.npms.io/v2/package/${this.packageName}`)
    ).data;

    return {
      latestVersion: response.collected.metadata.version,
      homepage: response.collected.metadata.links.homepage,
      repository: response.collected.metadata.repository.url,
      evaluation: response.evaluation,
      score: response.score,
    };
  }
}

module.exports = Controller;
