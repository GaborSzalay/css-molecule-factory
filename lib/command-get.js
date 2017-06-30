'use strict';

const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');
const fs = require('fs');
const parseClass =  require('../lib/class-parser');
const classStorage = require('../lib/class-storage');

const parseFile = fileContent => {
    let classMatcher = /class="(.*?)(?:"|$)/g;
    let match = classMatcher.exec(fileContent);
    while (match != null) {
        let classes = match[1];

        parseClass(classes);
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

    console.log(classStorage.report());
};
