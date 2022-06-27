const Controller = require("./Controller");

class PackageMeta extends Controller {
  static async generateReport(packageName) {
    return {
      name: packageName,
      version: await this.getLatestVersion(packageName),
      description: await this.getDescription(packageName),
      repository: await this.getRepository(packageName),
      homepage: await this.getHomePage(packageName),
      score: await this.getScore(packageName),
    };
  }
}

module.exports = PackageMeta;
