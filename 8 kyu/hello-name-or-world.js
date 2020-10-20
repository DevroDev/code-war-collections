function hello(name) {
  if(name==null||name===""){
    return "Hello, World!"
  }
  else{
  var str;
  str=name.charAt(0).toUpperCase()
  str+=name.substr(1).toLowerCase()
  return `Hello, ${str}!`
}
}