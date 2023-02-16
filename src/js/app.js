import * as isWebp from './modules/isWebp.js';
import * as ibg from './modules/ibg.js';
import * as anchors from './modules/anchors.js';
import * as useDynamicAdapt from './modules/dynamicAdapt.js';
import * as spoilers from './modules/spoilers.js';

import Swiper from 'swiper/bundle';

isWebp.isWebp(); // Проверка поддержки webp и добавление класса _webp или _no-webp для HTML
ibg.ibg(); // Фоновое изображение
anchors.anchors(); // Плавный скролл
useDynamicAdapt.useDynamicAdapt(); // Динамический адаптив
spoilers.spoilers(); // Спойлеры

// Menu

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function () {
 body.classList.toggle('lock');
 menu.classList.toggle('active');
 menuBtn.classList.toggle('active');
 overlay.classList.toggle('active');
});

links.forEach(function (i) {
 i.addEventListener('click', function () {
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  overlay.classList.remove('active');
 });
});

overlay.addEventListener('click', function () {
 body.classList.remove('lock');
 menu.classList.remove('active');
 menuBtn.classList.remove('active');
 overlay.classList.remove('active');
});

// Slider

const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 spaceBetween: 50,
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
});