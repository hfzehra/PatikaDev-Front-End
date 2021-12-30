//isim ekleme 

let isim = document.querySelector("#myName")
let ad  = prompt("isiminizi giriniz")
isim.innerHTML = `${ad}`


window.onload = showTime()

function showTime(){
    let saat = document.querySelector("#myClock")
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let date = new Date()
    let clock = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    let day = date.getDay().toString()

    clock=checkTime(clock);
    minutes=checkTime(minutes);
    second=checkTime(second);
    saat.innerHTML = `${clock} : ${minutes } : ${second} -> ${days[day]}`

    t=setTimeout('showTime()',1000);
}



function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}


