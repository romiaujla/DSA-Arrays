/*
  Input: amazon, azonma
  Output: False
------------------------
  Input: amazon, azonam
  Output: true
*/

function isRotatedString(str, rotatedString){

  if(str.length !== rotatedString.length)
    return false;

  if(str === rotatedString){
    return true;
  }

  let newString = '';
  for(let i = 0; i < str.length; i++){
    rotatedString = rotatedString.slice(1) + rotatedString.slice(0,1);
    if(rotatedString === str){
      return true;
    }
  }

  return false;
}

module.exports = {
  isRotatedString,
}
