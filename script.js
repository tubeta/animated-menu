const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

// control animation function
const navAnimation = (direction1, direction2) => {
	navItems.forEach((nav, index) => {
		nav.classList.replace(
			`slide-${direction1}-${index + 1}`,
			`slide-${direction2}-${index + 1}`
		);
		console.log(
			`slide-${direction1}-${index + 1}`,
			`slide-${direction2}-${index + 1}`
		);
	});
};
// toggle nav handler

const toggleNav = () => {
	//Toggle Menu bars open/close
	menuBars.classList.toggle('change');

	// toggle overlay
	overlay.classList.toggle(
		/*this is going to be our boolean*/
		'overlay-active'
	);
	if (overlay.classList.contains('overlay-active')) {
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		// Animate in - nav items
		navAnimation('out', 'in');
	} else {
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navAnimation('in', 'out');
	}
};
// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
	navItem.addEventListener('click', toggleNav);
});
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
