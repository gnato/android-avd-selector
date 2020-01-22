const chalk = require("chalk");
const sh = require("shelljs");

module.exports.getAndroidHomePath = () => {
  const basePath = process.env.ANDROID_HOME;
  if (!basePath) {
    console.log(
      chalk.bgRed.bold("Please set ANDROID_HOME to your environment path")
    );
    return false;
  }

  return `${basePath}/emulator/emulator.exe`;
};

module.exports.getAvdList = emulatorPath => {
  const stdout = sh.exec(`${emulatorPath} -list-avds`, {
    silent: true
  }).stdout;

  const list = stdout.split(/\r?\n/).filter(item => item);
  if (list.length === 0) {
    console.log(
      chalk.bgRed.bold("List of AVDs is empty. Please add AVD first.")
    );
  }

  return list;
};

module.exports.runAvd = (emulatorPath, avdName) => {
  sh.exec(`${emulatorPath} -avd "${avdName}"`);
};
