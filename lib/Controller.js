const { default: axios } = require("axios");

class Controller {
  static async fetchRegistry(packageName) {
    return await (
      await axios.get(`https://registry.npmjs.org/${packageName}`)
    ).data;
  }

  static async getLatestVersion(packageName) {
    let response = await (
      await axios.get(`https://api.npms.io/v2/package/${packageName}`)
    ).data;

    return response.collected.metadata.version;
  }

  static async getHomePage(packageName) {
    let response = await (
      await axios.get(`https://api.npms.io/v2/package/${packageName}`)
    ).data;

    return response.collected.metadata.links.homepage;
  }

  static async getRepository(packageName) {
    let response = await (
      await axios.get(`https://api.npms.io/v2/package/${packageName}`)
    ).data;

    return response.collected.metadata.repository.url;
  }

  static async getEvaluation(packageName) {
    let response = await (
      await axios.get(`https://api.npms.io/v2/package/${packageName}`)
    ).data;

    return response.evaluation;
  }

  static async getScore(packageName) {
    let response = await (
      await axios.get(`https://api.npms.io/v2/package/${packageName}`)
    ).data;

    return response.score;
  }

  static async getDescription(packageName) {
    return await (
      await axios.get(`https://registry.npmjs.org/${packageName}`)
    ).data.description;
  }

  static async getWeeklyDownloads(packageName) {
    return await await (
      await axios.get(
        `https://api.npmjs.org/downloads/range/last-week/${packageName}`
      )
    ).data;
  }
}

module.exports = Controller;
