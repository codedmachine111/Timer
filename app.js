var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stopp = document.getElementById('stop');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var seconds = document.getElementById('seconds');

var output = document.getElementById('output');

var starttimer =null;

function timer(){
    
if(hour.value == 0 && minute.value == 0 && seconds.value == 0){
    hour.value = 0;
    minute.value = 0;
    seconds.value = 0;
        document.querySelector('#output').innerHTML = "Timeout!";

    
stoptimer();

}else if(seconds.value != 0){
    seconds.value--;
}else if(minute.value != 0 && seconds.value == 0){
seconds.value= 59;
minute.value--;
}else if(hour.value!= 0 &&  minute.value == 0){
    minute.value = 59;
    hour.value--;
}

}
function stoptimer(){
clearInterval(starttimer);

}

function stopit(){
stoptimer();
}


start.addEventListener('click', function(){

function startinterval(){
    starttimer = setInterval(function(){
        timer();
    }, 1000);
}
startinterval();
})

reset.addEventListener('click', function(){
    
    hour.value = 0;
    minute.value = 0;
    seconds.value = 0;
    stoptimer();
    document.querySelector('#output').innerHTML = "";
});

stopp.addEventListener('click', function(){
stopit();
})


