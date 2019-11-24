/*
  Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.
  Input:[1, 3, 9, 4]
  Output:[108, 36, 12, 27]
*/

function products(arr){
  let newArr = [];
  let prod = 1;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(j !== i)
        prod *= arr[j]
    }
    newArr.push(prod);
    prod = 1;
  }
  return newArr;
}

module.exports ={
  products,
}
