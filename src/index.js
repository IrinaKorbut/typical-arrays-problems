let result = 0;
exports.min = function min(array) {
    if (!array || !array.length) return 0;
    result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (result > array[i]) result = array[i];
    }
    return result;
};

exports.max = function max(array) {
    if (!array || !array.length) return 0;

    result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (result < array[i]) result = array[i];
    }
    return result;
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    let sumArray = 0;
    array.forEach((element) => {
        sumArray += element;
    });
    result = sumArray / array.length;
    return result;
};
