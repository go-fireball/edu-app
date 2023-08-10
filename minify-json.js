const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'public', 'data');

function minifyJSON(filePath) {
  fs.readFile(filePath, 'utf-8', (readErr, json) => {
    if (readErr) {
      console.error(`An error occurred while reading ${filePath}:`, readErr);
      return;
    }

    try {
      const parsed = JSON.parse(json);
      const minified = JSON.stringify(parsed);
      fs.writeFileSync(filePath, minified, 'utf-8');
      console.log(`Minified ${filePath}`);
    } catch (parseErr) {
      console.error(`An error occurred while parsing ${filePath}:`, parseErr);
    }
  });
}

function processDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('An error occurred while reading the directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        processDirectory(filePath);
      } else if (file.name.endsWith('.json')) {
        minifyJSON(filePath);
      }
    });
  });
}

processDirectory(dataPath);
