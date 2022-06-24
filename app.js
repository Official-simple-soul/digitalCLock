const digitalClock = document.querySelector(".hour");
let clockText = document.querySelector('.text')

setInterval(function(){
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM'
    
    if(hr > 12) {
        hr = hr - 12;
        day = 'PM'
        clockText.innerHTML = 'Lets get the party Starting'
    }

    else {
        clockText.innerHTML = ("It's morning, Its not time for party")
    }

    if(hr == 0) {
        hr = 12;
    }

    if(hr < 10) {
        hr = '0' + hr;
    }

    if(min < 10) {
        min = '0' + min;
    }

    if(sec < 10) {
        sec = '0' + sec;
    }
    digitalClock.innerHTML = hr +' : '+ min +' : '+ sec +' : '+  day;
})