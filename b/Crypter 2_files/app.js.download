"use strict";

// height windows for ios
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`); // header

(function () {
  const header = $('.header'),
        items = header.find('.header__discover, .account'),
        closeAccount = header.find('.account__close, .account__disconnect'),
        overlay = $('.overlay'),
        search = $('.search'),
        input = search.find('.search__input'),
        toggle = search.find('.search__toggle'),
        headSearch = search.find('.search__head'),
        result = search.find('.search__result'),
        clear = search.find('.search__clear');
  items.each(function () {
    const item = $(this),
          head = item.find('.header__head, .account__head'),
          body = item.find('.header__body, .account__body');
    head.on('click', function (e) {
      e.stopPropagation();
      search.removeClass('active visible');
      input.val('');

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }

      if ($('.account').hasClass('active')) {
        overlay.addClass('visible');
        header.addClass('header_open');
        scrollLock.disablePageScroll();
      } else {
        overlay.removeClass('visible');
        header.removeClass('header_open');
        scrollLock.enablePageScroll();
      }
    });
    closeAccount.on('click', function () {
      items.removeClass('active');
      header.removeClass('header_open');
      overlay.removeClass('visible');
      scrollLock.enablePageScroll();
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
      header.removeClass('header_open');
      overlay.removeClass('visible');
      scrollLock.enablePageScroll();
      search.removeClass('active visible');
      input.val('');
    });
  });
  toggle.on('click', function (e) {
    e.stopPropagation();
    search.toggleClass('active');
    input.val('');
    search.removeClass('visible');
    items.removeClass('active');
    header.removeClass('header_open');
    overlay.removeClass('visible');
    scrollLock.enablePageScroll();
  });
  headSearch.on('click', function (e) {
    e.stopPropagation();
  });
  result.on('click', function (e) {
    e.stopPropagation();
  });
  input.on('keyup', function () {
    if (input !== null && input.val() !== "") {
      search.addClass('visible');
    } else {
      search.removeClass('visible');
    }
  });
  clear.on('click', function (e) {
    input.val('');
    search.removeClass('visible');
  });
})(); // accordeon


(function () {
  const item = $('.categories__item'),
        head = item.find('.categories__head'),
        body = item.find('.categories__body');
  head.on('click', function () {
    let thisHead = $(this);
    thisHead.parents('.categories__item').toggleClass('active');
  });
})(); // sliders


(function () {
  // swiper tokens
  const swiperTokens = new Swiper('.swiper-tokens', {
    direction: 'vertical',
    loop: false,
    speed: 700,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        direction: 'horizontal'
      },
      1024: {
        direction: 'vertical'
      }
    }
  }); // swiper collections

  const swiperCollections = new Swiper('.swiper-collections', {
    slidesPerView: "auto",
    speed: 700,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // swiper discover

  const swiperDiscover = new Swiper('.swiper-discover', {
    speed: 700,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // swiper stories

  const swiperStories = new Swiper('.swiper-stories', {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    speed: 700,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    }
  }); // swiper stories inner

  const swiperStoriesInner = new Swiper('.swiper-stories-inner', {
    loop: true,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }); // swiper post

  const swiperPost = new Swiper('.swiper-post', {
    slidesPerView: 2,
    loop: true,
    speed: 700,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }
  });
})(); // timer


(function () {
  const timers = $('.js-timer');

  if (timers.length) {
    timers.each(function () {
      const timer = $(this),
            timerDate = timer.data('countdown');
      timer.countdown({
        date: timerDate
      }, function () {
        alert('Finish!');
      });
    });
  }
})(); // magnificPopup


(function () {
  const link = $('.js-popup-open');

  if (link.length) {
    link.each(function () {
      const _this = $(this);

      _this.magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 200,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M6.613 5.21l.094.083L12 10.585l5.293-5.292a1 1 0 0 1 1.497 1.32l-.083.094L13.415 12l5.292 5.293a1 1 0 0 1-1.32 1.497l-.094-.083L12 13.415l-5.293 5.292a1 1 0 0 1-1.497-1.32l.083-.094L10.585 12 5.293 6.707a1 1 0 0 1 1.32-1.497z"></path></svg></button>',
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
            $('.search__input').on('keyup', function () {
              if ($(this) !== null && $(this).val() !== "") {
                $('.search').addClass('visible');
              } else {
                $('.search').removeClass('visible');
              }
            });
          }
        }
      });
    });
  }
})(); // actions


(function () {
  const sorting = $('.actions__sorting'),
        theme = $('.actions__theme'),
        list = $('.list'),
        tokens = $('.tokens');
  sorting.on('click', function () {
    let _this = $(this),
        index = _this.index();

    sorting.removeClass('active');

    _this.addClass('active');

    if (index === 0) {
      tokens.addClass('tokens_list');
    } else {
      tokens.removeClass('tokens_list');
    }
  });
  theme.on('click', function () {
    theme.toggleClass('active');
    list.toggleClass('light');
  });
})(); // follow


$('.follow, .artists__follow').on('click', function () {
  $(this).toggleClass('active');
}); // list

(function () {
  const list = $('.list');
  list.each(function () {
    let thisList = $(this),
        nav = thisList.find('.list__tab'),
        item = thisList.find('.list__item');
    nav.on('click', function () {
      let thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    });
  }); // off dark theme for Profile page Owners tab

  $('.profile .list__tab:nth-child(3)').on('click', function () {
    $('.actions__theme').removeClass('active');
    $('.list').removeClass('light');
  }); // off dark theme for Collection page Activity and Owners tabs

  $('.collection .list__tab:nth-child(2), .collection .list__tab:nth-child(3)').on('click', function () {
    $('.actions__theme').removeClass('active');
    $('.list').removeClass('light');
  });
})(); // catalog


(function () {
  const catalog = $('.catalog'),
        select = catalog.find('.catalog__select'),
        top = catalog.find('.catalog__top'),
        value = catalog.find('.catalog__value'),
        tabs = catalog.find('.catalog__tabs'),
        tab = catalog.find('.catalog__tab'),
        toggle = catalog.find('.catalog__toggle'),
        theme = catalog.find('.catalog__theme'),
        filters = $('.filters'),
        status = filters.find('.filters__status');
  top.on('click', function (e) {
    e.stopPropagation();
    select.toggleClass('visible');
  });
  tabs.on('click', function (e) {
    e.stopPropagation();
  });
  $('html, body').on('click', function () {
    select.removeClass('visible');
  });
  tab.on('click', function (e) {
    e.preventDefault();
    select.removeClass('visible');
    tab.removeClass('active');
    $(this).addClass('active');
    let textTab = $(this).html(),
        id = $(this).attr('href'),
        top = $(id).offset().top;
    value.html(textTab);
    console.log(textTab);
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });
  theme.on('click', function () {
    $(this).toggleClass('active');
    catalog.toggleClass('dark');
  });
  toggle.on('click', function () {
    $(this).toggleClass('active');
    filters.toggle();
  });
  status.on('click', function () {
    $(this).toggleClass('active');
  });
})(); // set price


(function () {
  const details = $('.details_set'),
        caption = details.find('.details-caption'),
        set = details.find('.details-set'),
        button = details.find('.details-set__button'),
        text = details.find('.details-set__value'),
        head = details.find('.details-head'),
        close = details.find('.details-head__close'),
        price = details.find('.price'),
        priceInput = price.find('.price__input'),
        priceButton = price.find('.price__button');
  button.on('click', function () {
    caption.hide();
    set.hide();
    let index = $(this).parents('.details-set__col').index();
    head.hide();
    head.eq(index).show();
    price.hide();
    price.eq(index).show();
  });
  close.on('click', function () {
    head.hide();
    price.hide();
    caption.show();
    set.show();
  });
  priceButton.on('click', function () {
    let indexPrice = $(this).parents('.price').index(),
        value = $(this).parents('.price').find('.field__input').val();

    if (value !== "") {
      set.find('.details-set__col').eq(indexPrice).find(text).text(value);
    } else {
      set.find('.details-set__col').eq(indexPrice).find(text).text("-");
    }

    price.hide();
    head.hide();
    caption.show();
    set.show();
  });
})(); // settings


(function () {
  const settings = $('.settings'),
        link = settings.find('.settings__link');
  link.on('click', function (e) {
    e.preventDefault();
    link.removeClass('active');
    $(this).addClass('active');
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });
})();