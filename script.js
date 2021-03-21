// On Active Link
let link = $('ul.menu a');
link.on('click', (e) => {
  $.each($('ul.menu a'), (index, a) => {
    a.classList.remove('onActive');
  });
  e.currentTarget.classList.add('onActive');
});

// Navbar Show
var BodyHTML = $(document);
let lastScroll = 0;

BodyHTML.on('scroll', () => {
  let currentScroll = $(this).scrollTop();
  if (currentScroll > lastScroll) {
    $('.nav').addClass('show');
  } else {
    $('.nav').removeClass('show');
  }
});

// Add Value
// Notif Value
let valueNotif = 0;
let valueCart = 0;
$('.buy').on('click', () => {
  if (valueNotif >= 99) {
    valueNotif += 1;
    $('.notif')[0].innerHTML = '99+';
  } else {
    valueNotif += 1;
    $('.notif')[0].innerHTML = valueNotif;
  }
});
$('.add-to-cart').on('click', () => {
  if (valueCart >= 99) {
    valueCart += 1;
    $('.shopping-cart')[0].innerHTML = '99+';
  } else {
    valueCart += 1;
    $('.shopping-cart')[0].innerHTML = valueCart;
  }
});

// Pagination
let pagination = $('.pagination ul li');
pagination.on('click', (e) => {
  $.each($('.pagination ul li'), (index, a) => {
    a.classList.remove('onPage');
  });
  e.target.classList.add('onPage');
});
