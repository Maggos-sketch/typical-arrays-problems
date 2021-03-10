
exports.min = function min (array) {
  let res;
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
  return res;
}

exports.max = function max (array) {
  let res;
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
  return res;
}

exports.avg = function avg (array) {
  let res;
  if (array.length == 0) {
    res = 0;
  } else {
    res = 0;
    for (let i = 0; i < array.length; i++) {
      res += array[i];
    }
    res = res / array.length;
  }
  return res;
}
