const fs = require("fs");
const configPath = "./.avd";

module.exports.getConfig = async () => {
  const promise = new Promise(resolve => {
    fs.readFile(configPath, (err, data) => {
      if (err) {
        return resolve({});
      }

      const cfg = JSON.parse(data);
      resolve(cfg);
    });
  });

  const config = await promise;
  return config;
};

module.exports.setConfig = data => {
  data = JSON.stringify(data);
  fs.writeFileSync(configPath, data);
};
