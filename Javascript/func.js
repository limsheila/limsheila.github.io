
var person={
    name:"testing",
    tel:"hello"
}
var greet=function(rec){
    console.log("hello",rec['name']);
    console.log("hello",rec['tel']);
    return 0;
};

var mkGreet=function(rec){
    return "hello"+ rec['name'] + "telphone" + rec[tel];
}

greet(person);