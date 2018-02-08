console.log(document.body);

//search it by #
var title=document.querySelector('#title');
title['innerText']='The Current time is' + new Date();
console.log("title=",title);
//console.log("title=",title.getAttribute());

var item=["ONE","TWO","THREE"];

for(var i=0;i<item.length;i++){
   var litem= document.querySelector('#item'+(i+5));
   litem.innerText=item[i]
   //litem['innerText']=item[i];
   console.log(litem);
}


var newH1=document.createElement('h1');
newH1.innerText="Hey I am the new kids"; 

document.body.appendChild(newH1);


for(var a=0;a<item.length;a++){
    var lol=document.createElement('li');
    lol.innerText=item[a];
    document.querySelector('#mylist').appendChild(lol);
}