module.exports = function towelSort(matrix) {
    let towel=[];
      for(key in matrix){
        if(!(key%2)) for(key2 in matrix[key]) towel.push(matrix[key][key2]);
        else for(let i=matrix[key].length-1; i>=0; i--) towel.push(matrix[key][i]);
      }
    return towel;
}
