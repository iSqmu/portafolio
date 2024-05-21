//! toggle dark mode

let btndark = document.querySelector('.sun');
let mode = document.querySelector('.mode');
let isdark;

btndark.addEventListener('click', () => {
	if (isdark === false) {
		btndark.style.transform = 'translateX(200%)';
		btndark.innerHTML = '<i class="fa-solid fa-moon"></i>';
		btndark.style.background = 'black';
		isdark = true;
		mode.innerHTML = 'Dark Mode';
		mode.style.transform = 'translateX(-60%)';

		document.querySelector('.go-back a').style.color = '#eee';
	} else if (isdark === 'true') {
		btndark.style.transform = 'translateX(0)';
		btndark.innerHTML = '<i class="fa-solid fa-sun"></i>';
		btndark.style.background = '#33D4FF';
		isdark = false;
		mode.innerHTML = 'Clear Mode';
		mode.style.transform = 'translateX(5%)';
		document.querySelector('.go-back a').style.color = '#eee';
	}
	document.querySelector('body').classList.toggle('dark-mode');
	localStorage.setItem('dark-mode', isdark);
});

if (localStorage.getItem('dark-mode') === 'true') {
	document.querySelector('body').classList.add('dark-mode');
	btndark.style.transform = 'translateX(200%)';
	btndark.innerHTML = '<i class="fa-solid fa-moon"></i>';
	btndark.style.background = 'black';
	isdark = true;
	mode.innerHTML = 'Dark Mode';
	mode.style.transform = 'translateX(-60%)';
}

if (!localStorage.getItem('dark-mode')) {
	isdark = false;
} else {
	isdark = localStorage.getItem('dark-mode');
}
