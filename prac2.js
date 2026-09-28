function evenOddTransform(arr, n) {
  count=0;
  var arr2=[]
	while(count<n){
  arr=arr.map(num => num%2==0?num-2:num+2)
  count++
  }
  return arr
}