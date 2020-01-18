'use strict';

const chalk = require('chalk');
const pjson = require('../package.json');

console.log(chalk.yellow(`
           _______                   __           __ __
           |     __|.---.-.--.--.    |  |--.-----.|  |  |.-----.
           |__     ||  _  |  |  |    |     |  -__||  |  ||  _  |
           |_______||___._|___  |    |__|__|_____||__|__||_____|
                          |_____|
               __              _______                    __
              |  |_.-----.    |   _   |.--.--.----.-----.|  |
              |   _|  _  |    |       ||  |  |   _|  _  ||__|
              |____|_____|    |___|___||_____|__| |_____||__|
`)
+
chalk.yellow(`
╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ────────────────────────────────────────────────────────╮
│                                                                           │
│     Thanks for installing the latest version of `) + chalk.green.bold(`ods-hyperlink v${pjson.version}.`) + chalk.yellow(`     │
│     This version begins the transition from Orion to Auro components.     │
│                                                                           │
│         Throughout the transition, ods-hyperlink will continue to be      │
│                FULLY SUPPORTED until no longer needed.                    │
│                                                                           │
│         Be sure to see `) +  chalk.green.bold(`https://git.io/Jvk4Z`) + chalk.yellow(` for more information in       │
│                regards to updates and deprecation strategy.               │
│                                                                           │
╰───────────────────────────────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
