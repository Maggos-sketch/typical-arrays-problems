exports.min = function min(array) {
    let res;
    try {
        if (array.length == 0) {
            res = 0;
        } else {
            res = array[0];
            for (let i = 0; i < array.length; i++) {
                if (res > array[i]) {
                    res = array[i];
                }
            }
        }
    } catch (e) {
        res = 0;
    }
    return res;
};

exports.max = function max(array) {
    let res;
    try {
        if (array.length == 0) {
            res = 0;
        } else {
            res = array[0];
            for (let i = 0; i < array.length; i++) {
                if (res < array[i]) {
                    res = array[i];
                }
            }
        }
    } catch (e) {
        res = 0;
    }
    return res;
};

exports.avg = function avg(array) {
    let res;
    try {
        if (array.length == 0) {
            res = 0;
        } else {
            res = 0;
            for (let i = 0; i < array.length; i++) {
                res += array[i];
            }
            res = res / array.length;
        }
    } catch (e) {
        res = 0;
    }
    return res;
};
