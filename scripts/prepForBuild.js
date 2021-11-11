const fs = require('fs');
const fse = require('fs-extra');
const srcDir = `./demo`;
const destDir = `./build`;
const bundle = 'auro-hyperlink__bundled.js';
const indexFile = './build/index.html';

// Create ./build dir if needed
if (!fs.existsSync('build')){
  fs.mkdirSync('build');
}

// Sync all contents from ./demo to ./build
try {
  fse.copySync(srcDir, destDir)
} catch (err) {
  console.error(err)
}

// Edit string in new index.html file
fs.readFile(indexFile, 'utf8', function (err,data) {
  const demoText = data.replace( `fetch('/demo/demo.md')`, `fetch('demo.md')` );

  if (err) {
    return console.log(err);
  }

  fs.writeFile(indexFile, demoText, 'utf8', function (err) {
    if (err) return console.log(err);
  });

});

// Function to copy over bundled version and update HTML
// Set in timeout as to avoid race condition
setTimeout(() => {
  fs.copyFile(`./dist/${bundle}`, `./build/${bundle}`, (err) => {
    if (err) throw err;
  });

  fs.readFile(indexFile, 'utf8', function (err,data) {
    const bundledElement = data.replace( `../src/auro-hyperlink.js`, `auro-hyperlink__bundled.js` );

    if (err) {
      return console.log(err);
    }

    fs.writeFile(indexFile, bundledElement, 'utf8', function (err) {
      if (err) return console.log(err);
    });

  });
}, 10);

console.log('\nBuild directory is complete\n')
