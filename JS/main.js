let elTitlee = document.querySelector('.titleee')
let elRedTitle = document.querySelector('.red__title')
let elFnman = document.querySelector('.man__imgg')
let elFNman = document.querySelector('.man__img')
let elRed = document.querySelector('.red')
let elYellow = document.querySelector('.yellow')
let elGreen = document.querySelector('.green')


setInterval(() => {
    elTitlee.textContent = new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds()
    if (new Date().getSeconds() % 4 == 0) {
        elTitlee.style.color = 'red'
    } else if (new Date().getSeconds() % 4 == 1) {
        elTitlee.style.color = 'blue'

    }
})

// setInterval(()=>{
//     elRedTitle.textContent = new Date().getSeconds()
//     if (new Date().getSeconds ) {

//     }
// })












function remfnman() {
    elFnman.style.display = 'none'
}

function addfnman() {
    elFnman.style.display = 'block'
}



function remfNman() {
    elFNman.style.display = 'none'
}

function addfNman() {
    elFNman.style.display = 'block'
}



function remRed() {
    elRed.style.backgroundColor = '#fff'
    elRed.style. boxShadow = '0px 0px 20px 0px white'

}
function addRed() {
    elRed.style.backgroundColor = 'red'
    elRed.style. boxShadow = '0px 0px 20px 0px red'

}
function remYellow() {
    elYellow.style.backgroundColor = '#fff'
    elYellow.style. boxShadow = '0px 0px 20px 0px white'

}
function addYellow() {
    elYellow.style.backgroundColor = 'yellow'
    elYellow.style. boxShadow = '0px 0px 20px 0px yellow'

}
function remGreen() {
    elGreen.style.backgroundColor = '#fff'
    elGreen.style. boxShadow = '0px 0px 20px 0px white'

}
function addGreen() {
    elGreen.style.backgroundColor = 'green'
    elGreen.style. boxShadow = '0px 0px 20px 0px green'

}

let count = 0
setInterval(() => {
    count = count + 1
    if (count >= 1 && count <= 2) {
        addRed()
        addfNman()

    } else {
        remRed()
        remfNman()
    }
    if (count == 3 || count == 6) {
        addYellow()
    } else {
        remYellow()
    }
    if (count >= 4 && count <= 5) {
        addGreen()
        addfnman()
      
    } else {
        remGreen()
        remfnman()
    }
    if (count >= 6) {
        count = 0
    }
}, 1000);



















function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
    }

    var hourAngle = (hours / 12) * 360; // soatni o'lchash
    var minuteAngle = (minutes / 60) * 360; // minutni o'lchash
    var secondAngle = (seconds / 60) * 360; // sekuntni o'lchash


    var hourHand = document.querySelector('.hour');
    var minuteHand = document.querySelector('.minute');
    var secondHand = document.querySelector('.second');

    hourHand.style.transform = 'rotate(' + hourAngle + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteAngle + 'deg)';
    secondHand.style.transform = 'rotate(' + secondAngle + 'deg)';
}

// Avtomatik yangilanish
setInterval(updateClock, 1000);

// Saqlash uchun bir marta ishlatish
updateClock();