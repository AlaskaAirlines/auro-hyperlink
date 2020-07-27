const chalk = require('chalk');

console.log('')
console.log('Build started...');
console.log('')


// Required dependency
const odsComponentConfig = require('style-dictionary').extend('./scripts/ods-componentConfig.json');
const auroComponentConfig = require('style-dictionary').extend('./scripts/auro-componentConfig.json');

// Style Dictionary build function
odsComponentConfig.buildAllPlatforms();
auroComponentConfig.buildAllPlatforms();
