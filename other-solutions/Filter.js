function filterArray(arr){
  let filteredArray = [];
  for(let i = 0;i < arr.length; i++){
    if(arr[i] > 5){
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

module.exports = {
  filterArray,
}
