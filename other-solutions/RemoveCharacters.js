function removeCharacters(str, charToRemove){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(!charToRemove.includes(str[i]))
      newStr += str[i];
  }
  return newStr;
}

module.exports = {
  removeCharacters,
}
