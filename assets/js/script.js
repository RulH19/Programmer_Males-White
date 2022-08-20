const menu = document.getElementById('menu');
menu.onclick = function () {
  menu.classList.toggle('openmenu');
};
const menuToggle = document.getElementById('menu');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
