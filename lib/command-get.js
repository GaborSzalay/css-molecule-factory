'use strict';

const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');
const fs = require('fs');

module.exports = (directoryPath, fileExtension) => {
    const unFilteredFiles = recursiveReadSync(directoryPath);
    const files = unFilteredFiles.filter(file => path.extname(file) === fileExtension);

    files.forEach(file => {
        const fileContent = fs.readFileSync(file, "utf8");
        console.log(fileContent)
    });
};
