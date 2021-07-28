(function ($) {
  $(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function pageLoaded() {
  const birthDate = new Date(1995, 6, 4);
  document.getElementById("age").innerHTML = calculateAge(birthDate);
}

function calculateAge(date) {
  const now = new Date();
  const diff = Math.abs(now - date);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  return age;
}
