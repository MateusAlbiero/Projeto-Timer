"use strict"

var hr = 0;
var min = 0;
var seg = 0;
var tempo = 1000;
var cronometro;

function start() {
    cronometro = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cronometro);
}

function stop() {
    clearInterval(cronometro);      
    hr = 0;
    min = 0;
    seg = 0;

    document.getElementById('timer').innerText = '00:00:00';
}

function timer() {
    seg++; 

    if (seg == 59) { 
        seg = 0; 
        min++; 

        if (min == 59) { 
            min = 0;
            hr++;
        }
    }

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    
    document.getElementById('timer').innerText = format;
    return format;
}