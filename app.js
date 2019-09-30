

document.addEventListener('DOMContentLoaded', () => {
  const burgermenu = document.getElementById('burgermenu')
  const navitems = document.querySelector('.nav-items')
  const mq = window.matchMedia( '(max-width: 856px)' )

  burgermenu.addEventListener('click', () => {
    if (navitems.style.display === 'none' || navitems.style.display === '') {
      navitems.style.display = 'block'
    } else if (navitems.style.display === 'block') {
      navitems.style.display = 'none'
    }
  })

  navitems.addEventListener('click', () => {
    if (mq.matches) {
      // window width is at less than 570px
      navitems.style.display = 'none'
    }
  })



})
