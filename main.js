// Loader

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
	spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

(function () {
	function onReady() {
		document.body.classList.remove('no-scroll');
	}

	if (document.readyState === 'complete') {
		onReady();
	} else {
		document.addEventListener('DOMContentLoaded', onReady);
	}
})();

// Tablet and Phone Navigation

const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function (e) {
	if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
		toggle.classList.remove('active');
		sidebar.classList.remove('active');
	}
}

toggle.onclick = function () {
	toggle.classList.toggle('active');
	sidebar.classList.toggle('active');
}

// Image Swiper 

var swiper1 = new Swiper(".swiper1", {

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,

	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Header Animation

window.addEventListener("scroll", function () {

	var MainHeader = document.querySelector(".header-container");
	MainHeader.classList.toggle("sticky", window.scrollY > 2000)


});

// Swiper for Banner

var swiper2 = new Swiper(".swiper2", {
	// Optional parameters
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	speed: 1000,
});

