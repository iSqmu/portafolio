//! toggle dark mode

let btndark = document.querySelector('.sun');
let mode = document.querySelector('.mode');
let toggledark = document.querySelector('#toggle-dark')
let isdark = false;

btndark.addEventListener('click', () => {
	if (isdark === false) {
		btndark.style.transform = 'translateX(200%)';
		btndark.innerHTML = '<i class="fa-solid fa-moon"></i>';
		btndark.style.background = 'black';
		toggledark.style.border = "2px solid #eee"
		isdark = true;
		mode.innerHTML = 'Dark Mode';
		mode.style.transform = 'translateX(-56%)';
		document.querySelector('#goback').style.color = '#eee';
		document.querySelector('.go-back a').style.border = 'solid 2px #eee';
		document.querySelector('h1').style.color = '#c4c4c4';
	} else if (isdark === true) {
		btndark.style.transform = 'translateX(0)';
		btndark.innerHTML = '<i class="fa-solid fa-sun"></i>';
		btndark.style.background = '#33D4FF';
		toggledark.style.border = "2px solid #000"
		isdark = false;
		mode.innerHTML = 'Clear Mode';
		mode.style.transform = 'translateX(0)';
		document.querySelector('#goback').style.color = '#000';
		document.querySelector('.go-back a').style.border = 'solid 2px #000';
		
		document.querySelector('h1').style.color = '#252427';
	}
	document.querySelector('body').classList.toggle('dark-mode');
});