'use strict';

const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');

module.exports = (directoryPath, fileExtension) => {
    const files = recursiveReadSync(directoryPath);
    console.log(files.filter(file => path.extname(file) === fileExtension));
};
