var mixer = mixitup('#con');

var filterButtons = document.querySelectorAll('.alfaz');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    var filterValue = button.getAttribute('data-filter');
    mixer.filter(filterValue);
  });
});

