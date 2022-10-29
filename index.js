let p = document.querySelector('p');
let start = document.getElementById('start');
let end = document.getElementById('end');
let stopper=document.getElementById('stop');

let timer;

function timerHandler() {
    let number = Number(p.innerHTML) + 1;
    p.innerHTML = number;
}
let checkerStart = 0;
let checkerEnd = 0;
start.addEventListener('click', () => {
    if (checkerStart < 1) {
        timer = setInterval(timerHandler, 1000);
        checkerStart = 1;
        checkerEnd = 0;
    };
});
stopper.addEventListener('click',function(){
    if (checkerEnd < 1) {
        clearInterval(timer);
        checkerEnd = 1;
        checkerStart = 0;
    };
})
end.addEventListener('click', () => {
    p.innerHTML=0;
    
});