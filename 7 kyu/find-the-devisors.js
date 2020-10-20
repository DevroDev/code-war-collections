function divisors(integer) {
  var arr=[];
  for(var i=2;i<integer;i++){
    if(integer%i===0){
      arr.push(i)
    }
  }
  if(arr.length===0){
    return `${integer} is prime`
  }
  else{   
    return arr
  }
}; 