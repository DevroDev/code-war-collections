function arrayDiff(a, b) {
  var arr=[];
  while(a.length>0){
    for(let i=0;i<a.length;i++){
    if(b.indexOf(a[i])===-1){
      arr.push(a[i])
    }
  }
    for(let i=0;i<b.length;i++){
      if(a.indexOf(b[i])===-1){
        arr.push(b[i])
      }
    }    
    return arr
  }
  return a
}