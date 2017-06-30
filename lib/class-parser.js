'use strict';

const allSubsets = require('all-subsets');

const parseClass = unParsedClasses => {
    let classes = [];
    let classMatcher = /(?:^|\s?)(.+?)(?:\s|$)/g;
    let match = classMatcher.exec(unParsedClasses);

    while (match != null) {
        let _class = match[1];

        classes.push(_class);
        match = classMatcher.exec(unParsedClasses);
    }

    console.log(allSubsets(classes));
}

module.exports = parseClass;