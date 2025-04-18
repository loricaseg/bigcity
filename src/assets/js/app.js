import * as mainFunc from "./modules/func.js";

mainFunc.isWebp();

$('.menu__main__list > li > a').click(function (e) {
	e.preventDefault();
	// Удаляем класс active у всех li, кроме текущего
	$('.menu__main__list > li').not($(this).parent('li')).removeClass('active');
	// Переключаем класс active у родительского li текущей ссылки
	$(this).parent('li').toggleClass('active');
});

if ($(window).width() < 980) {
	const swiper = new Swiper('.swiper-container-header', {
		// Default parameters
		slidesPerView: 'auto',
		spaceBetween: 20,
		pagination: {
			el: '.header .header__pagination',
			type: 'bullets',
		},

	})
} else {
	const swiper = new Swiper('.swiper-container-header', {
		// Default parameters
		slidesPerView: 2,
		spaceBetween: 20,
		pagination: {
			el: '.header__pagination',
			type: 'bullets',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			740: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	})
}
const swiper2 = new Swiper('.swiper-container-news', {
	// Default parameters
	slidesPerView: 4,
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10
		},
		740: {
			slidesPerView: 2.1,
			spaceBetween: 20
		},
		980: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}
})

const swiper3 = new Swiper('.swiper-container-reviews', {
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.reviews-next',
		prevEl: '.reviews-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10
		},
		740: {
			slidesPerView: 2.1,
			spaceBetween: 20
		},
		980: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
})

const swiper4 = new Swiper('.swiper-container-similar', {
	// Default parameters
	slidesPerView: 6,
	spaceBetween: 20,
	pagination: {
		el: '.band__similar .header__pagination',
		type: 'bullets',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10
		},
		740: {
			slidesPerView: 2.1,
			spaceBetween: 10
		}
		,
		980: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1280: {
			slidesPerView: 6,
			spaceBetween: 20
		}
	}
})

const swiper5 = new Swiper('.band__left', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: '.band__left .header__pagination',
		type: 'bullets',
	},
})

$('.reviews__more').click(function (e) {
	e.preventDefault();

	// Находим родительский слайд и все параграфы в нём
	const slide = $(this).closest('.reviews-item');
	const hiddenParagraphs = slide.find('p:not(:first-of-type)');

	// Переключаем видимость скрытых параграфов
	hiddenParagraphs.toggle();

	// Меняем текст кнопки
	const span = $(this).find('span');
	if (hiddenParagraphs.is(':visible')) {
		span.text('Скрыть');
	} else {
		span.text('Развернуть');
	}

	// Добавляем/удаляем класс active
	$(this).toggleClass('active');
});

$('.faq__show').click(function (e) {
	$(this).parents('.faq__item').toggleClass('active');
	$(this).siblings('.faq__hide').slideToggle(100)
});

// Открытие/закрытие мобильного меню
$('.mob-trigger').click(function (e) {
	e.preventDefault();

	const $menu = $('.menu');
	const $mobileMenu = $('.mobile-menu');
	const $search = $('.menu .search');
	const $body = $('body');

	// Если поиск активен - игнорируем overflow-body
	if (!$search.hasClass('active')) {
		$body.toggleClass('overflow-body');
	}

	// Переключаем меню
	$mobileMenu.toggle(200);
	$menu.toggleClass('active');

	// Закрываем поиск, если он был открыт
	$search.removeClass('active');
});

// Открытие/закрытие поиска
$('.mob-search').click(function (e) {
	e.preventDefault();

	const $search = $('.menu .search');
	const $menu = $('.menu');
	const $mobileMenu = $('.mobile-menu');
	const $body = $('body');

	// Если меню активно - игнорируем overflow-body
	if (!$menu.hasClass('active')) {
		$body.toggleClass('overflow-body');
	}

	// Переключаем поиск
	$search.toggleClass('active');

	// Закрываем меню, если оно было открыто
	$mobileMenu.hide(200);
	$menu.removeClass('active');
});

Fancybox.bind('[data-fancybox="video-gallery"]', {
	// Your custom options for a specific gallery
});

Fancybox.bind('[data-fancybox]', {
	// Your custom options for a specific gallery
});


$(document).ready(function () {
	const element = document.getElementById('tel-mask');
	const maskOptions = {
		mask: '+{7}(000)000-00-00'
	};
	const mask = IMask(element, maskOptions);

	const element2 = document.getElementById('date-mask');
	IMask(element2, {
		mask: Date,  // enable date mask

		// other options are optional
		pattern: 'Y-`m-`d',  // Pattern mask with defined blocks, default is 'd{.}`m{.}`Y'
		// you can provide your own blocks definitions, default blocks for date mask are:
		blocks: {
			d: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 31,
				maxLength: 2,
			},
			m: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 12,
				maxLength: 2,
			},
			Y: {
				mask: IMask.MaskedRange,
				from: 2025,
				to: 2030,
			}
		},

		// define date -> str convertion
		format: date => {
			let day = date.getDate();
			let month = date.getMonth() + 1;
			const year = date.getFullYear();

			if (day < 10) day = "0" + day;
			if (month < 10) month = "0" + month;

			return [year, month, day].join('-');
		},

		// define str -> date convertion
		parse: str => {
			const yearMonthDay = str.split('-');
			return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
		},

		// optional interval options
		min: new Date(2025, 0, 1),  // defaults to `1900-01-01`
		max: new Date(2030, 0, 1),  // defaults to `9999-01-01`

		autofix: true,  // defaults to `false`

		// pattern options can be set as well
		lazy: false,

		// and other common options
		overwrite: true  // defaults to `false`
	})
});

$('.form-popup__check input').on('input', function () {
	if ($(this).is(':checked')) {
		$(this).parents('.form-popup__check').addClass('active');
		$('.form-button').attr('disabled', false)
	} else {
		$(this).parents('.form-popup__check').removeClass('active');
		$('.form-button').attr('disabled', true)
	}

})