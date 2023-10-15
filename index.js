var toggle = document.getElementById('content');
var icon = document.getElementById('icon-dm');
var body = document.querySelector('body');
var container = document.querySelector('.text-welcome');
var buttonWhite = document.querySelectorAll('.btn-outline-dark');
var buttonBlack = document.querySelectorAll('.btn-dark');
var cards = document.querySelectorAll('.card');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('active');

  body.classList.toggle('active');

  if (icon.classList.contains('fa-sun')) {
    icon.setAttribute('class', 'fa-solid fa-moon');
    body.style.color = '';
    container.style.color = '';
  } else {
    icon.setAttribute('class', 'fa-solid fa-sun');
    body.style.color = 'white';
    container.style.color = 'white';
  }
  cards.forEach(function (element) {
    if (icon.classList.contains('fa-sun')) {
      element.style.color = 'white';
      element.style.borderColor = 'white';
      element.style.backgroundColor = '#212529';
    } else {
      element.style.color = '#212529';
      element.style.borderColor = '#212529';
      element.style.backgroundColor = 'white';
    }
  });
  buttonWhite.forEach(function (element) {
    if (icon.classList.contains('fa-sun')) {
      element.style.backgroundColor = '#212529';
      element.style.borderColor = 'white';
      element.style.color = 'white';
    } else {
      element.style.backgroundColor = '';
      element.style.borderColor = '';
      element.style.color = '';
    }
  });
  buttonBlack.forEach(function (element) {
    if (icon.classList.contains('fa-sun')) {
      element.style.backgroundColor = 'white';
      element.style.color = '#212529';
    } else {
      element.style.backgroundColor = '';
      element.style.color = '';
    }
  });
});

const buttonScroll = document.getElementById('buttonScroll');
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    buttonScroll.style.display = 'inline';
    buttonScroll.style.opacity = 1;
  } else {
    buttonScroll.style.opacity = 0;
  }
});

buttonScroll.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
