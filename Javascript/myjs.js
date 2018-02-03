//declare a variable
var name,age,hungry;

//Js do not care they just use string char as string, number as numbers
name="fred";//type var gender='m'------define as character "string"-------define as string
age=50;//number int -+valuese ,float-number with decimal-+ , unsigned number all positive
hungry=true;//boolean-not,and,or
tired=false;
var timeToLeave=hungry || tired;//boolean

if(timeToLeave==true){
    console.log("yes");

}
else{
    console.log(">>>>no");

}

//anything + string =string
console.log("hungry && tired:" + (hungry && tired));
console.log("hungry || tired:" + timeToLeave);
console.log("!hungry && !tired:" + (!hungry && !tired));



//console.log('name='+ name); //str+str concatenation
//alert('hello'+name);
