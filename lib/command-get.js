'use strict';

const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');
const fs = require('fs');

const parseFile = fileContent => {
    var myString = "something format_abc something format_def something format_ghi";
    var myRegexp = /class="(.*?)(?:"|$)/g;
    var match = myRegexp.exec(fileContent);
    while (match != null) {
        console.log(match[1])
        match = myRegexp.exec(fileContent);
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
