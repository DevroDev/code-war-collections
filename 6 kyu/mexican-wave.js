function wave(str){
  let arr=[];
  for(var i=0;i<str.length;i++){
    if(str[i]!=' ')
      arr.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
  }
  return arr
}