#!/usr/bin/env node

const process = require("process");
const chalk = require("chalk");
const PackageMeta = require("../lib/PackageMeta");

let packageName = process.argv[2];

(async () => {
  try {
    let report = await PackageMeta.generateReport(packageName);

    let name = chalk.bold(`${chalk.yellow("Name")}: ${report.name}`);
    let latestVersion = chalk.bold(
      `${chalk.yellow("Latest version")}: ${report.version}`
    );
    let description = chalk.bold(
      `${chalk.yellow("Description")}: ${report.description}`
    );
    let repository = chalk.bold(
      `${chalk.yellow("Repository")}: ${report.repository}`
    );
    let homepage = chalk.bold(
      `${chalk.yellow("Homepage")}: ${report.homepage}`
    );
    let score = chalk.bold(
      `${chalk.yellow("Score")}: ${report.score.final * 100}`
    );

    console.log(name);
    console.log(latestVersion);
    console.log(description);
    console.log(repository);
    console.log(homepage);
    console.log(score);
  } catch (e) {
    console.log(
      chalk.red(
        "An unexpected error occured while fetching info for package:",
        chalk.bold(packageName)
      )
    );
  }
})();
