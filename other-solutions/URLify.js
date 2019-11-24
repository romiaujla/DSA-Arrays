function URLify(url){
  if(!url)
    return '';
  let formattedURL = '';
  for(let i = 0; i < url.length; i++){
    if(url[i] !== ' '){
      formattedURL += url[i]
    }else{
      formattedURL += '%20'
    }
  }
  return formattedURL;
}

module.exports = {
  URLify
}
