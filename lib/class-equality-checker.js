'use strict';

const isEqual = (innerClasses, outsideClasses) => {
    const outsideLength = outsideClasses.length;
    let matchCounter = 0;
    if (innerClasses.length !== outsideLength) {
        return false;
    }

    outsideClasses.forEach(outsideClass => {
        innerClasses.forEach(innerClass => {
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

module.exports = isEqual;