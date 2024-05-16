//! toggle dark mode 

let btndark = document.querySelector('.sun');
let mode = document.querySelector('.mode')
let isdark = false;

btndark.addEventListener('click', ()=>{
    if(!isdark){
        btndark.style.transform = 'translateX(200%)'
        btndark.innerHTML = '<i class="fa-solid fa-moon"></i>'
    btndark.style.background = 'black'
        isdark = true;
        mode.innerHTML = 'Dark Mode'
        mode.style.transform = 'translateX(-60%)'
    } else {
        btndark.style.transform = 'translateX(0)'
        btndark.innerHTML = '<i class="fa-solid fa-sun"></i>'
        btndark.style.background = '#33D4FF'
        isdark = false;
        mode.innerHTML = 'Clear Mode'
        mode.style.transform = 'translateX(5%)'
    }
})