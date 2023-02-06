function towelSort(arr){
  let towel=[];
  for(key in arr)
  for(key2 in arr[key]) towel.push(arr[key][key2]);
  return towel;
}

module.exports = function towelSort (matrix) {
  return [];
}
