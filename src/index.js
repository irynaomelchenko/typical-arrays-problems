
exports.min = function min (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }

  let minVal=1;

  for (let i=0; i<array.length; i++) {
    if (array[i]<minVal) {
      minVal=array[i]
    }
  }
  return minVal;
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }

  let maxVal=1;

  for (let i=0; i<array.length; i++) {
    if (array[i]>maxVal) {
      maxVal=array[i]
    }
  }
  return maxVal;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
  let sum=0;

  for (let i=0; i<array.length; i++) {
    sum+=array[i]
  }

  let avgVal=sum/array.length
  return avgVal;
}
