"use strict"
//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//Меню бургер
const iconMenu = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//Звездный рейтинг
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}
//Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	//"Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}
	//Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();
	}

	//Инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	//Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const setRatingActiveWidth = index / 0.05;
		ratingActive.style.width = `${setRatingActiveWidth}%`;
	}
}

//Слайдер
$(document).ready(function () {
	$('.about__slider').slick({
		slidesToShow: 2,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

