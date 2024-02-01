var isStop = true;
var ms = 0;
var s = 0;
var min = 0;
var hr = 0;

function start(){
    if(isStop == true){
        isStop = false;
        timer();
    }
}

function timer(){
    if(isStop == false)
    {
        ms++;

        setTimeout("timer()",10);
    }
}

function pause(){
    isStop = true;
}

function restart(){

}

function reset(){

}

function lap(){

}

function resetLap(){

}