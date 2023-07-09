"use strict";

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

let clock = setInterval(
    function time(){
        let dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();

        
        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;
        }
         if(sec < 10){
            sec = "0" + sec;
        }
      
        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;

    },1000);