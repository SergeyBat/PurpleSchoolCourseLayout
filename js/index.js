const buttonsList = document.querySelectorAll('.button');
const mobileMenuButton = document.querySelector('.header__mobile-menu-button');

const eventListener = (element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("=>(index.js:7) event", event);

    alert(`Вы нажали на кнопку: ${event.target.innerHTML}`);
  })
}

mobileMenuButton.addEventListener('click', () => {
  alert(`Вы нажали на кнопку, которая открывает мобильное меню!`);
})

buttonsList.forEach(button => eventListener(button));