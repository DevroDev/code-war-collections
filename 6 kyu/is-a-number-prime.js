function isPrime(num) {
  if(num<0){
    return false
  }
  else if(num<=1) return false;
  else if(num<=3) return true;
  if(num%2===0||num%3===0) return false
  for(var i=5;i*i<=num;i=i+6){
    if(num%i===0||num%(i+2)===0){
      return false
    }
  }
  return true
}