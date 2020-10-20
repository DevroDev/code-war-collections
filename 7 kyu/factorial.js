function factorial(n)
{
  if(n<0||n>12){
    throw new RangeError("Number must be in the Range of 0 and 12")
  }
  else if(n===1||n===0){
    return 1
  }
  else{
    return n*factorial(n-1)
  }
}