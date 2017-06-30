'use strict';

const isEqual = require('../lib/class-equality-checker');

const classStorage = (() => {
    const storage = [];

    const getItem = classes => {
        let item = false;

        storage.forEach(actItem => {
            if (actItem.isEqual(classes)) {
                item = actItem;
            }
        });

        return item;
    }

    const pushClasses = (classes) => {
        let item = getItem(classes);

        if (item) {
            item.counter++;
        } else {
            storage.push({
                counter: 1,
                classes,
                isEqual: isEqual.bind(null, classes)
            });
        }
    };

    const reportCompareFunction = (a, b) => {
        if (a.occurance > b.occurance) {
            return 1;
        } else if (a.occurance < b.occurance) {
            return -1;
        } else {
            return 0;
        }
    };

    const report = () => {
        const reportable = [];
        storage.forEach(item => {
            reportable.push({
                occurance: item.counter,
                classes: item.classes
            });
        });
        return reportable.sort(reportCompareFunction);
    };

    return {
        pushClasses,
        report
    }
})();

module.exports = classStorage;