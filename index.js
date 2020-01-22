#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const { getAndroidHomePath, getAvdList, runAvd } = require("./utils/avd");
const { promptList } = require("./utils/command");
const name = "Android AVD selector";

clear();
console.log(chalk.green(figlet.textSync(name, { horizontalLayout: "fitted" })));
process.title = name;

const path = getAndroidHomePath();
if (!path) return;

const list = getAvdList(path);
if (!list) return;

promptList(list).then(selected => {
  process.title = selected;
  runAvd(path, selected);
});
