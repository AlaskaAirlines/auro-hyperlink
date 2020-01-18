const chalk = require('chalk');

console.log('')
console.log('Build started...');
console.log('')
console.log(chalk.hex('#0074c8')
  `
 █████╗ ██╗   ██╗██████╗  ██████╗
██╔══██╗██║   ██║██╔══██╗██╔═══██╗
███████║██║   ██║██████╔╝██║   ██║
██╔══██║██║   ██║██╔══██╗██║   ██║
██║  ██║╚██████╔╝██║  ██║╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝

██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝

███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝

Creating a Design System People Love.
`)
console.log('')



// Required dependency
const odsComponentConfig = require('style-dictionary').extend('./scripts/ods-componentConfig.json');
const auroComponentConfig = require('style-dictionary').extend('./scripts/auro-componentConfig.json');

// Style Dictionary build function
odsComponentConfig.buildAllPlatforms();
auroComponentConfig.buildAllPlatforms();
