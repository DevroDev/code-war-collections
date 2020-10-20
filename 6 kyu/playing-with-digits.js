function digPow(n, p){
  var num=n.toString().split('');
  var result=0;
  for(var i=0;i<num.length;i++){
    result=result+Math.pow(num[i],p);
    p++;
  }
  var out=result/n;
  if(result%n===0){
    return out;
  }
  else{
    return -1
  }
}