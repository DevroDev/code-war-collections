function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  for(var i=0;i<arr.length;i++){
    for(var j=1;i<arr.length;i++){
      if(arr[i]!==arr[j]){
        return arr[i]
      }
    }
  }
}