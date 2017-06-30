'use strict';

const classStorage = (() => {
    const storage = [];

    storage.__proto__.getItem = classes => {
        return false;
    }

    const pushClasses = (classes) => {
        let item = storage.getItem(classes);

        if (item) {

        } else {
            storage.push({
                counter: 1,
                classes,
                isEqual: outsideClasses => {
                    const outsideLength = outsideClasses.length;
                    let matchCounter = 0;
                    if (classes.length !== outsideLength) {
                        return false;
                    }

                    outsideClasses.forEach(outsideClass => {
                        classes.forEach(innerClass => {
                            if (outsideClass === innerClass) {
                                matchCounter++;
                            }
                        });
                    });

                    if (matchCounter !== outsideLength) {
                        return false;
                    }

                    return true;
                }
            });
        }
    };

    return {
        pushClasses
    }
})();

module.exports = classStorage;