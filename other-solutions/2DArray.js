/*

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];

*/

function twoDArray(arr){

  let zeroRows = [];
  let zeroCols = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 0){
        if(!zeroRows.includes(i))
          zeroRows.push(i);
        if(!zeroCols.includes(j))
          zeroCols.push(j);
      }
    }
  }
  let modifiedArr = [];
  for(let i = 0; i < arr.length; i++){
    modifiedArr.push([]);
    for(let j = 0; j < arr.length; j++){
      if(zeroRows.includes(i) || zeroCols.includes(j)){
        modifiedArr[i].push(0);
      }else{
        modifiedArr[i].push(1);
      }
    }
  }
  return modifiedArr;
}

module.exports = {
  twoDArray,
}
