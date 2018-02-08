console.log("day 2 demo loaded");
var item=["fred","some","wilam","queen","pebbles","tiger","testing","barbar"];
var litem=item.length;
var x=0;
///fred,wilma,pebbles
while(x<litem){
    if(item[x]!="fred"&& item[x]!="wilam"&& item[x]!="pebbles")
    {
    console.log(item[x]);
    };
    x++;
};

var car={
    make:'honda',
    'first name':'hello',
    drive:'4W',
    price:100000,
    validDrivers:['fred','wilma']
}

console.log("car make =", car['make']);
console.log("car make=", car['first name']);

//print the email addresses of the flintstones

var fred={
    name:'fred',
    email:'fred@gmail.com'
}

var wilma={
    name:'wilma',
    email:'wilma@gmail.com'
}

var flintstones=[fred,wilma];
console.log(flintstones[0]['email']);
console.log(flintstones[1]['email']);
var a=0;
while(a<flintstones.length){
    console.log(">>>"+ flintstones[a]['email']);
    a++;
}

