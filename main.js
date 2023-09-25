const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')
const header = document.querySelector('header')
const modButton = document.querySelector('#dontclick')
const modal = document.querySelector('.modal')
const closingButton = document.querySelector('.xmodal')

// browser onscroll event trigger
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backButton.style.display = "block";
      } else {
        backButton.style.display = "none";
      }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg')
      } else {
        header.classList.remove('bg')
      }
    }

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    for(const item of menuItems) {
        item.addEventListener('click', mobMenu)
    }
    if(nav.classList.contains('responsive')){
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}

const modalBox = () => {
    modal.classList.toggle('visible')
}

backButton.addEventListener('click', getToTop)
mobButton.addEventListener('click', mobMenu)
modButton.addEventListener('click', modalBox)
closingButton.addEventListener('click', modalBox)