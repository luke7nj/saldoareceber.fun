"use strict";

// tabs
(function () {
  const tabs = $('.tabs, .wallets__tabs'),
        link = $('.tabs__button, .wallets__tab');
  tabs.each(function () {
    let thisTabs = $(this),
        nav = thisTabs.find('.tabs__button, .wallets__tab');
    nav.on('click', function () {
      let thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      return false;
    });
  });
})(); // connect


(function () {
  $('.wallets__item').on('click', function () {
    $('.connect__row').hide();
    $('.connect__row:nth-child(3)').css('display', 'flex');
  });
  $('.wallets__scan').on('click', function () {
    $('.connect__row').hide();
    $('.connect__row:nth-child(2)').css('display', 'flex');
  });
  $('.connect__back').on('click', function () {
    $('.connect__row').hide();
    $('.connect__row:nth-child(1)').css('display', 'flex');
  });
  $('.connect__accept').on('click', function () {
    $('.connect__cookies').hide();
  });
  $('.connect__btns .connect__button:nth-child(2)').on('click', function () {
    $.magnificPopup.close();
    $('.header').removeClass('header_noRegistration');
  });
})(); // disconnect acount


$('.account__action:nth-child(2)').on('click', function () {
  $('.header').addClass('header_noRegistration');
  $('.header').removeClass('header_light header_open');
  $('.overlay').removeClass('visible');
  scrollLock.enablePageScroll();
}); // profile

(function () {
  const profile = $('.profile'),
        action = $('.profile__action'),
        actionSales = $('.profile__action:nth-child(1)'),
        actionFollowing = $('.profile__action:nth-child(2)'),
        actionFollowers = $('.profile__action:nth-child(3)');
  action.on('click', function () {
    action.removeClass('active');
    $(this).addClass('active');
  });
  actionSales.on('click', function () {
    $('.profile .list').hide();
    $('.profile .list:nth-child(1)').show();
  });
  actionFollowing.on('click', function () {
    $('.profile .list').removeClass('light');
    $('.profile .actions__theme').removeClass('active');
    $('.profile .list').hide();
    $('.profile .list:nth-child(2)').show();
    $('.profile .list:nth-child(2)').find('.list__tab').removeClass('active');
    $('.profile .list:nth-child(2)').find('.list__tab:nth-child(1)').trigger('click');
  });
  actionFollowers.on('click', function () {
    $('.profile .list').removeClass('light');
    $('.profile .actions__theme').removeClass('active');
    $('.profile .list').hide();
    $('.profile .list:nth-child(2)').show();
    $('.profile .list:nth-child(2)').find('.list__tab:nth-child(2)').trigger('click');
  });
  $('.profile .list:nth-child(2)').find('.list__tab:nth-child(1)').on('click', function () {
    action.removeClass('active');
    $('.profile__action:nth-child(2)').addClass('active');
  });
  $('.profile .list:nth-child(2)').find('.list__tab:nth-child(2)').on('click', function () {
    action.removeClass('active');
    $('.profile__action:nth-child(3)').addClass('active');
  });
})(); // notification


(function () {
  $('.notification .list__tab:nth-child(1)').on('click', function () {
    $('.notification__preview').hide();
    $('.notification__filters').fadeIn();
  });
  $('.notification .list__tab:nth-child(2)').on('click', function () {
    $('.notification__filters').hide();
    $('.notification__preview').fadeIn();
  });
  $('.notification__btns .notification__button:nth-child(1)').on('click', function () {
    $('.notification__filters').find('.checkbox__input').prop("checked", true);
  });
  $('.notification__btns .notification__button:nth-child(2)').on('click', function () {
    $('.notification__filters').find('.checkbox__input').prop("checked", false).removeAttr("checked");
  });
})();