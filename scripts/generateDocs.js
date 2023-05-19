const path = require('path');
const markdownMagic = require('markdown-magic');
const fs = require('fs');

const config = {
  matchWord: 'AURO-GENERATED-CONTENT'
};

/**
 * Extract NPM, NAMESPACE and NAME from package.json.
 */

/**
 *
 */
function nameExtraction() {
  const packageJson = fs.readFileSync('package.json', 'utf8', (err, data) => {
    if (err) {
      console.log('ERROR: Unable to read package.json file', err);
    }
  });

  pName = JSON.parse(packageJson).name;

  const npmStart = pName.indexOf('@');
  const namespaceStart = pName.indexOf('/');
  const nameStart = pName.indexOf('-');

  const result = {
    'npm': pName.substring(npmStart, namespaceStart),
    'namespace': pName.substring(namespaceStart + 1, nameStart),
    'namespaceCap': pName.substring(namespaceStart + 1)[0].toUpperCase() + pName.substring(namespaceStart + 2, nameStart),
    'name': pName.substring(nameStart + 1),
    'nameCap': pName.substring(nameStart + 1)[0].toUpperCase() + pName.substring(nameStart + 2)
  };

  return result;
}

/**
 * Replace all instances of [npm], [name], [Name], [namespace] and [Namespace] accordingly.
 */

/**
 *
 */
function formatTemplateFileContents(content, destination) {
  const nameExtractionData = nameExtraction();
  let result = content;

  /**
   * Replace placeholder strings.
   */
  result = result.replace(/\[npm]/g, nameExtractionData.npm);
  result = result.replace(/\[name]/g, nameExtractionData.name);
  result = result.replace(/\[Name]/g, nameExtractionData.nameCap);
  result = result.replace(/\[namespace]/g, nameExtractionData.namespace);
  result = result.replace(/\[Namespace]/g, nameExtractionData.namespaceCap);

  // /**
  //  * Strip all markdown-magic comments
  //  */
  // result = result.replace(/<!-- AURO(.*?)-GENERATED-CONTENT(.*?)-->/g, '');
  // result = result.replace(/<!-- The below (.*?) is automatically added from(.*?)-->/g, '');

  /**
   * Cleanup line breaks.
   */
  result = result.replace(/(\r\n|\r|\n)[\s]+(\r\n|\r|\n)/g, '\r\n\r\n'); // Replace lines containing only whitespace with a carriage return.
  result = result.replace(/>(\r\n|\r|\n){2,}/g, '>\r\n'); // Remove empty lines directly after a closing html tag.
  result = result.replace(/>(\r\n|\r|\n)```/g, '>\r\n\r\n```'); // Ensure an empty line before code samples.
  result = result.replace(/>(\r\n|\r|\n){2,}```(\r\n|\r|\n)/g, '>\r\n```\r\n'); // Ensure no empty lines before close of code sample.
  result = result.replace(/([^(\r\n|\r|\n)])(\r\n|\r|\n)+#/g, "$1\r\n\r\n#"); // Ensure empty line before header sections.

  /**
   * Write the result to the destination file.
   */
  fs.writeFileSync(destination, result, { encoding: 'utf8'});
}

const callback = function(updatedContent, outputConfig) {
  console.log('Finished compiling documentation.');
};

const markdownPathReadme = path.join(__dirname, './../README.md');
markdownMagic(markdownPathReadme, config, callback);
if (fs.existsSync('./README.md')) {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    formatTemplateFileContents(data, './README.md');
  });
} else {
  console.log('ERROR: ./README.md file is missing');
}

const markdownPathDemo = path.join(__dirname, './../demo/demo.md');
markdownMagic(markdownPathDemo, config, callback);
