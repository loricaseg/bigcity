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