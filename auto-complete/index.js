const text = "I don't know what to do so i am bascially bored and writing this code";

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0 , index);

    index++;

    if (index>text.length-1){
        index = 0;
    }
}

setInterval(writeText , 100 );
