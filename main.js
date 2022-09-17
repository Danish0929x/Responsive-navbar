const nav = document.querySelector('.navbar')
const navToggle = document.querySelector('.navbar-toggle')
const menuIcon = document.querySelector('.menu-icon')
const menuIconLine1 = document.querySelector('.l-1')
const menuIconLine2 = document.querySelector('.l-2')

menuIcon.addEventListener('click', ()=>{
  menuIconLine1.classList.toggle('active')
  menuIconLine2.classList.toggle('active')
  navToggle.classList.toggle('active')
  nav.classList.toggle('active')
  
})


let lastScrollY = window.scrollY;

window.addEventListener('scroll', ()=>{
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden")
  } else {
    nav.classList.remove("nav-hidden")
  }

  lastScrollY = window.scrollY;
})