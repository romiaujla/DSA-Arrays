function mergeArrays(arr1=[], arr2=[], mergedArr=[]){
  if(!arr1[0] && !arr2[0]){
    return mergedArr;
  }

  if(!arr1[0]){
    for(let i = 0; i < arr2.length; i++)
      mergedArr.push(arr2[i]);

    return mergedArr;
  }

  if(!arr2[0]){
    for(let i = 0; i < arr1.length; i++)
      mergedArr.push(arr1[i]);
  
    return mergedArr;
  }


  if(arr1[0] < arr2[0]){
    mergedArr.push(arr1.shift());
  }else{
    mergedArr.push(arr2.shift());
  }
  
  mergeArrays(arr1, arr2, mergedArr);
  return mergedArr;
}

module.exports = {
  mergeArrays,
}
