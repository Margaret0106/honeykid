'use strict';

// import Inputmask from "inputmask";

$(document).ready(function () {

  $('a.local-scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  })

  $('select').selectpicker({
    size: 4
  });

  // Inputmask('999 9 9 9 9').mask('.tel-input');

  var mySwiper = new Swiper('.block1 .swiper-container', {
    loop: true,

    // autoplay: {
    //   delay: 3000
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.block1 .swiper-button-next',
      prevEl: '.block1 .swiper-button-prev',
    }
  })

  var productSwiper = new Swiper('.block4 .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.block4 .swiper-button-next',
      prevEl: '.block4 .swiper-button-prev',
    }
  })

  var certSwiper = new Swiper('.block5 .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.block5 .swiper-button-next',
      prevEl: '.block5 .swiper-button-prev',
    }
  })




  $('body').on('click', '.next-modal', function (e) {
    e.preventDefault();
    let nextModal = $(this).data('target');
    console.log(nextModal);
    $(this).closest('.modal').modal('hide');
    setTimeout(function () {
      $(nextModal).modal('show');
    }, 500)
  })



});