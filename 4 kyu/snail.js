snail = function(array) {
  const arr=[];
  while(array.length){
    arr.push(...array.shift())
    for(var i=0;i<array.length;i++){
      arr.push(array[i].pop())
    }
    arr.push(...(array.pop()||[]).reverse())
    for(var i=array.length-1;i>=0;i--){
      arr.push(array[i].shift())
    }
  }
  return arr
}