const inquirer = require("inquirer");
const { getConfig, setConfig } = require("./config");

module.exports.promptList = async list => {
  // get previously selected AVD
  const { selectedAvd } = await getConfig();

  const selected = await inquirer.prompt([
    {
      type: "list",
      name: "avd",
      default: selectedAvd || "",
      message: "Select AVD",
      choices: list
    }
  ]);

  // save to selected AVD
  setConfig({
    selectedAvd: selected.avd
  });

  return selected.avd;
};
