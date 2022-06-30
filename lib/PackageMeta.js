const Controller = require("./Controller");

class PackageMeta {
  static async generateReport(packageName) {
    const controller = new Controller(packageName);

    // fetch the registry
    controller.fetchRegistry();

    const extraInfo = await controller.getExtraInfo();

    return {
      name: packageName,
      version: extraInfo.latestVersion,
      description: extraInfo.description,
      repository: extraInfo.repository,
      homepage: extraInfo.homepage,
      score: extraInfo.score,
    };
  }
}

module.exports = PackageMeta;
