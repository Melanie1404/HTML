//var a=10;
//console.log(a);

function samplefunct()
{
var x="hi";
let y=" Melanie";
console.log(x + y);
console.log(y);
}
//samplefunct()

function yorn(){
    var b=100;
    if(b==100){
        console.log(+ b + "correct ans");
    }
    else{
        console.log(+ b +"wrong ans");
    }
}
//yorn()
function code(){
    var a=[1,30,"high","low"];
console.log(a[0]);
console.log("before",a[0]);
a[0]=100;
console.log("after",a[0]);
console.log(a);
a[4]=900;
console.log(a);
a.push(4949);
console.log(a);
var ar=[[1,30,"high","low"],["s","array"]];
console.log(ar[0]);
}
code()

function concat(v1,v2,v3){
    var val;
    val=v1+v2+v3;
    return val;
}
console.log(concat("hi"," mel","7"));