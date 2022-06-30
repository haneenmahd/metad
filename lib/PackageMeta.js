const Controller = require("./Controller");

class PackageMeta {
  static async generateReport(packageName) {
    const controller = new Controller(packageName);

    const extraInfo = await controller.getExtraInfo();

    return {
      name: packageName,
      description: await controller.getDescription(),
      version: extraInfo.latestVersion,
      repository: extraInfo.repository,
      homepage: extraInfo.homepage,
      score: extraInfo.score,
    };
  }
}

module.exports = PackageMeta;
