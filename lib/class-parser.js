'use strict';

const parseClass = classes => {
    let classMatcher = /(?:^|\s?)(.+?)(?:\s|$)/g;
    let match = classMatcher.exec(classes);
    while (match != null) {
        let _class = match[1];

        console.log(_class);
        match = classMatcher.exec(classes);
    }

}

module.exports = parseClass;