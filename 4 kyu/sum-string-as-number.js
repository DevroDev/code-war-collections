function sumStrings(a,b) { 
  let num1 = a.replace(/^0*/g, '').split('').reverse()
  let num2 = b.replace(/^0*/g, '').split('').reverse()
  let el = 0 
  let count = 0 
  let sum = ""
  
  while(count < num1.length || count < num2.length){
    let tempSum = (parseInt(num1[count]) || 0) + (parseInt(num2[count]) || 0) + el
    if(tempSum > 9){
      sum = `${tempSum - 10}` + sum 
      el = 1 
    } else {
      sum = `${tempSum}` + sum
      el = 0 
    }
    count++
  }
  return el ? `1${sum}` : sum
}