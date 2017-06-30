'use strict';

const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');
const fs = require('fs');

const parseFile = fileContent => {
    var classMatcher = /class="(.*?)(?:"|$)/g;
    var match = classMatcher.exec(fileContent);
    while (match != null) {
        let classes = match[1];

        console.log(classes);

        match = classMatcher.exec(fileContent);
    }
}

module.exports = (directoryPath, fileExtension) => {
    const unFilteredFiles = recursiveReadSync(directoryPath);
    const files = unFilteredFiles.filter(file => path.extname(file) === fileExtension);

    files.forEach(file => {
        const fileContent = fs.readFileSync(file, "utf8");
        parseFile(fileContent);
    });
};
