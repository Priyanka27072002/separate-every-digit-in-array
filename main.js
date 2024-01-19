let a=[789,234,155,63,12]
var sum=0
var count=0
var count2=0
for(i=0;i<a.length;i++){
    var b=String(a[i])
    // console.log(b);
    for(j=0;j<b.length;j++){
        sum=sum+a[j]
    }
    console.log(sum);
    if(sum%2==0){
        count++
    }
    else if(sum%2!=0){
        count2++
    }
    
}
document.write("The total number of even number is "+count+"<br>");
document.write("The total number of odd number is "+count2+"<br>");
if(count>count2){
    document.write("The count of even number is greater");
}
else if(count2>count){
    document.write("The count of odd number is greatrer");
}