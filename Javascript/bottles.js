//Draw 99 bottles of beer (all in 1 line), text is tge next line
    //99 bottles of beer on the wall, 99 bottles of beer.
   // Take one down and pass it around, 98 bottles of beer on the wall.

   //1 bottle of beer on the wall, 1 bottle of beer.
   //Take one down and pass it around, no more bottles of beer on the wall.

   //No more bottles of beer on the wall, no more bottles of beer. 
   //Go to the store and buy some more, 99 bottles of beer on the wall.
var nbottles=99;
var createText=function(value){

    var inputText=document.createElement('div');
    if(value!=1 && value != 0)
    {
        inputText.innerText= value + " bottles of beer on the wall, " + value + " bottles of beer."
        + "\nTake one down and pass it around, " + (value-1) + " bottles of beer on the wall.\n"
    }
    else if(value==1)
    {
        inputText.innerText= value + " bottle of beer on the wall, " + value + " bottle of beer."
        + "\nTake one down and pass it around, " + (value-1) + " bottle of beer on the wall.\n"

    }
    else{
        value=nbottles;
        inputText.innerText= "\nNo more bottles of beer on the wall, no more bottles of beer."+
        "\nGo to the store and buy some more,"+ value+ " bottles of beer on the wall.\n"
    }
    inputText.style="font-weight:bold;font-size:100%;max-width:100%; height:auto";
    return inputText;
};

var createImage=function(value){
    if(value!=0){
        var createDiv=document.createElement('div');
        createDiv.id="image"+value;
        createDiv.style="display:flex;height:100px"
        document.querySelector('#song').appendChild(createDiv);
    }
        
    for(var y=value;y>0;y--){
        var image=document.createElement('img');
        image.src="images/bottle.png";
        image.style="max-width:calc("+((100/value))+"%); height:100%;";
        document.querySelector('#image'+value).appendChild(image);
    }
    document.querySelector('#song').appendChild(createText(x));
}

for(var x=nbottles;0<=x;x--)
{
    createImage(x);
}